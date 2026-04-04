const updates = require("../../assets/updates.json");

const normalized = updates.map((item) => {
  const hasUrl = Boolean(item.url);
  const rawUrl = hasUrl ? item.url.replace(/^\/+/, "").replace(/\/?$/, "/") : null;

  return {
    ...item,
    url: rawUrl ? `/${rawUrl}` : null
  };
});

module.exports = {
  items: normalized,
  latest: normalized[0] || null
};
