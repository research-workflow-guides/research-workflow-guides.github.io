---
layout: layouts/doc.njk
title: 폴더 열기
description: 올바른 프로젝트 루트를 열고 VS Code 작업 공간 구조를 안정적으로 유지합니다.
lang: ko
section: writing-in-vs-code
order: 1
permalink: /ko/writing-in-vs-code/folder-setup/
translationKey: writing-folder-setup
eyebrow: 주제 1
lead: 파일 하나가 아니라 프로젝트 전체 폴더를 VS Code에서 엽니다. 루트 위치를 고정하고 항상 올바른 위치에서 빌드합니다.
toc:
  - id: 프로젝트-루트-열기
    label: 프로젝트 루트 열기
  - id: 폴더-구조-고정
    label: 폴더 구조 고정
  - id: 자주-생기는-실수
    label: 자주 생기는 실수
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 프로젝트 루트 열기

`.tex` 파일 하나만 여는 대신, 프로젝트 전체 폴더를 VS Code에서 엽니다.

폴더 전체를 열어야 LaTeX Workshop, 검색, 파일 참조, Source Control이 같은 작업 공간 경계를 공유합니다.

<div class="doc-step-pair">
  <div>
    <p>VS Code가 빈 창으로 시작했다면, 최근 파일 하나를 여는 대신 먼저 <strong>Open Folder</strong>로 들어갑니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-open-folder-button.png" alt="Open Folder 버튼이 보이는 빈 VS Code 창">
    <figcaption>빈 창에서 작업을 시작하지 말고 먼저 폴더를 엽니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>폴더 선택 창에서는 원고와 관련 파일이 함께 들어 있는 실제 프로젝트 루트를 고릅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-select-project-folder.png" alt="Seed document project 폴더가 선택된 Windows 폴더 선택 창">
    <figcaption>빌드 기준이 될 실제 프로젝트 루트를 선택합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>신뢰 확인 창이 나오면 본인 작업 폴더일 때만 신뢰를 허용해 작업 공간 기능을 온전히 켭니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-trust-folder.png" alt="열린 폴더를 신뢰할지 묻는 VS Code trust prompt">
    <figcaption>작업 공간 기능이 정상적으로 열리도록 프로젝트 폴더를 신뢰합니다.</figcaption>
  </figure>
</div>

## 폴더 구조 고정

프로젝트 구조는 가능한 한 비슷하게 유지합니다.

<div class="doc-step-pair">
  <div>
    <p>폴더를 연 뒤에는 Explorer에 하나의 작업 공간 트리가 보여야 합니다. 여기저기 흩어진 파일보다 이 상태가 훨씬 안정적입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-workspace-ready.png" alt="프로젝트 폴더가 열린 상태의 VS Code workspace">
    <figcaption>결과적으로 하나의 프로젝트 작업 공간 안에 원고 파일이 함께 보여야 합니다.</figcaption>
  </figure>
</div>

- 저장소 또는 논문 프로젝트 루트
- 루트 근처 또는 명확한 하위 폴더 안의 main `.tex` 파일
- figures, bibliography, supplementary 파일을 위한 고정 하위 폴더

이름은 달라도 되지만, 프로젝트를 시작할 때마다 구조를 크게 흔들지 않는 편이 좋습니다.

## 자주 생기는 실수

Downloads 폴더, ZIP 임시 미리보기, 실제 루트보다 더 안쪽 하위 폴더에서 바로 작업을 시작하지 않습니다.

LaTeX Workshop이 main file을 제대로 찾지 못한다면 확장 문제보다 "잘못 연 폴더"가 원인인 경우가 많습니다.

## 넘어가기 전

Explorer에 프로젝트 전체가 보이고, main `.tex` 파일이 그 트리 안에 있으며, 빌드가 의도한 프로젝트 루트에서 실행되면 다음 문서로 넘어갑니다.
