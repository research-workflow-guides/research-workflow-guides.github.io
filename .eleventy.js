const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  const markdown = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  }).use(markdownItAnchor, {
    permalink: false,
    slugify: (s) =>
      s.trim().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9가-힣-]/g, '')
        .replace(/-+/g, '-')
  });

  eleventyConfig.setLibrary("md", markdown);

  eleventyConfig.addPassthroughCopy({ "src/site-assets": "site-assets" });
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ "old-assets": "old-assets" });
  eleventyConfig.addPassthroughCopy({ "updates/data.json": "updates/data.json" });

  eleventyConfig.addCollection("docs", function (collectionApi) {
    return collectionApi.getFilteredByTag("doc").sort((left, right) => {
      return (left.data.order || 0) - (right.data.order || 0);
    });
  });

  eleventyConfig.addFilter("docsFor", function (docs, lang, section) {
    return docs.filter((doc) => doc.data.lang === lang && doc.data.section === section);
  });

  eleventyConfig.addFilter("withLeadingSlash", function (value) {
    if (!value) {
      return "";
    }
    return value.startsWith("/") ? value : `/${value}`;
  });

  eleventyConfig.addFilter("absoluteUrl", function (value) {
    if (!value) {
      return "";
    }
    if (value === "/") {
      return "/";
    }
    return value.endsWith("/") ? value : `${value}/`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
