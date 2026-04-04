---
layout: layouts/doc.njk
title: 저장소 만들기
description: 로컬 project를 올리기 전에 첫 private repository를 만듭니다.
lang: ko
section: git-github
order: 4
permalink: /ko/git-github/create-repository/
translationKey: git-create-repository
eyebrow: Step 4
lead: 첫 push 흐름을 단순하게 유지하려면 먼저 비어 있는 private repository부터 만듭니다.
toc:
  - id: choose-the-repository-shape
    label: 저장소 형태 정하기
  - id: create-an-empty-private-repository
    label: 비어 있는 private repository 만들기
  - id: keep-the-first-repository-simple
    label: 처음은 단순하게
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 저장소 형태 정하기

첫 workflow에서는 "하나의 작업 project = 하나의 private repository" 정도면 충분합니다. 첫 push가 성공하기 전까지는 파일이나 자동화를 과하게 얹지 않는 편이 좋습니다.

## 비어 있는 private repository 만들기

GitHub에서 새 private repository를 만들고, project에 맞는 분명한 이름을 정합니다. 첫 local push 흐름을 명확하게 보려면 README, `.gitignore`, license를 굳이 먼저 넣지 않아도 됩니다.

<div class="doc-section-grid">
  <div>
    <p>profile에서 repositories 목록으로 이동한 뒤 <strong>New</strong> 버튼으로 새 저장소를 시작하면 됩니다.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/create-repository-repositories-tab.png" alt="Repositories 탭이 강조된 GitHub profile 화면">
      <figcaption>GitHub profile에서 repositories 목록으로 이동합니다.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/create-repository-new-button.png" alt="New 버튼이 강조된 GitHub repositories 페이지">
      <figcaption><strong>New</strong> 버튼으로 저장소 생성 화면을 엽니다.</figcaption>
    </figure>
  </div>
</div>

<div class="doc-section-grid">
  <div>
    <p>repository 이름을 정하고 private으로 두고, 처음에는 추가 초기화 옵션을 비워 둔 채 생성하면 가장 단순합니다.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/create-repository-form.png" alt="GitHub 저장소 생성 폼">
      <figcaption>repository 이름과 공개 범위를 정해 생성 폼을 채웁니다.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/create-repository-empty-repo.png" alt="생성 직후의 비어 있는 GitHub 저장소 페이지">
      <figcaption>생성 직후 비어 있는 저장소 페이지가 보이면 정상입니다.</figcaption>
    </figure>
  </div>
</div>

## 처음은 단순하게

첫 저장소의 목적은 로컬 파일과 원격 이력이 어떻게 연결되는지 이해하는 것입니다. 복잡한 구조는 나중에 추가해도 충분합니다.

## 점검

GitHub에 private repository가 만들어졌고 아직 비어 있다면 이제 로컬 clone 단계로 넘어갈 수 있습니다.
