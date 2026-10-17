---
layout: layouts/doc.njk
title: 저장소 만들기
description: 프로젝트 파일을 가져오기 전에 빈 비공개 GitHub 저장소를 만듭니다.
lang: ko
section: git-github
order: 4
permalink: /ko/git-github/create-repository/
translationKey: git-create-repository
eyebrow: 주제 2
lead: GitHub에 비어 있는 비공개 저장소를 만듭니다. 다음 단계에서 이를 클론해 프로젝트 파일을 넣습니다.
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 데스크톱 브라우저의 GitHub 웹 화면을 기준으로 작성했습니다.
  workflow: 저장소 소유자와 이름 선택, 비공개 설정, 초기 파일 제외, 빈 저장소 확인.
  lastVerified: 2026-10-16 Windows 브라우저에서 GitHub 저장소 생성 옵션 화면을 확인하고 촬영했습니다. 저장소 생성은 실행하지 않았습니다.
  support: 예전 GitHub 화면으로 저장소 생성과 Quick setup 위치를 안내합니다. 생성 폼에는 Public이 선택되어 있으므로 실제 작업에서는 Private를 선택해야 합니다.
verificationCard: false
toc:
  - id: 저장소-형태-정하기
    label: 저장소 형태 정하기
  - id: 비어-있는-private-repository-만들기
    label: 빈 비공개 저장소 만들기
tags:
  - doc
---
## 저장소 형태 정하기

새 저장소의 소유자를 사용할 GitHub 계정으로 정하고, 공개 범위는 <strong>Private</strong>를 선택합니다.

<h2 id="비어-있는-private-repository-만들기">빈 비공개 저장소 만들기</h2>

프로젝트를 알아볼 수 있는 저장소 이름을 정합니다. 다음 단계에서 빈 저장소를 클론할 예정이므로 README, `.gitignore`, license는 아직 추가하지 않습니다.

<p>GitHub에 로그인한 뒤 프로필의 <strong>Repositories</strong> 탭을 엽니다.</p>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/create-repository-repositories-tab.png" alt="예전 GitHub 프로필 화면에서 Repositories 탭이 강조된 모습">

</figure>

<p><strong>Repositories</strong> 페이지에서 <strong>New</strong>를 선택합니다. 화면 구성이 다르면 <a href="https://github.com/new">GitHub의 새 저장소 페이지</a>를 바로 엽니다.</p>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/create-repository-new-button.png" alt="예전 GitHub Repositories 페이지에서 New 버튼이 강조된 모습">

</figure>

<p><strong>Owner</strong>와 <strong>Repository name</strong>을 확인하고 <strong>Private</strong>를 선택합니다. README, <code>.gitignore</code>, license를 추가하지 않은 채 <strong>Create repository</strong>를 누릅니다.</p>
<p><strong>기존 이미지에는 Public이 선택되어 있습니다. 실제 작업에서는 Private를 선택하세요.</strong></p>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/create-repository-form.png" alt="예전 GitHub 저장소 생성 폼에서 Public이 선택된 화면">

</figure>

<p>본인 저장소 이름 옆의 <strong>Private</strong> 표시와 빈 저장소의 <strong>Quick setup</strong> 안내를 확인합니다. 아래 이미지는 <strong>Quick setup</strong> 위치를 보여주는 예시이며 예전 공개 저장소 화면입니다. 실제로 만든 저장소는 <strong>Private</strong>인지 확인하세요.</p>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/create-repository-empty-repo.png" alt="예전 빈 GitHub 저장소 페이지에서 Public 표시와 Quick setup 안내가 보이는 화면">

</figure>
