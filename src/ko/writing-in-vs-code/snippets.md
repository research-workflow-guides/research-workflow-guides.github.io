---
layout: layouts/doc.njk
title: Snippets
description: 자주 쓰는 LaTeX 조각을 snippet으로 묶어 반복 입력을 줄입니다.
lang: ko
section: writing-in-vs-code
order: 5
permalink: /ko/writing-in-vs-code/snippets/
translationKey: writing-snippets
eyebrow: Topic 5
lead: snippet은 문서 구조를 가리지 않으면서 반복 입력만 줄여줄 때 가장 유용합니다.
toc:
  - id: start-with-high-frequency-patterns
    label: 자주 쓰는 패턴부터
  - id: example-snippet
    label: 예시 snippet
  - id: avoid-oversized-snippet-libraries
    label: 너무 큰 snippet 모음 피하기
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 자주 쓰는 패턴부터

snippet은 정말 자주 타이핑하는 패턴에만 먼저 만듭니다.

- theorem 환경
- aligned equation block
- figure, table 기본 껍데기
- 반복되는 문서 scaffold

한 달에 한 번 쓸까 말까 한 패턴은 core snippet 집합에 넣지 않아도 됩니다.

## 예시 snippet

```json
{
  "align environment": {
    "prefix": "ali",
    "body": [
      "\\begin{align}",
      "  $1",
      "\\end{align}"
    ]
  }
}
```

prefix는 짧지만 기억하기 쉬운 쪽이 좋습니다.

## 너무 큰 snippet 모음 피하기

snippet 파일이 너무 커지면 그것 자체가 관리 대상이 됩니다. 먼저 믿고 쓸 수 있는 작은 집합으로 시작하고, 반복 입력이 실제로 시간을 잡아먹는다고 느껴질 때만 추가합니다.

## 점검

snippet이 자주 쓰는 LaTeX 패턴을 빨라지게 만들고, 전개된 구조도 여전히 이해할 수 있다면 이 문서의 목적은 충분히 달성된 것입니다.
