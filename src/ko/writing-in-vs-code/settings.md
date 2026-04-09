---
layout: layouts/doc.njk
title: 설정
description: VS Code와 LaTeX Workshop의 기본 설정을 정리해 반복 작업을 안정화합니다.
lang: ko
section: writing-in-vs-code
order: 2
permalink: /ko/writing-in-vs-code/settings/
translationKey: writing-settings
eyebrow: 주제 2
lead: 설정은 작고 오래 버티는 것부터 시작합니다. 빌드, 미리보기, 자동 정리가 예측 가능하게 돌아가면 충분합니다.
toc:
  - id: 작은-설정부터-시작
    label: 작은 설정부터 시작
  - id: 유용한-기본-설정
    label: 유용한 기본 설정
  - id: 예시-설정
    label: 예시 설정
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 작은 설정부터 시작

처음부터 `settings.json`을 길게 만들 필요는 없습니다. 파일이 작을수록 이해하고 수정하기 쉽고, 다음 프로젝트로 옮기기도 편합니다.

우선은 빌드 안정성, 자동 정리, PDF 미리보기 위치 정도만 맞추면 충분합니다.

<div class="doc-step-pair">
  <div>
    <p>먼저 Command Palette에서 사용자 설정을 엽니다. 이렇게 시작하면 처음 바꾸는 값들을 더 분명하게 확인할 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/open-user-settings.png" alt="Preferences Open User Settings가 보이는 VS Code Command Palette">
    <figcaption>LaTeX 관련 설정을 바꾸기 전에 사용자 설정을 엽니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>설정 파일을 직접 보고 싶다면 먼저 VS Code의 <code>Code/User</code> 폴더 위치를 확인합니다. 아래 이미지는 Windows 기준 예시입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/code-user-folder.png" alt="VS Code Code User 폴더가 열린 Windows 파일 탐색기">
    <figcaption>사용자 수준의 VS Code 설정은 <code>Code/User</code> 폴더 아래에 있습니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그 안에서 <code>settings.json</code>과 <code>keybindings.json</code> 위치를 같이 확인해두면, 나중에 어떤 파일을 편집하는지 헷갈리지 않습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/settings-keybindings-files.png" alt="VS Code user 폴더 안의 settings와 keybindings 파일">
    <figcaption><code>settings.json</code>과 <code>keybindings.json</code> 위치를 같이 확인해둡니다.</figcaption>
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
    <figcaption>먼저 Settings를 LaTeX Workshop 기준으로 필터링합니다.</figcaption>
  </figure>
</div>

- 저장 후 빌드 동작 방식
- PDF 미리보기 표시 방식
- 자동 정리 정책
- 기본 recipe 선택

처음부터 모든 것을 바꾸지 말고, 실제 작업 루프에서 불편이 느껴질 때 한 항목씩 추가합니다.

## 예시 설정

```json
{
  "latex-workshop.latex.autoBuild.run": "onSave",
  "latex-workshop.view.pdf.viewer": "tab",
  "latex-workshop.latex.clean.enabled": true,
  "latex-workshop.latex.recipe.default": "lastUsed"
}
```

이 값들이 유일한 정답은 아니지만, 시작점으로는 충분히 안정적입니다.

## 넘어가기 전

저장 후 동작이 의도와 맞고, PDF 미리보기가 원하는 위치에서 열리며, 자동 정리가 필요한 파일을 지우지 않는다면 다음 문서로 넘어갑니다.
