---
layout: layouts/doc.njk
title: Collaboration
description: 작은 팀이 함께 써도 흐름이 흐트러지지 않는 협업 방식을 정리합니다.
lang: ko
section: git-github
order: 8
permalink: /ko/git-github/collaboration/
translationKey: git-collaboration
eyebrow: Step 8
lead: 작은 팀 협업은 repository 리듬이 단조롭고, 명시적이며, 다시 회복하기 쉬울수록 잘 굴러갑니다.
toc:
  - id: agree-on-a-shared-rhythm
    label: 공통 리듬 합의
  - id: communicate-before-surprise-pushes
    label: 갑작스러운 변화 전에 공유
  - id: keep-history-readable
    label: 읽히는 이력 유지
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 공통 리듬 합의

팀은 모두가 비슷한 기본 기대를 공유할 때 훨씬 안정적으로 움직입니다.

- 큰 작업 전 pull
- 의미 있는 단위로 commit
- 변경을 오래 쌓아두지 말고 규칙적으로 push

## 갑작스러운 변화 전에 공유

파일 대량 이름 변경, 폴더 구조 재정리, 공유 섹션 대폭 수정처럼 큰 변화가 예정되어 있다면 먼저 팀에 알립니다. 협업의 대부분의 고통은 Git 자체보다 "예상하지 못한 변화"에서 옵니다.

## 읽히는 이력 유지

명확한 commit message와 작은 작업 단위는 협업을 훨씬 차분하게 만듭니다. 완벽한 history보다 "다른 사람이 따라 읽을 수 있는 history"가 더 중요합니다.

## 점검

협업자가 repository에 어떤 변화가 언제 올라올지 대략 예측할 수 있다면 좋은 협업 리듬이 만들어진 것입니다.

