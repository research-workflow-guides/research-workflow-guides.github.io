---
layout: layouts/doc.njk
title: 기본 사용법
description: 수정, build, preview, SyncTeX 루프를 일상적으로 반복하는 방법을 정리합니다.
lang: ko
section: writing-in-vs-code
order: 3
permalink: /ko/writing-in-vs-code/usage-basics/
translationKey: writing-usage-basics
eyebrow: Topic 3
lead: 일상 작업 루프는 단순합니다. 수정하고, build하고, preview를 보고, source와 PDF 사이를 자연스럽게 오갑니다.
toc:
  - id: the-basic-loop
    label: 기본 루프
  - id: use-preview-early
    label: preview를 일찍 열기
  - id: use-synctex-both-ways
    label: SyncTeX 양방향 사용
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 기본 루프

대부분의 작성 세션에서는 다음 네 동작을 반복합니다.

1. source를 수정합니다.
2. 문서를 build합니다.
3. PDF를 확인합니다.
4. 다시 source로 돌아가 계속 작성합니다.

중요한 것은 많은 명령을 외우는 것이 아니라, 이 루프가 자연스럽게 몸에 붙는 것입니다.

## preview를 일찍 열기

문서가 길어지기 전에 PDF preview를 엽니다. 레이아웃 문제, 오류, 섹션 흐름을 쓰는 중에도 바로 확인할 수 있습니다.

자주 확인하면 작은 실수가 쌓이는 것도 막을 수 있습니다.

## SyncTeX 양방향 사용

LaTeX Workshop의 강점은 source와 PDF를 양방향으로 오갈 수 있다는 점입니다.

- source 위치에서 대응하는 PDF 위치로 이동
- PDF 클릭 위치에서 대응하는 source 줄로 이동

문서가 길어질수록 이 기능이 탐색 시간을 크게 줄여줍니다.

## 점검

interface를 다시 찾느라 멈추지 않고 수정, build, preview, source/PDF 이동을 반복할 수 있으면 다음 문서로 넘어갑니다.

