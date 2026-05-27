const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

module.exports = async function (eleventyConfig) {
  const { createHighlighter } = await import("shiki");
  const highlighter = await createHighlighter({
    themes: ["github-dark"],
    langs: ["bash", "json", "latex", "powershell", "python", "text"],
    langAlias: {
      py: "python",
      "python-jupyter": "python",
      ps1: "powershell",
      sh: "bash",
      shell: "bash",
      tex: "latex"
    }
  });

  const codeLabels = {
    bash: "bash",
    json: "json",
    latex: "tex",
    output: "output",
    powershell: "powershell",
    py: "python",
    python: "python",
    "python-jupyter": "python (jupyter notebook)",
    ps1: "powershell",
    sh: "bash",
    shell: "shell",
    tex: "tex"
  };

  const normalizeCodeLang = (lang) => {
    const normalized = (lang || "").trim().toLowerCase();
    if (normalized === "ps1") {
      return "powershell";
    }
    if (normalized === "py") {
      return "python";
    }
    if (normalized === "python-jupyter") {
      return "python";
    }
    if (normalized === "output") {
      return "text";
    }
    if (normalized === "sh" || normalized === "shell") {
      return "bash";
    }
    if (normalized === "tex") {
      return "latex";
    }
    return normalized;
  };

  const markdown = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (code, lang) => {
      const originalLang = (lang || "").trim().toLowerCase();
      const normalizedLang = normalizeCodeLang(originalLang);
      const label = codeLabels[originalLang] || codeLabels[normalizedLang];

      if (!normalizedLang) {
        return `<pre><code>${escapeHtml(code)}</code></pre>`;
      }

      try {
        const highlighted = highlighter.codeToHtml(code, {
          lang: normalizedLang,
          theme: "github-dark"
        });

        return label
          ? highlighted.replace("<pre", `<pre data-code-label="${label}"`)
          : highlighted;
      } catch {
        const labelAttr = label ? ` data-code-label="${label}"` : "";
        return `<pre${labelAttr}><code class="language-${escapeHtml(originalLang)}">${escapeHtml(code)}</code></pre>`;
      }
    }
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

  eleventyConfig.addFilter("dateDots", function (value) {
    return value ? String(value).replaceAll("-", ".") : "";
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
