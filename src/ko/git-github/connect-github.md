---
layout: layouts/doc.njk
title: GitHub 연결
description: VS Code가 GitHub 로그인을 요청할 때 브라우저에서 인증하는 방법을 안내합니다.
lang: ko
section: git-github
order: 3
permalink: /ko/git-github/connect-github/
translationKey: git-connect-github
eyebrow: 3단계
lead: Git 설치 단계에서 커밋 작성자 정보를 설정했습니다. 이후 VS Code가 GitHub 로그인을 요청하면 브라우저에서 인증을 완료합니다.
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code 화면을 기준으로 작성했으며 macOS와 Linux 화면은 추후 작성·검증합니다.
  workflow: GitHub 작업 중 로그인 요청 확인, 브라우저 인증, VS Code 복귀.
  lastVerified: 2026-09-23 VS Code 공식 문서 확인. 현재 Windows 로그인 화면 검증 대기 중.
  support: 기존 VS Code 로그인 이미지는 업데이트가 필요합니다. macOS와 Linux 안내는 준비 중입니다.
  scopeNote: 현재 Windows의 VS Code 화면을 기준으로 안내합니다. macOS와 Linux 화면은 추후 작성·검증합니다.
verificationCard: false
toc:
  - id: terminal-open
    label: GitHub 계정 확인
  - id: browser-sign-in
    label: 브라우저 로그인
tags:
  - doc
---
<h2 id="terminal-open">GitHub 계정 확인</h2>

사용할 GitHub 계정이 없다면 [GitHub 계정 준비](/ko/git-github/github-account-setup/) 안내를 먼저 확인합니다.

<p id="name-email">커밋 작성자 이름이나 이메일을 바꾸려면 <a href="/ko/git-github/git-installation/#identity-설정">Git 설치의 커밋 작성자 설정</a>으로 돌아갑니다.</p>

<p id="config-check">Git 커밋에는 앞에서 설정한 작성자 정보가 기록됩니다. 브라우저 로그인 창에서는 사용할 GitHub 계정을 확인합니다.</p>

<h2 id="browser-sign-in">브라우저 로그인</h2>

<div class="doc-step-pair">
  <div>
    <p>비공개 저장소를 클론하거나 GitHub에 푸시할 때 VS Code가 로그인을 요청할 수 있습니다. 요청이 나타나면 브라우저 로그인 옵션을 선택하고, 열린 브라우저에서 사용할 GitHub 계정을 확인해 인증합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/connecting-github.png" alt="기존 VS Code Connect to GitHub 화면에서 Sign in with your browser가 강조된 모습">
  </figure>
</div>

브라우저 인증을 마치면 VS Code로 돌아옵니다. 로그인 요청이 아직 없다면 [저장소 만들기](/ko/git-github/create-repository/)로 진행합니다.
