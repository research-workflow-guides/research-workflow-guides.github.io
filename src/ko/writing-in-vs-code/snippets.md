---
layout: layouts/doc.njk
title: 세팅 파일
description: 자주 쓰는 LaTeX 조각을 snippet으로 묶어 반복 입력을 줄입니다.
lang: ko
section: writing-in-vs-code
order: 4
permalink: /ko/writing-in-vs-code/snippets/
translationKey: writing-snippets
eyebrow: 주제 1
lead: snippet은 문서 구조를 가리지 않으면서 반복 입력만 줄여줄 때 가장 유용합니다.
toc:
  - id: 세팅-파일-찾기
    label: 세팅 파일 찾기
  - id: 예시-snippet
    label: 예시 snippet
tags:
  - doc
---
## 세팅 파일 찾기

<div class="doc-step-pair">
  <div>
    <p>먼저 Command Palette에서 user snippet 설정 흐름으로 들어갑니다. 처음부터 임의의 JSON 파일을 따로 만들 필요는 없습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/configure-user-snippets.png" alt="Snippets Configure User Snippets가 보이는 VS Code Command Palette">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 LaTeX snippet 대상을 찾습니다. 이렇게 해야 실제 원고 작업에 맞는 language snippet 파일을 열 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/search-latex-snippet-target.png" alt="latex가 입력된 VS Code snippet 대상 검색 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>이미 LaTeX snippet 파일이 있다면 새 파일을 여러 개 만들지 말고, 기존 <code>latex.json</code>을 계속 사용하는 편이 더 안정적입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/choose-latex-json.png" alt="기존 latex.json snippet 파일을 보여주는 VS Code 선택 화면">

  </figure>
</div>

## 예시 snippet

<div class="doc-action-row">
  <p>기본 문서팩에서 제공된 <code>latex.json</code> 파일을 사용할 수 있습니다. 파일이 위치할 경로는 사용자의 OS에 따라 다릅니다.</p>
  <a class="doc-action-link" href="https://github.com/research-workflow-guides/setting">기본 문서팩</a>
</div>

- **Windows**: `%APPDATA%\Code\User\snippets`
- **macOS**: `$HOME/Library/Application Support/Code/User/snippets`
- **Linux**: `$HOME/.config/Code/User/snippets`

<div class="doc-step-pair">
  <div>
    <p>파일 위치를 직접 확인하고 싶다면, Windows 기준으로는 <code>%APPDATA%\\Code\\User\\snippets</code> 아래에서 user snippet 파일을 찾을 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/snippets-folder-path.png" alt="VS Code snippets 폴더 경로가 보이는 Windows 파일 탐색기">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그 안에서 LaTeX snippet 파일이 실제로 존재하는지 확인하고, 앞으로 계속 수정할 파일이 맞는지 점검합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/latex-snippet-file.png" alt="VS Code snippets 폴더 안의 latex snippet 파일">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>파일을 연 뒤에는 작고 읽기 쉬운 snippet 집합부터 시작합니다. 그래야 나중에 prefix와 body를 직접 관리하기 쉽습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/edit-latex-json.png" alt="snippet 편집을 위해 latex.json이 열린 VS Code 화면">

  </figure>
</div>

prefix는 짧지만 기억하기 쉬운 쪽이 좋습니다.

snippet이 자주 쓰는 LaTeX 패턴을 빨라지게 만들고, 전개된 구조도 여전히 이해할 수 있다면 이 문서의 목적은 충분히 달성된 것입니다.
