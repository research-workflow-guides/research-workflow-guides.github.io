const classificationDefinitions = [
  {
    key: "core",
    label: {
      en: "Core path",
      ko: "핵심 경로"
    }
  },
  {
    key: "optional",
    label: {
      en: "Optional guides",
      ko: "선택 문서"
    }
  },
  {
    key: "troubleshooting",
    label: {
      en: "Troubleshooting",
      ko: "문제 해결"
    },
    summary: {
      en: "Use these guides when the normal workflow stops or needs recovery.",
      ko: "기본 작업이 중단되거나 복구가 필요할 때 사용합니다."
    }
  }
];

const sectionDefinitions = [
  {
    key: "initial-setup",
    url: {
      en: "/en/initial-setup/",
      ko: "/ko/initial-setup/"
    },
    title: {
      en: "Get Started",
      ko: "시작하기"
    },
    summary: {
      en: "Prepare LaTeX and VS Code, then reach the first successful compile.",
      ko: "LaTeX와 VS Code를 준비하고 첫 compile에 성공합니다."
    },
    kicker: {
      en: "Step 1",
      ko: "1단계"
    },
    groups: classificationDefinitions
  },
  {
    key: "writing-in-vs-code",
    url: {
      en: "/en/writing-in-vs-code/",
      ko: "/ko/writing-in-vs-code/"
    },
    title: {
      en: "Write in VS Code",
      ko: "VS Code에서 작성하기"
    },
    summary: {
      en: "Edit, build, and preview a LaTeX research document in a repeatable loop.",
      ko: "LaTeX 연구 문서를 반복적으로 편집하고 build와 preview를 수행합니다."
    },
    kicker: {
      en: "Step 2",
      ko: "2단계"
    },
    groups: classificationDefinitions
  },
  {
    key: "git-github",
    url: {
      en: "/en/git-github/",
      ko: "/ko/git-github/"
    },
    title: {
      en: "Manage with GitHub",
      ko: "GitHub로 관리하기"
    },
    summary: {
      en: "Record changes with Git and keep local and GitHub history aligned.",
      ko: "Git으로 변경을 기록하고 local과 GitHub 이력을 맞춥니다."
    },
    kicker: {
      en: "Step 3",
      ko: "3단계"
    },
    groups: classificationDefinitions
  },
  {
    key: "collaboration",
    url: {
      en: "/en/collaboration/",
      ko: "/ko/collaboration/"
    },
    title: {
      en: "Collaborate",
      ko: "함께 작업하기"
    },
    summary: {
      en: "Use branches and pull requests for predictable small-team collaboration.",
      ko: "branch와 pull request로 예측 가능한 소규모 팀 협업을 수행합니다."
    },
    kicker: {
      en: "Step 4",
      ko: "4단계"
    },
    groups: classificationDefinitions
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
    url: "/en/initial-setup/",
    pageType: "category-home",
    lang: "en",
    section: "initial-setup",
    title: "Get Started",
    translationKey: "category-initial-setup",
    status: "core"
  },
  {
    url: "/ko/initial-setup/",
    pageType: "category-home",
    lang: "ko",
    section: "initial-setup",
    title: "시작하기",
    translationKey: "category-initial-setup",
    status: "core"
  },
  {
    url: "/en/initial-setup/latex-installation/",
    pageType: "document",
    lang: "en",
    section: "initial-setup",
    slug: "latex-installation",
    order: 1,
    group: "installation",
    title: "LaTeX Installation",
    description: "Install MiKTeX and verify the base LaTeX toolchain is working.",
    translationKey: "initial-setup-latex-installation",
    status: "core"
  },
  {
    url: "/ko/initial-setup/latex-installation/",
    pageType: "document",
    lang: "ko",
    section: "initial-setup",
    slug: "latex-installation",
    order: 1,
    group: "installation",
    title: "LaTeX 설치",
    description: "MiKTeX를 설치하고 기본 LaTeX 도구 체인이 준비됐는지 확인합니다.",
    translationKey: "initial-setup-latex-installation",
    status: "core"
  },
  {
    url: "/en/initial-setup/vs-code-installation/",
    pageType: "document",
    lang: "en",
    section: "initial-setup",
    slug: "vs-code-installation",
    order: 2,
    group: "installation",
    title: "VS Code Installation",
    description: "Install VS Code and LaTeX Workshop on Windows, then check that the extension is enabled.",
    translationKey: "initial-setup-vs-code-installation",
    status: "core"
  },
  {
    url: "/en/initial-setup/extension/",
    pageType: "document",
    lang: "en",
    section: "initial-setup",
    slug: "extension",
    order: 2.5,
    group: "installation",
    title: "Optional extensions",
    description: "Choose and install the extra VS Code extensions you need on Windows.",
    translationKey: "initial-setup-extension",
    status: "optional"
  },
  {
    url: "/ko/initial-setup/extension/",
    pageType: "document",
    lang: "ko",
    section: "initial-setup",
    slug: "extension",
    order: 2.5,
    group: "installation",
    title: "추가 확장",
    description: "Windows의 VS Code에서 필요한 추가 확장을 선택해 설치합니다.",
    translationKey: "initial-setup-extension",
    status: "optional"
  },
  {
    url: "/ko/initial-setup/vs-code-installation/",
    pageType: "document",
    lang: "ko",
    section: "initial-setup",
    slug: "vs-code-installation",
    order: 2,
    group: "installation",
    title: "VS Code 설치",
    description: "Windows에서 VS Code와 LaTeX Workshop을 설치하고 활성화를 확인합니다.",
    translationKey: "initial-setup-vs-code-installation",
    status: "core"
  },
  {
    url: "/en/initial-setup/project-template/",
    pageType: "document",
    lang: "en",
    section: "initial-setup",
    slug: "project-template",
    order: 3,
    group: "project-template",
    title: "Project Template",
    description: "Download seed-documents from GitHub, build check-document.tex, and preview the PDF.",
    translationKey: "initial-setup-project-template",
    status: "core"
  },
  {
    url: "/ko/initial-setup/project-template/",
    pageType: "document",
    lang: "ko",
    section: "initial-setup",
    slug: "project-template",
    order: 3,
    group: "project-template",
    title: "프로젝트 템플릿",
    description: "GitHub에서 seed-documents를 내려받아 check-document.tex을 빌드하고 PDF를 확인합니다.",
    translationKey: "initial-setup-project-template",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/",
    pageType: "category-home",
    lang: "en",
    section: "writing-in-vs-code",
    title: "Write in VS Code",
    translationKey: "category-writing-in-vs-code",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/",
    pageType: "category-home",
    lang: "ko",
    section: "writing-in-vs-code",
    title: "VS Code에서 작성하기",
    translationKey: "category-writing-in-vs-code",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/register-folder/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "register-folder",
    order: 1,
    group: "main-topics",
    title: "Open Project Folder",
    description: "Open the seed-document example folder in VS Code, then build and preview the manuscript.",
    translationKey: "writing-folder-setup",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/register-folder/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "register-folder",
    order: 1,
    group: "main-topics",
    title: "프로젝트 폴더 열기",
    description: "VS Code에서 seed-document 예제 폴더를 열고 원고 빌드와 PDF 미리 보기를 확인합니다.",
    translationKey: "writing-folder-setup",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/settings/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "settings",
    order: 3,
    group: "main-topics",
    title: "Settings",
    description: "Check LaTeX Workshop shortcuts, user settings, and auto-build options in VS Code on Windows.",
    translationKey: "writing-settings",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/settings/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "settings",
    order: 3,
    group: "main-topics",
    title: "설정",
    description: "Windows VS Code에서 LaTeX Workshop 단축키, 사용자 설정, 자동 빌드 옵션을 확인합니다.",
    translationKey: "writing-settings",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/shortcuts/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "shortcuts",
    order: 2,
    group: "main-topics",
    title: "Shortcuts",
    description: "Review the Command Palette and basic VS Code shortcuts on Windows, plus LaTeX Workshop's @ completion examples.",
    translationKey: "writing-shortcuts",
    status: "optional"
  },
  {
    url: "/ko/writing-in-vs-code/shortcuts/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "shortcuts",
    order: 2,
    group: "main-topics",
    title: "단축키",
    description: "Windows용 VS Code의 Command Palette와 기본 단축키, LaTeX Workshop의 @ 자동완성 예시를 확인합니다.",
    translationKey: "writing-shortcuts",
    status: "optional"
  },
  {
    url: "/en/writing-in-vs-code/snippets/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "snippets",
    order: 4,
    group: "snippets",
    title: "Set up LaTeX snippets",
    description: "Open the LaTeX user snippet file in VS Code on Windows, add the definitions you need, and check what they insert.",
    translationKey: "writing-snippets",
    status: "optional"
  },
  {
    url: "/en/writing-in-vs-code/syntax/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "syntax",
    order: 5,
    group: "snippets",
    title: "Syntax",
    description: "Compare common LaTeX patterns with their VS Code snippet definitions.",
    translationKey: "writing-syntax",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/bibliography-citation/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "bibliography-citation",
    order: 6,
    group: "reference",
    title: "BibTeX",
    description: "Manage references in a .bib file and cite sources from your manuscript.",
    translationKey: "writing-bibliography-citation",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/jabref/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "jabref",
    order: 7,
    group: "reference",
    title: "JabRef",
    description: "JabRef is a graphical application for managing bibliographical databases.",
    translationKey: "writing-jabref",
    status: "optional"
  },
  {
    url: "/en/writing-in-vs-code/settings-sync/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "settings-sync",
    order: 8,
    group: "optional-topics",
    title: "Sync Your VS Code Setup",
    description: "Turn on Settings Sync with GitHub and keep the same VS Code setup across multiple machines.",
    translationKey: "writing-settings-sync",
    status: "optional"
  },
  {
    url: "/en/collaboration/overleaf/",
    pageType: "document",
    lang: "en",
    section: "collaboration",
    slug: "overleaf",
    order: 2,
    group: "collaboration",
    title: "Overleaf",
    description: "If your collaborator uses Overleaf instead of VS Code, you can still work in VS Code by connecting Overleaf and GitHub.",
    translationKey: "git-overleaf",
    logo: "/assets/images/overleaf-logo.png",
    status: "optional"
  },
  {
    url: "/ko/collaboration/overleaf/",
    pageType: "document",
    lang: "ko",
    section: "collaboration",
    slug: "overleaf",
    order: 2,
    group: "collaboration",
    title: "Overleaf",
    description: "협업자가 VS Code 대신 Overleaf를 사용한다면, Overleaf와 GitHub를 연결해 VS Code에서 작업할 수 있습니다.",
    translationKey: "git-overleaf",
    logo: "/assets/images/overleaf-logo.png",
    status: "optional"
  },
  {
    url: "/en/collaboration/branch/",
    pageType: "document",
    lang: "en",
    section: "collaboration",
    slug: "branch",
    order: 3,
    group: "git-for-collaboration",
    title: "Branch",
    description: "Create, inspect, switch, and remove branches to keep work separate.",
    translationKey: "git-branch",
    status: "core"
  },
  {
    url: "/ko/collaboration/branch/",
    pageType: "document",
    lang: "ko",
    section: "collaboration",
    slug: "branch",
    order: 3,
    group: "git-for-collaboration",
    title: "브랜치",
    description: "브랜치로 작업을 분리하고 만들기, 확인, 전환, 삭제를 익힙니다.",
    translationKey: "git-branch",
    status: "core"
  },
  {
    url: "/en/collaboration/merge/",
    pageType: "document",
    lang: "en",
    section: "collaboration",
    slug: "merge",
    order: 5,
    group: "git-for-collaboration",
    title: "Merge",
    description: "Merge a reviewed pull request and update local main.",
    translationKey: "git-merge",
    status: "core"
  },
  {
    url: "/ko/collaboration/merge/",
    pageType: "document",
    lang: "ko",
    section: "collaboration",
    slug: "merge",
    order: 5,
    group: "git-for-collaboration",
    title: "병합",
    description: "검토가 끝난 Pull Request를 병합하고 로컬 main을 갱신합니다.",
    translationKey: "git-merge",
    status: "core"
  },
  {
    url: "/en/collaboration/pull-request/",
    pageType: "document",
    lang: "en",
    section: "collaboration",
    slug: "pull-request",
    order: 4,
    group: "git-for-collaboration",
    title: "Pull Request",
    description: "Open a pull request from a work branch and review its changes and feedback.",
    translationKey: "git-pull-request",
    status: "core"
  },
  {
    url: "/ko/collaboration/pull-request/",
    pageType: "document",
    lang: "ko",
    section: "collaboration",
    slug: "pull-request",
    order: 4,
    group: "git-for-collaboration",
    title: "Pull Request",
    description: "작업 브랜치로 Pull Request를 열고 변경 내용과 검토 의견을 확인합니다.",
    translationKey: "git-pull-request",
    status: "core"
  },
  {
    url: "/en/writing-in-vs-code/revision-pdf-latexdiff/",
    pageType: "document",
    lang: "en",
    section: "writing-in-vs-code",
    slug: "revision-pdf-latexdiff",
    order: 9,
    group: "optional-topics",
    title: "Generate a redlined PDF",
    description: "Compare an old TeX file with a revised TeX file and compile a redlined PDF.",
    translationKey: "writing-revision-pdf-latexdiff",
    status: "optional"
  },
  {
    url: "/ko/writing-in-vs-code/revision-pdf-latexdiff/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "revision-pdf-latexdiff",
    order: 9,
    group: "optional-topics",
    title: "수정 사항이 표시된 PDF 만들기",
    description: "이전 TeX 파일과 현재 TeX 파일을 비교해 수정 사항이 표시된 PDF를 만듭니다.",
    translationKey: "writing-revision-pdf-latexdiff",
    status: "optional"
  },
  {
    url: "/ko/writing-in-vs-code/snippets/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "snippets",
    order: 4,
    group: "snippets",
    title: "LaTeX snippets 설정",
    description: "Windows용 VS Code에서 LaTeX 사용자 snippet 파일을 열고 필요한 정의를 추가한 뒤 입력 결과를 확인합니다.",
    translationKey: "writing-snippets",
    status: "optional"
  },
  {
    url: "/ko/writing-in-vs-code/syntax/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "syntax",
    order: 5,
    group: "snippets",
    title: "문법",
    description: "자주 쓰는 LaTeX 패턴과 VS Code snippet 정의를 비교합니다.",
    translationKey: "writing-syntax",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/bibliography-citation/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "bibliography-citation",
    order: 6,
    group: "reference",
    title: "BibTeX",
    description: ".bib 파일에 참고 문헌 정보를 저장하고 LaTeX 원고에서 인용하는 방법을 안내합니다.",
    translationKey: "writing-bibliography-citation",
    status: "core"
  },
  {
    url: "/ko/writing-in-vs-code/jabref/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "jabref",
    order: 7,
    group: "reference",
    title: "JabRef",
    description: "JabRef는 BibTeX과 같은 문헌 데이터베이스를 관리하는 그래픽 어플리케이션입니다.",
    translationKey: "writing-jabref",
    status: "optional"
  },
  {
    url: "/ko/writing-in-vs-code/settings-sync/",
    pageType: "document",
    lang: "ko",
    section: "writing-in-vs-code",
    slug: "settings-sync",
    order: 8,
    group: "optional-topics",
    title: "VS Code 작업 환경 동기화",
    description: "GitHub 계정으로 Settings Sync를 켜고 여러 PC에서 같은 VS Code 환경을 유지합니다.",
    translationKey: "writing-settings-sync",
    status: "optional"
  },
  {
    url: "/en/git-github/",
    pageType: "category-home",
    lang: "en",
    section: "git-github",
    title: "Manage with GitHub",
    translationKey: "category-git-github",
    status: "core"
  },
  {
    url: "/ko/git-github/",
    pageType: "category-home",
    lang: "ko",
    section: "git-github",
    title: "GitHub로 관리하기",
    translationKey: "category-git-github",
    status: "core"
  },
  {
    url: "/en/collaboration/",
    pageType: "category-home",
    lang: "en",
    section: "collaboration",
    title: "Collaborate",
    translationKey: "category-collaboration",
    status: "core"
  },
  {
    url: "/ko/collaboration/",
    pageType: "category-home",
    lang: "ko",
    section: "collaboration",
    title: "함께 작업하기",
    translationKey: "category-collaboration",
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
    description: "Install Git for Windows and configure the name and email recorded in commits.",
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
    description: "Windows에 Git을 설치하고 커밋 작성자 이름·이메일을 설정합니다.",
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
    description: "Check or create a GitHub account, verify its email address, and review security settings.",
    translationKey: "git-github-account-setup",
    status: "optional"
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
    description: "GitHub 계정을 확인하거나 만들고 이메일 인증과 보안 설정을 점검합니다.",
    translationKey: "git-github-account-setup",
    status: "optional"
  },
  {
    url: "/en/git-github/connect-github/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "connect-github",
    order: 3,
    group: "preparation",
    title: "Connect GitHub",
    description: "Follow browser authentication when VS Code asks you to sign in to GitHub.",
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
    group: "preparation",
    title: "GitHub 연결",
    description: "VS Code가 GitHub 로그인을 요청할 때 브라우저에서 인증하는 방법을 안내합니다.",
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
    description: "Create an empty private GitHub repository before adding your project files.",
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
    description: "프로젝트 파일을 가져오기 전에 빈 비공개 GitHub 저장소를 만듭니다.",
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
    title: "Clone",
    description: "Clone an empty private GitHub repository in VS Code on Windows.",
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
    title: "클론",
    description: "빈 비공개 GitHub 저장소를 Windows의 VS Code로 클론합니다.",
    translationKey: "git-clone-first-push",
    status: "core"
  },
  {
    url: "/en/git-github/pull-push/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "pull-push",
    order: 7,
    group: "daily-workflow",
    title: "Pull & Push",
    description: "Publish the first commit to GitHub, then exchange later changes with Pull and Push.",
    translationKey: "git-pull-push",
    status: "core"
  },
  {
    url: "/ko/git-github/pull-push/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "pull-push",
    order: 7,
    group: "daily-workflow",
    title: "Pull과 Push",
    description: "첫 커밋을 GitHub에 올리고 이후 Pull과 Push로 변경을 주고받습니다.",
    translationKey: "git-pull-push",
    status: "core"
  },
  {
    url: "/en/git-github/version-control/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "version-control",
    order: 8,
    group: "daily-workflow",
    title: "Version Control",
    description: "Understand tracked, modified, staged, and committed states well enough to stay calm.",
    translationKey: "git-version-control",
    status: "optional"
  },
  {
    url: "/en/git-github/git-status/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "git-status",
    order: 6,
    group: "daily-workflow",
    title: "Git status",
    description: "Check the Git status of project files moved into the cloned repository.",
    translationKey: "git-status",
    status: "core"
  },
  {
    url: "/ko/git-github/git-status/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "git-status",
    order: 6,
    group: "daily-workflow",
    title: "Git status",
    description: "클론한 저장소에 옮긴 프로젝트 파일의 Git 상태를 확인합니다.",
    translationKey: "git-status",
    status: "core"
  },
  {
    url: "/ko/git-github/version-control/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "version-control",
    order: 8,
    group: "daily-workflow",
    title: "버전 관리",
    description: "tracked, modified, staged, committed 상태를 구분해 안정적으로 작업합니다.",
    translationKey: "git-version-control",
    status: "optional"
  },
  {
    url: "/en/collaboration/collaboration/",
    pageType: "document",
    lang: "en",
    section: "collaboration",
    slug: "collaboration",
    order: 1,
    group: "collaboration",
    title: "Start Collaborating",
    description: "Invite a collaborator to a private repository and agree on how to share changes.",
    translationKey: "git-collaboration",
    logo: "/assets/images/GitHub_Lockup_Black.png",
    status: "core"
  },
  {
    url: "/ko/collaboration/collaboration/",
    pageType: "document",
    lang: "ko",
    section: "collaboration",
    slug: "collaboration",
    order: 1,
    group: "collaboration",
    title: "협업 시작",
    description: "비공개 저장소에 공동 작업자를 초대하고 변경 공유 순서를 정합니다.",
    translationKey: "git-collaboration",
    logo: "/assets/images/GitHub_Lockup_Black.png",
    status: "core"
  },
  {
    url: "/en/git-github/conflict/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "conflict",
    order: 9,
    group: "daily-workflow",
    title: "Conflict",
    description: "Resolve same-file text conflicts without panic and return to the normal loop.",
    translationKey: "git-conflict",
    status: "troubleshooting"
  },
  {
    url: "/en/git-github/source-control/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "source-control",
    order: 10,
    group: "daily-workflow",
    title: "Source control",
    description: "Use VS Code Source Control to stash or discard local changes.",
    translationKey: "git-source-control",
    status: "optional"
  },
  {
    url: "/en/git-github/recovery/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "recovery",
    order: 11,
    group: "daily-workflow",
    title: "Recovery",
    description: "Recover committed work, undo local mistakes, and return safely to a known Git state.",
    translationKey: "git-recovery",
    status: "troubleshooting"
  },
  {
    url: "/ko/git-github/source-control/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "source-control",
    order: 10,
    group: "daily-workflow",
    title: "소스 컨트롤",
    description: "VS Code Source Control에서 변경 사항을 stash하거나 discard합니다.",
    translationKey: "git-source-control",
    status: "optional"
  },
  {
    url: "/ko/git-github/recovery/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "recovery",
    order: 11,
    group: "daily-workflow",
    title: "복구",
    description: "commit된 작업을 복구하고, 로컬 실수를 되돌리며, 안전하게 알고 있는 Git 상태로 돌아갑니다.",
    translationKey: "git-recovery",
    status: "troubleshooting"
  },
  {
    url: "/en/git-github/gitignore/",
    pageType: "document",
    lang: "en",
    section: "git-github",
    slug: "gitignore",
    order: 12,
    group: "daily-workflow",
    title: "Gitignore",
    description: "Exclude files and folders when you push to GitHub.",
    translationKey: "git-gitignore",
    status: "optional"
  },
  {
    url: "/ko/git-github/gitignore/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "gitignore",
    order: 12,
    group: "daily-workflow",
    title: "Gitignore",
    description: "특정 파일이나 폴더를 GitHub 커밋에서 제외합니다.",
    translationKey: "git-gitignore",
    status: "optional"
  },
  {
    url: "/ko/git-github/conflict/",
    pageType: "document",
    lang: "ko",
    section: "git-github",
    slug: "conflict",
    order: 9,
    group: "daily-workflow",
    title: "충돌 해결",
    description: "같은 파일 충돌을 침착하게 정리하고 다시 정상 작업 흐름으로 돌아갑니다.",
    translationKey: "git-conflict",
    status: "troubleshooting"
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
const publicDocStatuses = new Set(classificationDefinitions.map((classification) => classification.key));

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

    for (const group of classificationDefinitions) {
      groupMap[group.key] = docs.filter((doc) => doc.status === group.key);
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
      en: classificationDefinitions
        .map((group) => ({
          key: group.key,
          label: group.label.en,
          pages: groupedDocs.en[section.key][group.key]
        }))
        .filter((group) => group.pages.length),
      ko: classificationDefinitions
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

  const crumbs = [{ title: page.lang === "ko" ? "홈" : "Home", url: homes[page.lang].url }];
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
  const sequence = section.pages[page.lang].filter((item) => item.status === page.status);

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
  } else if (page.status === "core") {
    const nextSection = getNextSection(page.section);
    if (nextSection) {
      const nextSectionFirstPage = nextSection.pages[page.lang].find((item) => item.status === "core");
      if (nextSectionFirstPage) {
        nextPage = {
          title: nextSectionFirstPage.title,
          url: nextSectionFirstPage.url
        };
      } else {
        nextPage = {
          title: nextSection.title[page.lang],
          url: nextSection.url[page.lang]
        };
      }
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
  classifications: classificationDefinitions,
  pages,
  pagesByUrl,
  pageUi,
  sections,
  languages,
  homes,
  groupedDocs
};
