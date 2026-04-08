---
layout: layouts/doc.njk
title: 클론 후 첫 푸시
description: 빈 저장소를 clone한 뒤 project 파일을 넣고 첫 commit을 push합니다.
lang: ko
section: git-github
order: 5
permalink: /ko/git-github/clone-first-push/
translationKey: git-clone-first-push
eyebrow: 단계 5
lead: 먼저 비어 있는 repository를 clone한 뒤, 그 clone 폴더 안으로 working project를 넣고 첫 push를 합니다.
toc:
  - id: 빈-저장소-clone
    label: 빈 저장소 clone
  - id: clone-안으로-project-넣기
    label: clone 안으로 project 넣기
  - id: 첫-commit과-push
    label: 첫 commit과 push
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 빈 저장소 clone

GitHub에서 만든 repository를 먼저 clone합니다.

```bash
git clone <repository-url>
cd <repository-folder>
```

<div class="doc-step-pair">
  <div>
    <p>로컬 작업 전에 GitHub에서 repository URL을 복사합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-copy-url.png" alt="clone URL이 복사된 GitHub 저장소 화면">
    <figcaption>GitHub code 메뉴에서 repository URL을 복사합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>터미널에 명령을 입력하는 대신 VS Code에서 clone 흐름을 직접 시작해도 됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-command.png" alt="Clone Repository가 보이는 VS Code Source Control 패널">
    <figcaption>VS Code Source Control 패널에서 clone 흐름을 시작할 수 있습니다.</figcaption>
  </figure>
</div>

## clone 안으로 project 넣기

이미 작업 중인 파일들을 clone 폴더 안으로 옮깁니다. 전혀 다른 디렉터리에서 무리하게 push하려고 하기보다, 처음부터 remote와 local repository 이력을 같은 루트에서 맞추는 편이 더 안정적입니다.

<div class="doc-step-pair">
  <div>
    <p>project 파일을 옮기기 전에 clone을 둘 위치를 먼저 정합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-select-folder.png" alt="clone 위치를 고르는 폴더 선택 창">
    <figcaption>clone을 둘 폴더를 먼저 선택합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>clone이 열린 뒤에야 그 안으로 project 파일을 옮겨 넣어 remote와 local 이력을 같은 루트에서 맞춥니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-open-repo.png" alt="clone된 저장소가 열린 VS Code 화면">
    <figcaption>clone이 열린 뒤 그 안에 project 파일을 옮깁니다.</figcaption>
  </figure>
</div>

## 첫 commit과 push

```bash
git status
git add .
git commit -m "Initial project import"
git push origin main
```

기본 branch 이름이 `main`이 아니라면 GitHub가 만든 branch 이름을 사용합니다.

<div class="doc-step-pair">
  <div>
    <p>파일이 clone 안에 들어갔다면 첫 commit message를 작성합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-message.png" alt="commit message가 입력된 VS Code Source Control 패널">
    <figcaption>먼저 첫 commit message를 적습니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>일반 push 흐름으로 첫 commit을 올립니다. VS Code의 commit-and-push 동작이 있다면 그대로 써도 됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-and-push.png" alt="Commit & Push가 보이는 VS Code 메뉴">
    <figcaption>필요하다면 VS Code의 commit-and-push 흐름을 그대로 써도 됩니다.</figcaption>
  </figure>
</div>

## 넘어가기 전

GitHub 페이지에 project 파일이 보이고, push 뒤 local repository가 clean 상태라면 첫 원격 게시 흐름이 완료된 것입니다.
