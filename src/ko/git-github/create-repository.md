---
layout: layouts/doc.njk
title: Repository 만들기
description: 프로젝트 파일을 올리기 전에 첫 private repository를 만듭니다.
lang: ko
section: git-github
order: 4
permalink: /ko/git-github/create-repository/
translationKey: git-create-repository
eyebrow: 4단계
lead: 첫 push 흐름을 단순하게 유지하려면 먼저 비어 있는 private repository부터 만듭니다.
toc:
  - id: repository-형태-정하기
    label: repository 형태 정하기
  - id: 비어-있는-private-repository-만들기
    label: 비어 있는 private repository 만들기
  - id: 처음은-단순하게
    label: 처음은 단순하게
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## repository 형태 정하기

첫 작업 흐름에서는 프로젝트 하나에 private repository 하나면 충분합니다. 첫 push가 끝나기 전에는 파일이나 자동화를 추가하지 않습니다.

## 비어 있는 private repository 만들기

분명한 이름으로 새 private repository를 만듭니다. 첫 push 흐름을 명확하게 보려면 README, `.gitignore`, license는 건너뜁니다.

<div class="doc-step-pair">
  <div>
    <p>profile에서 Repositories 목록을 먼저 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-repositories-tab.png" alt="Repositories 탭이 강조된 GitHub profile 화면">
    <figcaption>GitHub profile에서 Repositories 목록으로 이동합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 Repositories 페이지의 <strong>New</strong> 버튼을 눌러 repository 생성 화면으로 들어갑니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-new-button.png" alt="New 버튼이 강조된 GitHub repositories 페이지">
    <figcaption><strong>New</strong> 버튼으로 repository 생성 화면을 엽니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>repository 이름과 private 설정만 먼저 정하고, 첫 흐름에서는 기본 폼만 간단히 채우는 편이 가장 단순합니다.</p>
  </div>
  <!-- TODO: Retake this screenshot and the following empty-repo screenshot with a private repository example. Keep the captions explicitly aligned with a private repository flow. -->
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-form.png" alt="GitHub repository 생성 폼">
    <figcaption>repository 이름과 공개 범위를 정해 생성 폼을 채웁니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>생성 후 비어 있는 repository 페이지가 보이면 첫 clone 준비가 된 것입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-empty-repo.png" alt="생성 직후의 비어 있는 GitHub repository 페이지">
    <figcaption>생성 직후 비어 있는 repository 페이지가 보이면 정상입니다.</figcaption>
  </figure>
</div>

## 처음은 단순하게

첫 repository의 목적은 내 파일과 remote history가 어떻게 연결되는지 이해하는 것입니다. 복잡한 구조는 나중에 추가해도 충분합니다.

## 넘어가기 전

GitHub에 private repository가 만들어졌고 아직 비어 있다면 이제 clone 단계로 넘어갈 수 있습니다.
