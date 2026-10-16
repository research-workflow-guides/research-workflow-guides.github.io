const { parse } = require("node-html-parser");
const screenshotReviews = require("./screenshot-reviews.json");

function normalizeImageSource(source) {
  try {
    return decodeURIComponent(source || "");
  } catch {
    return source || "";
  }
}

const imageReviews = new Map(Object.entries(screenshotReviews.images).map(([source, review]) => [normalizeImageSource(source), review]));

function escapeAttribute(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

module.exports = function enhanceImages(html) {
  const document = parse(html);
  const reviewNotes = document.querySelectorAll(".image-review-note, .image-review-note--needs-update");
  for (const note of reviewNotes) note.remove();
  const figures = document.querySelectorAll(".prose figure.image-frame");
  if (!figures.length) return reviewNotes.length ? document.toString() : html;

  const isKorean = document.querySelector("html")?.getAttribute("lang") === "ko";
  const zoomLabel = isKorean ? "이미지 원본 확대" : "Enlarge original image";
  const zoomHint = isKorean ? "확대" : "Enlarge";

  for (const figure of figures) {
    const images = figure.querySelectorAll("img");
    const reviews = images.map((image) => imageReviews.get(normalizeImageSource(image.getAttribute("src"))));
    const reviewed = reviews.length > 0 && reviews.every((review) => review && ["retained", "updated"].includes(review.status));
    if (reviewed) {
      figure.setAttribute("data-screenshot-reviewed", reviews.map((review) => review.reviewedOn).sort().at(-1));
    } else {
      figure.removeAttribute("data-screenshot-reviewed");
    }

    for (const image of images) {
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

  }

  return document.toString();
};
