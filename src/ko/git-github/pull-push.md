---
layout: layouts/doc.njk
title: Pull과 Push
description: 첫 커밋을 GitHub에 올리고 이후 Pull과 Push로 변경을 주고받습니다.
lang: ko
section: git-github
order: 7
permalink: /ko/git-github/pull-push/
translationKey: git-pull-push
eyebrow: 주제 2
lead: 앞에서 클론한 빈 저장소에서 추가할 파일을 확인하고 첫 커밋을 만듭니다. Publish Branch로 해당 브랜치를 GitHub에 올린 뒤, 이후 작업에서 원격 커밋을 받을 때 Pull, 로컬 커밋을 올릴 때 Push를 사용합니다.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code Source Control과 통합 터미널을 기준으로 작성했습니다.
  workflow: 빈 저장소의 첫 커밋 게시, 이후 Pull과 Push.
  lastVerified: 2026-09-23 VS Code와 GitHub 공식 문서를 확인했습니다. 현재 Windows 화면 검증 대기 중.
  support: 기존 VS Code 이미지는 업데이트가 필요합니다. macOS와 Linux 화면은 추후 검증합니다.
  scopeNote: 현재 Windows 화면을 기준으로 안내합니다. macOS와 Linux 화면은 추후 검증합니다.
toc:
  - id: 용어-정리
    label: 용어 정리
  - id: 첫-커밋-게시
    label: 첫 커밋 게시
  - id: 원격-변경-받기
    label: 원격 변경 받기
  - id: 로컬-커밋-올리기
    label: 로컬 커밋 올리기
  - id: 게시-확인
    label: 게시 확인
tags:
  - doc
---

<figure class="image-frame">
  <img src="/assets/images/3-topic-1-1.PNG" alt="로컬 저장소에서 GitHub로 커밋을 보내고 다른 저장소에서 받는 Pull과 Push 흐름을 그린 기존 도식">
</figure>

## 용어 정리

- **Stage**: 다음 커밋에 넣을 변경을 고릅니다.
- **Commit**: 고른 변경을 로컬 이력에 기록합니다.
- **Push**: 로컬 커밋을 GitHub로 보냅니다.
- **Pull**: GitHub의 새 커밋을 가져와 로컬 브랜치에 반영합니다.

## 첫 커밋 게시

앞 단계의 `git status`에서 확인한 파일 중 GitHub에 올릴 프로젝트 원본을 고릅니다. 예를 들어 `check-document.tex`과 `seed-document`의 원본 파일을 확인하고, 빌드로 생성된 `.aux`, `.log`, `.fls`, `.synctex.gz`, PDF 등은 필요한 파일인지 따로 판단합니다. 제외할 파일은 Stage하기 전에 [`.gitignore`](/ko/git-github/gitignore/)에 기록합니다.

VS Code의 **Source Control**에서 필요한 파일 **각 행**의 `+`를 눌러 Stage합니다. 아래 기존 화면은 **Changes 제목의 `+`로 전체 파일을 선택**하며 생성 파일도 포함합니다. 버튼 위치만 참고하고, **Staged Changes**에 불필요한 파일이 있으면 해당 행의 `-`로 Stage를 취소하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-1.png" alt="예전 VS Code Source Control에서 Changes 제목의 전체 Stage 버튼과 생성 파일이 보이는 화면">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-2.png" alt="예전 VS Code의 Staged Changes에 LaTeX 생성 파일까지 포함된 화면">
</figure>

**Staged Changes**에 올릴 파일만 남았으면 커밋 메시지를 입력하고 **Commit**을 선택합니다. 커밋은 로컬 이력에 기록됩니다. 아래 기존 화면의 파일 목록에는 생성 파일도 있으므로, 목록은 앞에서 확인한 결과를 기준으로 판단하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-3.png" alt="예전 VS Code Source Control의 커밋 메시지 입력 화면">
</figure>

커밋을 만든 뒤 **Source Control**에 표시되는 **Publish Branch**를 선택해 현재 브랜치를 앞에서 클론한 GitHub 저장소에 올립니다. 이때 다른 저장소를 새로 만드는 **Publish to GitHub**를 선택하지 않도록, 표시된 저장소 주소를 확인합니다. 게시가 끝나면 GitHub에서 파일과 첫 커밋을 확인합니다.

## 원격 변경 받기

첫 브랜치 게시 후 GitHub에 새 커밋이 생겼다면 **Source Control**의 `...` 메뉴에서 **Pull**을 선택합니다. 작업 중인 변경이 있다면 먼저 커밋하거나 안전하게 보관한 뒤 Pull합니다. 다른 곳에서 만든 새 커밋이 없다면 가져올 파일도 없습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-10.png" alt="예전 VS Code Source Control의 더보기 메뉴 위치">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-11%20(1).png" alt="예전 VS Code Source Control의 Pull 메뉴">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-12.png" alt="예전 VS Code의 Pull 완료 알림 화면">
</figure>

터미널에서는 `git pull`을 실행할 수 있습니다. `Ctrl+Shift+P`로 **Command Palette**를 열고 `Git: Pull`을 실행해도 됩니다.

```powershell
git pull
```

<figure class="image-frame">
  <img src="/assets/images/2.2.3-10%20(2).png" alt="예전 VS Code Command Palette의 Git Pull 명령">
</figure>

## 로컬 커밋 올리기

이후 작업도 변경 파일을 확인하고 필요한 파일만 Stage한 뒤 커밋합니다. 커밋 후 **Source Control**의 `...` 메뉴에서 **Push**를 선택하거나 터미널에서 `git push`를 실행합니다. 다른 곳에서 원격 브랜치에 새 커밋을 올려 Push가 거절되면, Pull로 가져와 변경을 검토한 뒤 다시 Push합니다.

```powershell
git push
```

아래 기존 화면은 **Commit & Push** 메뉴를 보여줍니다. 이미 Stage한 파일 목록에 생성 파일이 포함되어 있으므로 이 화면을 그대로 따라 선택하지 마세요. 첫 커밋 게시에는 위의 **Publish Branch** 절차를 사용합니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-5.png" alt="예전 VS Code Source Control의 커밋 메뉴와 생성 파일 목록">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-6.png" alt="예전 VS Code의 Commit & Push 메뉴와 생성 파일 목록">
</figure>

`Ctrl+Shift+P`로 **Command Palette**를 열어 `Git: Push`를 실행할 수도 있습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-11%20(2).png" alt="예전 VS Code Command Palette의 Git Push 명령">
</figure>

## 게시 확인

GitHub 저장소에서 올린 브랜치의 파일과 최신 커밋을 확인합니다. 로컬에서는 `git status`를 실행해 예상하지 못한 변경이 남았는지 확인합니다.

```powershell
git status
```
