const sections = [
  {
    key: "start-here",
    url: {
      en: "/en/start-here/",
      ko: "/ko/start-here/"
    },
    title: {
      en: "Start Here",
      ko: "Start Here"
    },
    summary: {
      en: "Set up the toolchain and reach the first successful compile.",
      ko: "도구 체인을 맞추고 첫 compile 성공까지 도달합니다."
    },
    kicker: {
      en: "Foundation",
      ko: "Foundation"
    }
  },
  {
    key: "writing-in-vs-code",
    url: {
      en: "/en/writing-in-vs-code/",
      ko: "/ko/writing-in-vs-code/"
    },
    title: {
      en: "Writing in VS Code",
      ko: "Writing in VS Code"
    },
    summary: {
      en: "Move into the daily edit, build, preview, and revision loop.",
      ko: "일상적인 편집, build, preview, revision 루프로 넘어갑니다."
    },
    kicker: {
      en: "Practice",
      ko: "Practice"
    }
  },
  {
    key: "git-github",
    url: {
      en: "/en/git-github/",
      ko: "/ko/git-github/"
    },
    title: {
      en: "Git & GitHub",
      ko: "Git & GitHub"
    },
    summary: {
      en: "Connect repositories, publish work, and collaborate without drama.",
      ko: "저장소를 연결하고 작업을 공개하며 협업 흐름을 안정적으로 운영합니다."
    },
    kicker: {
      en: "Collaboration",
      ko: "Collaboration"
    }
  }
];

module.exports = {
  sections,
  languages: [
    {
      code: "en",
      label: "English",
      url: "/en/",
      summary: "Enter the English guidebook."
    },
    {
      code: "ko",
      label: "한국어",
      url: "/ko/",
      summary: "한국어 가이드북으로 이동합니다."
    }
  ],
  main: {
    en: sections.map((section) => ({
      key: section.key,
      label: section.title.en,
      url: section.url.en
    })),
    ko: sections.map((section) => ({
      key: section.key,
      label: section.title.ko,
      url: section.url.ko
    }))
  },
  homes: {
    en: {
      label: "English Home",
      url: "/en/",
      switchLabel: "한국어"
    },
    ko: {
      label: "한국어 홈",
      url: "/ko/",
      switchLabel: "English"
    }
  }
};
