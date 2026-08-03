---
layout: layouts/doc.njk
title: GitHub 연결
description: VS Code에서 사용할 Git identity를 설정하고 GitHub 브라우저 로그인이 나오면 처리합니다.
lang: ko
section: git-github
order: 3
permalink: /ko/git-github/connect-github/
translationKey: git-connect-github
eyebrow: 3단계
lead: VS Code 터미널을 열고 전역 Git 이름과 이메일을 설정한 뒤, repository를 만들기 전에 저장된 값을 확인합니다.
outcome: 의도한 GitHub identity에 맞게 Git을 설정하고 요청 시 browser 인증을 완료할 수 있습니다.
prerequisites:
  - Git이 설치되어 VS Code 터미널에서 실행됩니다.
  - 사용할 GitHub 계정이 있으며 새 계정이 필요하면 선택 문서를 먼저 확인합니다.
completion: 터미널에 의도한 Git identity가 보이고 인증이 필요한 GitHub 작업에서 미완료 sign-in 요청이 남지 않습니다.
commonProblems:
  - Browser의 다른 계정 session 때문에 Git commit identity와 GitHub login 계정이 달라질 수 있습니다.
  - 인증 창이 VS Code 뒤나 로그인되지 않은 browser window에 열릴 수 있습니다.
verification:
  status: needs-review
  environment: Windows는 상세 VS Code screenshot 경로이며 macOS와 Linux도 같은 identity와 browser sign-in 개념을 사용합니다.
  workflow: VS Code 터미널, Git identity 설정, GitHub browser 인증.
  lastVerified: 현재 제품 기준 walkthrough 대기 중.
  support: 세 운영체제를 지원하며 터미널 단축키와 credential 저장 방식은 플랫폼마다 다릅니다.
toc:
  - id: terminal-open
    label: 터미널 열기
  - id: name-email
    label: 이름과 이메일 설정
  - id: config-check
    label: 설정 확인
  - id: browser-sign-in
    label: 브라우저 로그인
tags:
  - doc
---
<h2 id="terminal-open">터미널 열기</h2>

VS Code 안에서 새 터미널을 엽니다.

<div class="doc-step-pair">
  <div>
    <p>Command Palette를 열고 <strong>terminal</strong>을 검색한 뒤 <strong>Terminal: Create New Terminal</strong>을 선택합니다. 단축키는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>)입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-1%20(1).png" alt="Terminal: Create New Terminal이 선택된 VS Code Command Palette">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>명령을 실행하면 VS Code 아래쪽에 통합 터미널이 열립니다.</p>
    <p>Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>로 새 터미널을 바로 열 수도 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-2%20(1).png" alt="VS Code 통합 터미널이 열린 화면">
  </figure>
</div>

<h2 id="name-email">이름과 이메일 설정</h2>

이 컴퓨터에서 만드는 commit에 붙을 이름과 이메일을 설정합니다.

<div class="doc-step-pair">
  <div>
    <p>먼저 이름 명령을 실행합니다. <code>NAME</code>에는 commit 기록에 표시할 이름을 넣습니다.</p>
    <pre data-code-label="bash"><code>git config --global user.name "NAME"</code></pre>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-3%20(1).png" alt="git config global user.name 명령이 입력된 VS Code 터미널">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그 다음 이메일 명령을 실행합니다. 앞에서 준비한 GitHub 계정에 연결된 이메일을 사용합니다.</p>
    <pre data-code-label="bash"><code>git config --global user.email "EMAIL"</code></pre>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-4%20(1).png" alt="git config global user.email 명령이 입력된 VS Code 터미널">
  </figure>
</div>

<h2 id="config-check">설정 확인</h2>

다음 단계로 넘어가기 전에 저장된 설정을 확인합니다.

```shell
git config --list
```

<div class="doc-step-pair">
  <div>
    <p>같은 터미널에서 <code>git config --list</code>를 실행합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-5%20(1).png" alt="git config list 명령이 입력된 VS Code 터미널">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>출력에서 <code>user.name</code>과 <code>user.email</code>이 방금 입력한 값과 맞는지 확인합니다. 같은 컴퓨터에서는 이 설정을 한 번만 해두면 됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-6%20(1).png" alt="git config list 출력에서 user.name과 user.email이 보이는 VS Code 터미널">
  </figure>
</div>

<h2 id="browser-sign-in">브라우저 로그인</h2>

작업 중 VS Code가 GitHub 로그인을 요구할 수 있습니다. <strong>Sign in with your browser</strong>가 보이면 클릭해서 브라우저에서 GitHub 로그인을 완료합니다.

<div class="doc-step-pair">
  <div>
    <p>일반적인 GitHub 로그인 흐름에서는 브라우저 로그인 옵션을 사용합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/connecting-github.png" alt="Sign in with your browser가 강조된 VS Code Connect to GitHub 창">
  </figure>
</div>

<code>git config --list</code>에서 이름과 이메일이 올바르게 보이고, GitHub 로그인 안내가 있다면 완료한 뒤 repository 생성 단계로 넘어갑니다.
