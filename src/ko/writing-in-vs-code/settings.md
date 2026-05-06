---
layout: layouts/doc.njk
title: 설정
description: VS Code와 LaTeX Workshop의 기본 설정을 정리해 반복 작업을 안정화합니다.
lang: ko
section: writing-in-vs-code
order: 3
permalink: /ko/writing-in-vs-code/settings/
translationKey: writing-settings
eyebrow: 3단계
lead: 설정은 작고 오래 버티는 것부터 시작합니다. 빌드, 미리보기, 자동 정리가 예측 가능하게 돌아가면 충분합니다.
toc:
  - id: 명령-이름부터-익히기
    label: 명령 이름부터 익히기
  - id: 반복-동작-단축키-만들기
    label: 반복 동작 단축키 만들기
  - id: 설정-파일-찾기
    label: 설정 파일 찾기
  - id: 유용한-기본-설정
    label: 유용한 기본 설정
  - id: 예시-settings
    label: 예시 settings
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 명령 이름부터 익히기

키를 바로 묶기 전에, 실제로 자주 쓰는 명령 이름부터 익힙니다.

- LaTeX 프로젝트 빌드
- PDF 보기
- cursor 위치에서 SyncTeX
- auxiliary file 정리

어떤 명령이 단축키로 둘 가치가 있는지는 Command Palette에서 가장 빨리 파악할 수 있습니다.

<div class="doc-step-pair">
  <div>
    <p>먼저 Keyboard Shortcuts 화면을 엽니다. 이미 있는 명령을 한 번에 보고, 무엇을 바꿀지 판단하기 가장 쉽습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/open-keyboard-shortcuts.png" alt="Preferences Open Keyboard Shortcuts가 보이는 VS Code Command Palette">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 LaTeX Workshop 명령으로 목록을 좁히면, 실제로 자주 쓰는 writing 관련 동작을 훨씬 빠르게 고를 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/latex-workshop-shortcuts-list.png" alt="LaTeX Workshop 명령으로 필터링된 VS Code Keyboard Shortcuts 화면">

  </figure>
</div>

## 반복 동작 단축키 만들기

일상 루프가 분명해지면 가장 자주 반복하는 동작만 단축키로 올립니다.

두세 개의 좋은 binding이, 기억도 안 나는 긴 개인 key map보다 훨씬 낫습니다.

<div class="doc-step-pair">
  <div>
    <p>목록이 여전히 넓다면, 원하는 명령 이름으로 더 좁혀서 정확히 한 동작만 보이게 만듭니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/filter-specific-shortcut.png" alt="하나의 LaTeX Workshop command로 더 좁혀진 VS Code Keyboard Shortcuts 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>명령을 고른 뒤에는 실제로 기억해서 쓸 수 있는 키 조합을 넣습니다. 중요한 건 "자주 쓰는 동작을 먼저 고른 뒤" 키를 넣는 순서입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/select-shortcut-command.png" alt="선택한 명령에 새 keybinding을 입력하는 VS Code Keyboard Shortcuts 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p><strong>SyncTeX from cursor</strong>처럼 긴 문서에서 자주 반복되는 동작은 단축키 후보로 특히 적합합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/synctex-from-cursor-shortcut.png" alt="LaTeX Workshop SyncTeX from cursor 명령이 보이는 VS Code Keyboard Shortcuts 화면">

  </figure>
</div>

## 설정 파일 찾기

<div class="doc-step-pair">
  <div>
    <p>먼저 Command Palette에서 user settings를 엽니다. 이렇게 시작하면 처음 바꾸는 값들을 더 분명하게 확인할 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/open-user-settings.png" alt="Preferences Open User Settings가 보이는 VS Code Command Palette">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>설정 파일을 직접 보고 싶다면 먼저 VS Code의 <code>Code/User</code> 폴더 위치를 확인합니다. 아래 이미지는 Windows 기준 예시입니다. 운영체제별 위치는 다음과 같습니다.</p>

    <ul>
      <li>Windows: <code>%APPDATA%\Code\User</code></li>
      <li>macOS: <code>$HOME/Library/Application Support/Code/User</code></li>
      <li>Linux: <code>$HOME/.config/Code/User</code></li>
    </ul>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/code-user-folder.png" alt="VS Code Code User 폴더가 열린 Windows 파일 탐색기">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그 안에서 <code>settings.json</code>과 <code>keybindings.json</code> 위치를 같이 확인해두면, 나중에 어떤 파일을 편집하는지 헷갈리지 않습니다. 기본 document pack에서 제공하는 <code>settings.json</code>과 <code>keybindings.json</code> 파일은 <a href="https://github.com/research-workflow-guides/setting">여기</a>에서 다운받을 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/settings-keybindings-files.png" alt="VS Code user 폴더 안의 settings와 keybindings 파일">

  </figure>
</div>

## 유용한 기본 설정

초반에 체감이 큰 설정은 다음과 같습니다.

<div class="doc-step-pair">
  <div>
    <p>Settings 화면에서는 먼저 LaTeX Workshop으로 범위를 좁혀서, 작성 루프에 실제로 영향을 주는 항목만 봅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/search-latex-workshop-settings.png" alt="LaTeX Workshop 설정으로 필터링된 VS Code Settings 화면">

  </figure>
</div>

- 저장 후 빌드 동작 방식
- PDF 미리보기 표시 방식
- 자동 정리 정책
- 기본 recipe 선택

## 예시 settings

아래 항목을 `settings.json` 파일에 추가하거나, 이미 설정이 있다면 기존 object 안에 합쳐 넣습니다.

```json
{
  "latex-workshop.latex.autoBuild.run": "onSave",
  "latex-workshop.view.pdf.viewer": "tab",
  "latex-workshop.latex.clean.enabled": true,
  "latex-workshop.latex.recipe.default": "lastUsed"
}
```

## 넘어가기 전

저장 후 동작이 의도와 맞고, PDF 미리보기가 원하는 위치에서 열리며, 자동 정리가 필요한 파일을 지우지 않는다면 다음 문서로 넘어갑니다.
