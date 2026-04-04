let pagefindModulePromise;

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

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function buildResultCard(result, languageLabel) {
  const article = document.createElement("article");
  article.className = "search-hit";

  const tag = document.createElement("p");
  tag.className = "search-hit-tag";
  tag.textContent = languageLabel;

  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = result.url;
  link.textContent = result.meta && result.meta.title ? result.meta.title : result.url;
  title.appendChild(link);

  const excerpt = document.createElement("p");
  excerpt.className = "search-hit-excerpt";
  excerpt.innerHTML = result.excerpt || result.meta && result.meta.description || "";

  article.appendChild(tag);
  article.appendChild(title);
  article.appendChild(excerpt);

  return article;
}

function appendSearchGroup(container, title, results) {
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
    section.appendChild(buildResultCard(result, getLanguageLabel(result.url)));
  });

  container.appendChild(section);
}

async function runSearch(root, query) {
  const lang = root.dataset.searchLang;
  const input = root.querySelector("[data-search-input]");
  const status = root.querySelector("[data-search-status]");
  const resultsNode = root.querySelector("[data-search-results]");
  const sameLangPrefix = `/${lang}/`;

  clearNode(resultsNode);

  if (query.trim().length < 2) {
    status.textContent =
      lang === "ko"
        ? "두 글자 이상 입력하면 검색이 시작됩니다."
        : "Search starts after two or more characters.";
    return;
  }

  status.textContent = lang === "ko" ? "검색 중..." : "Searching...";

  try {
    const pagefind = await getPagefind();
    const response = await pagefind.search(query);
    const matches = await Promise.all(
      response.results.slice(0, 12).map(async (result) => {
        return result.data();
      })
    );

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
      sameLang
    );
    appendSearchGroup(
      resultsNode,
      sameLang.length && otherLang.length ? (lang === "ko" ? "다른 언어 결과" : "Other language results") : "",
      otherLang
    );
  } catch (error) {
    status.textContent =
      lang === "ko"
        ? "검색 인덱스를 찾지 못했습니다. `npm run build` 후 `npm run pagefind`를 실행해주세요."
        : "Search index not found. Run `npm run build` and then `npm run pagefind`.";
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

document.addEventListener("DOMContentLoaded", function () {
  setupDisclosure("[data-menu-toggle]", ".site-nav");
  setupDisclosure("[data-toc-toggle]", "[data-toc-panel]");
  setupSearch();
});
