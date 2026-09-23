---
layout: layouts/doc.njk
title: VS Code 설치
description: VS Code를 설치하고 LaTeX Workshop 확장을 추가합니다.
lang: ko
section: initial-setup
order: 2
permalink: /ko/initial-setup/vs-code-installation/
translationKey: initial-setup-vs-code-installation
eyebrow: 2단계
lead: VS Code를 설치하고 LaTeX Workshop 확장을 추가해 첫 프로젝트를 열 준비를 마칩니다.
outcome: VS Code가 정상적으로 열리고 LaTeX Workshop이 설치되어 활성화됩니다.
prerequisites:
  - 이전 핵심 단계에서 LaTeX 배포판 설치를 완료했습니다.
  - VS Code와 extension을 설치할 권한이 필요합니다.
completion: Extensions 화면에서 LaTeX Workshop이 활성화되어 있고 Command Palette에 build 명령이 나타납니다.
commonProblems:
  - Extension이 설치되어 있어도 현재 workspace에서 비활성화되어 있을 수 있습니다.
  - LaTeX Workshop 명령이 보이려면 VS Code 창을 reload해야 할 수 있습니다.
verification:
  status: needs-review
  environment: Windows 기준으로 작성 중이며 macOS와 Linux는 추후 작성·검증할 예정입니다.
  workflow: VS Code 설치와 LaTeX Workshop extension 설정.
  lastVerified: 현재 제품 기준 walkthrough 대기 중.
  support: Windows 안내 검토 중. macOS와 Linux 안내는 추후 추가 예정.
osGuide:
  topic: vs-code-installation
  platform: windows
toc:
  - id: vs-code-설치
    label: VS Code 설치
  - id: latex-workshop-설치
    label: LaTeX Workshop 설치
tags:
  - doc
---
{% include "platform-guides/ko/vs-code-installation/windows.md" %}
