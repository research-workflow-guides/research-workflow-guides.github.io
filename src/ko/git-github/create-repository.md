---
layout: layouts/doc.njk
title: 저장소 만들기
description: 로컬 project를 올리기 전에 첫 private repository를 만듭니다.
lang: ko
section: git-github
order: 4
permalink: /ko/git-github/create-repository/
translationKey: git-create-repository
eyebrow: Step 4
lead: 첫 push 흐름을 단순하게 유지하려면 먼저 비어 있는 private repository부터 만듭니다.
toc:
  - id: choose-the-repository-shape
    label: 저장소 형태 정하기
  - id: create-an-empty-private-repository
    label: 비어 있는 private repository 만들기
  - id: keep-the-first-repository-simple
    label: 처음은 단순하게
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 저장소 형태 정하기

첫 workflow에서는 "하나의 작업 project = 하나의 private repository" 정도면 충분합니다. 첫 push가 성공하기 전까지는 파일이나 자동화를 과하게 얹지 않는 편이 좋습니다.

## 비어 있는 private repository 만들기

GitHub에서 새 private repository를 만들고, project에 맞는 분명한 이름을 정합니다. 첫 local push 흐름을 명확하게 보려면 README, `.gitignore`, license를 굳이 먼저 넣지 않아도 됩니다.

## 처음은 단순하게

첫 저장소의 목적은 로컬 파일과 원격 이력이 어떻게 연결되는지 이해하는 것입니다. 복잡한 구조는 나중에 추가해도 충분합니다.

## 점검

GitHub에 private repository가 만들어졌고 아직 비어 있다면 이제 로컬 clone 단계로 넘어갈 수 있습니다.

