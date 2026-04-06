const sectionDefinitions = [
  {
    key: "start-here",
    url: {
      en: "/en/start-here/",
      ko: "/ko/start-here/"
    },
    title: {
      en: "Initial Setup",
      ko: "Initial Setup"
    },
    summary: {
      en: "Set up the toolchain and reach the first successful compile.",
      ko: "도구 체인을 맞추고 첫 compile 성공까지 도달합니다."
    },
    kicker: {
      en: "Foundation",
      ko: "Foundation"
    },
    groups: [
      {
        key: "steps",
        label: {
          en: "Steps",
          ko: "세 단계"
        }
      }
    ]
  },
  {
    key: "writing-in-vs-code",
    url: {
      en: "/en/writing-in-vs-code/",
      ko: "/ko/writing-in-vs-code/"
    },
    title: {
      en: "Work in VS Code",
      ko: "Work in VS Code"
    },
    summary: {
      en: "Move into the daily edit, build, preview, and revision loop.",
      ko: "일상적인 편집, build, preview, revision 루프로 넘어갑니다."
    },
    kicker: {
      en: "Practice",
      ko: "Practice"
    },
    groups: [
      {
        key: "main-topics",
        label: {
          en: "Main topics",
          ko: "주요 문서"
        }
      },
      {
        key: "optional-topics",
        label: {
          en: "Optional topics",
          ko: "선택 문서"
        }
      }
    ]
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
    },
    groups: [
      {
        key: "preparation",
        label: {
          en: "Preparation",
          ko: "준비"
        }
      },
      {
        key: "first-github-workflow",
        label: {
          en: "First GitHub workflow",
          ko: "첫 GitHub 작업"
        }
      },
      {
        key: "daily-workflow",
        label: {
          en: "Daily workflow",
          ko: "일상 작업"
        }
      },
      {
        key: "collaboration",
        label: {
          en: "Collaboration",
          ko: "협업"
        }
      }
    ]
  }
];

