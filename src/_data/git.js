const { execSync } = require("node:child_process");

function getLatestCommitDate() {
  const raw = execSync("git log -1 --date=format:%Y-%m-%d --format=%cd", {
    encoding: "utf8"
  }).trim();

  if (!raw) {
    return null;
  }

  return raw;
}

module.exports = {
  latestCommitDate: getLatestCommitDate()
};
