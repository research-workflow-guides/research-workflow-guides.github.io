---
layout: layouts/doc.njk
title: Project Template
description: starter project를 열고 첫 PDF build가 동작하는지 확인합니다.
lang: ko
section: start-here
order: 3
permalink: /ko/start-here/project-template/
translationKey: start-here-project-template
eyebrow: Step 3
lead: starter project를 하나 내려받아 VS Code에서 열고, 전체 toolchain이 함께 동작하는지 확인합니다.
toc:
  - id: download-the-starter-archive
    label: template 받기
  - id: open-the-project-in-vs-code
    label: project 열기
  - id: run-the-first-build
    label: 첫 build 실행
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## template 받기

첫 build 확인용 project source로는 기존 starter repository를 사용합니다.

1. starter repository에서 ZIP archive를 내려받습니다.
2. 압축을 푼 뒤 폴더 구조를 유지한 채 둡니다.

[Starter repository: research-workflow-guides/seed-documents](https://github.com/research-workflow-guides/seed-documents)

## project 열기

1. VS Code에서 압축을 푼 폴더 전체를 project로 엽니다.
2. starter repository 안의 `seed-document/seed-document.tex`를 첫 작업 문서로 삼습니다.

## 첫 build 실행

1. 가능한 한 직접 터미널 명령보다 LaTeX Workshop build를 사용합니다.
2. PDF preview를 열고 build가 막히지 않는지 확인합니다.
3. 이 단계가 통과되면 배포판, 에디터, 확장이 함께 맞물려 동작하는 것입니다.

## 점검

starter 문서가 VS Code에서 열리고, build가 완료되며, PDF preview가 보이면 `Initial Setup`은 끝난 것입니다.
