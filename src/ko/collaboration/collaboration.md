---
layout: layouts/doc.njk
title: 협업 시작
description: 비공개 저장소에 공동 작업자를 초대하고 변경 공유 순서를 정합니다.
lang: ko
section: collaboration
order: 1
permalink: /ko/collaboration/collaboration/
translationKey: git-collaboration
eyebrow: 주제 1
lead: 비공개 저장소에 공동 작업자를 초대하고, 초대 수락을 확인합니다. 함께 작업할 때는 Pull, Commit, Push의 순서를 팀과 맞춥니다.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 데스크톱 브라우저의 개인 계정 소유 비공개 저장소를 기준으로 작성했습니다.
  workflow: 공동 작업자 초대, 수락 확인, 변경 공유 순서.
  lastVerified: 2026-09-23 GitHub 공식 문서를 확인했습니다. 현재 Windows 화면 검증 대기 중.
  support: 기존 이미지는 공개 저장소의 예전 화면입니다. macOS와 Linux, 조직 저장소 화면은 추후 검증합니다.
  scopeNote: 현재 Windows 데스크톱 브라우저의 개인 계정 소유 비공개 저장소를 기준으로 안내합니다. macOS·Linux와 조직 저장소 화면은 추후 검증합니다.
toc:
  - id: 협업할-때-주의-사항
    label: 협업할 때 주의 사항
  - id: 협업-초대하기
    label: 협업 초대하기
  - id: 초대-확인
    label: 초대 확인
tags:
  - doc
---
## 협업할 때 주의 사항

작업을 시작하기 전에는 원격 변경을 확인하고 필요한 경우 Pull합니다. 변경은 작업 단위로 Commit하고, 공유할 준비가 되면 Push합니다.

파일 이름을 한꺼번에 바꾸거나 폴더 구조·공유 문서를 크게 수정할 예정이라면 작업 전에 팀에 알립니다. 변경 범위와 공유 시점을 알려 다른 작업과 겹치는 부분을 조정합니다.

## 협업 초대하기

공동 작업자에게는 저장소 읽기·쓰기 권한이 생기므로 초대할 GitHub 계정을 확인하세요. 아래 기존 이미지는 공개 저장소의 예전 화면이므로 메뉴 위치만 참고합니다. 자세한 절차는 [GitHub 공식 초대 안내](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)에서 확인할 수 있습니다.

<div class="doc-step-pair">
  <div>
    <p>초대할 비공개 저장소를 열고 <strong>Settings</strong>를 선택합니다. 탭이 보이지 않으면 저장소 상단의 더보기 메뉴에서 <strong>Settings</strong>를 찾습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.5-100.png" alt="예전 공개 GitHub 저장소에서 Settings 탭이 강조된 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Settings 왼쪽 메뉴에서 Access 아래의 Collaborators를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.5-101.png" alt="예전 공개 GitHub 저장소 설정에서 Collaborators 메뉴가 강조된 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Add people 버튼을 클릭합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-access-page.png" alt="예전 공개 GitHub 저장소의 Add people 버튼이 보이는 Access 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>GitHub 사용자 이름이나 이메일을 입력하고, 검색 결과에서 초대할 계정을 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-search-collaborator.png" alt="예전 GitHub 공동 작업자 검색 창">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>검색 결과의 표시 이름과 사용자 이름이 맞는지 확인한 뒤, 선택한 계정을 저장소에 추가하는 버튼을 눌러 초대를 보냅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-add-collaborator.png" alt="예전 GitHub 화면에서 선택한 공동 작업자 계정과 초대 확인 버튼">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>상대가 초대를 수락하기 전에는 초대가 대기 상태로 표시됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-pending-invite.png" alt="예전 공개 GitHub 저장소의 Pending Invite 상태가 보이는 Access 화면">
  </figure>
</div>

## 초대 확인

초대가 수락된 뒤 공동 작업자가 비공개 저장소를 열 수 있는지 확인합니다. 상대가 접근할 수 없다면 초대를 보낸 GitHub 사용자 이름이나 이메일 주소가 실제 사용하는 계정과 일치하는지 확인합니다.
