---
layout: layouts/doc.njk
title: 설정
description: Windows VS Code에서 LaTeX Workshop 단축키, 사용자 설정, 자동 빌드 옵션을 확인합니다.
lang: ko
section: writing-in-vs-code
order: 3
permalink: /ko/writing-in-vs-code/settings/
translationKey: writing-settings
eyebrow: 3단계
lead: 앞 단계에서 <code>seed-document.tex</code>의 빌드와 PDF 미리보기를 확인했다면, Windows의 VS Code에서 LaTeX Workshop 설정을 살펴봅니다. 필요한 항목만 변경하고 빌드와 미리보기를 다시 확인합니다.
verificationCard: false
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 화면을 기준으로 작성했으며 macOS와 Linux 화면 안내는 추후 확인합니다.
  workflow: Command Palette, Keyboard Shortcuts, 사용자와 Workspace 설정, 저장 시 자동 빌드.
  lastVerified: 2026-09-23 VS Code와 LaTeX Workshop 공식 문서 및 설정 예제 저장소 확인. Windows 실제 실행 검증 대기 중.
  support: 기존 Windows 이미지의 현재 버전 검증 대기 중. macOS와 Linux 절차는 추후 작성·확인 예정.
  scopeNote: 이 페이지는 Windows 화면을 기준으로 설명합니다. 기존 이미지는 업데이트가 필요하며 macOS와 Linux 절차는 추후 작성·확인할 예정입니다.
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
tags:
  - doc
---
## 명령 이름부터 익히기

설정을 바꾸기 전에 Command Palette(`Ctrl+Shift+P`)에서 `Build LaTeX project`와 `View LaTeX PDF file`을 실행해 현재 빌드와 미리보기 동작을 확인합니다.

- `Build LaTeX project`: 원고 빌드
- `View LaTeX PDF file`: PDF 미리보기
- `SyncTeX from cursor`: 커서 위치를 PDF에서 찾기
- `Clean up auxiliary files`: 빌드 보조 파일 정리

자주 반복하는 명령이 있다면 Keyboard Shortcuts 화면에서 현재 키 조합을 확인하고, 필요한 명령에만 새 조합을 지정합니다.

<div class="doc-step-pair">
  <div>
    <p><kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>Ctrl</kbd>+<kbd>S</kbd>를 차례로 눌러 Keyboard Shortcuts를 엽니다. Command Palette에서 <strong>Preferences: Open Keyboard Shortcuts</strong>를 실행해도 됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/open-keyboard-shortcuts.png" alt="Preferences Open Keyboard Shortcuts가 보이는 VS Code Command Palette">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Keyboard Shortcuts 검색창에 <code>LaTeX Workshop</code>을 입력합니다. 표시된 명령과 현재 단축키를 확인하고 바꿀 항목을 고릅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/latex-workshop-shortcuts-list.png" alt="LaTeX Workshop 명령으로 필터링된 VS Code Keyboard Shortcuts 화면">

  </figure>
</div>

## 반복 동작 단축키 만들기

먼저 기존 단축키를 확인합니다. 자주 쓰지만 편리한 키 조합이 없는 명령 하나를 골라 새 단축키를 지정합니다.

<div class="doc-step-pair">
  <div>
    <p>예를 들어 검색창에 <code>environment</code>를 더 입력하면 이름에 이 단어가 들어간 LaTeX Workshop 명령만 표시됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/filter-specific-shortcut.png" alt="environment 검색어로 좁혀진 LaTeX Workshop 단축키 목록">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>명령을 선택해 키 입력창을 열고, 원하는 키 조합을 누른 뒤 <kbd>Enter</kbd>로 저장합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/select-shortcut-command.png" alt="선택한 명령에 새 keybinding을 입력하는 VS Code Keyboard Shortcuts 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p><strong>SyncTeX from cursor</strong>는 원고의 커서 위치에 대응하는 PDF 위치로 이동합니다. Windows에서는 먼저 기본 단축키 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>J</kbd>를 사용해 보고, 바꾸려면 Keyboard Shortcuts에서 이 명령을 찾습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/synctex-from-cursor-shortcut.png" alt="LaTeX Workshop SyncTeX from cursor 명령이 보이는 VS Code Keyboard Shortcuts 화면">

  </figure>
</div>

## 설정 파일 찾기

<div class="doc-step-pair">
  <div>
    <p>Windows에서 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>로 Command Palette를 열고 <strong>Preferences: Open User Settings</strong>를 실행합니다. 사용자 설정은 VS Code의 모든 프로젝트에 적용됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/open-user-settings.png" alt="Preferences Open User Settings가 보이는 VS Code Command Palette">

  </figure>
</div>

현재 프로젝트에만 적용하려면 Command Palette에서 `Preferences: Open Workspace Settings`를 실행합니다. JSON 파일을 직접 열려면 `Preferences: Open Workspace Settings (JSON)`을 실행합니다. 이 설정은 프로젝트의 `.vscode/settings.json`에 저장되며 사용자 설정보다 우선합니다.

<div class="doc-step-pair">
  <div>
    <p><code>settings.json</code>을 직접 편집하려면 Command Palette에서 <strong>Preferences: Open User Settings (JSON)</strong>을 실행합니다. 기본 Windows 프로필의 파일 위치는 <code>%APPDATA%\Code\User\settings.json</code>입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/code-user-folder.png" alt="VS Code Code User 폴더가 열린 Windows 파일 탐색기">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <div class="doc-action-row">
      <p><code>settings.json</code>에는 사용자 설정이, <code>keybindings.json</code>에는 바꾼 단축키가 저장됩니다. 연결된 설정 예제 저장소를 참고할 때는 필요한 항목만 현재 파일에 추가합니다.</p>
      <a class="doc-action-link" href="https://github.com/research-workflow-guides/setting">설정 예제 저장소</a>
    </div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/settings-keybindings-files.png" alt="VS Code user 폴더 안의 settings와 keybindings 파일">

  </figure>
</div>

## 유용한 기본 설정

먼저 LaTeX Workshop의 기본값을 확인합니다. 아래 항목은 빌드, PDF 미리보기, 보조 파일 정리와 관련됩니다.

<div class="doc-step-pair">
  <div>
    <p>Settings 검색창에 <code>LaTeX Workshop</code>을 입력합니다. 모든 프로젝트에 적용할 값은 User 탭에서, 현재 프로젝트에만 적용할 값은 Workspace 탭에서 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/search-latex-workshop-settings.png" alt="LaTeX Workshop 설정으로 필터링된 VS Code Settings 화면">

  </figure>
</div>

- `latex-workshop.latex.autoBuild.run`: 기본값 `onFileChange`, 저장할 때 빌드하려면 `onSave`
- `latex-workshop.view.pdf.viewer`: 기본값 `tab`
- `latex-workshop.latex.autoClean.run`: 기본값 `never`
- `latex-workshop.latex.recipe.default`: 기본값 `first`

## 예시 settings

`.tex` 파일을 저장할 때 자동 빌드하려면 앞에서 선택한 User 또는 Workspace의 `settings.json` 객체 안에 다음 항목을 추가합니다. 기존의 다른 설정은 유지합니다.

```json
{
  "latex-workshop.latex.autoBuild.run": "onSave"
}
```

`seed-document.tex`의 본문에 시험용 문구를 넣고 저장합니다. LaTeX Workshop이 자동으로 빌드하고 PDF 미리보기에 새 문구가 나타나는지 확인한 뒤, 시험용 문구를 지우고 다시 저장합니다.
