let pagefindModulePromise;
let localSearchIndexPromise;
const searchRequests = new WeakMap();

function setupDisclosure(buttonSelector, panelSelector) {
  const buttons = document.querySelectorAll(buttonSelector);
  const mobileLayout = window.matchMedia("(max-width: 1099px)");
  const isKorean = document.body.dataset.pageLang === "ko";

  buttons.forEach((button) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : button.closest("[data-toc-panel]");
    const target = panel || button.closest(panelSelector);

    if (!target) {
      return;
    }

    const isContents = button.hasAttribute("data-toc-toggle");
    const labels = isKorean
      ? (isContents ? ["목차 열기", "목차 닫기"] : ["메뉴 열기", "메뉴 닫기"])
      : (isContents ? ["Open contents", "Close contents"] : ["Open menu", "Close menu"]);

    function isOpen() {
      return button.getAttribute("aria-expanded") === "true";
    }

    function setOpen(open, restoreFocus = false) {
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", labels[open ? 1 : 0]);
      target.dataset.open = String(open);

      if (open && mobileLayout.matches && !isContents) {
        target.querySelector("a[href]")?.focus({ preventScroll: true });
      } else if (!open && restoreFocus && mobileLayout.matches) {
        button.focus({ preventScroll: true });
      }
    }

    setOpen(false);

    button.addEventListener("click", () => {
      setOpen(!isOpen());
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen() && !document.querySelector("dialog[open]")) {
        event.preventDefault();
        setOpen(false, true);
      }
    });

    document.addEventListener("click", (event) => {
      if (isOpen() && !target.contains(event.target) && !button.contains(event.target)) {
        setOpen(false, target.contains(document.activeElement));
      }
    });

    target.addEventListener("click", (event) => {
      if (isOpen() && event.target.closest("a[href]")) {
        setOpen(false, true);
      }
    });

    mobileLayout.addEventListener("change", () => {
      setOpen(false, target.contains(document.activeElement));
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

function getClassificationLabel(classification, url) {
  const labels = {
    en: {
      core: "Core",
      optional: "Optional",
      troubleshooting: "Troubleshooting"
    },
    ko: {
      core: "핵심",
      optional: "선택",
      troubleshooting: "문제 해결"
    }
  };
  const lang = url.startsWith("/ko/") ? "ko" : "en";

  return labels[lang][classification] || "";
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
      })
      .catch((error) => {
        localSearchIndexPromise = null;
        throw error;
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

  const meta = document.createElement("div");
  meta.className = "search-hit-meta";
  meta.appendChild(tag);

  const classification = result.meta && result.meta.classification;
  const classificationLabel = getClassificationLabel(classification, result.url);

  if (classificationLabel) {
    const badge = document.createElement("span");
    badge.className = `search-hit-status search-hit-status-${classification}`;
    badge.textContent = classificationLabel;
    meta.appendChild(badge);
  }

  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = result.url;
  appendHighlightedText(link, result.meta && result.meta.title ? result.meta.title : result.url, query);
  title.appendChild(link);

  const excerpt = document.createElement("p");
  excerpt.className = "search-hit-excerpt";
  appendHighlightedText(excerpt, result.excerpt || result.meta && result.meta.description || "", query);

  article.appendChild(meta);
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

async function searchLocalIndex(query, lang) {
  const pages = await getLocalSearchIndex();
  const terms = normalizeSearchText(query).split(/\s+/).filter(Boolean);

  return pages
    .filter((page) => page.lang === lang)
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
          description: page.description,
          classification: page.classification
        },
        excerpt: buildSearchSnippet(page.content || page.description, query),
        score
      };
    })
    .filter(Boolean)
    .sort((left, right) => right.score - left.score)
    .slice(0, 18);
}

async function runSearch(root, query, requestId) {
  const lang = root.dataset.searchLang;
  const input = root.querySelector("[data-search-input]");
  const status = root.querySelector("[data-search-status]");
  const resultsNode = root.querySelector("[data-search-results]");
  const isCurrentRequest = () => searchRequests.get(root) === requestId;

  if (!isCurrentRequest()) {
    return;
  }

  clearNode(resultsNode);

  if (query.trim().length < 2) {
    status.textContent = "";
    input.setAttribute("aria-busy", "false");
    return;
  }

  status.textContent = lang === "ko" ? "검색 중..." : "Searching...";

  try {
    const matches = await searchLocalIndex(query, lang);

    if (!isCurrentRequest()) {
      return;
    }

    if (!matches.length) {
      status.textContent = lang === "ko" ? "검색 결과가 없습니다." : "No matching results found.";
      return;
    }

    status.textContent =
      lang === "ko"
        ? `${matches.length}개의 결과`
        : `${matches.length} result${matches.length === 1 ? "" : "s"}`;

    appendSearchGroup(
      resultsNode,
      "",
      matches,
      query
    );
  } catch (error) {
    if (isCurrentRequest()) {
      status.textContent =
        lang === "ko"
          ? "검색을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."
          : "Search could not be loaded. Please try again shortly.";
    }
  } finally {
    if (isCurrentRequest()) {
      input.setAttribute("aria-busy", "false");
    }
  }
}

