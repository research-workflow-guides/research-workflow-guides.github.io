---
layout: layouts/doc.njk
title: Shortcuts
description: 매일 반복하는 동작을 줄여주는 핵심 shortcut만 정리합니다.
lang: ko
section: writing-in-vs-code
order: 4
permalink: /ko/writing-in-vs-code/shortcuts/
translationKey: writing-shortcuts
eyebrow: Topic 4
lead: shortcut 체계를 크게 만들 필요는 없습니다. 매일 반복하는 명령만 빠르게 닿게 두면 충분합니다.
toc:
  - id: start-with-command-palette-names
    label: 명령 이름부터 익히기
  - id: promote-repeat-actions
    label: 반복 동작 shortcut 만들기
  - id: keep-the-list-small
    label: 목록을 작게 유지
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 명령 이름부터 익히기

키를 바로 묶기 전에, 실제로 자주 쓰는 명령 이름부터 익힙니다.

- LaTeX project build
- PDF 보기
- cursor 위치에서 SyncTeX
- auxiliary file 정리

어떤 명령이 shortcut 가치가 있는지는 Command Palette에서 가장 빨리 파악할 수 있습니다.

<div class="doc-step-pair">
  <div>
    <p>먼저 Keyboard Shortcuts 화면을 엽니다. 이미 있는 명령을 한 번에 보고, 무엇을 바꿀지 판단하기 가장 쉽습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/open-keyboard-shortcuts.png" alt="Preferences Open Keyboard Shortcuts가 보이는 VS Code Command Palette">
    <figcaption>custom binding을 넣기 전에 Keyboard Shortcuts 화면을 엽니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 LaTeX Workshop 명령으로 목록을 좁히면, 실제로 자주 쓰는 writing 관련 동작을 훨씬 빠르게 고를 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/latex-workshop-shortcuts-list.png" alt="LaTeX Workshop 명령으로 필터링된 VS Code Keyboard Shortcuts 화면">
    <figcaption>shortcut 목록을 LaTeX Workshop 명령으로 먼저 좁힙니다.</figcaption>
  </figure>
</div>

## 반복 동작 shortcut 만들기

일상 루프가 분명해지면 가장 자주 반복하는 동작만 shortcut으로 올립니다.

두세 개의 좋은 binding이, 기억도 안 나는 긴 개인 key map보다 훨씬 낫습니다.

<div class="doc-step-pair">
  <div>
    <p>목록이 여전히 넓다면, 원하는 명령 이름으로 더 좁혀서 정확히 한 동작만 보이게 만듭니다. 아래 이미지는 그런 검색 예시입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/filter-specific-shortcut.png" alt="하나의 LaTeX Workshop command로 더 좁혀진 VS Code Keyboard Shortcuts 화면">
    <figcaption>하나의 구체적인 명령까지 좁혀서 binding 대상을 정합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>명령을 고른 뒤에는 실제로 기억해서 쓸 수 있는 키 조합을 넣습니다. 중요한 건 “자주 쓰는 동작을 먼저 고른 뒤” 키를 넣는 순서입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/select-shortcut-command.png" alt="선택한 명령에 새 keybinding을 입력하는 VS Code Keyboard Shortcuts 화면">
    <figcaption>먼저 명령을 고른 뒤, 그 명령에 쓸 shortcut을 입력합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p><strong>SyncTeX from cursor</strong>처럼 긴 문서에서 자주 반복되는 동작은 shortcut 후보로 특히 적합합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/synctex-from-cursor-shortcut.png" alt="LaTeX Workshop SyncTeX from cursor 명령이 보이는 VS Code Keyboard Shortcuts 화면">
    <figcaption><strong>SyncTeX from cursor</strong> 같은 반복 동작부터 shortcut 후보로 잡습니다.</figcaption>
  </figure>
</div>

## 목록을 작게 유지

드물게 쓰는 명령은 그대로 Command Palette에 두고, 키보드 공간은 매 세션 시간을 절약하는 동작에만 씁니다.

## 점검

매일 쓰는 명령이 바로 닿고, shortcut 목록이 아직 외울 수 있을 만큼 짧다면 다음으로 넘어갑니다.