const pages = [
  {
    url: "/",
    pageType: "root-landing",
    lang: "root",
    title: "Research Workflow Guidebook",
    translationKey: "root",
    status: "core"
  },
  {
    url: "/en/",
    pageType: "language-home",
    lang: "en",
    title: "English Home",
    translationKey: "language-home",
    status: "core"
  },
  {
    url: "/ko/",
    pageType: "language-home",
    lang: "ko",
    title: "한국어 홈",
    translationKey: "language-home",
    status: "core"
  },
  {
    url: "/en/start-here/",
    pageType: "category-home",
    lang: "en",
    section: "start-here",
    title: "Initial Setup",
    translationKey: "category-start-here",
    status: "core"
  },
  {
    url: "/ko/start-here/",
    pageType: "category-home",
    lang: "ko",
    section: "start-here",
    title: "Initial Setup",
    translationKey: "category-start-here",
    status: "core"
  },
  {
    url: "/en/start-here/latex-installation/",
    pageType: "document",
    lang: "en",
    section: "start-here",
    slug: "latex-installation",
    order: 1,
    group: "steps",
    title: "LaTeX Installation",
    description: "Install MiKTeX and verify the base LaTeX toolchain is working.",
    translationKey: "start-here-latex-installation",
    status: "core"
  },
  {
    url: "/ko/start-here/latex-installation/",
    pageType: "document",
    lang: "ko",
    section: "start-here",
    slug: "latex-installation",
    order: 1,
    group: "steps",
    title: "LaTeX 설치",
    description: "MiKTeX를 설치하고 기본 LaTeX 도구 체인이 동작하는지 확인합니다.",
    translationKey: "start-here-latex-installation",
    status: "core"
  },
  {
    url: "/en/start-here/vs-code-installation/",
    pageType: "document",
    lang: "en",
    section: "start-here",
    slug: "vs-code-installation",
    order: 2,
    group: "steps",
    title: "VS Code Installation",
    description: "Install VS Code and add the LaTeX Workshop extension.",
    translationKey: "start-here-vs-code-installation",
    status: "core"
  },
  {
    url: "/ko/start-here/vs-code-installation/",
    pageType: "document",
    lang: "ko",
    section: "start-here",
    slug: "vs-code-installation",
    order: 2,
    group: "steps",
    title: "VS Code 설치",
    description: "VS Code와 LaTeX Workshop을 설치해 기본 작성 환경을 준비합니다.",
    translationKey: "start-here-vs-code-installation",
    status: "core"
  },
  {
    url: "/en/start-here/project-template/",
    pageType: "document",
    lang: "en",
    section: "start-here",
    slug: "project-template",
    order: 3,
    group: "steps",
    title: "Project Template",
    description: "Open the starter project, run the first build, and confirm the full toolchain works.",
    translationKey: "start-here-project-template",
    status: "core"
  },
  {
    url: "/ko/start-here/project-template/",
    pageType: "document",
    lang: "ko",
    section: "start-here",
    slug: "project-template",
    order: 3,
    group: "steps",
    title: "Project Template",
    description: "starter project를 열고 첫 PDF build가 동작하는지 확인합니다.",
    translationKey: "start-here-project-template",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/",
    pageType: "category-home",
    lang: "en",
    section: "writing-in-vs-code",
    title: "Work in VS Code",
    translationKey: "category-writing-in-vs-code",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/",
    pageType: "category-home",
    lang: "ko",
    section: "writing-in-vs-code",
    title: "Work in VS Code",
    translationKey: "category-writing-in-vs-code",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/folder-setup/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "folder-setup",
    order: 1,
    group: "main-topics",
    title: "Folder Setup",
    description: "Open the correct project root and keep one stable workspace shape in VS Code.",
    translationKey: "writing-folder-setup",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/folder-setup/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "folder-setup",
    order: 1,
    group: "main-topics",
    title: "폴더 열기",
    description: "올바른 project root를 열고 VS Code 작업 공간 구조를 안정적으로 유지합니다.",
    translationKey: "writing-folder-setup",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/settings/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "settings",
    order: 2,
    group: "main-topics",
    title: "Settings",
    description: "Set the small VS Code and LaTeX Workshop defaults that keep the writing loop calm.",
    translationKey: "writing-settings",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/settings/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "settings",
    order: 2,
    group: "main-topics",
    title: "Settings",
    description: "VS Code와 LaTeX Workshop의 기본 설정을 정리해 반복 작업을 안정화합니다.",
    translationKey: "writing-settings",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/usage-basics/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "usage-basics",
    order: 3,
    group: "main-topics",
    title: "Usage Basics",
    description: "Practice the edit, build, preview, and SyncTeX loop until it feels routine.",
    translationKey: "writing-usage-basics",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/usage-basics/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "usage-basics",
    order: 3,
    group: "main-topics",
    title: "기본 사용법",
    description: "수정, build, preview, SyncTeX 루프를 일상적으로 반복하는 방법을 정리합니다.",
    translationKey: "writing-usage-basics",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/shortcuts/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "shortcuts",
    order: 4,
    group: "main-topics",
    title: "Shortcuts",
    description: "Pin the few shortcuts that remove friction from the daily writing loop.",
    translationKey: "writing-shortcuts",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/shortcuts/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "shortcuts",
    order: 4,
    group: "main-topics",
    title: "Shortcuts",
    description: "매일 반복하는 동작을 줄여주는 핵심 shortcut만 정리합니다.",
    translationKey: "writing-shortcuts",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/snippets/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "snippets",
    order: 5,
    group: "main-topics",
    title: "Snippets",
    description: "Use a small snippet set to speed up repetitive LaTeX typing without overengineering.",
    translationKey: "writing-snippets",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/overleaf/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "overleaf",
    order: 6,
    group: "optional-topics",
    title: "Overleaf",
    description: "Use Overleaf Professional as a GitHub-connected writing bridge when local VS Code is not the whole workflow.",
    translationKey: "writing-overleaf",
    status: "optional"
  },
  {
    url: "/ko/writing-in-vs-code/overleaf/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "overleaf",
    order: 6,
    group: "optional-topics",
    title: "Overleaf",
    description: "Overleaf Professional을 GitHub와 연결해 보조 작성 환경으로 사용하는 흐름을 정리합니다.",
    translationKey: "writing-overleaf",
    status: "optional"
  },
  {
    url: "/en/writing-in-vs-code/revision-pdf-latexdiff/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "revision-pdf-latexdiff",
    order: 7,
    group: "optional-topics",
    title: "Generate a Revision PDF with latexdiff",
    description: "Compare an old TeX file with a revised one and compile a review PDF with latexdiff.",
    translationKey: "writing-revision-pdf-latexdiff",
    status: "optional"
  },
  {
    url: "/ko/writing-in-vs-code/revision-pdf-latexdiff/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "revision-pdf-latexdiff",
    order: 7,
    group: "optional-topics",
    title: "latexdiff로 revision PDF 만들기",
    description: "old TeX와 revised TeX를 비교해 latexdiff로 review PDF를 만드는 흐름을 정리합니다.",
    translationKey: "writing-revision-pdf-latexdiff",
    status: "optional"
  },
  {
    url: "/ko/writing-in-vs-code/snippets/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "snippets",
    order: 5,
    group: "main-topics",
    title: "Snippets",
    description: "자주 쓰는 LaTeX 조각을 snippet으로 묶어 반복 입력을 줄입니다.",
    translationKey: "writing-snippets",
    status: "core"
  },
  {
    url: "/en/git-github/",
    pageType: "category-home",
    lang: "en",
    section: "git-github",
    title: "Git & GitHub",
    translationKey: "category-git-github",
    status: "core"
  },
  {
    url: "/ko/git-github/",
    pageType: "category-home",
    lang: "ko",
    section: "git-github",
    title: "Git & GitHub",
    translationKey: "category-git-github",
    status: "core"
  },
  {
    url: "/en/git-github/git-installation/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "git-installation",
    order: 1,
    group: "preparation",
    title: "Git Installation",
    description: "Install Git and set the basic identity you will reuse across projects.",
    translationKey: "git-git-installation",
    status: "core"
  },
  {
    url: "/ko/git-github/git-installation/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "git-installation",
    order: 1,
    group: "preparation",
    title: "Git 설치",
    description: "Git을 설치하고 프로젝트마다 재사용할 기본 identity를 설정합니다.",
    translationKey: "git-git-installation",
    status: "core"
  },
  {
    url: "/en/git-github/github-account-setup/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "github-account-setup",
    order: 2,
    group: "preparation",
    title: "GitHub Account Setup",
    description: "Prepare the GitHub account you will use for repositories and collaboration.",
    translationKey: "git-github-account-setup",
    status: "core"
  },
  {
    url: "/ko/git-github/github-account-setup/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "github-account-setup",
    order: 2,
    group: "preparation",
    title: "GitHub 계정 준비",
    description: "저장소 작업과 협업에 사용할 GitHub 계정을 준비합니다.",
    translationKey: "git-github-account-setup",
    status: "core"
  },
  {
    url: "/en/git-github/connect-github/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "connect-github",
    order: 3,
    group: "first-github-workflow",
    title: "Connect GitHub",
    description: "Connect the GitHub account inside VS Code before you create the first repository.",
    translationKey: "git-connect-github",
    status: "core"
  },
  {
    url: "/ko/git-github/connect-github/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "connect-github",
    order: 3,
    group: "first-github-workflow",
    title: "GitHub 연결",
    description: "첫 저장소를 만들기 전에 VS Code 안에서 GitHub 계정을 연결합니다.",
    translationKey: "git-connect-github",
    status: "core"
  },
  {
    url: "/en/git-github/create-repository/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "create-repository",
    order: 4,
    group: "first-github-workflow",
    title: "Create Repository",
    description: "Create the first empty private repository before you bring in the local project.",
    translationKey: "git-create-repository",
    status: "core"
  },
  {
    url: "/ko/git-github/create-repository/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "create-repository",
    order: 4,
    group: "first-github-workflow",
    title: "저장소 만들기",
    description: "로컬 project를 올리기 전에 첫 private repository를 만듭니다.",
    translationKey: "git-create-repository",
    status: "core"
  },
  {
    url: "/en/git-github/clone-first-push/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "clone-first-push",
    order: 5,
    group: "first-github-workflow",
    title: "Clone + First Push",
    description: "Clone the empty repository, add the project files, and publish the first commit.",
    translationKey: "git-clone-first-push",
    status: "core"
  },
  {
    url: "/ko/git-github/clone-first-push/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "clone-first-push",
    order: 5,
    group: "first-github-workflow",
    title: "Clone + First Push",
    description: "빈 저장소를 clone한 뒤 project 파일을 넣고 첫 commit을 push합니다.",
    translationKey: "git-clone-first-push",
    status: "core"
  },
  {
    url: "/en/git-github/pull-push/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "pull-push",
    order: 6,
    group: "daily-workflow",
    title: "Pull & Push",
    description: "Repeat one clean sync loop so local work and remote history stay aligned.",
    translationKey: "git-pull-push",
    status: "core"
  },
  {
    url: "/ko/git-github/pull-push/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "pull-push",
    order: 6,
    group: "daily-workflow",
    title: "Pull & Push",
    description: "로컬 작업과 원격 이력을 맞추는 기본 sync 루프를 반복합니다.",
    translationKey: "git-pull-push",
    status: "core"
  },
  {
    url: "/en/git-github/version-control/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "version-control",
    order: 7,
    group: "daily-workflow",
    title: "Version Control",
    description: "Understand tracked, staged, committed, and ignored states well enough to stay calm.",
    translationKey: "git-version-control",
    status: "core"
  },
  {
    url: "/ko/git-github/version-control/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "version-control",
    order: 7,
    group: "daily-workflow",
    title: "Version Control",
    description: "tracked, staged, committed, ignored 상태를 구분해 안정적으로 작업합니다.",
    translationKey: "git-version-control",
    status: "core"
  },
  {
    url: "/en/git-github/collaboration/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "collaboration",
    order: 8,
    group: "collaboration",
    title: "Collaboration",
    description: "Use a small-team repository workflow that stays readable and predictable.",
    translationKey: "git-collaboration",
    status: "core"
  },
  {
    url: "/ko/git-github/collaboration/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "collaboration",
    order: 8,
    group: "collaboration",
    title: "Collaboration",
    description: "작은 팀이 함께 써도 흐름이 흐트러지지 않는 협업 방식을 정리합니다.",
    translationKey: "git-collaboration",
    status: "core"
  },
  {
    url: "/en/git-github/conflict/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "conflict",
    order: 9,
    group: "collaboration",
    title: "Conflict",
    description: "Resolve same-file text conflicts without panic and return to the normal loop.",
    translationKey: "git-conflict",
    status: "core"
  },
  {
    url: "/ko/git-github/conflict/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "conflict",
    order: 9,
    group: "collaboration",
    title: "Conflict",
    description: "같은 파일 충돌을 침착하게 정리하고 다시 정상 작업 흐름으로 돌아갑니다.",
    translationKey: "git-conflict",
    status: "core"
  }
];

