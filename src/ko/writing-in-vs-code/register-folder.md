---
layout: layouts/doc.njk
title: 프로젝트 폴더 열기
description: VS Code에서 seed-document 예제 폴더를 열고 원고 빌드와 PDF 미리 보기를 확인합니다.
lang: ko
section: writing-in-vs-code
order: 1
permalink: /ko/writing-in-vs-code/register-folder/
translationKey: writing-folder-setup
eyebrow: 1단계
lead: 앞 단계에서 <code>check-document.tex</code>으로 첫 빌드를 확인했습니다. 이제 예제 원고가 있는 <code>seed-document</code> 폴더를 VS Code에서 엽니다. 원고와 그림·참고문헌 파일을 이 폴더에서 함께 관리합니다.
verificationCard: false
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 화면을 기준으로 작성했으며 macOS와 Linux 화면은 추후 확인합니다.
  workflow: VS Code Open Folder, Workspace Trust, Explorer, LaTeX Workshop build.
  lastVerified: 2026-09-23 저장소와 VS Code·LaTeX Workshop 공식 문서 확인. Windows 실제 실행 검증 대기 중.
  support: Windows 화면 재검증 대기 중. macOS와 Linux 화면 안내는 추후 확인 예정.
  scopeNote: 이 페이지의 화면은 Windows 기준입니다. 기존 이미지의 현재 버전 검증이 남아 있으며 macOS와 Linux 화면 안내는 추후 확인합니다.
toc:
  - id: 폴더-열기
    label: 폴더 열기
  - id: 예제-원고-빌드
    label: 예제 원고 빌드
  - id: 다른-폴더-열기
    label: 다른 폴더 열기
tags:
  - doc
---
## 폴더 열기

<div class="doc-step-pair">
  <div>
    <p>VS Code의 <strong>File &gt; Open Folder...</strong> 메뉴를 선택합니다. 빈 창이라면 Explorer의 <strong>Open Folder</strong> 버튼을 사용해도 됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-open-folder-button.png" alt="Open Folder 버튼이 보이는 빈 VS Code 창">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>압축을 푼 <code>seed-documents</code> 안에서 <code>seed-document.tex</code>, <code>bibliography.bib</code>, <code>figure.jpg</code>가 들어 있는 <code>seed-document</code> 폴더를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-select-project-folder.png" alt="Seed document project 폴더가 선택된 Windows 폴더 선택 창">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>선택한 <code>seed-document</code> 폴더가 VS Code의 작업 공간으로 열립니다. Workspace Trust 창이 나타나면 폴더의 파일을 확인하고 신뢰할 수 있을 때만 <strong>Yes, I trust the authors</strong>를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-trust-folder.png" alt="열린 폴더를 신뢰할지 묻는 VS Code trust prompt">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Explorer 맨 위에 <code>seed-document</code> 폴더가 표시되고, 그 안에 <code>seed-document.tex</code>과 <code>bibliography.bib</code>가 보이는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-workspace-ready.png" alt="프로젝트 폴더가 열린 상태의 VS Code workspace">

  </figure>
</div>

## 예제 원고 빌드

1. Explorer에서 `seed-document.tex`을 연 뒤 `Ctrl+Shift+P`로 Command Palette를 열어 `Build LaTeX project`를 실행합니다.
2. LaTeX Workshop의 빌드 결과가 성공으로 표시되는지 확인하고, `View LaTeX PDF file` 명령으로 `seed-document.pdf`를 엽니다.

LaTeX Workshop이 주 파일을 찾지 못하면 Explorer에서 열린 폴더가 `seed-document`인지 확인하고 `seed-document.tex`을 다시 엽니다.

## 다른 폴더 열기

<div class="doc-step-pair">
  <div>
    <p>최근 열었던 폴더를 다시 열려면 <kbd>Ctrl</kbd> + <kbd>R</kbd>을 누르고 목록에서 폴더를 선택합니다. 목록에 없다면 <strong>File &gt; Open Folder...</strong> 메뉴로 폴더를 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-6.png" alt="VS Code에서 최근 연 폴더 목록이 열린 화면">

  </figure>
</div>
