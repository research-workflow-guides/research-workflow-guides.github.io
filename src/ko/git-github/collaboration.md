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

<div class="doc-section-grid">
  <div>
    <p>협업을 시작하기 전에 가장 중요한 GitHub 화면은 access 설정과 현재 누가 접근권한을 갖는지 보여 주는 화면입니다.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/collaboration-settings-tab.png" alt="Settings 탭이 강조된 GitHub 저장소 화면">
      <figcaption>먼저 repository settings로 이동합니다.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/collaboration-access-page.png" alt="GitHub repository access 페이지">
      <figcaption>access 페이지에서 현재 collaborator 상태를 확인할 수 있습니다.</figcaption>
    </figure>
  </div>
</div>

<div class="doc-section-grid">
  <div>
    <p>실제 초대 흐름은 단순합니다. collaborator를 검색하고 추가한 뒤, 초대가 pending인지 accepted인지 확인하면 됩니다.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/collaboration-search-collaborator.png" alt="GitHub collaborator 검색 창">
      <figcaption>username이나 email로 collaborator를 검색합니다.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/collaboration-add-collaborator.png" alt="GitHub collaborator 추가 확인 창">
      <figcaption>올바른 collaborator를 선택한 뒤 초대를 보냅니다.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/collaboration-pending-invite.png" alt="pending invite가 보이는 GitHub access 페이지">
      <figcaption>상대가 수락하기 전까지는 pending invitation 상태가 정상입니다.</figcaption>
    </figure>
  </div>
</div>

## 읽히는 이력 유지

명확한 commit message와 작은 작업 단위는 협업을 훨씬 차분하게 만듭니다. 완벽한 history보다 "다른 사람이 따라 읽을 수 있는 history"가 더 중요합니다.

## 점검

협업자가 repository에 어떤 변화가 언제 올라올지 대략 예측할 수 있다면 좋은 협업 리듬이 만들어진 것입니다.
