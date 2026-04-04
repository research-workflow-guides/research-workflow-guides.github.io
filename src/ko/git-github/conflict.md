---
layout: layouts/doc.njk
title: Conflict
description: 같은 파일 충돌을 침착하게 정리하고 다시 정상 작업 흐름으로 돌아갑니다.
lang: ko
section: git-github
order: 9
permalink: /ko/git-github/conflict/
translationKey: git-conflict
eyebrow: Step 9
lead: conflict는 재난이 아니라, 겹치는 수정 중 어떤 최종 텍스트를 남길지 Git이 도움을 요청하는 상태입니다.
toc:
  - id: what-a-conflict-means
    label: conflict의 의미
  - id: resolve-one-file-carefully
    label: 파일 하나씩 해결
  - id: finish-the-merge-cleanly
    label: merge 마무리
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## conflict의 의미

conflict는 보통 두 수정이 같은 줄이나 아주 가까운 영역을 동시에 건드릴 때 생깁니다.

Git은 어느 쪽을 최종 텍스트로 남길지 스스로 결정하지 않고 멈춰 섭니다.

## 파일 하나씩 해결

VS Code Merge Editor나 conflict marker를 직접 보면서, 주변 문맥을 읽고 최종 텍스트가 무엇이어야 하는지 판단합니다.

한쪽을 무조건 통째로 받기보다, 최종 문서가 실제로 무엇을 말해야 하는지 기준으로 정리하는 편이 안전합니다.

## merge 마무리

충돌을 해결한 뒤에는 marker가 사라졌는지 확인하고, 파일을 stage한 다음 merge commit 또는 평소 commit 흐름을 마무리합니다.

## 점검

최종 파일 내용이 무엇이어야 하는지 설명할 수 있고, 그 뒤 repository가 다시 clean 상태로 돌아오면 conflict 처리는 올바르게 끝난 것입니다.
