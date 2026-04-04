---
layout: layouts/doc.njk
title: Settings
description: VS Code와 LaTeX Workshop의 기본 설정을 정리해 반복 작업을 안정화합니다.
lang: ko
section: writing-in-vs-code
order: 2
permalink: /ko/writing-in-vs-code/settings/
translationKey: writing-settings
eyebrow: Topic 2
lead: 설정은 작고 오래 버티는 것부터 시작합니다. build, preview, cleanup이 예측 가능하게 돌아가면 충분합니다.
toc:
  - id: start-with-a-small-settings-file
    label: 작은 settings부터 시작
  - id: useful-latex-workshop-defaults
    label: 유용한 기본 설정
  - id: example-settings
    label: 예시 settings
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 작은 settings부터 시작

처음부터 `settings.json`을 길게 만들 필요는 없습니다. 파일이 작을수록 이해하고 수정하기 쉽고, 다음 project로 옮기기도 편합니다.

우선은 build 안정성, 자동 정리, PDF preview 위치 정도만 맞추면 충분합니다.

## 유용한 기본 설정

초반에 체감이 큰 설정은 다음과 같습니다.

- 저장 후 build 동작 방식
- PDF preview 표시 방식
- cleanup 정책
- 기본 recipe 선택

처음부터 모든 것을 바꾸지 말고, 실제 작업 루프에서 불편이 느껴질 때 한 항목씩 추가합니다.

## 예시 settings

```json
{
  "latex-workshop.latex.autoBuild.run": "onSave",
  "latex-workshop.view.pdf.viewer": "tab",
  "latex-workshop.latex.clean.enabled": true,
  "latex-workshop.latex.recipe.default": "lastUsed"
}
```

이 값들이 유일한 정답은 아니지만, 시작점으로는 충분히 안정적입니다.

## 점검

저장 후 동작이 의도와 맞고, PDF preview가 원하는 위치에서 열리며, cleanup이 필요한 파일을 지우지 않는다면 다음 문서로 넘어갑니다.

