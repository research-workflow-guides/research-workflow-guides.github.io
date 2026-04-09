---
layout: layouts/doc.njk
title: Conflict 해결
description: 같은 파일 conflict를 침착하게 정리하고 다시 정상 작업 흐름으로 돌아갑니다.
lang: ko
section: git-github
order: 9
permalink: /ko/git-github/conflict/
translationKey: git-conflict
eyebrow: 9단계
lead: conflict는 재난이 아니라, 겹치는 수정 중 어떤 최종 텍스트를 남길지 Git이 도움을 요청하는 상태입니다.
toc:
  - id: conflict의-의미
    label: Conflict의 의미
  - id: 파일-하나씩-해결
    label: 파일 하나씩 해결
  - id: merge-마무리
    label: merge 마무리
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## Conflict의 의미

conflict는 두 수정이 같은 줄이나 같은 영역을 동시에 건드릴 때 생깁니다.

Git은 어느 쪽을 최종 텍스트로 남길지 스스로 결정하지 않고 멈춰 섭니다.

<div class="doc-step-pair">
  <div>
    <p>처음 신호는 push 경고입니다. remote가 먼저 바뀌었으니 pull부터 하라는 뜻입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/conflict-push-warning.png" alt="먼저 pull하라는 VS Code push 경고">
    <figcaption>push가 거절되면 먼저 remote 변경을 받아와야 한다는 뜻일 수 있습니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>경고 후에는 Source Control 메뉴에서 merge 흐름을 시작합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/conflict-pull-menu.png" alt="Pull 메뉴가 강조된 VS Code Source Control 화면">
    <figcaption>보통은 pull로 merge 흐름을 먼저 시작합니다.</figcaption>
  </figure>
</div>

## 파일 하나씩 해결

VS Code Merge Editor나 conflict marker를 직접 보면서, 주변 문맥을 읽고 최종 텍스트가 무엇이어야 하는지 판단합니다.

최종 내용이 어느 한쪽과 완전히 같아야 하는 경우가 아니라면 한쪽을 통째로 받지 않습니다.

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/conflict-merge-state.png" alt="merge 진행 중인 VS Code Source Control 상태">
  <figcaption>conflict가 남아 있는 동안 repository는 merge 진행 중 상태로 머무릅니다.</figcaption>
</figure>

## merge 마무리

conflict를 해결한 뒤에는 marker가 사라졌는지 확인하고, 파일을 stage한 다음 merge commit 또는 평소 commit 흐름을 마무리합니다.

## 넘어가기 전

최종 파일 내용이 무엇이어야 하는지 설명할 수 있고, 그 뒤 repository가 다시 clean 상태로 돌아오면 conflict 처리는 올바르게 끝난 것입니다.
