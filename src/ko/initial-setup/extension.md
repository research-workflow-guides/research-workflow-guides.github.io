---
layout: layouts/doc.njk
title: 추가 확장
description: Windows의 VS Code에서 필요한 추가 확장을 선택해 설치합니다.
lang: ko
section: initial-setup
order: 2.5
permalink: /ko/initial-setup/extension/
translationKey: initial-setup-extension
eyebrow: 선택
lead: 아래 확장은 LaTeX Workshop 외에 필요에 따라 설치하는 도구입니다. 영어 철자 검사, 파일 내 이동, TODO 탐색, Markdown 편집, Julia 개발에 필요한 항목만 고르세요.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code 기준으로 작성 중이며 macOS와 Linux는 추후 검증할 예정입니다.
  workflow: 필요한 확장 선택, Extensions에서 검색, Marketplace 게시자 확인 및 설치.
  lastVerified: 2026-09-23 VS Code 공식 안내와 확장 6개의 Marketplace 설명 확인. Windows 화면 재검증 대기 중.
  support: Windows 안내 검토 중. macOS와 Linux 안내는 추후 추가 예정.
toc:
  - id: code-spell-checker
    label: Code Spell Checker
  - id: bookmarks
    label: Bookmarks
  - id: todo-tree
    label: Todo Tree
  - id: code-ace-jumper
    label: Code Ace Jumper
  - id: markdown-all-in-one
    label: Markdown All in One
  - id: julia
    label: Julia
tags:
  - doc
---
Windows의 VS Code에서 `Ctrl+Shift+X`로 **Extensions**를 열고, 아래 확장 이름을 검색합니다. 게시자와 기능을 확인한 뒤 필요한 확장의 **Install**을 선택합니다.

## Code Spell Checker

LaTeX·Markdown 문서와 코드에서 영어 철자 오류 후보에 밑줄을 표시합니다. 영어 문서를 자주 쓴다면 사용하고, 전문 용어는 단어 목록에 추가할 수 있습니다.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker">Code Spell Checker 보기</a></p>

<figure class="image-frame">
  <img src="/assets/images/extension-1.png" alt="Code Spell Checker extension">
</figure>

## Bookmarks

긴 파일에서 다시 찾을 위치에 북마크를 표시할 수 있습니다. 다음·이전 북마크로 이동하거나 목록에서 원하는 위치를 선택할 수도 있습니다.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks">Bookmarks 보기</a></p>

<figure class="image-frame">
  <img src="/assets/images/extension-2.png" alt="Bookmarks extension">
</figure>

## Todo Tree

작업 폴더의 주석에서 `TODO`와 `FIXME` 같은 표시를 찾아 트리로 보여줍니다. 목록의 항목을 선택하면 해당 파일과 줄로 이동합니다.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=gruntfuggly.todo-tree">Todo Tree 보기</a></p>

<figure class="image-frame">
  <img src="/assets/images/extension-3.png" alt="Todo Tree extension">
</figure>

## Code Ace Jumper

화면에 보이는 단어나 줄에 키보드로 이동할 수 있는 표시를 띄웁니다. 자주 사용한다면 VS Code의 키보드 단축키 설정에서 실행 단축키를 지정하세요.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=lucax88x.codeacejumper">Code Ace Jumper 보기</a></p>

<figure class="image-frame">
  <img src="/assets/images/extension-4.png" alt="Code Ace Jumper extension">
</figure>

## Markdown All in One

Markdown 문서의 목차 생성·갱신, 목록 편집, 서식 단축키를 제공합니다. VS Code에는 기본 Markdown 미리보기 기능이 이미 있습니다.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one">Markdown All in One 보기</a></p>

<figure class="image-frame">
  <img src="/assets/images/extension-5.png" alt="Markdown All in One extension">
</figure>

## Julia

Julia 코드를 작성할 때 구문 강조, 자동 완성, 통합 REPL 등의 기능을 제공합니다. 코드를 실행하려면 Julia도 별도로 설치해야 합니다.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=julialang.language-julia">Julia 보기</a></p>

<figure class="image-frame">
  <img src="/assets/images/extension-7.png" alt="Julia extension">
</figure>
