---
layout: layouts/doc.njk
title: Pull과 Push
description: 로컬 작업과 원격 이력을 맞추는 기본 sync 루프를 반복합니다.
lang: ko
section: git-github
order: 6
permalink: /ko/git-github/pull-push/
translationKey: git-pull-push
eyebrow: 주제 1
lead: 일상적인 원격 작업 흐름은 작게 유지합니다. 필요하면 먼저 pull하고, 의미 있는 단위로 commit한 뒤, 준비되면 push합니다.
toc:
  - id: 용어-정리
    label: 용어 정리
  - id: 현재-상태-확인
    label: 현재 상태 확인
  - id: 일상-sync-루프
    label: 일상 sync 루프
  - id: commit-단위-유지
    label: commit 단위 유지
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---

<figure class="image-frame">
  <img src="/assets/images/3-topic-1-1.PNG" alt="Pull과 Push 워크플로우 개요">
</figure>

## 용어 정리

<dl>
  <dt>Stage</dt>
  <dd>변경 사항을 커밋에 포함시키기 전에 준비하는 작업.</dd>
  <dt>Commit</dt>
  <dd>로컬 Git 저장소에 변경 사항을 저장하는 작업.</dd>
  <dt>Push</dt>
  <dd>로컬 Git 저장소에 있는 커밋을 원격 저장소로 전송하는 작업.</dd>
  <dt>Pull</dt>
  <dd>원격 저장소에 있는 커밋을 가져와 로컬 브랜치에 병합하는 작업.</dd>
</dl>

## 현재 상태 확인

큰 수정을 시작하기 전에 repository 상태를 먼저 봅니다.

```bash
git status
git pull
```

아무도 remote를 바꾸지 않았다면 pull은 아무 일도 하지 않습니다. 그것도 정상입니다.

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/pull-menu.png" alt="Pull 메뉴가 강조된 VS Code Source Control 화면">

</figure>

## 일상 sync 루프

기본 루프는 다음과 같습니다.

1. remote 변경 가능성이 있으면 pull
2. 로컬에서 작업
3. 의미 있는 단위로 stage와 commit
4. 새 commit을 push

## commit 단위 유지

좋은 commit은 "이력이 나중에 읽혀도 이해되는 한 덩어리 변화"입니다. 거대할 필요는 없고, 읽었을 때 무슨 변화인지 분명하면 충분합니다.

<div class="doc-step-pair">
  <div>
    <p>먼저 짧은 commit message로 지금 작업 단위를 분명하게 붙잡아 둡니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-message.png" alt="commit message가 입력된 VS Code 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 push를 실행해 local에서 만든 commit을 remote history와 다시 맞춥니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-and-push.png" alt="Commit & Push가 강조된 VS Code 메뉴">

  </figure>
</div>

## 넘어가기 전

언제 pull하고, 언제 commit하고, 언제 push하는지 즉흥적으로 판단하지 않고 설명할 수 있으면 기본 sync 루프는 자리 잡은 것입니다.
