---
layout: layouts/doc.njk
title: 폴더 열기
description: 올바른 project root를 열고 VS Code 작업 공간 구조를 안정적으로 유지합니다.
lang: ko
section: writing-in-vs-code
order: 1
permalink: /ko/writing-in-vs-code/folder-setup/
translationKey: writing-folder-setup
eyebrow: Topic 1
lead: 파일 하나가 아니라 project 전체 폴더를 VS Code에서 엽니다. root 위치를 고정하고 항상 올바른 위치에서 build합니다.
toc:
  - id: open-the-project-root
    label: project root 열기
  - id: keep-one-stable-folder-shape
    label: 폴더 구조 고정
  - id: common-mistakes
    label: 자주 생기는 실수
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## project root 열기

`.tex` 파일 하나만 여는 대신, project 전체 폴더를 VS Code에서 엽니다.

폴더 전체를 열어야 LaTeX Workshop, 검색, 파일 참조, source control이 같은 작업 공간 경계를 공유합니다.

## 폴더 구조 고정

작업 project는 가능한 한 비슷한 구조를 유지합니다.

- repository 또는 paper project root
- root 근처 또는 명확한 하위 폴더 안의 main `.tex` 파일
- figures, bibliography, supplementary 파일을 위한 고정 하위 폴더

이름은 달라도 되지만, project를 시작할 때마다 구조를 크게 흔들지 않는 편이 좋습니다.

## 자주 생기는 실수

Downloads 폴더, ZIP 임시 미리보기, 실제 root보다 더 안쪽 하위 폴더에서 바로 작업을 시작하지 않습니다.

LaTeX Workshop이 main file을 제대로 찾지 못한다면 확장 문제보다 "잘못 연 폴더"가 원인인 경우가 많습니다.

## 점검

Explorer에 project 전체가 보이고, main `.tex` 파일이 그 트리 안에 있으며, build가 의도한 project root에서 실행되면 다음 문서로 넘어갑니다.

