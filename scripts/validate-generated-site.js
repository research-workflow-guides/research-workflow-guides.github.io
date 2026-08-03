const fs = require("node:fs");
const path = require("node:path");

const canonical = require("../src/_data/canonical");

const outputRoot = path.join(__dirname, "..", "_site");
const errors = [];
let checkedReferences = 0;

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
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

  assert(htmlFiles.length === 71, `Expected 71 generated HTML files, found ${htmlFiles.length}.`);
  assert(!fs.existsSync(path.join(outputRoot, "en", "python")), "Generated English Python route exists.");
  assert(!fs.existsSync(path.join(outputRoot, "ko", "python")), "Generated Korean Python route exists.");

  for (const htmlPath of htmlFiles) {
    const html = fs.readFileSync(htmlPath, "utf8");
    const referencePattern = /\b(?:href|src)=["']([^"']+)["']/g;

    for (const match of html.matchAll(referencePattern)) {
      const target = localTarget(match[1], htmlPath);
      if (!target) {
        continue;
      }
      checkedReferences += 1;
      assert(
        fs.existsSync(target),
        `${path.relative(outputRoot, htmlPath)}: missing internal target ${match[1]}`
      );
    }
  }

  for (const page of canonical.pages.filter((item) => item.pageType === "document")) {
    const generatedPath = path.join(outputRoot, page.url.slice(1), "index.html");
    const html = fs.readFileSync(generatedPath, "utf8");
    const hasContract = html.includes('class="workflow-contract"');
    const hasCompletion = html.includes('class="workflow-check-block workflow-completion"');

    if (page.status === "core") {
      assert(hasContract, `${page.url}: generated core contract is missing.`);
      assert(hasCompletion, `${page.url}: generated completion check is missing.`);
    } else {
      assert(!hasContract, `${page.url}: non-core page entered the core document contract.`);
    }
  }

  for (const section of canonical.sections) {
    for (const language of ["en", "ko"]) {
      const categoryPath = path.join(outputRoot, language, section.key, "index.html");
      const html = fs.readFileSync(categoryPath, "utf8");
      assert(html.includes('id="core-documents"'), `${language}/${section.key}: core group is missing.`);
      if (canonical.groupedDocs[language][section.key].optional.length) {
        assert(
          html.includes('id="optional-documents"'),
          `${language}/${section.key}: optional group is missing.`
        );
      }
      if (canonical.groupedDocs[language][section.key].troubleshooting.length) {
        assert(
          html.includes('id="troubleshooting-documents"'),
          `${language}/${section.key}: troubleshooting group is missing.`
        );
      }
    }
  }

  const searchIndexPath = path.join(outputRoot, "search-index.json");
  assert(fs.existsSync(searchIndexPath), "Generated search-index.json is missing.");
  if (fs.existsSync(searchIndexPath)) {
    const searchEntries = JSON.parse(fs.readFileSync(searchIndexPath, "utf8"));
    assert(searchEntries.length === 68, `Expected 68 search entries, found ${searchEntries.length}.`);
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
console.log(`HTML files: 71; search entries: 68; internal references checked: ${checkedReferences}.`);
