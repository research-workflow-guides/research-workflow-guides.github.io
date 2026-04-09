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
lead: 로컬 VS Code만으로 작업하지 않을 때, GitHub 저장소를 유지한 채 Overleaf Professional을 브라우저 기반 보조 작성 환경으로 사용하는 방법을 다룹니다.
toc:
  - id: 이-문서의-역할
    label: 이 문서의 역할
  - id: professional-요건
    label: Professional 요건
  - id: overleaf에서-github-연결
    label: Overleaf에서 GitHub 연결
  - id: github에서-가져오기
    label: GitHub에서 가져오기
  - id: overleaf에서-작업하기
    label: Overleaf에서 작업하기
  - id: github로-다시-보내기
    label: GitHub로 다시 보내기
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 이 문서의 역할

이 문서는 로컬 VS Code가 전부는 아닐 때만 사용합니다. GitHub를 기준 저장소로 유지하고, 협업이나 원격 편집이 필요할 때만 Overleaf를 보조 작성 환경으로 씁니다.

이것은 일반적인 Overleaf 입문서가 아니며, 앞에서 정리한 로컬 Git, VS Code 흐름을 대체하지도 않습니다.

## Professional 요건

<!-- TODO: Restructure this page around the current Overleaf flow: Premium availability, Link GitHub in Account Settings, Import from GitHub, and Use Integrations to sync. Update the surrounding screenshots/captions to match that structure. -->
이 흐름은 Overleaf Professional의 GitHub 연동 기능을 필요로 합니다. 해당 기능을 사용할 수 없다면 로컬 VS Code 흐름을 유지합니다.

<div class="doc-step-pair">
  <div>
    <p>진행하기 전에 계정과 작업 공간에서 GitHub Sync를 사용할 수 있는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-1.png" alt="professional 상태가 보이는 Overleaf account settings 화면">
    <figcaption>이 작업 흐름에 필요한 Professional 권한이 계정 영역에 잡혀 있는지 확인합니다.</figcaption>
  </figure>
</div>

## Overleaf에서 GitHub 연결

저장소를 가져오기 전에 Overleaf의 동기화 설정을 열고, 현재 프로젝트에서 GitHub Sync를 사용할 수 있는지 확인합니다. 아직 연결되지 않았다면 이 화면에서 그 상태를 관리합니다.

<div class="doc-step-pair">
  <div>
    <p>이 화면은 새 연결 마법사라기보다 상태 확인과 관리 지점에 가깝습니다. 현재 계정이나 프로젝트에서 GitHub Sync가 실제로 가능한지가 핵심입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-2.png" alt="GitHub Sync 사용 가능 여부가 보이는 Overleaf synchronization 화면">
    <figcaption>이 동기화 화면에서 GitHub Sync를 사용할 수 있는지 확인합니다.</figcaption>
  </figure>
</div>

계정 단위로 한 번 연결하면 이후 프로젝트에서도 재사용할 수 있습니다. 새 논문마다 다시 인증할 필요가 없습니다.

## GitHub에서 가져오기

ZIP 업로드 대신 GitHub 가져오기 경로를 사용합니다. 이렇게 하면 하나의 저장소 이력이 유지되고 브라우저 전용 프로젝트가 따로 생기지 않습니다.

<div class="doc-step-pair">
  <div>
    <p>blank project나 ZIP 업로드가 아니라 GitHub 가져오기 경로에서 시작합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-3.png" alt="Overleaf import dialog with the GitHub repository option">
    <figcaption>blank project나 ZIP 대신 GitHub 가져오기 경로에서 시작합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>이미 작업 중인 원고 저장소를 선택합니다. 이렇게 하면 Overleaf와 로컬 VS Code가 같은 이력을 가리킵니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-4.png" alt="Repository selection dialog in Overleaf after choosing GitHub import">
    <figcaption>이미 작업 중인 원고 저장소를 선택합니다.</figcaption>
  </figure>
</div>

## Overleaf에서 작업하기

가져오기가 끝나면 Overleaf를 집중 작성 면으로 사용합니다. 별도의 프로젝트 구조로 만들지 않고 로컬에서 쓰는 main.tex, 폴더 구조, 원고 파일을 그대로 유지합니다.

<div class="doc-step-pair">
  <div>
    <p>브라우저 작업이 실제로 편할 때만 Overleaf에서 편집하고 검토합니다. 팀 전체가 동의하지 않는 한 로컬과 다르게 파일 구조를 바꾸지 않습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-5.png" alt="Imported LaTeX project opened in the Overleaf editor">
    <figcaption>가져오기 뒤에는 기존 원고 구조를 그대로 유지하면서 Overleaf에서 작업합니다.</figcaption>
  </figure>
</div>

## GitHub로 다시 보내기

브라우저 쪽 수정이 끝나면 GitHub 연동으로 같은 저장소에 반영합니다. 다음 라운드에서는 다시 로컬 VS Code 흐름으로 돌아옵니다.

<div class="doc-step-pair">
  <div>
    <p>브라우저 수정을 저장소로 보낼 준비가 되면 GitHub Sync 메뉴를 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-6.png" alt="Overleaf GitHub integration controls for synchronizing project changes">
    <figcaption>브라우저에서 한 수정을 저장소로 보낼 준비가 되면 GitHub Sync 메뉴를 엽니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>다시 보내기 단계를 끝내서 저장소 이력을 최신 상태로 유지하고 로컬과 브라우저 작업이 어긋나지 않게 합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-7.png" alt="Overleaf confirmation flow for sending project changes back to GitHub">
    <figcaption>다시 보내기 단계를 끝내서 저장소 이력을 최신 상태로 유지합니다.</figcaption>
  </figure>
</div>

## 넘어가기 전

아래 항목이 모두 맞는지 확인하세요.

- 저장소를 GitHub에서 가져왔고 별도 ZIP 사본을 만들지 않았다
- Overleaf 수정 내용을 같은 저장소로 다시 보낼 수 있다
- 로컬 VS Code와 브라우저 작업이 하나의 프로젝트 이력을 공유한다
