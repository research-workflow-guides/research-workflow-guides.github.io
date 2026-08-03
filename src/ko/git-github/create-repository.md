---
layout: layouts/doc.njk
title: 저장소 만들기
description: 프로젝트 파일을 올리기 전에 첫 private repository를 만듭니다.
lang: ko
section: git-github
order: 4
permalink: /ko/git-github/create-repository/
translationKey: git-create-repository
eyebrow: 주제 2
lead: 첫 push 흐름을 단순하게 유지하려면 먼저 비어 있는 private repository부터 만듭니다.
outcome: 원고 프로젝트에 사용할 비어 있는 private GitHub repository가 생성됩니다.
prerequisites:
  - 사용할 GitHub 계정으로 로그인되어 있습니다.
  - 고유한 repository 이름과 공개 범위를 결정했습니다.
completion: Repository 화면에 선택한 이름과 Private 표시가 보이고 README, license, `.gitignore` 자동 commit이 없습니다.
commonProblems:
  - README를 미리 생성하면 기존 local project의 첫 push 전에 원격 이력이 생깁니다.
  - 공개되지 않은 연구 자료를 올리기 전에 repository 공개 범위를 다시 확인해야 합니다.
verification:
  status: needs-review
  environment: GitHub web interface이며 screenshot은 Windows desktop browser 경로입니다.
  workflow: 자동 생성 파일 없이 비어 있는 private repository 만들기.
  lastVerified: 현재 GitHub UI walkthrough 대기 중.
  support: Browser workflow는 운영체제와 무관하며 screenshot은 desktop 경로만 설명합니다.
toc:
  - id: 저장소-형태-정하기
    label: 저장소 형태 정하기
  - id: 비어-있는-private-repository-만들기
    label: 비어 있는 private repository 만들기
tags:
  - doc
---
## 저장소 형태 정하기

첫 workflow에서는 프로젝트 하나에 private repository 하나면 충분합니다. 첫 push가 끝나기 전에는 파일이나 자동화를 추가하지 않습니다.

## 비어 있는 private repository 만들기

분명한 이름으로 새 private repository를 만듭니다. 첫 push 흐름을 명확하게 보려면 README, `.gitignore`, license는 건너뜁니다.

<div class="doc-step-pair">
  <div>
    <p>profile에서 Repositories 목록을 먼저 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-repositories-tab.png" alt="Repositories 탭이 강조된 GitHub profile 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 Repositories 페이지의 <strong>New</strong> 버튼을 눌러 저장소 생성 화면으로 들어갑니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-new-button.png" alt="New 버튼이 강조된 GitHub repositories 페이지">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>repository 이름과 private 설정만 먼저 정하고, 첫 흐름에서는 기본 폼만 간단히 채우는 편이 가장 단순합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-form.png" alt="GitHub 저장소 생성 폼">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>생성 후 비어 있는 저장소 페이지가 보이면 첫 clone 준비가 된 것입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-empty-repo.png" alt="생성 직후의 비어 있는 GitHub 저장소 페이지">

  </figure>
</div>

GitHub에 private repository가 만들어졌고 아직 비어 있다면 이제 로컬 clone 단계로 넘어갈 수 있습니다.