function setupSearch() {
  const roots = document.querySelectorAll("[data-search-root]");

  roots.forEach((root) => {
    const input = root.querySelector("[data-search-input]");
    let timer;

    if (!input || !root.querySelector("[data-search-status]") || !root.querySelector("[data-search-results]")) {
      return;
    }

    input.addEventListener("input", function (event) {
      const query = event.target.value;
      const requestId = (searchRequests.get(root) || 0) + 1;
      searchRequests.set(root, requestId);
      window.clearTimeout(timer);

      if (query.trim().length < 2) {
        runSearch(root, query, requestId);
        return;
      }

      input.setAttribute("aria-busy", "true");
      timer = window.setTimeout(() => {
        runSearch(root, query, requestId);
      }, 180);
    });
  });
}

function setupHeaderSearch() {
  const buttons = document.querySelectorAll("[data-header-search-toggle]");
  const isKorean = document.body.dataset.pageLang === "ko";

  buttons.forEach((button) => {
    const panelId = button.getAttribute("aria-controls");
    const shell = panelId ? document.getElementById(panelId) : null;
    const panel = shell ? shell.querySelector(".header-search-panel") : null;
    const input = shell ? shell.querySelector("[data-search-input]") : null;

    if (!shell || !panel || !input) {
      return;
    }

    function setOpen(isOpen, restoreFocus = false) {
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isKorean
        ? (isOpen ? "검색 닫기" : "검색 열기")
        : (isOpen ? "Close search" : "Open search"));
      shell.dataset.open = String(isOpen);

      if (isOpen) {
        input.focus({ preventScroll: true });
      } else if (restoreFocus) {
        button.focus({ preventScroll: true });
      }
    }

    setOpen(false);

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true" && !document.querySelector("dialog[open]")) {
        event.preventDefault();
        setOpen(false, true);
      }
    });

    document.addEventListener("click", (event) => {
      if (
        button.getAttribute("aria-expanded") === "true" &&
        !shell.contains(event.target) &&
        !button.contains(event.target)
      ) {
        setOpen(false, shell.contains(document.activeElement));
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
  const copyLabel = isKorean ? "복사" : "Copy";
  const copiedLabel = isKorean ? "복사됨" : "Copied";
  const errorLabel = isKorean ? "복사 실패" : "Error";

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

function updateStickyOffset() {
  const header = document.querySelector(".site-header");
  const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
  document.documentElement.style.setProperty("--sticky-top", `${headerHeight + 16}px`);
}

function setupStickyOffset() {
  updateStickyOffset();
  window.addEventListener("resize", updateStickyOffset);

  const header = document.querySelector(".site-header");
  if (header && "ResizeObserver" in window) {
    const observer = new ResizeObserver(updateStickyOffset);
    observer.observe(header);
  }
}

function setupImageViewer() {
  const viewer = document.getElementById("image-viewer");

  if (!viewer || typeof viewer.showModal !== "function") {
    return;
  }

  const image = viewer.querySelector("[data-image-viewer-image]");
  const caption = viewer.querySelector("[data-image-viewer-caption]");
  const closeButton = viewer.querySelector("[data-image-viewer-close]");
  const isKorean = document.body.dataset.pageLang === "ko";

  if (!image || !caption || !closeButton) {
    return;
  }

  let returnFocusTo = null;
  let backdropPointerDown = false;
  const viewerLabel = isKorean ? "이미지 확대 보기" : "Expanded image";

  if (!viewer.hasAttribute("aria-labelledby") && !viewer.hasAttribute("aria-label")) {
    viewer.setAttribute("aria-label", viewerLabel);
  }
  closeButton.setAttribute("aria-label", isKorean ? "확대 이미지 닫기" : "Close expanded image");

  function closeViewer() {
    if (viewer.open) {
      viewer.close();
    }
  }

  document.querySelectorAll("a.image-zoom-link[data-image-zoom]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const sourceImage = link.querySelector("img");
      if (!sourceImage) {
        return;
      }

      const figure = link.closest("figure");
      const sourceCaption = figure ? figure.querySelector("figcaption") : null;
      image.src = link.href;
      image.alt = sourceImage.alt || viewerLabel;
      caption.textContent = sourceCaption ? sourceCaption.textContent.trim() : image.alt;
      returnFocusTo = link;

      try {
        viewer.showModal();
      } catch (error) {
        returnFocusTo = null;
        return;
      }

      event.preventDefault();
      document.body.classList.add("image-viewer-open");
      closeButton.focus({ preventScroll: true });
    });
  });

  closeButton.addEventListener("click", closeViewer);
  viewer.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeViewer();
  });
  viewer.addEventListener("pointerdown", (event) => {
    backdropPointerDown = event.target === viewer;
  });
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer && backdropPointerDown) {
      closeViewer();
    }
    backdropPointerDown = false;
  });
  viewer.addEventListener("close", () => {
    document.body.classList.remove("image-viewer-open");
    if (returnFocusTo && returnFocusTo.isConnected) {
      returnFocusTo.focus({ preventScroll: true });
    }
    returnFocusTo = null;
  });
}

