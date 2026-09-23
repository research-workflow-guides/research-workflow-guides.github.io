---
layout: layouts/doc.njk
title: 클론
description: 빈 비공개 GitHub 저장소를 Windows의 VS Code로 클론합니다.
lang: ko
section: git-github
order: 5
permalink: /ko/git-github/clone-first-push/
translationKey: git-clone-first-push
eyebrow: 주제 3
lead: 앞에서 만든 빈 비공개 저장소의 주소를 GitHub에서 복사한 뒤, VS Code에서 클론합니다. 클론이 끝나면 저장소 폴더를 열어 프로젝트 파일을 넣을 준비를 합니다.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 데스크톱 브라우저와 VS Code를 기준으로 작성했습니다.
  workflow: 빈 저장소의 HTTPS 주소 복사, VS Code 클론, 폴더 열기와 원격 주소 확인.
  lastVerified: 2026-09-23 GitHub와 VS Code 공식 문서 확인. 현재 Windows 화면 검증 대기 중.
  support: 기존 GitHub와 VS Code 이미지는 업데이트가 필요합니다. macOS와 Linux 화면은 추후 검증합니다.
  scopeNote: 현재 Windows 데스크톱 화면을 기준으로 안내합니다. macOS와 Linux 화면은 추후 검증합니다.
toc:
  - id: 빈-저장소-주소-복사
    label: 빈 저장소 주소 복사
  - id: vs-code에서-클론
    label: VS Code에서 클론
  - id: 다른-클론-방법
    label: 다른 클론 방법
  - id: 클론-확인
    label: 클론 확인
tags:
  - doc
---
## 빈 저장소 주소 복사

앞에서 만든 빈 비공개 저장소를 열고 **Quick setup**에 표시된 HTTPS 주소를 복사합니다. 기존 이미지는 파일이 들어 있는 공개 저장소의 **Code** 메뉴이므로, 주소를 복사하는 위치만 참고하세요.

<figure class="image-frame">
  <img src="/assets/images/clone-1.png" alt="예전 공개 GitHub 저장소의 Code 메뉴에서 HTTPS 주소 복사 위치가 강조된 화면">
</figure>

## VS Code에서 클론

VS Code의 **Source Control**을 엽니다.

<figure class="image-frame">
  <img src="/assets/images/clone-2.png" alt="예전 VS Code 시작 화면에서 Source Control 아이콘이 강조된 모습">
</figure>

**Clone Repository**를 선택합니다. 이 버튼이 보이지 않으면 `Ctrl+Shift+P`로 Command Palette를 열고 `Git: Clone`을 실행합니다.

<figure class="image-frame">
  <img src="/assets/images/clone-3.png" alt="예전 VS Code Source Control 화면의 Clone Repository 버튼">
</figure>

복사한 HTTPS 주소를 입력하고 **Clone from URL**을 선택합니다. 비공개 저장소 로그인 창이 열리면 브라우저에서 인증을 마친 뒤 VS Code로 돌아옵니다.

<figure class="image-frame">
  <img src="/assets/images/clone-6.png" alt="예전 VS Code 클론 입력창에 저장소 HTTPS 주소를 붙여넣은 모습">
</figure>

클론할 저장소 폴더가 들어갈 상위 폴더를 선택합니다. VS Code가 클론을 마치면 **Open**을 눌러 새 저장소 폴더를 엽니다.

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/clone-select-folder.png" alt="예전 Windows 폴더 선택 창에서 클론의 상위 폴더를 고르는 모습">
</figure>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/clone-open-repo.png" alt="예전 VS Code에서 클론한 저장소를 열지 묻는 창">
</figure>

## 다른 클론 방법

VS Code에서 **Clone from GitHub**를 선택하고 저장소 이름을 검색해 클론할 수도 있습니다. 아래 이미지는 예전 목록 화면이며, 앞에서 만든 비공개 저장소가 검색되지 않으면 HTTPS 주소를 사용하세요.

<figure class="image-frame">
  <img src="/assets/images/clone-4.png" alt="예전 VS Code 클론 입력창에서 Clone from GitHub를 선택하는 모습">
</figure>

<figure class="image-frame">
  <img src="/assets/images/clone-5.png" alt="예전 VS Code의 GitHub 저장소 검색 목록">
</figure>

터미널을 사용한다면 클론할 상위 폴더에서 다음 명령을 실행합니다. 예시 주소는 자신의 저장소 HTTPS 주소로 바꾸세요.

```powershell
git clone https://github.com/OWNER/REPOSITORY.git
cd REPOSITORY
```

## 클론 확인

클론한 폴더에서 다음 명령을 실행합니다. `git status`가 저장소 오류 없이 실행되고, `git remote -v`의 `origin`이 앞에서 복사한 주소를 가리키면 클론이 완료된 것입니다. 빈 저장소에는 아직 커밋과 프로젝트 파일이 없습니다.

```powershell
git status
git remote -v
```

3단계에서 내려받은 `seed-documents` 폴더의 **내용** 중 필요한 프로젝트 원본 파일을 클론한 저장소 폴더 안으로 옮깁니다. `seed-documents` 폴더 자체를 다시 넣으면 폴더가 한 단계 더 중첩됩니다.
