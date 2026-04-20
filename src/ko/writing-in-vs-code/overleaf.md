---
layout: layouts/doc.njk
title: Overleaf
description: 협업자가 VS Code 대신 Overleaf를 사용한다면, Overleaf와 GitHub를 연결해 VS Code에서 작업할 수 있습니다.
lang: ko
section: writing-in-vs-code
order: 6
permalink: /ko/writing-in-vs-code/overleaf/
translationKey: writing-overleaf
eyebrow: 선택
lead: 작업 공간을 GitHub 저장소로 유지하고 Overleaf에 연결합니다. 협업자가 GitHub를 직접 사용할 필요는 없습니다. 단, pull과 push를 포함한 동기화 작업은 본인 또는 협업자가 Overleaf에서 직접 수동으로 처리해야 합니다.
toc:
  - id: professional-subscription
    label: Professional 구독
  - id: link-github
    label: GitHub 연결
  - id: import-from-github
    label: GitHub에서 가져오기
  - id: work-in-overleaf
    label: Overleaf에서 작업하기
  - id: push-changes-back-to-github
    label: GitHub과 동기화하기
  - id: before-you-move-on
    label: 넘어가기 전
tags:
  - doc
---
<h2 id="professional-subscription">Professional 구독</h2>

<!-- TODO: Restructure this page around the current Overleaf flow: Premium availability, Link GitHub in Account Settings, Import from GitHub, and Use Integrations to sync. Update the surrounding screenshots/captions to match that structure. -->
이 흐름은 Overleaf Professional의 GitHub 연동 기능을 필요로 합니다. 해당 기능을 사용할 수 없다면 로컬 VS Code 흐름을 유지합니다.

<div class="doc-step-pair">
  <div>
    <p>진행하기 전에 account와 workspace에서 GitHub sync를 사용할 수 있는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-1.png" alt="professional 상태가 보이는 Overleaf account settings 화면">

  </figure>
</div>

<h2 id="link-github">GitHub 연결</h2>

Account Settings에 들어가서, Project Synchronisation에 있는 GitHub Sync를 진행합니다. Git integration은 무시하셔도 됩니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-2.png" alt="GitHub Sync 사용 가능 여부가 보이는 Overleaf synchronization 화면">

  </figure>
</div>


<h2 id="import-from-github">GitHub에서 가져오기</h2>

GitHub에서 import하면 repository history를 하나로 유지할 수 있고, 브라우저 전용 project가 따로 생기는 것을 방지합니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-3.png" alt="Overleaf import dialog with the GitHub repository option">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>원하시는 repository를 고르고, "Import to Overleaf" 버튼을 눌러 주세요.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-4.png" alt="Repository selection dialog in Overleaf after choosing GitHub import">

  </figure>
</div>

<h2 id="work-in-overleaf">Overleaf에서 작업하기</h2>

import가 무사히 이루어지면 다음과 같은 화면을 확인할 수 있고, 이제 Overleaf에서 연결된 계정의 사람들은 작업할 수 있습니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-5.png" alt="Imported LaTeX project opened in the Overleaf editor">

  </figure>
</div>

<h2 id="push-changes-back-to-github">GitHub과 동기화하기</h2>

Overleaf이나 Git에서 변경사항이 생겼으면 아래의 Integrations 안에 있는 GitHub 버튼을 누르시면 동기화가 진행됩니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-6.png" alt="Overleaf GitHub integration controls for synchronizing project changes">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>예를 들어, Overleaf에서 수정된 사항이 있으면 "Push Overleaf changes to GitHub" 버튼을 눌러야 GitHub으로 push됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-7.png" alt="Overleaf confirmation flow for sending project changes back to GitHub">

  </figure>
</div>

<h2 id="before-you-move-on">넘어가기 전</h2>

아래 항목이 모두 맞는지 확인하세요.

- repository를 GitHub에서 import했고 별도 ZIP 사본을 만들지 않았다
- Overleaf 수정 내용을 같은 repository로 다시 보낼 수 있다
- 로컬 VS Code와 브라우저 작업이 하나의 project history를 공유한다
