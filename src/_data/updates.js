const data = require("../../updates/data.json");

function normalizeUrl(url) {
  if (!url) {
    return null;
  }

  const normalized = url.startsWith("../") ? url.replace("../", "/") : url;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

function normalizeLinks(links, fallbackUrl) {
  const source = links || (fallbackUrl ? { en: fallbackUrl } : null);

  if (!source) {
    return null;
  }

  const normalized = Object.fromEntries(
    Object.entries(source)
      .filter(([, value]) => Boolean(value))
      .map(([lang, value]) => [lang, normalizeUrl(value)])
  );

  return Object.keys(normalized).length ? normalized : null;
}

function resolveLink(links, lang) {
  if (!links) {
    return null;
  }

  return links[lang] || links.en || null;
}

const normalized = data.items.map((item) => {
  const links = normalizeLinks(item.links, item.url);

  return {
    ...item,
    links,
    urlsByLang: {
      en: resolveLink(links, "en"),
      ko: resolveLink(links, "ko")
    },
    url: resolveLink(links, "en")
  };
});

const completed = normalized
  .filter(d => d.status === "completed" && d.date)
  .sort((a, b) => b.date.localeCompare(a.date));

function withResolvedUrl(items, lang) {
  return items.map((item) => ({
    ...item,
    url: resolveLink(item.links, lang)
  }));
}

module.exports = {
  items: normalized,
  completed,
  itemsByLang: {
    en: withResolvedUrl(normalized, "en"),
    ko: withResolvedUrl(normalized, "ko")
  },
  completedByLang: {
    en: withResolvedUrl(completed, "en"),
    ko: withResolvedUrl(completed, "ko")
  },
  latest: completed[0] || null,
  currentBuild: data.currentBuild || null
};
