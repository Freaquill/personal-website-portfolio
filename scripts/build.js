const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const outputPath = path.join(distDir, "portfolio.js");

const sourceFiles = [
  "tweaks-panel.jsx",
  "data.jsx",
  "sections.jsx",
  "app.jsx",
];

fs.mkdirSync(distDir, { recursive: true });

const source = sourceFiles
  .map((file) => {
    const filePath = path.join(root, file);
    return `/* ---- ${file} ---- */\n${fs.readFileSync(filePath, "utf8")}`;
  })
  .join("\n\n");

const result = esbuild.transformSync(source, {
  loader: "jsx",
  minify: true,
  sourcemap: true,
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  legalComments: "none",
  sourcefile: "portfolio-source.jsx",
});

fs.writeFileSync(outputPath, `${result.code}\n//# sourceMappingURL=portfolio.js.map\n`, "utf8");
fs.writeFileSync(`${outputPath}.map`, result.map, "utf8");
console.log(`Built ${path.relative(root, outputPath)}`);
