const fs = require("node:fs");
const path = require("node:path");

// Embed the 3x header asset so the logo is available with the initial HTML.
const mark = fs.readFileSync(path.join(__dirname, "../../assets/images/logo/research-workflow-guidebook-header.png"));

module.exports = {
  markDataUrl: `data:image/png;base64,${mark.toString("base64")}`,
};
