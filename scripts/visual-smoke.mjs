import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { chromium } from "playwright";

const root = resolve(import.meta.dirname, "..");
const port = 4173;
const origin = `http://127.0.0.1:${port}`;
const screenshotDir = join(root, "screenshots");

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
]);

function staticServer() {
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? "/", origin);
      const requested = url.pathname === "/" ? "/Portfolio.html" : decodeURIComponent(url.pathname);
      const filePath = normalize(join(root, requested));
      if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }
      const data = await readFile(filePath);
      res.writeHead(200, { "content-type": types.get(extname(filePath)) ?? "application/octet-stream" });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
}

async function withServer(fn) {
  const server = staticServer();
  await new Promise((resolveServer) => server.listen(port, "127.0.0.1", resolveServer));
  try {
    await fn();
  } finally {
    await new Promise((resolveServer) => server.close(resolveServer));
  }
}

async function assertNoHorizontalScroll(page, label) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (overflow > 1) throw new Error(`${label}: horizontal overflow ${overflow}px`);
}

async function assertVisibleText(page, text, label) {
  const locator = page.getByText(text, { exact: false }).first();
  if (!(await locator.isVisible())) throw new Error(`${label}: expected visible text "${text}"`);
}

async function assertHeroText(page, text, label) {
  const locator = page.locator(".hero").getByText(text, { exact: false }).first();
  if (!(await locator.isVisible())) throw new Error(`${label}: expected visible hero text "${text}"`);
}

await withServer(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  try {
    await page.goto(`${origin}/Portfolio.html`, { waitUntil: "networkidle" });
    await assertHeroText(page, "Fadly", "desktop hero");
    await assertHeroText(page, "B2B Presales Engineer", "desktop hero");
    await assertHeroText(page, "View Projects", "desktop hero");
    await assertNoHorizontalScroll(page, "desktop");
    await page.screenshot({ path: join(screenshotDir, "verify-desktop.png"), fullPage: false });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    await assertHeroText(page, "Fadly", "mobile hero");
    await assertHeroText(page, "View Projects", "mobile hero");
    await assertNoHorizontalScroll(page, "mobile");
    await page.screenshot({ path: join(screenshotDir, "verify-mobile.png"), fullPage: false });

    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto(`${origin}/Portfolio.html#work`, { waitUntil: "networkidle" });
    const caseButton = page.getByRole("button", { name: /read case study/i }).first();
    await caseButton.click();
    await page.getByRole("dialog").waitFor({ state: "visible" });
    await page.keyboard.press("Tab");
    await page.keyboard.press("Escape");
    await page.getByRole("dialog").waitFor({ state: "detached" });

    console.log("Visual smoke passed");
    console.log("Screenshots: screenshots/verify-desktop.png, screenshots/verify-mobile.png");
  } finally {
    await context.close();
    await browser.close();
  }
});
