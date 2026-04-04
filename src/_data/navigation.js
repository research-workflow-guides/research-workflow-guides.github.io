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
  homes: canonical.homes,
  legacy: {
    en: [
      {
        key: "home",
        label: "Home",
        url: "/"
      },
      {
        key: "section-1",
        label: "Section 1",
        url: "/section-1/"
      },
      {
        key: "section-2",
        label: "Section 2",
        url: "/section-2/"
      },
      {
        key: "updates",
        label: "Updates",
        url: "/updates/"
      }
    ],
    koSection: [
      {
        key: "home",
        label: "홈",
        url: "/ko/"
      },
      {
        key: "section-1",
        label: "섹션 1",
        url: "/section-1/"
      }
    ]
  }
};
