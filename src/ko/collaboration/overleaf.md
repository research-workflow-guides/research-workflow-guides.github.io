---
layout: layouts/doc.njk
title: Overleaf
description: Windows의 VS Code 작업 저장소를 Overleaf에 가져오고 GitHub와 수동으로 동기화합니다.
lang: ko
section: collaboration
order: 2
permalink: /ko/collaboration/overleaf/
translationKey: git-overleaf
eyebrow: 선택
lead: Windows의 VS Code에서 사용하는 GitHub 저장소를 Overleaf에 가져와 브라우저 협업을 연결합니다. GitHub와 Overleaf 사이의 Pull과 Push는 직접 실행합니다.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code, GitHub.com 저장소, Overleaf 브라우저 화면을 기준으로 안내합니다.
  workflow: GitHub Sync 사용 가능 여부 확인, 계정 연결, 저장소 가져오기, 수동 Pull과 Push.
  lastVerified: 2026-09-24 Overleaf 공식 문서를 확인했습니다. 현재 계정과 Windows 화면 검증 대기 중.
  support: 기존 이미지는 오래된 Overleaf 계정과 프로젝트 화면이므로 업데이트가 필요합니다.
toc:
  - id: professional-subscription
    label: GitHub Sync 사용 조건
  - id: link-github
    label: GitHub 연결
  - id: import-from-github
    label: GitHub에서 가져오기
  - id: work-in-overleaf
    label: Overleaf에서 작업하기
  - id: push-changes-back-to-github
    label: GitHub와 동기화하기
tags:
  - doc
---
<h2 id="professional-subscription">GitHub Sync 사용 조건</h2>

GitHub Sync는 Overleaf의 유료 기능입니다. 개인 구독 외에 단체 구독이나 Overleaf Commons를 통해 사용할 수도 있으므로, 계정에서 기능이 제공되는지 확인합니다.

<div class="doc-step-pair">
  <div>
    <p>Overleaf <strong>Account Settings</strong>에서 <strong>GitHub Sync</strong> 항목을 확인합니다. 현재 계정에서 사용할 수 없다면 이 연동 절차는 진행할 수 없습니다. 아래 이미지는 Professional 표시가 있는 이전 계정 화면입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-1.png" alt="Professional 표시가 보이는 예전 Overleaf Account Settings 화면">

  </figure>
</div>

<h2 id="link-github">GitHub 연결</h2>

**Account Settings > Project Synchronisation**의 **GitHub Sync**에서 GitHub.com 계정을 연결하고, 사용할 저장소에 접근할 수 있는지 확인합니다. **Git integration**은 Overleaf 프로젝트를 별도 Git 원격 저장소로 사용하는 기능입니다.

<div class="doc-step-pair">
  <div>
    <p>기존 이미지는 연결이 완료되어 <strong>Unlink</strong>가 보이는 상태입니다. 새로 연결하는 계정에는 연결 동작이 표시됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-2.png" alt="GitHub Sync가 이미 연결돼 Unlink가 보이는 예전 Overleaf Project Synchronisation 화면">

  </figure>
</div>


<h2 id="import-from-github">GitHub에서 가져오기</h2>

Overleaf의 **New Project > Import from GitHub**에서 기존 GitHub 저장소를 선택해 연결된 새 Overleaf 프로젝트를 만듭니다. Overleaf 편집 이력과 GitHub 커밋 이력은 각각 기록되며, 두 서비스 사이의 변경은 수동으로 동기화합니다. 기존 Overleaf 프로젝트를 기존 GitHub 저장소에 나중에 직접 연결할 수는 없습니다.

<div class="doc-step-pair">
  <div>
    <p>아래 기존 화면에서 <strong>Import from GitHub</strong>를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-3.png" alt="New Project 메뉴의 Import from GitHub를 표시한 예전 Overleaf 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>목록에서 소유자와 저장소 이름을 확인하고 연결할 GitHub.com 저장소의 <strong>Import to Overleaf</strong>를 누릅니다. 저장소가 보이지 않으면 연결한 GitHub 계정의 접근 권한을 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-4.png" alt="저장소별 Import to Overleaf 버튼이 보이는 예전 Overleaf 저장소 선택 화면">

  </figure>
</div>

Overleaf에는 프로젝트 크기와 파일 수 제한이 있으며 Git LFS와 하위 모듈을 지원하지 않습니다. 자료가 많은 저장소라면 가져오기 전에 [Overleaf의 GitHub Sync 제한 사항](https://docs.overleaf.com/integrations-and-add-ons/git-integration-and-github-synchronization/github-synchronization)을 확인합니다.

<h2 id="work-in-overleaf">Overleaf에서 작업하기</h2>

가져온 프로젝트가 Overleaf 편집기에서 열리면 **Share**로 초대한 협업자가 브라우저에서 편집할 수 있습니다. Overleaf에서 저장한 변경은 GitHub에 자동으로 반영되지 않으므로, 작업을 마친 뒤 GitHub Sync를 실행합니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-5.png" alt="가져온 LaTeX 프로젝트와 Share 버튼이 보이는 예전 Overleaf 편집기 화면">

  </figure>
</div>

<h2 id="push-changes-back-to-github">GitHub와 동기화하기</h2>

Overleaf 프로젝트의 **Integrations > GitHub**를 열어 동기화 상태를 확인합니다. GitHub에 새 커밋이 표시되면 Pull로 가져와 내용을 살펴봅니다. Overleaf 변경을 GitHub로 보내는 Push는 별도로 실행합니다.

<div class="doc-step-pair">
  <div>
    <p>아래 기존 화면의 <strong>GitHub</strong> 항목은 동기화 창을 여는 버튼입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-6.png" alt="Integrations 메뉴의 GitHub 동기화 창 열기 항목이 보이는 예전 Overleaf 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Overleaf에서 바뀐 내용을 확인한 뒤 <strong>Push Overleaf changes to GitHub</strong>를 눌러 GitHub에 커밋을 만듭니다. 이후 로컬 VS Code에서 Pull해 그 커밋을 가져옵니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-7.png" alt="Push Overleaf changes to GitHub 버튼이 보이는 예전 GitHub Sync 창">

  </figure>
</div>

Overleaf에서 Push할 때 커밋 메시지를 입력할 수 있습니다. GitHub에는 연결된 계정이 커밋 작성자로 표시되므로, 공동 작업자의 개별 편집 이력은 Overleaf 안에서 따로 확인합니다.

양쪽에서 같은 부분을 수정해 동기화가 충돌하면 Overleaf가 별도 브랜치를 GitHub에 만들 수 있습니다. 이 경우 그 브랜치를 기본 브랜치에 병합하고 동기화 상태를 다시 확인합니다.

아래 항목이 모두 맞는지 확인하세요.

- 기존 GitHub 저장소에서 연결된 Overleaf 프로젝트를 만들었다
- Overleaf 프로젝트가 의도한 GitHub 저장소에 연결돼 있다
- Overleaf Push 후 GitHub 커밋을 확인하고 로컬 VS Code에서 Pull했다
- 충돌로 별도 브랜치가 생겼다면 기본 브랜치에 병합했다
