---
layout: layouts/doc.njk
title: Snippets
description: 자주 쓰는 LaTeX 조각을 snippet으로 묶어 반복 입력을 줄입니다.
lang: ko
section: writing-in-vs-code
order: 5
permalink: /ko/writing-in-vs-code/snippets/
translationKey: writing-snippets
eyebrow: 주제 5
lead: snippet은 문서 구조를 가리지 않으면서 반복 입력만 줄여줄 때 가장 유용합니다.
toc:
  - id: 자주-쓰는-패턴부터
    label: 자주 쓰는 패턴부터
  - id: 예시-snippet
    label: 예시 snippet
  - id: 너무-큰-snippet-모음-피하기
    label: 너무 큰 snippet 모음 피하기
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 자주 쓰는 패턴부터

snippet은 정말 자주 타이핑하는 패턴에만 먼저 만듭니다.

- theorem 환경
- aligned equation block
- figure, table 기본 껍데기
- 반복되는 문서 scaffold

한 달에 한 번 쓸까 말까 한 패턴은 core snippet 집합에 넣지 않아도 됩니다.

<div class="doc-step-pair">
  <div>
    <p>먼저 Command Palette에서 user snippet 설정 흐름으로 들어갑니다. 처음부터 임의의 JSON 파일을 따로 만들 필요는 없습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/configure-user-snippets.png" alt="Snippets Configure User Snippets가 보이는 VS Code Command Palette">
    <figcaption><strong>Configure User Snippets</strong>에서 snippet 설정을 시작합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 LaTeX snippet 대상을 찾습니다. 이렇게 해야 실제 원고 작업에 맞는 language snippet 파일을 열 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/search-latex-snippet-target.png" alt="latex가 입력된 VS Code snippet 대상 검색 화면">
    <figcaption>LaTeX snippet 대상을 먼저 검색합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>이미 LaTeX snippet 파일이 있다면 새 파일을 여러 개 만들지 말고, 기존 <code>latex.json</code>을 계속 사용하는 편이 더 안정적입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/choose-latex-json.png" alt="기존 latex.json snippet 파일을 보여주는 VS Code 선택 화면">
    <figcaption>가능하면 기존 <code>latex.json</code> 파일을 계속 사용합니다.</figcaption>
  </figure>
</div>

## 예시 snippet

<div class="doc-step-pair">
  <div>
    <p>파일 위치를 직접 확인하고 싶다면, Windows 기준으로는 <code>%APPDATA%\\Code\\User\\snippets</code> 아래에서 user snippet 파일을 찾을 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/snippets-folder-path.png" alt="VS Code snippets 폴더 경로가 보이는 Windows 파일 탐색기">
    <figcaption>user snippet 파일은 VS Code의 <code>snippets</code> 폴더 아래에 있습니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그 안에서 LaTeX snippet 파일이 실제로 존재하는지 확인하고, 앞으로 계속 수정할 파일이 맞는지 점검합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/latex-snippet-file.png" alt="VS Code snippets 폴더 안의 latex snippet 파일">
    <figcaption>LaTeX snippet 파일이 실제로 있는지 확인합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>파일을 연 뒤에는 작고 읽기 쉬운 snippet 집합부터 시작합니다. 그래야 나중에 prefix와 body를 직접 관리하기 쉽습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/edit-latex-json.png" alt="snippet 편집을 위해 latex.json이 열린 VS Code 화면">
    <figcaption><code>latex.json</code>을 열어 필요한 snippet만 직접 추가합니다.</figcaption>
  </figure>
</div>

```json
{
  "align environment": {
    "prefix": "ali",
    "body": [
      "\\begin{align}",
      "  $1",
      "\\end{align}"
    ]
  }
}
```

prefix는 짧지만 기억하기 쉬운 쪽이 좋습니다.

## 너무 큰 snippet 모음 피하기

snippet 파일이 너무 커지면 그것 자체가 관리 대상이 됩니다. 먼저 믿고 쓸 수 있는 작은 집합으로 시작하고, 반복 입력이 실제로 시간을 잡아먹는다고 느껴질 때만 추가합니다.

## 넘어가기 전

snippet이 자주 쓰는 LaTeX 패턴을 빨라지게 만들고, 전개된 구조도 여전히 이해할 수 있다면 이 문서의 목적은 충분히 달성된 것입니다.
