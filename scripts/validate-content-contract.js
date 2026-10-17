const fs = require("node:fs");
const path = require("node:path");
const matter = require("gray-matter");

const canonical = require("../src/_data/canonical");

const expectedCoreCounts = {
  "initial-setup": 3,
  "writing-in-vs-code": 4,
  "git-github": 6,
  collaboration: 4
};

const verificationRequired = new Set([
  "initial-setup-latex-installation",
  "initial-setup-vs-code-installation",
  "initial-setup-project-template",
  "initial-setup-extension",
  "writing-folder-setup",
  "writing-shortcuts",
  "writing-settings",
  "writing-bibliography-citation",
  "git-git-installation",
  "git-connect-github",
  "git-create-repository",
  "git-clone-first-push",
  "git-pull-push",
  "git-collaboration",
  "git-branch",
  "git-pull-request",
  "git-merge"
]);
const workflowCheckOptional = new Set([
  "initial-setup-latex-installation",
  "initial-setup-vs-code-installation",
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
const summaryOptional = new Set([
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

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function sourcePath(page) {
  return path.join(
    __dirname,
    "..",
    "src",
    page.lang,
    page.section,
    `${page.slug}.md`
  );
}

assert(canonical.pages.length === 73, `Expected 73 public pages, found ${canonical.pages.length}.`);
assert(canonical.sections.length === 4, `Expected 4 sections, found ${canonical.sections.length}.`);
assert(
  canonical.pages.every((page) => !page.url.includes("/python/")),
  "Python URL found in the canonical public inventory."
);

for (const section of canonical.sections) {
  const englishPages = section.pages.en;
  const koreanPages = section.pages.ko;
  const englishCore = canonical.groupedDocs.en[section.key].core;
  const koreanCore = canonical.groupedDocs.ko[section.key].core;

  assert(
    englishCore.length === expectedCoreCounts[section.key],
    `${section.key}: expected ${expectedCoreCounts[section.key]} English core documents, found ${englishCore.length}.`
  );
  assert(
    koreanCore.length === expectedCoreCounts[section.key],
    `${section.key}: expected ${expectedCoreCounts[section.key]} Korean core documents, found ${koreanCore.length}.`
  );
  assert(
    englishPages.length === koreanPages.length,
    `${section.key}: English and Korean document counts differ.`
  );

  for (const englishPage of englishPages) {
    const koreanPage = koreanPages.find(
      (candidate) => candidate.translationKey === englishPage.translationKey
    );

    assert(koreanPage, `${englishPage.url}: missing Korean translation pair.`);
    if (koreanPage) {
      assert(
        koreanPage.status === englishPage.status,
        `${englishPage.translationKey}: bilingual status mismatch.`
      );
      assert(
        koreanPage.order === englishPage.order,
        `${englishPage.translationKey}: bilingual order mismatch.`
      );
    }
  }
}

const documents = canonical.pages.filter((page) => page.pageType === "document");
assert(documents.length === 62, `Expected 62 document pages, found ${documents.length}.`);
const documentPairKeys = new Set(documents.map((page) => page.translationKey));
assert(documentPairKeys.size === 31, `Expected 31 document translation pairs, found ${documentPairKeys.size}.`);

for (const language of ["en", "ko"]) {
  const optionalWriting = canonical.groupedDocs[language]["writing-in-vs-code"].optional;
  const texbbUrl = `/${language}/writing-in-vs-code/texbb/`;
  const translatedTexbbUrl = `/${language === "en" ? "ko" : "en"}/writing-in-vs-code/texbb/`;
  assert(
    optionalWriting[2]?.translationKey === "writing-texbb" && optionalWriting[2]?.url === texbbUrl,
    `${language}/writing-in-vs-code: Optional guides index 2 must be TeXBB.`
  );
  assert(
    optionalWriting[3]?.translationKey === "writing-jabref",
    `${language}/writing-in-vs-code: Optional guides index 3 must be JabRef.`
  );
  assert(
    canonical.pagesByUrl[texbbUrl]?.translationKey === "writing-texbb" &&
      canonical.pageUi[texbbUrl]?.langSwitch?.url === translatedTexbbUrl,
    `${texbbUrl}: TeXBB language switch must link to its translation.`
  );
}

for (const page of documents) {
  const filePath = sourcePath(page);
  assert(fs.existsSync(filePath), `${page.url}: source file is missing.`);
  if (!fs.existsSync(filePath)) {
    continue;
  }

  const { data } = matter.read(filePath);

  assert(data.lang === page.lang, `${page.url}: front matter language does not match canonical data.`);
  assert(data.section === page.section, `${page.url}: front matter section does not match canonical data.`);
  assert(data.order === page.order, `${page.url}: front matter order does not match canonical data.`);
  assert(data.permalink === page.url, `${page.url}: front matter permalink does not match canonical data.`);
  assert(
    data.translationKey === page.translationKey,
    `${page.url}: front matter translationKey does not match canonical data.`
  );

  if (page.status === "core") {
    if (!summaryOptional.has(page.translationKey)) {
      assert(typeof data.outcome === "string" && data.outcome.trim(), `${page.url}: outcome is missing.`);
    }
    if (!summaryOptional.has(page.translationKey)) {
      assert(
        Array.isArray(data.prerequisites) && data.prerequisites.length > 0,
        `${page.url}: prerequisites are missing.`
      );
    }
    assert(
      data.workflowChecks !== false || workflowCheckOptional.has(page.translationKey),
      `${page.url}: workflow checks can only be hidden on a supported guide.`
    );
    if (data.workflowChecks !== false) {
      assert(
        typeof data.completion === "string" && data.completion.trim(),
        `${page.url}: completion check is missing.`
      );
      assert(
        Array.isArray(data.commonProblems) && data.commonProblems.length > 0,
        `${page.url}: commonProblems are missing.`
      );
    }
  }

  if (verificationRequired.has(page.translationKey)) {
    assert(data.verification, `${page.url}: verification metadata is missing.`);
    if (data.verification) {
      assert(
        ["verified", "needs-review"].includes(data.verification.status),
        `${page.url}: verification status is invalid.`
      );
      if (data.verification.screenshots !== undefined) {
        assert(
          data.verification.screenshots === "needs-update",
          `${page.url}: verification.screenshots is invalid.`
        );
      }
      for (const field of ["environment", "workflow", "lastVerified", "support"]) {
        assert(
          typeof data.verification[field] === "string" && data.verification[field].trim(),
          `${page.url}: verification.${field} is missing.`
        );
      }
    }
  }
}

for (let sectionIndex = 0; sectionIndex < canonical.sections.length; sectionIndex += 1) {
  const section = canonical.sections[sectionIndex];
  for (const language of ["en", "ko"]) {
    const corePages = canonical.groupedDocs[language][section.key].core;

    for (let pageIndex = 0; pageIndex < corePages.length; pageIndex += 1) {
      const page = corePages[pageIndex];
      const nextPage = canonical.pageUi[page.url].nextPage;

      if (pageIndex < corePages.length - 1) {
        assert(
          nextPage && nextPage.url === corePages[pageIndex + 1].url,
          `${page.url}: next core document is incorrect.`
        );
      } else if (sectionIndex < canonical.sections.length - 1) {
        const nextSection = canonical.sections[sectionIndex + 1];
        const nextCore = canonical.groupedDocs[language][nextSection.key].core[0];
        assert(
          nextPage && nextPage.url === nextCore.url,
          `${page.url}: next-stage transition is incorrect.`
        );
      } else {
        assert(nextPage === null, `${page.url}: final core document should not leave the workflow.`);
      }
    }
  }
}

if (errors.length) {
  console.error(`Content contract validation failed with ${errors.length} error(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Content contract validation passed.");
console.log("Sections: 4; pages: 73; document pairs: 31; core paths: 3, 4, 6, 4.");
