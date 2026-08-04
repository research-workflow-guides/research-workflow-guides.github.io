---
layout: layouts/doc.njk
title: Git 설치
description: Git을 설치하고 프로젝트마다 재사용할 기본 identity를 설정합니다.
lang: ko
section: git-github
order: 1
permalink: /ko/git-github/git-installation/
translationKey: git-git-installation
eyebrow: 주제 1
lead: 먼저 Git을 설치하고, 이후 commit에 계속 따라갈 이름과 이메일을 설정합니다.
outcome: 새 터미널에서 Git을 실행하고 전역 commit 이름과 이메일을 확인할 수 있습니다.
prerequisites:
  - 소프트웨어 설치 또는 운영체제 package manager 사용 권한이 필요합니다.
  - 향후 commit에 기록할 이름과 이메일 주소를 준비합니다.
completion: "`git --version`이 성공하고 `git config --global --list`에 의도한 이름과 이메일이 나타납니다."
commonProblems:
  - 설치 전에 열어 둔 터미널에서는 새 `git` 명령을 인식하지 못할 수 있습니다.
  - Commit 이메일은 GitHub 계정에서 허용된 주소 또는 no-reply 설정과 맞아야 합니다.
verification:
  status: needs-review
  environment: Windows는 상세 installer 경로이며 macOS와 Linux는 공식 플랫폼 설치 방법을 사용합니다.
  workflow: Git 설치, 전역 identity 설정, 터미널 확인.
  lastVerified: 현재 제품 기준 walkthrough 대기 중.
  support: Windows 상세 지원, macOS와 Linux는 공식 package 및 명령 확인 방식 지원.
toc:
  - id: git-설치
    label: Git 설치
  - id: identity-설정
    label: identity 설정
  - id: 설치-확인
    label: 설치 확인
tags:
  - doc
---
## Git 설치

운영체제에 맞는 공식 설치 프로그램이나 일반적으로 쓰는 패키지 관리자를 사용합니다. 핵심 목표는 터미널과 VS Code에서 `git` 명령이 잡히는 것입니다.

<div class="doc-step-pair">
  <div>
    <p>Git 공식 홈페이지에서 시작합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-1.png" alt="Git 홈페이지">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 다운로드 페이지로 이동해서 현재 운영체제에 맞는 설치 파일을 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-2.png" alt="Git 다운로드 페이지">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>기본 설치 옵션으로 진행하면 됩니다. setup 화면이 정상적으로 시작되는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-3.png" alt="Git 설치 진행">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>설치가 끝나면 터미널로 돌아가 Git이 동작하는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-4.png" alt="Git 설치 완료">

  </figure>
</div>

## identity 설정

Git commit에는 표시 이름과 이메일이 기록됩니다. repository 작업을 시작하기 전에 한 번 설정합니다.

Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>로 새 터미널을 엽니다. 그런 다음 다음 명령어를 입력하세요:

```shell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 설치 확인

아래 명령을 실행합니다.

```shell
git --version
git config --global --list
```

Git이 정상 응답하고, 이름과 이메일이 보이면 기본 설치는 끝난 것입니다.

`git --version`이 동작하고 global identity가 올바르게 설정되어 있으면 다음 단계로 넘어갑니다.