const languages = [
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
];

const homes = {
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
};

const pagesByUrl = Object.fromEntries(pages.map((page) => [page.url, page]));
const translationGroups = new Map();

for (const page of pages) {
  if (!translationGroups.has(page.translationKey)) {
    translationGroups.set(page.translationKey, []);
  }
  translationGroups.get(page.translationKey).push(page);
}

const sectionOrder = sectionDefinitions.map((section) => section.key);
const groupedDocs = { en: {}, ko: {} };
const publicDocStatuses = new Set(["core", "optional"]);

function isPublicDoc(page) {
  return page.pageType === "document" && publicDocStatuses.has(page.status);
}

function buildPublicDocs(sectionKey, language) {
  return pages
    .filter((page) => {
      return isPublicDoc(page) && page.lang === language && page.section === sectionKey;
    })
    .sort((left, right) => left.order - right.order);
}

for (const language of ["en", "ko"]) {
  for (const section of sectionDefinitions) {
    const docs = buildPublicDocs(section.key, language);

    const groupMap = {};

    for (const group of section.groups) {
      groupMap[group.key] = docs.filter((doc) => doc.group === group.key);
    }

    groupedDocs[language][section.key] = groupMap;
  }
}

const sections = sectionDefinitions.map((section) => {
  return {
    key: section.key,
    url: section.url,
    title: section.title,
    summary: section.summary,
    kicker: section.kicker,
    groups: section.groups,
    pages: {
      en: buildPublicDocs(section.key, "en"),
      ko: buildPublicDocs(section.key, "ko")
    },
    groupedPages: {
      en: section.groups
        .map((group) => ({
          key: group.key,
          label: group.label.en,
          pages: groupedDocs.en[section.key][group.key]
        }))
        .filter((group) => group.pages.length),
      ko: section.groups
        .map((group) => ({
          key: group.key,
          label: group.label.ko,
          pages: groupedDocs.ko[section.key][group.key]
        }))
        .filter((group) => group.pages.length)
    }
  };
});

