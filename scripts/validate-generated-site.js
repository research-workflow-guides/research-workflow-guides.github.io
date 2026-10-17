const fs = require("node:fs");
const path = require("node:path");
const { parse } = require("node-html-parser");
const { siteRoot: outputRoot } = require("./output-paths");
const screenshotReviews = require("./screenshot-reviews.json");

const canonical = require("../src/_data/canonical");
const osSelectorTopics = new Set([
  "initial-setup-latex-installation",
  "initial-setup-vs-code-installation"
]);
const streamlinedCoreTopics = new Set([
  "initial-setup-project-template",
  "writing-folder-setup",
  "writing-settings",
  "writing-syntax",
  "writing-bibliography-citation",
  "git-git-installation",
  "git-connect-github",
  "git-create-repository",
  "git-clone-first-push",
  "git-status",
  "git-pull-push",
  "git-collaboration",
  "git-branch",
  "git-pull-request",
  "git-merge"
]);

const errors = [];
let checkedReferences = 0;
let checkedImagePreviews = 0;

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function normalizeImageSource(source) {
  try {
    return decodeURIComponent(source || "");
  } catch {
    return source || "";
  }
}

function validReviewDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

assert(screenshotReviews.schemaVersion === 1, "Screenshot review registry schemaVersion must be 1.");
assert(screenshotReviews.images && typeof screenshotReviews.images === "object" && !Array.isArray(screenshotReviews.images), "Screenshot review registry images must be an object.");
const imageReviews = new Map();
const projectRoot = path.resolve(__dirname, "..");
for (const [source, review] of Object.entries(screenshotReviews.images || {})) {
  const normalized = normalizeImageSource(source);
  const validPath = normalized.startsWith("/assets/images/") && !/[\\?#]/.test(normalized) && path.posix.normalize(normalized) === normalized;
  assert(validPath, `Screenshot review registry: invalid image path ${source}.`);
  if (validPath) {
    const filePath = path.join(projectRoot, normalized.slice(1));
    assert(fs.existsSync(filePath) && fs.statSync(filePath).isFile(), `Screenshot review registry: image does not exist ${source}.`);
  }
  assert(!imageReviews.has(normalized), `Screenshot review registry: duplicate normalized image path ${source}.`);
  assert(review && typeof review === "object" && !Array.isArray(review), `Screenshot review registry: invalid entry for ${source}.`);
  if (review && typeof review === "object" && !Array.isArray(review)) {
    assert(["retained", "updated"].includes(review.status), `Screenshot review registry: invalid status for ${source}.`);
    assert(validReviewDate(review.reviewedOn), `Screenshot review registry: invalid reviewedOn date for ${source}.`);
    assert(typeof review.reason === "string" && review.reason.trim(), `Screenshot review registry: reason is missing for ${source}.`);
    imageReviews.set(normalized, review);
  }
}

function figureReviews(figure) {
  const images = figure.querySelectorAll("img");
  const reviews = images.map((image) => imageReviews.get(normalizeImageSource(image.getAttribute("src"))));
  return reviews.length > 0 && reviews.every((review) => review && ["retained", "updated"].includes(review.status)) ? reviews : null;
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function localTarget(rawValue, htmlPath) {
  if (
    !rawValue ||
    rawValue.startsWith("#") ||
    /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(rawValue)
  ) {
    return null;
  }

  const withoutFragment = rawValue.split("#", 1)[0].split("?", 1)[0];
  if (!withoutFragment) {
    return null;
  }

  let decoded;
  try {
    decoded = decodeURIComponent(withoutFragment);
  } catch {
    errors.push(`${path.relative(outputRoot, htmlPath)}: invalid encoded URL ${rawValue}`);
    return null;
  }

  let target = decoded.startsWith("/")
    ? path.join(outputRoot, decoded.slice(1))
    : path.resolve(path.dirname(htmlPath), decoded);

  if (decoded.endsWith("/")) {
    target = path.join(target, "index.html");
  } else if (!path.extname(target)) {
    target = path.join(target, "index.html");
  }

  return target;
}

assert(fs.existsSync(outputRoot), "Generated site directory is missing. Run the build first.");

if (fs.existsSync(outputRoot)) {
  const files = walk(outputRoot);
  const htmlFiles = files.filter((file) => file.endsWith(".html"));
  const documents = new Map();

  assert(htmlFiles.length === 73, `Expected 73 generated HTML files, found ${htmlFiles.length}.`);
  assert(!fs.existsSync(path.join(outputRoot, "en", "python")), "Generated English Python route exists.");
  assert(!fs.existsSync(path.join(outputRoot, "ko", "python")), "Generated Korean Python route exists.");

  for (const htmlPath of htmlFiles) {
    const html = fs.readFileSync(htmlPath, "utf8");
    const document = parse(html);
    documents.set(htmlPath, document);
    assert(!document.querySelector(".footer-old-version"), `${htmlPath}: obsolete version link remains in the footer.`);
    assert(!document.querySelector(".image-review-note, .image-review-note--needs-update"), `${htmlPath}: screenshot review badge remains.`);

    for (const element of document.querySelectorAll("[href], [src]")) {
      for (const attribute of ["href", "src"]) {
        const reference = element.getAttribute(attribute);
        const target = localTarget(reference, htmlPath);
        if (!target) continue;
        checkedReferences += 1;
        assert(
          fs.existsSync(target),
          `${path.relative(outputRoot, htmlPath)}: missing internal target ${reference}`
        );
      }
    }

    for (const link of document.querySelectorAll(".prose .image-zoom-link")) {
      const image = link.querySelector("img");
      checkedImagePreviews += 1;
      assert(link.tagName === "A", `${htmlPath}: image preview must preserve a native link.`);
      assert(Boolean(image), `${htmlPath}: image preview has no image.`);
      assert(link.hasAttribute("data-image-zoom"), `${htmlPath}: image preview hook is missing.`);
      assert(Boolean(link.getAttribute("aria-label")), `${htmlPath}: image preview accessible label is missing.`);
      assert(link.getAttribute("href") === image?.getAttribute("src"), `${htmlPath}: image preview must link to the original image.`);
      assert(!link.querySelector("a"), `${htmlPath}: nested link in an image preview.`);
    }

    for (const figure of document.querySelectorAll(".prose figure.image-frame")) {
      assert(Boolean(figure.querySelector("a img")), `${htmlPath}: image lacks a no-JavaScript link.`);
      const reviews = figureReviews(figure);
      if (reviews) {
        const reviewedOn = reviews.map((review) => review.reviewedOn).sort().at(-1);
        assert(figure.getAttribute("data-screenshot-reviewed") === reviewedOn, `${htmlPath}: reviewed screenshot date is missing or incorrect.`);
      } else {
        assert(!figure.hasAttribute("data-screenshot-reviewed"), `${htmlPath}: unregistered screenshot is marked as reviewed.`);
      }
    }
  }

  for (const page of canonical.pages.filter((item) => item.pageType === "document")) {
    const generatedPath = path.join(outputRoot, page.url.slice(1), "index.html");
    const document = documents.get(generatedPath);
    assert(Boolean(document), `${page.url}: generated canonical document is missing.`);
    if (!document) continue;
    const hasContract = Boolean(document.querySelector(".workflow-contract"));
    const hasCompletion = Boolean(document.querySelector(".workflow-checks .workflow-completion"));
    const osSelector = document.querySelector(".os-selector");
    if (page.translationKey === "writing-texbb") {
      const translatedTexbbUrl = `/${page.lang === "en" ? "ko" : "en"}/writing-in-vs-code/texbb/`;
      assert(
        document.querySelector(".header-actions .lang-switch")?.getAttribute("href") === translatedTexbbUrl,
        `${page.url}: generated TeXBB language switch must link to its translation.`
      );
    }
    for (const link of document.querySelectorAll(".page-nav .nav-panel")) {
      assert(!link.querySelector(":scope > span"), `${page.url}: redundant navigation label remains.`);
      assert(Boolean(link.getAttribute("aria-label")), `${page.url}: navigation link has no direction label.`);
    }

    if (osSelectorTopics.has(page.translationKey)) {
      assert(Boolean(osSelector), `${page.url}: operating-system selector is missing.`);
      if (osSelector) {
        const current = osSelector.querySelector('a.os-option[aria-current="page"]');
        const pending = osSelector.querySelectorAll(".os-option-pending");
        assert(current?.getAttribute("href") === page.url, `${page.url}: Windows selector link is incorrect.`);
        assert(pending.length === 2, `${page.url}: pending operating systems are missing.`);
        assert(pending.every((item) => item.tagName === "SPAN" && !item.querySelector("a")), `${page.url}: pending operating system is linked.`);
      }
      assert(!document.querySelector(".platform-scope"), `${page.url}: duplicate scope note remains.`);
      assert(!hasContract, `${page.url}: redundant setup summary remains above the guide.`);
      assert(!document.querySelector(".verification-card"), `${page.url}: verification details remain above the guide.`);
    } else {
      assert(!osSelector, `${page.url}: operating-system selector appeared outside installation guides.`);
    }

    if (page.status === "core") {
      if (!osSelectorTopics.has(page.translationKey) && !streamlinedCoreTopics.has(page.translationKey)) {
        assert(hasContract, `${page.url}: generated core contract is missing.`);
      }
      if (streamlinedCoreTopics.has(page.translationKey)) {
        assert(!hasContract, `${page.url}: redundant workflow summary remains.`);
      }
      if (osSelectorTopics.has(page.translationKey) || streamlinedCoreTopics.has(page.translationKey)) {
        assert(!document.querySelector(".workflow-checks"), `${page.url}: redundant workflow wrap-up remains.`);
      } else {
        assert(hasCompletion, `${page.url}: generated completion check is missing.`);
      }
    } else {
      assert(!hasContract, `${page.url}: non-core page entered the core document contract.`);
    }
  }

  for (const section of canonical.sections) {
    for (const language of ["en", "ko"]) {
      const categoryPath = path.join(outputRoot, language, section.key, "index.html");
      const document = documents.get(categoryPath);
      assert(Boolean(document), `${language}/${section.key}: generated category page is missing.`);
      if (!document) continue;
      assert(Boolean(document.querySelector("#core-documents")), `${language}/${section.key}: core group is missing.`);
      if (canonical.groupedDocs[language][section.key].optional.length) {
        assert(
          Boolean(document.querySelector("#optional-documents")),
          `${language}/${section.key}: optional group is missing.`
        );
      }
      if (section.key === "writing-in-vs-code") {
        const optionalRows = document.querySelectorAll("#optional-documents .document-row");
        assert(
          optionalRows[2]?.getAttribute("href") === `/${language}/writing-in-vs-code/texbb/`,
          `${language}/${section.key}: Optional guides index 2 must link to TeXBB.`
        );
        assert(
          optionalRows[3]?.getAttribute("href") === `/${language}/writing-in-vs-code/jabref/`,
          `${language}/${section.key}: Optional guides index 3 must link to JabRef.`
        );
      }
      if (canonical.groupedDocs[language][section.key].troubleshooting.length) {
        assert(
          Boolean(document.querySelector("#troubleshooting-documents")),
          `${language}/${section.key}: troubleshooting group is missing.`
        );
      }
    }
  }

  const fontPath = path.join(outputRoot, "assets/fonts/pretendard/PretendardVariable.woff2");
  const licensePath = path.join(outputRoot, "assets/fonts/pretendard/OFL.txt");
  assert(fs.existsSync(fontPath), "Local Pretendard Variable font is missing.");
  if (fs.existsSync(fontPath)) {
    assert(fs.readFileSync(fontPath).subarray(0, 4).toString() === "wOF2", "Local Pretendard font is not a WOFF2 file.");
  }
  assert(fs.existsSync(licensePath), "Pretendard SIL Open Font License is missing.");
  if (fs.existsSync(licensePath)) {
    assert(fs.readFileSync(licensePath, "utf8").includes("SIL OPEN FONT LICENSE"), "Pretendard license text is invalid.");
  }
  assert(checkedImagePreviews > 0, "No accessible screenshot previews were generated.");

  const searchIndexPath = path.join(outputRoot, "search-index.json");
  assert(fs.existsSync(searchIndexPath), "Generated search-index.json is missing.");
  if (fs.existsSync(searchIndexPath)) {
    const searchEntries = JSON.parse(fs.readFileSync(searchIndexPath, "utf8"));
    assert(searchEntries.length === 70, `Expected 70 search entries, found ${searchEntries.length}.`);
    for (const language of ["en", "ko"]) {
      assert(
        searchEntries.some((entry) => entry.lang === language && entry.url === `/${language}/writing-in-vs-code/texbb/`),
        `${language}: TeXBB is missing from the search index.`
      );
    }
    assert(
      searchEntries.every((entry) => ["en", "ko"].includes(entry.lang)),
      "Search entry with an unsupported language exists."
    );
    assert(
      searchEntries.every((entry) => !entry.url.includes("/python/")),
      "Python URL found in the generated search index."
    );
  }
}

if (errors.length) {
  console.error(`Generated site validation failed with ${errors.length} error(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Generated site validation passed.");
console.log(`HTML files: 73; search entries: 70; internal references checked: ${checkedReferences}; image previews: ${checkedImagePreviews}.`);
