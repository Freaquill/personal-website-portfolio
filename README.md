# Personal Website Portfolio

Private portfolio website for Fadly Ahmad Firdausy, focused on B2B presales, product management, IoT solutions, and enterprise ICT delivery.

## What Is Included

- Static React portfolio rendered from local JSX source files.
- Production bundle generated into `dist/portfolio.js`.
- Design direction and brand guidance in `DESIGN.md`.
- Planning docs for current and future improvement tracks.
- Playwright visual smoke test for desktop/mobile hero checks, overflow checks, and modal behavior.

## Project Structure

```text
Portfolio.html                  Main HTML entry point
styles.css                      Site styles and design tokens
data.jsx                        Portfolio content source of truth
sections.jsx                    Page sections and UI components
app.jsx                         React app wiring
tweaks-panel.jsx                Local tweak/edit-mode panel
dist/portfolio.js               Built production bundle
scripts/build.js                Bundle builder
scripts/visual-smoke.mjs        Playwright smoke test
DESIGN.md                       Design system direction
portfolio-template-review-plan.md
future-scope-plan.md
```

## Setup

Install dependencies:

```powershell
npm.cmd install
```

Install Playwright Chromium if it is not already installed:

```powershell
npx.cmd playwright install chromium
```

## Build

After editing `app.jsx`, `data.jsx`, `sections.jsx`, or `tweaks-panel.jsx`, rebuild the production bundle:

```powershell
npm.cmd run build
```

The generated file is:

```text
dist/portfolio.js
```

## Local Preview

Start a local static server:

```powershell
npm.cmd run serve
```

Open:

```text
http://127.0.0.1:4173/Portfolio.html
```

## Visual Smoke Test

Run:

```powershell
npm.cmd run check:visual
```

This verifies:

- desktop hero content is visible
- mobile hero content is visible
- no horizontal overflow
- case-study modal opens and closes with Escape
- verification screenshots are written to `screenshots/`

## Design Direction

Read `DESIGN.md` before making visual changes.

Current direction:

```text
Enterprise Systems Editorial
```

The design should feel:

- credible
- structured
- warm technical
- editorial
- proof-led

## Regular Update Workflow

```powershell
npm.cmd run build
npm.cmd run check:visual
git status
git add README.md Portfolio.html app.jsx data.jsx sections.jsx styles.css tweaks-panel.jsx package.json package-lock.json scripts dist DESIGN.md future-scope-plan.md portfolio-template-review-plan.md
git commit -m "Describe the update"
git push
```

## Notes

- This repository is private.
- `node_modules/`, local screenshots, and local thumbnail artifacts are ignored.
- `dist/portfolio.js` is committed so the static HTML page can load without a separate build step after checkout.
