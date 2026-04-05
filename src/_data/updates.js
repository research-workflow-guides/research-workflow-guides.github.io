const data = require("../../updates/data.json");

const normalized = data.items.map((item) => {
  let url = null;
  if (item.url) {
    url = item.url.startsWith("../") ? item.url.replace("../", "/") : item.url;
    if (!url.endsWith("/")) url += "/";
  }
  return { ...item, url };
});

const completed = normalized
  .filter(d => d.status === "completed" && d.date)
  .sort((a, b) => b.date.localeCompare(a.date));

module.exports = {
  items: normalized,
  completed,
  latest: completed[0] || null,
  currentBuild: data.currentBuild || null
};
