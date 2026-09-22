const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const outputRoot = path.resolve(projectRoot, process.env.PROJECT_OUTPUT_DIR || "output");
const siteRoot = path.join(outputRoot, "site");
const qaRoot = path.join(outputRoot, "qa");

module.exports = { projectRoot, outputRoot, siteRoot, qaRoot };

if (require.main === module) {
  const paths = { output: outputRoot, site: siteRoot, qa: qaRoot };
  if (process.argv[2] === "github") {
    for (const [key, value] of Object.entries(paths)) {
      console.log(`${key}=${value}`);
    }
  } else if (process.argv[2] in paths) {
    console.log(paths[process.argv[2]]);
  } else {
    console.log(JSON.stringify(paths, null, 2));
  }
}
