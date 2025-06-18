// purgecss-runner.js
const { PurgeCSS } = require("purgecss");
const fs = require("fs");
const path = require("path");

async function runPurgeCSS() {
  try {
    const results = await new PurgeCSS().purge({
      content: ["_site/**/*.html", "_site/**/*.js"],
      css: ["_site/assets/css/*.css"],
      // no output property here; we'll overwrite original files
    });

    for (const result of results) {
      const outPath = path.resolve(result.file);
      fs.writeFileSync(outPath, result.css, "utf-8");
      console.log(`Purged CSS written to: ${outPath}`);
    }
  } catch (error) {
    console.error("Error during PurgeCSS run:", error);
    process.exit(1);
  }
}

runPurgeCSS();
