---
layout: layouts/doc.njk
title: LaTeX snippets 설정
description: Windows용 VS Code에서 LaTeX 사용자 snippet 파일을 열고 필요한 정의를 추가한 뒤 입력 결과를 확인합니다.
lang: ko
section: writing-in-vs-code
order: 4
permalink: /ko/writing-in-vs-code/snippets/
translationKey: writing-snippets
eyebrow: 선택
lead: Windows용 VS Code에서 LaTeX 사용자 snippet 파일을 찾아 열고, 자주 쓰는 입력을 한곳에서 관리합니다.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows용 VS Code의 기본 프로필을 기준으로 설명하며 macOS와 Linux 절차는 추후 검증합니다.
  workflow: LaTeX 사용자 snippet 파일 생성·열기, 예시 정의 추가, 자동완성 입력 확인.
  lastVerified: 2026-09-23 VS Code 공식 문서와 예시 latex.json 확인. Windows 실제 화면 재검증 대기 중.
  support: 기존 화면은 현재 Windows용 VS Code와 대조해 업데이트할 필요가 있습니다.
toc:
  - id: 세팅-파일-찾기
    label: LaTeX snippet 파일 열기
  - id: 예시-snippet
    label: 사용자 snippets 예시
tags:
  - doc
---
<h2 id="세팅-파일-찾기">LaTeX snippet 파일 열기</h2>

<div class="doc-step-pair">
  <div>
    <p>Windows에서 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>로 Command Palette를 열고 <strong>Snippets: Configure Snippets</strong>를 실행합니다. 사용자 snippet 파일은 VS Code에서 생성하거나 열 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/configure-user-snippets.png" alt="Snippets Configure User Snippets가 보이는 VS Code Command Palette">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>목록에서 <code>latex</code>를 검색합니다. 기존 파일이 없다면 <strong>latex (LaTeX)</strong>를 선택해 언어별 사용자 snippet 파일을 만듭니다. 이 파일의 snippets는 LaTeX 파일을 편집할 때 제안됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/search-latex-snippet-target.png" alt="latex가 입력된 VS Code snippet 대상 검색 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>목록의 <strong>Existing Snippets</strong>에 <code>latex.json</code> (LaTeX)이 보이면 그 파일을 선택합니다. 이미 작성한 snippets를 확인한 뒤 같은 파일에서 필요한 항목을 추가하거나 수정합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/choose-latex-json.png" alt="기존 latex.json snippet 파일을 보여주는 VS Code 선택 화면">

  </figure>
</div>

<h2 id="예시-snippet">사용자 snippets 예시</h2>

<div class="doc-action-row">
  <p>기본 문서팩의 <code>latex.json</code>에는 사용자 snippets 예시가 있습니다. 필요한 정의를 골라 앞에서 연 <code>latex.json</code>에 추가하세요.</p>
  <a class="doc-action-link" href="https://github.com/research-workflow-guides/setting/blob/main/latex.json">예시 latex.json</a>
</div>

- **Windows 기본 프로필**: `%APPDATA%\Code\User\snippets\latex.json`
- **macOS / Linux**: 경로와 절차를 추후 작성·검증할 예정입니다.

<div class="doc-step-pair">
  <div>
    <p>Windows 파일 탐색기 주소창에 <code>%APPDATA%\Code\User\snippets</code>를 입력하고 <kbd>Enter</kbd>를 누르면 기본 프로필의 snippet 폴더가 열립니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/snippets-folder-path.png" alt="VS Code snippets 폴더 경로가 보이는 Windows 파일 탐색기">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>폴더에서 <code>latex</code> 또는 <code>latex.json</code>으로 보이는 JSON 파일을 확인합니다. Windows에서 파일 확장명을 숨기면 <code>latex.json</code>이 <code>latex</code>로 표시될 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/latex-snippet-file.png" alt="VS Code snippets 폴더 안의 latex snippet 파일">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p><code>latex.json</code>에서 추가한 snippet의 <code>prefix</code>와 <code>body</code>를 확인합니다. <code>prefix</code>는 입력할 접두어이고, <code>body</code>는 삽입될 LaTeX 내용입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/edit-latex-json.png" alt="snippet 편집을 위해 latex.json이 열린 VS Code 화면">

  </figure>
</div>

기본 문서팩의 번호 없는 수식 snippet은 `eq`를 `prefix`로 사용합니다. 자신이 추가하는 snippet에도 입력하기 쉽고 서로 구별되는 `prefix`를 붙입니다.

LaTeX 파일에서 새 `prefix`를 입력하고 자동완성 목록의 해당 snippet을 선택한 뒤 Tab을 눌러 삽입합니다. `body`에 적은 LaTeX가 예상대로 들어갔는지 확인합니다.
