---
layout: layouts/doc.njk
title: GitHub 연결
description: 첫 저장소를 만들기 전에 VS Code 안에서 GitHub 계정을 연결합니다.
lang: ko
section: git-github
order: 3
permalink: /ko/git-github/connect-github/
translationKey: git-connect-github
eyebrow: Step 3
lead: VS Code 안에서 GitHub에 로그인해 repository 작업이 같은 작업 환경 안에서 이어지게 만듭니다.
toc:
  - id: sign-in-from-vs-code
    label: VS Code에서 로그인
  - id: complete-the-browser-flow
    label: 브라우저 인증 완료
  - id: confirm-the-connection
    label: 연결 확인
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## VS Code에서 로그인

GitHub 인증 전에 VS Code에서 project 폴더를 먼저 엽니다. workspace가 열린 상태에서 로그인하면 이후 작업을 이어가기 쉽습니다.

<div class="doc-step-pair">
  <div>
    <p>VS Code가 빈 창이라면 GitHub 로그인보다 먼저 <strong>Open Folder</strong>로 작업 폴더를 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-open-folder-button.png" alt="Open Folder 버튼이 보이는 빈 VS Code 창">
    <figcaption>GitHub 로그인 전에 먼저 작업 폴더를 엽니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>폴더 선택 창에서 version control로 관리할 manuscript 또는 project 폴더를 고릅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-select-project-folder.png" alt="Seed document project 폴더가 선택된 Windows 폴더 선택 창">
    <figcaption>Git과 GitHub에 연결할 project 폴더를 선택합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>VS Code가 폴더를 신뢰할지 묻는다면, 본인 작업 폴더가 맞을 때만 신뢰를 허용해 Git과 확장 기능이 정상적으로 동작하게 합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-trust-folder.png" alt="열린 폴더를 신뢰할지 묻는 VS Code trust prompt">
    <figcaption>workspace 기능이 정상적으로 열리도록 폴더를 신뢰합니다.</figcaption>
  </figure>
</div>

폴더가 열린 뒤에는 VS Code의 Accounts 메뉴나 Source Control 관련 안내에서 GitHub 로그인 흐름을 시작합니다.

## 브라우저 인증 완료

VS Code가 브라우저 인증 페이지를 엽니다. 이전 단계에서 준비한 GitHub 계정으로 인증을 마칩니다.

<div class="doc-step-pair">
  <div>
    <p>GitHub는 VS Code 접근을 허용하기 전에 이런 확인 화면을 보여줄 수 있습니다. 평소 쓰는 GitHub 인증 방식으로 이 단계를 마칩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-confirm-access.png" alt="VS Code 인증 과정에서 표시되는 GitHub 브라우저 확인 화면">
    <figcaption>브라우저에서 GitHub 확인 단계를 마칩니다.</figcaption>
  </figure>
</div>

## 연결 확인

VS Code로 돌아와 project workspace가 열려 있는지 확인합니다. Accounts 메뉴나 Git 관련 안내에서 올바른 GitHub 계정이 인식되는지 확인합니다.

<div class="doc-step-pair">
  <div>
    <p>workspace가 열려 있고 작업을 이어갈 수 있는 상태여야 합니다. 빈 시작 화면으로 돌아왔다면 연결이 아직 끝나지 않은 것입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-workspace-ready.png" alt="프로젝트 폴더가 열린 상태의 VS Code workspace">
    <figcaption>브라우저 인증 뒤에는 다시 열린 project workspace로 돌아옵니다.</figcaption>
  </figure>
</div>

## 점검

project 폴더가 VS Code에 열린 상태로 유지되고 GitHub 관련 안내가 처음부터 반복되지 않으면 저장소 생성 단계로 넘어갑니다.
