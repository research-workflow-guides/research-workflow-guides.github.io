---
layout: layouts/doc.njk
title: Git 설치
description: Git을 설치하고 프로젝트마다 재사용할 기본 identity를 설정합니다.
lang: ko
section: git-github
order: 1
permalink: /ko/git-github/git-installation/
translationKey: git-git-installation
eyebrow: Step 1
lead: 먼저 Git을 설치하고, 이후 commit에 계속 따라갈 이름과 이메일을 설정합니다.
toc:
  - id: install-git
    label: Git 설치
  - id: set-your-identity
    label: identity 설정
  - id: verify-the-install
    label: 설치 확인
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## Git 설치

운영체제에 맞는 공식 설치 프로그램이나 일반적으로 쓰는 패키지 관리자를 사용합니다. 핵심 목표는 터미널과 VS Code에서 `git` 명령이 잡히는 것입니다.

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

## 점검

`git --version`이 동작하고 global identity가 올바르게 설정되어 있으면 다음 단계로 넘어갑니다.

