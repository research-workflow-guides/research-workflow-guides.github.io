---
layout: layouts/doc.njk
title: 단축키
description: 매일 반복하는 동작을 줄여주는 핵심 shortcut만 정리합니다.
lang: ko
section: writing-in-vs-code
order: 2
permalink: /ko/writing-in-vs-code/shortcuts/
translationKey: writing-shortcuts
eyebrow: 주제 2
lead: shortcut 체계를 크게 만들 필요는 없습니다. 매일 반복하는 명령만 빠르게 닿게 두면 충분합니다.
toc:
  - id: command-palette
    label: Command Palette
  - id: 기본-단축키
    label: 기본 단축키
  - id: snippets
    label: Snippets
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## Command Palette

<div class="doc-step-pair">
  <div>
    <p><strong>Command Palette</strong>는 VS Code의 모든 명령을 이름으로 실행할 수 있는 입력창입니다. 메뉴를 탐색하는 대신 원하는 명령을 바로 입력해서 실행합니다.</p>
    <p><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>)로 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/palette.png" alt="VS Code Command Palette">

  </figure>
</div>

## 기본 단축키

- <kbd>Alt</kbd>+<i class="fa-solid fa-arrow-pointer"></i> Click (macOS: <kbd>⌘</kbd>+<i class="fa-solid fa-arrow-pointer"></i> Click)

  커서를 동시에 여러 군데 클릭할 수 있습니다.

- <kbd>Ctrl</kbd>+<kbd>/</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>/</kbd>)

  커서가 있는 줄을 주석으로 처리하거나 취소합니다.

- <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>⌘</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd>)

  입력 중인 수식을 실시간으로 보여줍니다.

- <kbd>Ctrl</kbd>+<kbd>S</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>S</kbd>) or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>⌘</kbd>+<kbd>B</kbd>)

  LaTeX 코드를 컴파일합니다.

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>&#96;</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>&#96;</kbd>)

  새 terminal을 엽니다.

- <kbd>Ctrl</kbd>+<kbd>R</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>R</kbd>)

  등록된 폴더를 엽니다.

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd>)

  새 VS Code 창을 엽니다.

## Snippets

VS Code <strong>snippets</strong>를 사용하면 짧은 prefix를 입력해 긴 LaTeX 명령이나 수식을 즉시 삽입할 수 있습니다. 반복 입력 없이 복잡한 수식을 다루는 가장 효율적인 방법입니다.

- <kbd>@</kbd>+<kbd>a</kbd>

  <code>&#92;alpha</code>

- <kbd>@</kbd>+<kbd>A</kbd>

  <code>&#92;Alpha</code>

- <kbd>@</kbd>+<kbd>6</kbd>

  <code>&#92;partial</code>

- <kbd>@</kbd>+<kbd>(</kbd>

  <code>&#92;left( &#92;right)</code>

- <kbd>@</kbd>+<kbd>{</kbd>

  <code>&#92;left&#92;{ &#92;right&#92;}</code>

- <kbd>@</kbd>+<kbd>[</kbd>

  <code>&#92;left[ &#92;right]</code>


<kbd>Tab</kbd> 키를 이용하면 snippet 안의 미리 정해진 위치($1, $2 등)를 순서대로 이동할 수 있습니다. 방향키 없이 분자, 분모, 괄호 내용을 빠르게 채울 수 있습니다.

- <kbd>@</kbd>+<kbd>/</kbd> → <kbd>Tab</kbd> → 분자 입력 → <kbd>Tab</kbd> → 분모 입력

  <code>&#92;frac{$1}{$2}</code>

- <kbd>@</kbd>+<kbd>S</kbd> → <kbd>Tab</kbd> → 아래끝 입력 → <kbd>Tab</kbd> → 위끝 입력

  <code>&#92;sum_{$1}^{$2}</code>

- <kbd>@</kbd>+<kbd>I</kbd> → <kbd>Tab</kbd> → 아래끝 입력 → <kbd>Tab</kbd> → 위끝 입력

  <code>&#92;int_{$1}^{$2}</code>


직접 snippet을 만들 수도 있습니다. 자세한 내용은 [VS Code 공식 문서](https://code.visualstudio.com/docs/editing/userdefinedsnippets)를 참고하세요. custom snippet 만드는 방법은 이 가이드의 뒷부분에서 다룹니다.

## 넘어가기 전

매일 쓰는 명령이 바로 닿고, shortcut 목록이 아직 외울 수 있을 만큼 짧다면 다음으로 넘어갑니다.
