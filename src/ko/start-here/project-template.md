---
layout: layouts/doc.njk
title: 프로젝트 템플릿
description: starter project를 내려받아 첫 빌드를 실행하고 전체 도구 체인이 동작하는지 확인합니다.
lang: ko
section: initial-setup
order: 3
permalink: /ko/initial-setup/project-template/
translationKey: initial-setup-project-template
eyebrow: 3단계
lead: starter project를 내려받아 VS Code에서 열고, 빌드를 한 번 실행해 전체 도구 체인이 동작하는지 확인합니다.
toc:
  - id: template-받기
    label: template 받기
  - id: project-열기
    label: project 열기
  - id: 첫-build-실행
    label: 첫 build 실행
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## template 받기

project template source로 starter repository를 사용합니다.

1. starter repository에서 ZIP archive를 내려받습니다.
2. 압축을 풀고 폴더 구조를 유지합니다 — VS Code에서 폴더 전체를 열게 됩니다.

[Starter repository: research-workflow-guides/seed-documents](https://github.com/research-workflow-guides/seed-documents)

<div class="doc-step-pair">
  <div>
    <p>먼저 starter repository 페이지를 기준 화면으로 두고, 내려받을 project가 맞는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.5-1.png" alt="GitHub의 starter repository">
    <figcaption>먼저 starter repository 페이지를 엽니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 GitHub의 code 메뉴를 열고 ZIP 다운로드 경로를 선택합니다.</p>
  </div>
  <!-- TODO: This asset currently shows only the Code button. Either soften the copy/caption to "open the Code menu" or replace it with a screenshot that shows the expanded Download ZIP option. -->
  <figure class="image-frame">
    <img src="/assets/images/github-code-btn.svg" alt="GitHub Code 버튼">
    <figcaption>GitHub code 메뉴에서 ZIP 다운로드 경로를 선택합니다.</figcaption>
  </figure>
</div>

## project 열기

<!-- TODO: Align this section with the planning spec. Do not explain Check document and Seed document as separate roles. Rewrite this around one compile-ready template, open `main.tex`, and use that same file for the first compile check. -->
1. VS Code에서 압축을 푼 폴더 전체를 project로 엽니다.
2. `seed-document/seed-document.tex`를 시작점으로 사용합니다.

## 첫 build 실행

1. 가능한 한 직접 터미널 명령보다 LaTeX Workshop build를 사용합니다.
2. PDF preview를 열고 문서가 오류 없이 컴파일되는지 확인합니다.
3. 이 단계가 마지막 설치 점검입니다. template이 오류 없이 빌드되면 배포판, 에디터, 확장이 모두 함께 작동하는 것입니다.

## 넘어가기 전

starter 문서가 VS Code에서 열리고, 오류 없이 build가 완료되며, PDF preview가 나타나면 다음으로 넘어갑니다.
