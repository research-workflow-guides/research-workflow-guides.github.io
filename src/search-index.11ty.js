function stripHtml(value) {
  return String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
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
      .filter((item) => item.url && (item.data.lang === "en" || item.data.lang === "ko"))
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
