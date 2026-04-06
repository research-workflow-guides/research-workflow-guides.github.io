---
layout: layouts/doc.njk
title: Overleaf
description: Overleaf Professional을 GitHub와 연결해 보조 작성 환경으로 사용하는 흐름을 정리합니다.
lang: ko
section: writing-in-vs-code
order: 6
permalink: /ko/writing-in-vs-code/overleaf/
translationKey: writing-overleaf
eyebrow: 선택
lead: 로컬 VS Code만으로 작업하지 않을 때, GitHub 저장소를 유지한 채 Overleaf Professional을 브라우저 기반 작성 bridge로 사용하는 방법을 다룹니다.
toc:
  - id: what-this-page-is-for
    label: 이 문서의 역할
  - id: professional-requirement
    label: Professional 조건
  - id: link-github-in-overleaf
    label: GitHub 연결
  - id: import-from-github
    label: GitHub에서 가져오기
  - id: work-in-overleaf
    label: Overleaf에서 작업하기
  - id: push-changes-back-to-github
    label: GitHub로 다시 보내기
  - id: before-you-move-on
    label: 확인 사항
tags:
  - doc
---
## What this page is for

이 문서는 로컬 VS Code가 전부는 아닐 때만 사용합니다. 핵심 목표는 간단합니다. GitHub를 source of truth로 유지하면서, 필요할 때만 Overleaf를 브라우저 기반 작성 bridge로 쓰는 것입니다.

즉, 이것은 일반적인 Overleaf 입문서가 아닙니다. 또한 앞에서 정리한 로컬 Git, VS Code 흐름을 대체하지도 않습니다.

## Professional requirement

이 흐름은 Overleaf Professional의 GitHub 연동 기능을 사용할 수 있다는 전제를 둡니다. 현재 요금제나 workspace에서 이 기능을 쓸 수 없다면, 여기서는 멈추고 로컬 VS Code 흐름을 유지하는 편이 낫습니다.

<div class="doc-step-pair">
  <div>
    <p>먼저 Overleaf project 메뉴와 계정 영역에서 GitHub sync 기능이 실제로 보이는지 확인하세요. 이 기능이 없으면 이후 단계가 이어지지 않습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-1.png" alt="GitHub synchronization options shown in the Overleaf project menu">
    <figcaption>먼저 Overleaf 안에서 GitHub 연동 흐름을 사용할 수 있는지 확인합니다.</figcaption>
  </figure>
</div>

## Link GitHub in Overleaf

repository를 가져오기 전에 Overleaf 안에서 GitHub 계정을 먼저 연결합니다. 이 연결을 한 번 해두면 이후 project에서도 같은 인증 흐름을 재사용하기 쉽습니다.

<div class="doc-step-pair">
  <div>
    <p>계정 수준의 연결을 먼저 마치면, project마다 인증을 다시 반복하지 않아도 됩니다. 브라우저 기반 작성 환경을 써도 repository 기준 작업 흐름을 유지하는 데 도움이 됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-2.png" alt="Overleaf account settings page for linking GitHub">
    <figcaption>repository를 import하기 전에 Overleaf 계정에서 GitHub를 먼저 연결합니다.</figcaption>
  </figure>
</div>

## Import from GitHub

ZIP 업로드 대신 GitHub import 경로를 사용하세요. 그래야 브라우저 쪽 project와 로컬 project가 서로 다른 사본으로 갈라지지 않습니다.

<div class="doc-step-pair">
  <div>
    <p>blank project나 ZIP 업로드 대신 먼저 GitHub import entry에서 시작합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-3.png" alt="Overleaf import dialog with the GitHub repository option">
    <figcaption>blank project나 ZIP 대신 GitHub import 경로에서 시작합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 이미 작업 중인 manuscript repository를 선택해 Overleaf가 로컬과 같은 project history를 가리키게 만듭니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-4.png" alt="Repository selection dialog in Overleaf after choosing GitHub import">
    <figcaption>이미 작업 중인 manuscript repository를 선택합니다.</figcaption>
  </figure>
</div>

## Work in Overleaf

import가 끝나면 Overleaf를 별도의 project 구조로 쓰지 말고, 기존 manuscript 구조를 그대로 유지한 채 브라우저 기반 작성 면으로만 사용합니다.

<div class="doc-step-pair">
  <div>
    <p>`main.tex`, 폴더 구조, manuscript 파일 이름은 로컬 project와 같게 유지하세요. 브라우저 편집이 편하더라도 파일 구조를 따로 갈라놓으면 이후 sync가 바로 복잡해집니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-5.png" alt="Imported LaTeX project opened in the Overleaf editor">
    <figcaption>import 뒤에는 기존 manuscript 구조를 그대로 유지하면서 Overleaf에서 작업합니다.</figcaption>
  </figure>
</div>

## Push changes back to GitHub

브라우저 쪽 수정이 끝나면 GitHub integration을 통해 같은 repository로 다시 반영합니다. 그 다음 라운드에서는 필요에 따라 다시 로컬 VS Code 작업 흐름으로 돌아오면 됩니다.

<div class="doc-step-pair">
  <div>
    <p>브라우저에서 한 수정을 repository로 다시 보낼 준비가 되면 먼저 GitHub sync 메뉴를 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-6.png" alt="Overleaf GitHub integration controls for synchronizing project changes">
    <figcaption>브라우저에서 한 수정을 repository로 보낼 준비가 되면 GitHub sync 메뉴를 엽니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 push-back 단계를 끝내서 repository history를 최신 상태로 유지하고, 로컬 작업과 브라우저 작업이 갈라지지 않게 합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-7.png" alt="Overleaf confirmation flow for sending project changes back to GitHub">
    <figcaption>push-back 단계를 끝내서 repository history를 최신 상태로 유지합니다.</figcaption>
  </figure>
</div>

## Before you move on

아래 항목이 모두 맞는지 확인하세요.

- repository를 GitHub에서 import했고 별도 ZIP 사본을 만들지 않았다
- Overleaf 수정 내용을 같은 repository로 다시 보낼 수 있다
- 로컬 VS Code와 브라우저 작업이 하나의 project history를 공유한다
