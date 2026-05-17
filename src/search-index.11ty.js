const namedHtmlEntities = {
  amp: "&",
  apos: "'",
  copy: "(c)",
  gt: ">",
  hellip: "...",
  laquo: "<<",
  larr: "<-",
  ldquo: "\"",
  le: "<=",
  lsquo: "'",
  lt: "<",
  mdash: " - ",
  nbsp: " ",
  ndash: "-",
  plusmn: "+/-",
  quot: "\"",
  raquo: ">>",
  rarr: "->",
  rdquo: "\"",
  reg: "(r)",
  rsquo: "'",
  times: "x",
  trade: "(tm)"
};

function decodeCodePoint(value, radix) {
  const codePoint = parseInt(value, radix);

  if (!Number.isFinite(codePoint) || codePoint < 0 || codePoint > 0x10ffff) {
    return "";
  }

  return String.fromCodePoint(codePoint);
}

function decodeHtmlEntities(value) {
  return String(value || "")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => decodeCodePoint(code, 16))
    .replace(/&#(\d+);/g, (_, code) => decodeCodePoint(code, 10))
    .replace(/&([a-z][a-z0-9]+);/gi, (match, name) => {
      return Object.hasOwn(namedHtmlEntities, name.toLowerCase())
        ? namedHtmlEntities[name.toLowerCase()]
        : match;
    });
}

function stripHtml(value) {
  return decodeHtmlEntities(String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();
}

module.exports = class SearchIndex {
  data() {
    return {
      permalink: "/search-index.json",
      eleventyExcludeFromCollections: true
    };
  }

  render(data) {
    const pages = data.collections.all
      .filter((item) => {
        return item.url &&
          item.url !== "/" &&
          item.url !== "/en/" &&
          item.url !== "/ko/" &&
          (item.data.lang === "en" || item.data.lang === "ko");
      })
      .map((item) => ({
        title: item.data.title || "",
        description: item.data.description || "",
        lang: item.data.lang,
        section: item.data.section || "",
        url: item.url,
        content: stripHtml(item.templateContent)
      }));

    return JSON.stringify(pages);
  }
};
