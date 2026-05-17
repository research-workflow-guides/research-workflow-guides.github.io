let pagefindModulePromise;
let localSearchIndexPromise;

function setupDisclosure(buttonSelector, panelSelector) {
  const buttons = document.querySelectorAll(buttonSelector);

  buttons.forEach((button) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : button.closest("[data-toc-panel]");
    const target = panel || button.closest(panelSelector);

    if (!target) {
      return;
    }

    button.addEventListener("click", function () {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      target.dataset.open = String(!isOpen);
    });
  });
}

function getLanguageLabel(url) {
  if (url.startsWith("/ko/")) {
    return "한국어";
  }
  if (url.startsWith("/en/")) {
    return "English";
  }
  return "Other";
}

function getPagefind() {
  if (!pagefindModulePromise) {
    pagefindModulePromise = import("/pagefind/pagefind.js");
  }
  return pagefindModulePromise;
}

function getLocalSearchIndex() {
  if (!localSearchIndexPromise) {
    localSearchIndexPromise = fetch("/search-index.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Search index not found");
        }
        return response.json();
      });
  }

  return localSearchIndexPromise;
}

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function appendHighlightedText(parent, text, query) {
  const source = String(text || "");
  const terms = normalizeSearchText(query).split(/\s+/).filter(Boolean);

  if (!terms.length) {
    parent.textContent = source;
    return;
  }

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  let lastIndex = 0;

  source.replace(pattern, (match, _term, offset) => {
    if (offset > lastIndex) {
      parent.appendChild(document.createTextNode(source.slice(lastIndex, offset)));
    }

    const mark = document.createElement("mark");
    mark.className = "search-highlight";
    mark.textContent = match;
    parent.appendChild(mark);
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < source.length) {
    parent.appendChild(document.createTextNode(source.slice(lastIndex)));
  }
}

function buildResultCard(result, languageLabel, query) {
  const article = document.createElement("article");
  article.className = "search-hit";
  article.tabIndex = 0;
  article.setAttribute("role", "link");
  article.setAttribute("aria-label", result.meta && result.meta.title ? result.meta.title : result.url);

  const tag = document.createElement("p");
  tag.className = "search-hit-tag";
  tag.textContent = languageLabel;

  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = result.url;
  appendHighlightedText(link, result.meta && result.meta.title ? result.meta.title : result.url, query);
  title.appendChild(link);

  const excerpt = document.createElement("p");
  excerpt.className = "search-hit-excerpt";
  appendHighlightedText(excerpt, result.excerpt || result.meta && result.meta.description || "", query);

  article.appendChild(tag);
  article.appendChild(title);
  article.appendChild(excerpt);

  article.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }

    window.location.href = result.url;
  });

  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = result.url;
    }
  });

  return article;
}

function appendSearchGroup(container, title, results, query) {
  if (!results.length) {
    return;
  }

  const section = document.createElement("section");
  section.className = "search-group";

  if (title) {
    const heading = document.createElement("h3");
    heading.className = "search-group-title";
    heading.textContent = title;
    section.appendChild(heading);
  }

  results.forEach((result) => {
    section.appendChild(buildResultCard(result, getLanguageLabel(result.url), query));
  });

  container.appendChild(section);
}

function normalizeSearchText(value) {
  return String(value || "").toLowerCase();
}

function buildSearchSnippet(content, query) {
  const text = String(content || "").replace(/\s+/g, " ").trim();
  const lowerText = normalizeSearchText(text);
  const terms = normalizeSearchText(query).split(/\s+/).filter(Boolean);
  const firstMatch = terms
    .map((term) => lowerText.indexOf(term))
    .filter((index) => index >= 0)
    .sort((left, right) => left - right)[0];

  if (firstMatch === undefined) {
    return text.slice(0, 180);
  }

  const start = Math.max(0, firstMatch - 70);
  const end = Math.min(text.length, firstMatch + 150);
  const prefix = start > 0 ? "..." : "";
  const suffix = end < text.length ? "..." : "";

  return `${prefix}${text.slice(start, end)}${suffix}`;
}

async function searchLocalIndex(query) {
  const pages = await getLocalSearchIndex();
  const terms = normalizeSearchText(query).split(/\s+/).filter(Boolean);

  return pages
    .map((page) => {
      const title = normalizeSearchText(page.title);
      const description = normalizeSearchText(page.description);
      const content = normalizeSearchText(page.content);
      const haystack = `${title} ${description} ${content}`;

      if (!terms.every((term) => haystack.includes(term))) {
        return null;
      }

      const score = terms.reduce((total, term) => {
        let nextScore = total;

        if (title.includes(term)) {
          nextScore += 20;
        }
        if (description.includes(term)) {
          nextScore += 8;
        }
        if (content.includes(term)) {
          nextScore += 2;
        }

        return nextScore;
      }, 0);

      return {
        url: page.url,
        meta: {
          title: page.title,
          description: page.description
        },
        excerpt: buildSearchSnippet(page.content || page.description, query),
        score
      };
    })
    .filter(Boolean)
    .sort((left, right) => right.score - left.score)
    .slice(0, 18);
}

