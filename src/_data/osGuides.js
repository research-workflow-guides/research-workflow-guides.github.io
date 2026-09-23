const topics = ["latex-installation", "vs-code-installation"];
const platforms = ["windows", "macos", "linux"];

module.exports = Object.fromEntries(topics.map((topic) => [
  topic,
  Object.fromEntries(platforms.map((platform) => {
    const suffix = platform === "windows" ? "" : `${platform}/`;
    return [platform, {
      label: platform === "macos" ? "macOS" : platform === "windows" ? "Windows" : "Linux",
      available: platform === "windows",
      urls: {
        en: `/en/initial-setup/${topic}/${suffix}`,
        ko: `/ko/initial-setup/${topic}/${suffix}`
      }
    }];
  }))
]));
