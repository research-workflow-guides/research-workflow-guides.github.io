---
layout: layouts/doc.njk
title: GitHub
description: 작은 팀이 함께 써도 흐름이 흐트러지지 않는 협업 방식을 정리합니다.
lang: ko
section: collaboration
order: 1
permalink: /ko/collaboration/collaboration/
translationKey: git-collaboration
eyebrow: 주제 1
lead: 작은 팀 협업은 repository 리듬이 단조롭고, 명시적이며, 다시 회복하기 쉬울수록 잘 굴러갑니다.
toc:
  - id: 협업할-때-주의-사항
    label: 협업할 때 주의 사항
  - id: 협업-초대하기
    label: 협업 초대하기
tags:
  - doc
---
## 협업할 때 주의 사항

팀은 기본 기대를 공유할 때 안정적으로 움직입니다.

- 큰 작업 전 pull
- 의미 있는 단위로 commit
- 변경을 오래 쌓아두지 말고 규칙적으로 push

파일 대량 이름 변경, 폴더 구조 재정리, 공유 섹션 대폭 수정처럼 큰 변화가 예정되어 있다면 먼저 팀에 알립니다. 협업에서 겪는 고통의 대부분은 Git 자체보다 "예상하지 못한 변화"에서 옵니다.

## 협업 초대하기

<div class="doc-step-pair">
  <div>
    <p>공동 작업자를 초대하고 싶은 repository의 Settings 탭을 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.5-100.png" alt="Settings 탭이 강조된 GitHub repository 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Settings 왼쪽 메뉴에서 Access 아래의 Collaborators를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.5-101.png" alt="Collaborators 메뉴가 강조된 GitHub repository settings 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Add people 버튼을 클릭합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-access-page.png" alt="GitHub repository Access 페이지">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>collaborator를 username이나 email로 검색합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-search-collaborator.png" alt="GitHub collaborator 검색 창">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>올바른 collaborator가 보이면 추가를 확인해 초대를 보냅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-add-collaborator.png" alt="GitHub collaborator 추가 확인 창">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>상대가 아직 수락하지 않았다면 pending invitation 상태가 보이는데, 이것은 정상적인 중간 단계입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-pending-invite.png" alt="pending invite가 보이는 GitHub access 페이지">
  </figure>
</div>

협업자가 repository에 어떤 변화가 언제 올라올지 대략 예측할 수 있다면 좋은 협업 리듬이 만들어진 것입니다.