function scrollTocLinkIntoView(link) {
  const panel = document.querySelector("[data-toc-scroll]") || document.getElementById("page-navigation");

  if (!panel || panel.scrollHeight <= panel.clientHeight) {
    return;
  }

  const panelRect = panel.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  const inset = 20;

  if (linkRect.top < panelRect.top + inset) {
    panel.scrollTop -= panelRect.top + inset - linkRect.top;
  } else if (linkRect.bottom > panelRect.bottom - inset) {
    panel.scrollTop += linkRect.bottom - (panelRect.bottom - inset);
  }
}

function setupPageTocSpy() {
  const toc = document.getElementById("page-navigation");
  const content = document.querySelector(".prose");

  if (!toc || !content) {
    return;
  }

  const links = Array.from(toc.querySelectorAll(".rail-link-heading[href^='#']"));
  const sectionLinks = links.filter((link) => !link.classList.contains("rail-link-heading-sub"));
  const currentPageLink = toc.querySelector(".rail-link-page.is-current");
  const linksById = new Map();

  sectionLinks.forEach((link) => {
    const id = decodeURIComponent(link.hash.slice(1));
    if (id) {
      linksById.set(id, link);
    }
  });

  const headings = Array.from(content.querySelectorAll("h2[id]"))
    .filter((heading) => linksById.has(heading.id));

  if (currentPageLink) {
    window.requestAnimationFrame(() => scrollTocLinkIntoView(currentPageLink));
  }

  if (!sectionLinks.length || !headings.length) {
    return;
  }

  let activeId = "";
  let ticking = false;

  function clearActiveLinks() {
    links.forEach((link) => {
      link.classList.remove("is-active", "is-active-parent");
      if (link.getAttribute("aria-current") === "location") {
        link.removeAttribute("aria-current");
      }
    });
  }

  function setActiveHeading(id) {
    const activeLink = linksById.get(id);
    if (!activeLink) {
      return;
    }

    if (id !== activeId) {
      activeId = id;
      clearActiveLinks();
      activeLink.classList.add("is-active");
      activeLink.setAttribute("aria-current", "location");
    }

    scrollTocLinkIntoView(activeLink);
  }

  function getCurrentHeading() {
    const stickyTop = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sticky-top")) || 96;
    const targetTop = stickyTop + Math.min(160, window.innerHeight * 0.22);
    let current = headings[0];

    headings.forEach((heading) => {
      if (heading.getBoundingClientRect().top <= targetTop) {
        current = heading;
      }
    });

    return current;
  }

  function updateActiveHeading() {
    ticking = false;
    setActiveHeading(getCurrentHeading().id);
  }

  function requestUpdate() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(updateActiveHeading);
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      window.setTimeout(requestUpdate, 80);
    });
  });

  updateActiveHeading();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

document.addEventListener("DOMContentLoaded", function () {
  setupStickyOffset();
  setupDisclosure("[data-menu-toggle]", ".site-nav");
  setupDisclosure("[data-toc-toggle]", "[data-toc-panel]");
  setupSearch();
  setupHeaderSearch();
  setupCodeCopyButtons();
  setupImageViewer();
  setupPageTocSpy();
});
