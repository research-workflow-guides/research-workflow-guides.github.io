const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { projectRoot, siteRoot } = require("./output-paths");

const result = spawnSync(
  process.execPath,
  [path.join(projectRoot, "node_modules/pagefind/lib/runner/bin.cjs"), "--site", siteRoot],
  { cwd: projectRoot, stdio: "inherit" }
);

if (result.error) {
  console.error(result.error.message);
}
process.exit(result.status ?? 1);
