---
layout: layouts/doc.njk
title: Pull & Push
description: 로컬 작업과 원격 이력을 맞추는 기본 sync 루프를 반복합니다.
lang: ko
section: git-github
order: 6
permalink: /ko/git-github/pull-push/
translationKey: git-pull-push
eyebrow: Step 6
lead: 일상적인 원격 작업 흐름은 작게 유지합니다. 필요하면 먼저 pull하고, 의미 있는 단위로 commit한 뒤, 준비되면 push합니다.
toc:
  - id: start-by-checking-the-current-state
    label: 현재 상태 확인
  - id: use-a-small-daily-sync-loop
    label: 일상 sync 루프
  - id: keep-commits-coherent
    label: commit 단위 유지
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 현재 상태 확인

큰 수정을 시작하기 전에 repository 상태를 먼저 봅니다.

```bash
git status
git pull
```

아무도 remote를 바꾸지 않았다면 pull이 아무 일도 하지 않을 수 있습니다. 그것도 정상입니다.

## 일상 sync 루프

기본 루프는 보통 다음과 같습니다.

1. remote 변경 가능성이 있으면 pull
2. 로컬에서 작업
3. 의미 있는 단위로 stage와 commit
4. 새 commit을 push

## commit 단위 유지

좋은 commit은 "이력이 나중에 읽혀도 이해되는 한 덩어리 변화"입니다. 거대할 필요는 없고, 읽었을 때 무슨 변화인지 분명하면 충분합니다.

## 점검

언제 pull하고, 언제 commit하고, 언제 push하는지 즉흥적으로 판단하지 않고 설명할 수 있으면 기본 sync 루프는 자리 잡은 것입니다.

