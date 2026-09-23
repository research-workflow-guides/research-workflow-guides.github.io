---
layout: layouts/doc.njk
title: VS Code 설치
description: Windows에서 VS Code와 LaTeX Workshop을 설치하고 활성화를 확인합니다.
lang: ko
section: initial-setup
order: 2
permalink: /ko/initial-setup/vs-code-installation/
translationKey: initial-setup-vs-code-installation
eyebrow: 2단계
lead: Windows에 VS Code를 설치하고 LaTeX Workshop 확장을 추가합니다. 확장 활성화와 빌드 명령 표시를 확인합니다.
outcome: VS Code가 정상적으로 열리고 LaTeX Workshop이 설치되어 활성화됩니다.
prerequisites:
  - 앞 단계에서 MiKTeX, Perl, latexmk 설치를 마쳤습니다.
  - VS Code와 LaTeX Workshop을 내려받을 인터넷 연결이 필요합니다.
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 기준으로 작성 중이며 macOS와 Linux는 추후 작성·검증할 예정입니다.
  workflow: VS Code User Installer, LaTeX Workshop 설치·활성화, 빌드 명령 표시.
  lastVerified: 2026-09-23 공식 문서 확인. Windows 설치 화면과 실제 동작 검증 대기 중.
  support: Windows 안내 검토 중. macOS와 Linux 안내는 추후 추가 예정.
osGuide:
  topic: vs-code-installation
  platform: windows
toc:
  - id: vs-code-설치
    label: VS Code 설치
  - id: latex-workshop-설치
    label: LaTeX Workshop 설치
  - id: 빌드-명령-확인
    label: 빌드 명령 확인
tags:
  - doc
---
{% include "platform-guides/ko/vs-code-installation/windows.md" %}
