---
layout: layouts/doc.njk
title: 클론
description: clone 방법을 고르고 복사한 repository를 VS Code에서 엽니다.
lang: ko
section: git-github
order: 5
permalink: /ko/git-github/clone-first-push/
translationKey: git-clone-first-push
eyebrow: 주제 3
lead: 지금 시작하는 위치에 맞는 clone 방법을 고르세요. GitHub repository를 clone하는 방법은 세 가지가 있습니다.
outcome: GitHub repository가 local project folder에 clone되어 VS Code에 열립니다.
prerequisites:
  - Git과 GitHub 인증이 정상적으로 동작합니다.
  - Clone할 상위 folder의 위치와 쓰기 권한을 확인했습니다.
completion: "Clone한 folder 안에서 `git status`가 repository 오류 없이 예상한 branch를 표시합니다."
commonProblems:
  - 잘못된 상위 folder에서 clone하면 예상하지 않은 중첩 project 경로가 생깁니다.
  - Private repository를 clone하려면 browser 또는 VS Code 인증을 먼저 완료해야 합니다.
verification:
  status: needs-review
  environment: Windows는 VS Code와 GitHub Desktop 상세 경로이며 command-line clone은 macOS와 Linux에도 적용됩니다.
  workflow: VS Code, GitHub Desktop, command-line clone 시작 경로.
  lastVerified: 현재 제품 기준 walkthrough 대기 중.
  support: Windows 상세 지원, macOS는 대응 앱, Linux는 Git과 VS Code 명령으로 지원.
toc:
  - id: 첫-번째-방법
    label: 첫 번째 방법
  - id: 두-번째-방법
    label: 두 번째 방법
  - id: 세-번째-방법
    label: 세 번째 방법
  - id: fork
    label: Fork
tags:
  - doc
---
## 첫 번째 방법

<div class="doc-step-pair">
  <div>
    <p>Source Control 화면을 열고 <strong>Clone Repository</strong>를 선택한 뒤 <strong>Clone from GitHub</strong>를 고릅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-2.png" alt="clone 흐름을 시작하는 VS Code Welcome 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>clone하려는 repository를 검색합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-3.png" alt="GitHub repository 목록이 보이는 VS Code repository 선택 창">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>VS Code가 repository source를 물어보면 <strong>Clone from GitHub</strong>를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-4.png" alt="Clone from GitHub가 선택된 VS Code clone source 선택 창">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>GitHub 검색 결과에서 repository를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-5.png" alt="GitHub repository가 선택된 VS Code repository 선택 창">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>프로젝트 파일을 옮기기 전에 clone을 둘 위치를 먼저 고릅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-select-folder.png" alt="clone 위치를 고르는 폴더 선택 창">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>clone이 끝나면 그 cloned repository를 작업 폴더로 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-open-repo.png" alt="clone된 저장소가 열린 VS Code 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>폴더 복제가 무사히 끝나면 다음과 같은 화면을 확인할 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-7.png" alt="clone된 repository가 Explorer에 열린 VS Code 화면">
  </figure>
</div>

## 두 번째 방법

<div class="doc-step-pair">
  <div>
    <p>GitHub에서 repository URL을 복사합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-1.png" alt="repository URL 복사 버튼이 강조된 GitHub repository 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>GitHub에서 복사한 repository URL을 VS Code에 직접 붙여넣는 방법도 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-6.png" alt="GitHub repository URL을 붙여넣는 VS Code clone 입력창">

  </figure>
</div>

## 세 번째 방법

터미널에 다음 명령을 입력하세요.

```shell
git clone <repository-url>
cd <repository-folder>
```

## Fork

다른 사람의 public repository를 복사하고 싶다면, <strong>Fork</strong>를 이용하세요.

<figure class="image-frame">
  <img src="/assets/images/Fork.png" alt="Fork 버튼이 강조된 GitHub repository 화면">
</figure>

clone된 repository가 VS Code에 열려 있고 프로젝트 파일이 그 안에 들어갔다면 첫 commit과 push 흐름으로 넘어갑니다.