async function runSearch(root, query) {
  const lang = root.dataset.searchLang;
  const input = root.querySelector("[data-search-input]");
  const status = root.querySelector("[data-search-status]");
  const resultsNode = root.querySelector("[data-search-results]");
  const sameLangPrefix = `/${lang}/`;

  clearNode(resultsNode);

  if (query.trim().length < 2) {
    status.textContent = "";
    input.setAttribute("aria-busy", "false");
    return;
  }

  status.textContent = lang === "ko" ? "검색 중..." : "Searching...";

  try {
    const matches = await searchLocalIndex(query);

    const sameLang = matches.filter((result) => result.url.startsWith(sameLangPrefix));
    const otherLang = matches.filter((result) => !result.url.startsWith(sameLangPrefix));

    if (!sameLang.length && !otherLang.length) {
      status.textContent = lang === "ko" ? "검색 결과가 없습니다." : "No matching results found.";
      return;
    }

    status.textContent =
      lang === "ko"
        ? `${sameLang.length + otherLang.length}개의 결과`
        : `${sameLang.length + otherLang.length} result${sameLang.length + otherLang.length === 1 ? "" : "s"}`;

    appendSearchGroup(
      resultsNode,
      sameLang.length && otherLang.length ? (lang === "ko" ? "현재 언어 결과" : "Current language results") : "",
      sameLang,
      query
    );
    appendSearchGroup(
      resultsNode,
      sameLang.length && otherLang.length ? (lang === "ko" ? "다른 언어 결과" : "Other language results") : "",
      otherLang,
      query
    );
  } catch (error) {
    status.textContent =
      lang === "ko"
        ? "검색 인덱스를 찾지 못했습니다. `npm run build`를 실행해주세요."
        : "Search index not found. Run `npm run build`.";
  }

  input.setAttribute("aria-busy", "false");
}

function setupSearch() {
  const roots = document.querySelectorAll("[data-search-root]");

  roots.forEach((root) => {
    const input = root.querySelector("[data-search-input]");
    let timer;

    if (!input) {
      return;
    }

    input.addEventListener("input", function (event) {
      const query = event.target.value;
      input.setAttribute("aria-busy", "true");
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        runSearch(root, query);
      }, 180);
    });
  });
}

function updateHeaderSearchPanelSize(panel) {
  const nav = document.getElementById("primary-nav");
  const shell = panel.closest("[data-header-search-panel]");

  if (!nav || !shell || window.matchMedia("(max-width: 760px)").matches) {
    panel.style.removeProperty("--header-search-left");
    panel.style.removeProperty("--header-search-width");
    return;
  }

  const navRect = nav.getBoundingClientRect();
  const shellRect = shell.getBoundingClientRect();

  panel.style.setProperty("--header-search-left", `${Math.max(0, navRect.left - shellRect.left)}px`);
  panel.style.setProperty("--header-search-width", `${navRect.width}px`);
}

function setupHeaderSearch() {
  const buttons = document.querySelectorAll("[data-header-search-toggle]");

  buttons.forEach((button) => {
    const panelId = button.getAttribute("aria-controls");
    const shell = panelId ? document.getElementById(panelId) : null;
    const panel = shell ? shell.querySelector(".header-search-panel") : null;
    const input = shell ? shell.querySelector("[data-search-input]") : null;

    if (!shell || !panel || !input) {
      return;
    }

    function setOpen(isOpen) {
      button.setAttribute("aria-expanded", String(isOpen));
      shell.dataset.open = String(isOpen);

      if (isOpen) {
        updateHeaderSearchPanelSize(panel);
        window.setTimeout(() => input.focus(), 0);
      }
    }

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        button.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        button.getAttribute("aria-expanded") === "true" &&
        !shell.contains(event.target) &&
        !button.contains(event.target)
      ) {
        setOpen(false);
      }
    });

    window.addEventListener("resize", () => {
      if (button.getAttribute("aria-expanded") === "true") {
        updateHeaderSearchPanelSize(panel);
      }
    });
  });
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  } finally {
    textarea.remove();
  }
}

function setupCodeCopyButtons() {
  const isKorean = document.body.dataset.pageLang === "ko";
  const copyLabel = "Copy";
  const copiedLabel = "Copied";
  const errorLabel = "Error";

  document.querySelectorAll(".prose pre").forEach((pre) => {
    if (pre.closest(".code-block-wrapper")) {
      return;
    }

    const code = pre.querySelector("code");

    if (!code) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement("button");
    button.className = "code-copy-button";
    button.type = "button";
    button.textContent = copyLabel;
    button.setAttribute("aria-label", isKorean ? "코드 복사하기" : "Copy code");

    button.addEventListener("click", async () => {
      try {
        await copyText(code.textContent);
        button.textContent = copiedLabel;
        window.setTimeout(() => {
          button.textContent = copyLabel;
        }, 1600);
      } catch (error) {
        button.textContent = errorLabel;
        window.setTimeout(() => {
          button.textContent = copyLabel;
        }, 1600);
      }
    });

    wrapper.appendChild(button);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupDisclosure("[data-menu-toggle]", ".site-nav");
  setupDisclosure("[data-toc-toggle]", "[data-toc-panel]");
  setupSearch();
  setupHeaderSearch();
  setupCodeCopyButtons();
});
