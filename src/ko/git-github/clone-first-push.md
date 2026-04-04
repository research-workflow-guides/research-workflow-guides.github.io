---
layout: layouts/doc.njk
title: Clone + First Push
description: 빈 저장소를 clone한 뒤 project 파일을 넣고 첫 commit을 push합니다.
lang: ko
section: git-github
order: 5
permalink: /ko/git-github/clone-first-push/
translationKey: git-clone-first-push
eyebrow: Step 5
lead: 먼저 비어 있는 repository를 clone한 뒤, 그 clone 폴더 안으로 working project를 넣고 첫 push를 합니다.
toc:
  - id: clone-the-empty-repository
    label: 빈 저장소 clone
  - id: copy-the-project-into-the-clone
    label: clone 안으로 project 넣기
  - id: make-the-first-commit-and-push
    label: 첫 commit과 push
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 빈 저장소 clone

GitHub에서 만든 repository를 먼저 clone합니다.

```bash
git clone <repository-url>
cd <repository-folder>
```

## clone 안으로 project 넣기

이미 작업 중인 파일들을 clone 폴더 안으로 옮깁니다. 전혀 다른 디렉터리에서 무리하게 push하려고 하기보다, 처음부터 remote와 local repository 이력을 같은 루트에서 맞추는 편이 더 안정적입니다.

## 첫 commit과 push

```bash
git status
git add .
git commit -m "Initial project import"
git push origin main
```

기본 branch 이름이 `main`이 아니라면 GitHub가 만든 branch 이름을 사용합니다.

## 점검

GitHub 페이지에 project 파일이 보이고, push 뒤 local repository가 clean 상태라면 첫 원격 게시 흐름이 완료된 것입니다.

