const canonical = require("./canonical");

module.exports = {
  sections: canonical.sections,
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
