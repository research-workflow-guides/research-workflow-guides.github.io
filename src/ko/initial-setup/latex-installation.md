---
layout: layouts/doc.njk
title: LaTeX 설치
description: MiKTeX를 설치하고 기본 LaTeX 도구 체인이 준비됐는지 확인합니다.
lang: ko
section: initial-setup
order: 1
permalink: /ko/initial-setup/latex-installation/
translationKey: initial-setup-latex-installation
eyebrow: 1단계
lead: LaTeX 문서를 PDF로 만들기 위해 MiKTeX를 설치합니다. 문서에 필요한 패키지를 자동으로 설치하도록 설정하고, 빌드에 사용하는 Perl과 latexmk가 터미널에서 실행되는지 확인합니다.
outcome: MiKTeX, Perl, latexmk가 설치되어 새 터미널에서 실행됩니다.
prerequisites:
  - 컴퓨터에 소프트웨어를 설치할 권한이 필요합니다.
  - 설치 파일과 LaTeX 패키지를 받을 수 있는 안정적인 인터넷 연결이 필요합니다.
completion: 새 터미널에서 `perl --version`과 `latexmk -v`가 모두 버전 정보를 출력합니다.
commonProblems:
  - 첫 빌드 중 패키지 설치 창이 VS Code 뒤에 숨어 있을 수 있습니다.
  - 새로 설치한 명령을 사용하려면 터미널을 닫고 다시 열어야 할 수 있습니다.
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 기준으로 작성 중이며 macOS와 Linux는 추후 작성·검증할 예정입니다.
  workflow: MiKTeX, Perl, latexmk와 필요 패키지 자동 설치.
  lastVerified: 기존 Windows 설치 화면 업데이트 필요. 현재 제품 기준 walkthrough 대기 중.
  support: Windows 안내 검토 중. macOS와 Linux 안내는 추후 추가 예정.
osGuide:
  topic: latex-installation
  platform: windows
toc:
  - id: miktex-다운로드
    label: MiKTeX 다운로드
  - id: miktex-설치
    label: MiKTeX 설치
  - id: perl-설치
    label: Perl 설치
  - id: 패키지-자동-설치
    label: 패키지 자동 설치
tags:
  - doc
---
{% include "platform-guides/ko/latex-installation/windows.md" %}
