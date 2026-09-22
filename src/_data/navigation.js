const canonical = require("./canonical");
const compactLabels = {
  "initial-setup": { en: "Get started", ko: "시작하기" },
  "writing-in-vs-code": { en: "VS Code", ko: "VS Code" },
  "git-github": { en: "GitHub", ko: "GitHub" },
  collaboration: { en: "Collaborate", ko: "협업" }
};

module.exports = {
  sections: canonical.sections.map((section) => ({ ...section, navTitle: compactLabels[section.key] })),
  languages: canonical.languages,
  main: {
    en: canonical.sections.map((section) => ({
      key: section.key,
      label: section.title.en,
      url: section.url.en
    })),
    ko: canonical.sections.map((section) => ({
      key: section.key,
      label: section.title.ko,
      url: section.url.ko
    }))
  },
  homes: canonical.homes
};