function getTranslationTarget(page) {
  const candidates = translationGroups.get(page.translationKey) || [];
  return candidates.find((candidate) => candidate.lang !== page.lang) || null;
}

function getNextSection(sectionKey) {
  const index = sectionOrder.indexOf(sectionKey);
  if (index === -1 || index === sectionOrder.length - 1) {
    return null;
  }
  return sections[index + 1];
}

function buildBreadcrumbs(page) {
  if (page.pageType === "language-home" || page.pageType === "root-landing") {
    return [];
  }

  const crumbs = [{ title: "Home", url: "/" }];
  const section = sections.find((item) => item.key === page.section);

  if (section) {
    crumbs.push({
      title: section.title[page.lang],
      url: page.pageType === "category-home" ? null : section.url[page.lang]
    });
  }

  if (page.pageType === "document") {
    crumbs.push({
      title: page.title,
      url: null
    });
  }

  return crumbs;
}

function buildPrevNext(page) {
  if (page.pageType !== "document") {
    return { prevPage: null, nextPage: null };
  }

  const section = sections.find((item) => item.key === page.section);
  let sequence = section.pages[page.lang];

  if (page.section === "writing-in-vs-code" && page.group === "main-topics") {
    sequence = sequence.filter((item) => item.status === "core");
  }

  if (page.section === "writing-in-vs-code" && page.group === "optional-topics") {
    sequence = sequence.filter((item) => item.group === "optional-topics");
  }

  const index = sequence.findIndex((item) => item.url === page.url);
  const prevPage = index > 0
    ? {
        title: sequence[index - 1].title,
        url: sequence[index - 1].url
      }
    : {
        title: section.title[page.lang],
        url: section.url[page.lang]
      };

  let nextPage = null;

  if (index >= 0 && index < sequence.length - 1) {
    nextPage = {
      title: sequence[index + 1].title,
      url: sequence[index + 1].url
    };
  } else {
    const nextSection = getNextSection(page.section);
    if (nextSection) {
      nextPage = {
        title: nextSection.title[page.lang],
        url: nextSection.url[page.lang]
      };
    }
  }

  return { prevPage, nextPage };
}

const pageUi = {};

for (const page of pages) {
  if (page.lang !== "en" && page.lang !== "ko") {
    continue;
  }

  const translationTarget = getTranslationTarget(page);
  const prevNext = buildPrevNext(page);

  pageUi[page.url] = {
    activeSection: page.section || null,
    breadcrumbs: buildBreadcrumbs(page),
    langSwitch: {
      url: translationTarget ? translationTarget.url : homes[page.lang === "en" ? "ko" : "en"].url,
      label: homes[page.lang].switchLabel
    },
    prevPage: prevNext.prevPage,
    nextPage: prevNext.nextPage
  };
}

module.exports = {
  pages,
  pagesByUrl,
  pageUi,
  sections,
  languages,
  homes,
  groupedDocs
};
