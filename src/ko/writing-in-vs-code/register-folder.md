---
layout: layouts/doc.njk
title: 폴더 등록
description: VS Code에서 폴더를 열어 workspace로 등록합니다.
lang: ko
section: writing-in-vs-code
order: 1
permalink: /ko/writing-in-vs-code/register-folder/
translationKey: writing-folder-setup
eyebrow: 주제 1
lead: VS Code에서는 폴더 단위로 작업을 합니다. 프로젝트는 .tex 파일 하나가 아니라, 그림·코드 등 관련 파일을 포함한 하나의 폴더입니다.
toc:
  - id: 폴더-열기
    label: 폴더 열기
  - id: 자주-생기는-실수
    label: 자주 생기는 실수
  - id: 첫-build-실행
    label: 첫 build 실행
  - id: 다른-폴더-열기
    label: 다른 폴더 열기
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 폴더 열기

<div class="doc-step-pair">
  <div>
    <p>왼쪽 사이드바에서 <strong>Open Folder</strong>를 클릭합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-open-folder-button.png" alt="Open Folder 버튼이 보이는 빈 VS Code 창">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>원고와 관련 파일이 함께 들어 있는 폴더를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-select-project-folder.png" alt="Seed document project 폴더가 선택된 Windows 폴더 선택 창">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>이렇게 연 폴더를 <strong>workspace</strong>라고 합니다. 위 그림에서는 Seed document 폴더가 workspace입니다. trust prompt가 나오면 본인 폴더일 때만 허용합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-trust-folder.png" alt="열린 폴더를 신뢰할지 묻는 VS Code trust prompt">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>폴더를 무사히 열었다면 다음과 같은 화면을 확인할 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-workspace-ready.png" alt="프로젝트 폴더가 열린 상태의 VS Code workspace">

  </figure>
</div>

## 자주 생기는 실수

Downloads 폴더, ZIP 임시 미리보기, 또는 실제 폴더보다 더 안쪽 하위 폴더에서 바로 작업을 시작하지 않습니다.

LaTeX Workshop이 main file을 찾지 못한다면, 확장 문제보다 잘못 열린 폴더가 원인인 경우가 많습니다.

## 첫 build 실행

1. 터미널 명령 대신 LaTeX Workshop으로 build를 실행합니다.
2. PDF preview를 열고 문서가 오류 없이 컴파일되는지 확인합니다.
3. template이 오류 없이 빌드되면 배포판, 에디터, 확장이 모두 함께 작동하는 것입니다.

## 다른 폴더 열기

<div class="doc-step-pair">
  <div>
    <p>다른 등록된 폴더를 열고 싶다면, <kbd>Ctrl</kbd> + <kbd>R</kbd> (macOS: <kbd>Cmd</kbd> + <kbd>R</kbd>)을 입력하여 다른 폴더를 선택하면 됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-6.png" alt="Ctrl+R로 폴더 선택 창이 열린 VS Code">

  </figure>
</div>

## 넘어가기 전

Explorer에 폴더 전체가 보이고, main  파일이 그 안에 있으며, 첫 build가 오류 없이 완료되면 다음으로 넘어갑니다.
