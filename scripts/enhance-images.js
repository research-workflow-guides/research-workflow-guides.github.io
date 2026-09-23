const { parse } = require("node-html-parser");

function escapeAttribute(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

module.exports = function enhanceImages(html) {
  const document = parse(html);
  const figures = document.querySelectorAll(".prose figure.image-frame");
  if (!figures.length) return html;

  const isKorean = document.querySelector("html")?.getAttribute("lang") === "ko";
  const needsReview = Boolean(document.querySelector('[data-verification-status="needs-review"]'));
  const screenshotsNeedUpdate = Boolean(document.querySelector('[data-screenshot-update="needs-update"]'));
  const zoomLabel = isKorean ? "이미지 원본 확대" : "Enlarge original image";
  const zoomHint = isKorean ? "확대" : "Enlarge";
  const reviewNote = screenshotsNeedUpdate
    ? isKorean ? "기존 화면 · 업데이트 필요" : "Existing screenshot · update required"
    : isKorean ? "기존 화면 · 재검증 예정" : "Existing screenshot · review pending";
  const reviewNoteClass = screenshotsNeedUpdate
    ? "image-review-note image-review-note--needs-update"
    : "image-review-note";

  for (const figure of figures) {
    for (const image of figure.querySelectorAll("img")) {
      const source = image.getAttribute("src");
      if (!source) continue;

      let ancestor = image.parentNode;
      let existingLink = null;
      while (ancestor && ancestor !== figure) {
        if (ancestor.tagName === "A") {
          existingLink = ancestor;
          break;
        }
        ancestor = ancestor.parentNode;
      }

      const alt = image.getAttribute("alt") || "";
      const label = escapeAttribute(alt ? `${zoomLabel}: ${alt}` : zoomLabel);
      if (existingLink) {
        // Preserve non-image links, such as an existing download or source page.
        if (existingLink.getAttribute("href") === source) {
          existingLink.classList.add("image-zoom-link");
          existingLink.setAttribute("data-image-zoom", "");
          existingLink.setAttribute("aria-label", label);
          if (!existingLink.querySelector(".image-zoom-hint")) {
            existingLink.insertAdjacentHTML("beforeend", `<span class="image-zoom-hint" aria-hidden="true">${zoomHint}</span>`);
          }
        }
      } else {
        image.replaceWith(`<a class="image-zoom-link" href="${escapeAttribute(source)}" data-image-zoom aria-label="${label}">${image.outerHTML}<span class="image-zoom-hint" aria-hidden="true">${zoomHint}</span></a>`);
      }
    }

    if (needsReview && !figure.querySelector(".image-review-note")) {
      const caption = figure.querySelector("figcaption");
      if (caption) {
        caption.insertAdjacentHTML("beforeend", `<span class="${reviewNoteClass}">${reviewNote}</span>`);
      } else {
        figure.insertAdjacentHTML("beforeend", `<figcaption class="${reviewNoteClass}">${reviewNote}</figcaption>`);
      }
    }
  }

  return document.toString();
};
