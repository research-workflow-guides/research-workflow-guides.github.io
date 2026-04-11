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
        key: "part-1",
        label: "Part 1",
        url: "/part-1/"
      },
      {
        key: "part-2",
        label: "Part 2",
        url: "/part-2/"
      }
    ],
    koSection: [
      {
        key: "home",
        label: "홈",
        url: "/ko/"
      },
      {
        key: "part-1",
        label: "파트 1",
        url: "/part-1/"
      }
    ]
  }
};
