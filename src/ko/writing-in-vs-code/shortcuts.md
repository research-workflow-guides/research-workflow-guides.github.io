---
layout: layouts/doc.njk
title: 단축키
description: Windows용 VS Code의 Command Palette와 기본 단축키, LaTeX Workshop의 @ 자동완성 예시를 확인합니다.
lang: ko
section: writing-in-vs-code
order: 2
permalink: /ko/writing-in-vs-code/shortcuts/
translationKey: writing-shortcuts
eyebrow: 2단계 (선택)
lead: Windows용 VS Code에서 문서 작성 중 자주 쓰는 명령의 단축키를 확인합니다. 단축키가 다르게 동작하면 Keyboard Shortcuts에서 현재 할당을 확인하세요.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows용 VS Code를 기준으로 설명하며 macOS와 Linux 단축키는 추후 검증합니다.
  workflow: Command Palette, 기본 단축키, LaTeX Workshop의 @ 자동완성과 snippet 입력 위치.
  lastVerified: 2026-09-23 VS Code와 LaTeX Workshop 공식 문서 및 기존 이미지 확인. Windows 실제 화면 재검증 대기 중.
  support: 기존 Command Palette 이미지는 현재 Windows 화면과 대조해 업데이트할 필요가 있습니다.
toc:
  - id: command-palette
    label: Command Palette
  - id: 기본-단축키
    label: 기본 단축키
  - id: snippets
    label: Snippets
tags:
  - doc
---
## Command Palette

<div class="doc-step-pair">
  <div>
    <p><strong>Command Palette</strong>에서 VS Code 명령을 이름으로 검색해 실행할 수 있습니다. 명령 이름의 일부를 입력하면 목록이 좁혀져 원하는 명령을 찾기 쉽습니다.</p>
    <p>Windows에서는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>를 눌러 Command Palette를 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/palette.png" alt="VS Code Command Palette">

  </figure>
</div>

## 기본 단축키

- <kbd>Alt</kbd>+Click

  Windows에서 <kbd>Alt</kbd>를 누른 채 편집기의 원하는 위치를 클릭하면 그 위치에 커서를 추가합니다. 여러 위치를 동시에 편집할 때 사용합니다.

- <kbd>Ctrl</kbd>+<kbd>/</kbd>

  현재 줄이나 선택한 줄의 줄 주석을 켜거나 끕니다.

- <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>M</kbd>

  기본 키맵에서 LaTeX Workshop의 Math Preview Panel을 열거나 닫습니다. 지원되는 수식을 별도 패널에서 실시간으로 미리 볼 수 있습니다.

- <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd>

  기본 키맵에서 LaTeX Workshop의 Build LaTeX project 명령을 실행합니다. <kbd>Ctrl</kbd>+<kbd>S</kbd>는 파일을 저장하며, 저장 후 자동 빌드 여부는 <code>latex-workshop.latex.autoBuild.run</code> 설정에 따라 달라집니다.

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>&#96;</kbd>

  Windows에서 VS Code의 새 통합 터미널을 엽니다.

- <kbd>Ctrl</kbd>+<kbd>R</kbd>

  최근에 연 폴더·작업 영역·파일 목록을 표시합니다. 항목을 선택하면 다시 열 수 있습니다.

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd>

  Windows에서 새 VS Code 창을 엽니다.

## Snippets

LaTeX Workshop의 기본 설정에서 `@` 접두어를 입력하면 관련 snippets가 자동완성 목록에 표시됩니다. 제안을 선택해 LaTeX 명령이나 수식 구조를 삽입할 수 있습니다.

- `@a`

  <code>&#92;alpha</code>

- `@D`

  <code>&#92;Delta</code>

- `@S`

  <code>&#92;Sigma</code>

- `@6`

  <code>&#92;partial</code>

- `@(`

  <code>&#92;left( $1 &#92;right)</code>

- `@{`

  <code>&#92;left&#92;{ $1 &#92;right&#92;}</code>

- `@[`

  <code>&#92;left[ $1 &#92;right]</code>


자동완성 제안을 선택해 snippet을 삽입하면 커서가 `$1` 위치에 놓입니다. 내용을 입력한 뒤 <kbd>Tab</kbd>을 누르면 `$2` 등 다음 입력 위치로 이동합니다.

- `@/` → 제안 선택 → 분자 입력 → <kbd>Tab</kbd> → 분모 입력

  <code>&#92;frac{$1}{$2}</code>

- `@I` → 제안 선택 → 아래끝 입력 → <kbd>Tab</kbd> → 위끝 입력

  <code>&#92;int_{$1}^{$2}</code>


<div class="doc-action-row">
  <p>직접 snippet을 만들려면 LaTeX용 사용자 snippet 파일을 여세요. <a href="/ko/writing-in-vs-code/snippets/">LaTeX snippet 설정</a> 안내에서 파일을 여는 과정과 예시를 확인할 수 있습니다.</p>
  <a class="doc-action-link" href="https://code.visualstudio.com/docs/editing/userdefinedsnippets">VS Code snippet 문서</a>
</div>
