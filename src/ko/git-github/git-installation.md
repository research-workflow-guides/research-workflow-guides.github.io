---
layout: layouts/doc.njk
title: Git 설치
description: Git을 설치하고 프로젝트마다 재사용할 기본 identity를 설정합니다.
lang: ko
section: git-github
order: 1
permalink: /ko/git-github/git-installation/
translationKey: git-git-installation
eyebrow: 1단계
lead: 먼저 Git을 설치하고, 이후 commit에 계속 따라갈 이름과 이메일을 설정합니다.
toc:
  - id: git-설치
    label: Git 설치
  - id: identity-설정
    label: identity 설정
  - id: 설치-확인
    label: 설치 확인
  - id: 넘어가기-전
    label: 넘어가기 전
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
    <figcaption>Git 공식 홈페이지에서 시작합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 다운로드 페이지로 이동해서 현재 운영체제에 맞는 설치 파일을 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-2.png" alt="Git 다운로드 페이지">
    <figcaption>운영체제에 맞는 설치 파일을 선택합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>기본 설치 옵션으로 진행하면 됩니다. setup 화면이 정상적으로 시작되는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-3.png" alt="Git 설치 진행">
    <figcaption>Git installer는 일반적인 setup 흐름으로 진행됩니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>설치가 끝나면 터미널로 돌아가 Git이 동작하는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-4.png" alt="Git 설치 완료">
    <figcaption>설치가 끝나면 터미널에서 버전을 확인합니다.</figcaption>
  </figure>
</div>

## identity 설정

Git commit에는 표시 이름과 이메일이 기록됩니다. repository 작업을 시작하기 전에 한 번 설정합니다.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 설치 확인

아래 명령을 실행합니다.

```bash
git --version
git config --global --list
```

Git이 정상 응답하고, 이름과 이메일이 보이면 기본 설치는 끝난 것입니다.

## 넘어가기 전

`git --version`이 동작하고 global identity가 올바르게 설정되어 있으면 다음 단계로 넘어갑니다.
