---
layout: layouts/doc.njk
title: 병합
description: 검토가 끝난 Pull Request를 병합하고 로컬 main을 갱신합니다.
lang: ko
section: collaboration
order: 5
permalink: /ko/collaboration/merge/
translationKey: git-merge
eyebrow: 주제 4
lead: 검토를 마친 Pull Request를 GitHub에서 <code>main</code>에 병합하고, Windows의 VS Code 통합 터미널에서 로컬 <code>main</code>을 갱신합니다.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 데스크톱 브라우저와 VS Code 통합 터미널을 기준으로 작성했습니다.
  workflow: Pull Request 병합, 로컬 main 갱신, 필요한 경우 작업 브랜치에 main 반영.
  lastVerified: 2026-09-23 공식 문서와 임시 로컬 저장소의 명령 흐름을 확인했습니다. 현재 Windows 화면 검증 대기 중.
  support: 기존 이미지는 new-contents 작업 브랜치의 충돌 사례입니다. macOS와 Linux 화면은 추후 검증합니다.
  scopeNote: 현재 Windows 데스크톱 브라우저와 VS Code 통합 터미널을 기준으로 안내합니다. macOS와 Linux 절차는 추후 검증합니다.
toc:
  - id: merge의-의미
    label: 병합의 의미
  - id: pull-request가-준비됐는지-확인하기
    label: Pull Request 확인
  - id: 승인된-pull-request-merge하기
    label: Pull Request 병합
  - id: local-main-업데이트하기
    label: 로컬 main 갱신
  - id: task-branch로-main-가져오기
    label: 작업 브랜치에 main 반영하기
tags:
  - doc
---
<h2 id="merge의-의미">병합의 의미</h2>

병합은 작업 브랜치의 변경을 대상 브랜치에 반영하는 작업입니다. 이 안내에서는 검토가 끝난 Pull Request를 GitHub에서 `main`에 병합합니다.

GitHub는 Pull Request에 검토 의견과 병합 결과를 남깁니다. 선택한 병합 방식에 따라 `main`에 남는 커밋 이력은 달라집니다.

<h2 id="pull-request가-준비됐는지-확인하기">Pull Request 확인</h2>

Pull Request 상단에서 `base: main`과 `compare: draft-section`을 확인합니다. **Files changed**에서 병합할 파일 목록도 다시 살펴봅니다.

요청받은 수정과 팀 검토를 마쳤는지 확인합니다. 저장소가 승인이나 자동 검사를 필수로 지정했다면 통과 여부를 확인합니다. 마지막 검토 뒤 새 커밋이 올라왔다면 파일 차이를 다시 읽고 필요하면 재검토를 요청합니다.

<h2 id="승인된-pull-request-merge하기">Pull Request 병합</h2>

PR 하단에서 저장소가 허용하는 [병합 방법](https://docs.github.com/en/pull-requests/reference/pull-request-merges)을 확인합니다. **Merge pull request**는 개별 커밋과 병합 커밋을 남기고, **Squash and merge**는 변경을 한 커밋으로 묶으며, **Rebase and merge**는 커밋을 `main` 위에 다시 배치합니다. 팀 규칙이 있다면 그 방법을 선택합니다.

병합 상태를 확인한 뒤 선택한 방법의 버튼과 확인 버튼을 누릅니다. PR에 **Merged**가 표시되고 `main`에 변경이 반영됐는지 확인합니다. 팀에서 작업 브랜치를 더 쓰지 않는다면 그다음 **Delete branch**로 원격 브랜치를 정리할 수 있습니다.

<h2 id="local-main-업데이트하기">로컬 main 갱신</h2>

GitHub에서 병합한 뒤 Windows의 VS Code 통합 터미널을 엽니다. `git status`로 미완료 변경을 확인해 정리하고 로컬 `main`으로 전환합니다. `--ff-only`를 사용해 GitHub의 `main`을 가져옵니다.

```powershell
git status
git switch main
git pull --ff-only origin main
```

가져오기가 끝나면 `git status`로 현재 브랜치와 남은 변경을 확인하고, 병합한 파일이 로컬에도 반영됐는지 살펴봅니다. `--ff-only`가 거절되면 로컬 `main`에 별도 커밋이 있는지 확인합니다.

<h2 id="task-branch로-main-가져오기">작업 브랜치에 main 반영하기</h2>

PR이 아직 열려 있고 `main`의 최신 변경을 작업 브랜치에 반영해야 할 때만 이 절차를 사용합니다. 먼저 미완료 변경을 정리하고 `draft-section`으로 이동합니다.

```powershell
git status
git switch draft-section
git fetch origin
git merge origin/main
```

`git fetch origin`은 GitHub의 브랜치 정보를 갱신하고, `git merge origin/main`은 그 변경을 현재 `draft-section`에 반영합니다. 아래 기존 이미지는 `new-contents`에서 `git pull origin main`을 사용하다 충돌이 발생한 예시입니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-1.png" alt="기존 Windows 터미널에서 new-contents 브랜치에 main을 가져오다 충돌이 발생한 화면">
</figure>

두 브랜치의 변경이 충돌하면 Git이 병합을 멈추고 VS Code의 **Source Control > Merge Changes**에 해당 파일을 표시합니다. 충돌이 없으면 병합이 바로 끝날 수 있습니다.

충돌 파일의 내용을 결정하는 방법은 [VS Code 공식 충돌 해결 안내](https://code.visualstudio.com/docs/sourcecontrol/merge-conflicts)에서 확인할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-2.png" alt="기존 VS Code Source Control의 Merge Changes에 충돌 파일이 표시된 화면">
</figure>

충돌 파일을 열어 최종 내용을 정하고 저장합니다. 해결한 파일만 Stage한 뒤 **Commit**으로 병합을 완료합니다. 아래 기존 화면의 **Continue** 버튼은 현재 Windows 화면에서 재검증이 필요합니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-3.png" alt="기존 VS Code 화면에서 충돌 파일이 Stage된 뒤 강조된 Continue 버튼">
</figure>

병합 커밋을 마치면 Source Control에 업로드할 커밋 수가 표시될 수 있습니다. 아래 기존 화면의 `from_main`은 예시 커밋 메시지입니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-4.png" alt="기존 VS Code Source Control에서 from_main 커밋 뒤 Sync Changes 2↑가 표시된 화면">
</figure>

병합 커밋을 마친 뒤 `git push`로 작업 브랜치를 GitHub에 올립니다. 아래 기존 이미지의 **Sync Changes**는 Pull과 Push를 함께 실행할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-5.png" alt="기존 VS Code Source Control에서 Sync Changes 2↑ 버튼이 강조된 화면">
</figure>

**Sync Changes**를 선택했다면 확인 창의 Pull·Push 대상 브랜치를 읽습니다. 아래 기존 화면은 `origin/new-contents`를 보여주므로, `draft-section`에서 작업 중이라면 이름이 다를 때 취소하고 현재 브랜치를 다시 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-6.png" alt="기존 VS Code가 origin/new-contents를 Pull·Push한다고 알리는 Sync Changes 확인 창">
</figure>

아래 기존 이미지는 **Git Graph**에 병합 커밋이 표시된 사례입니다. 브랜치가 빠른 전진으로 갱신되면 별도 병합 커밋이 생기지 않을 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-7.png" alt="기존 Git Graph에서 new-contents 브랜치의 병합 커밋과 origin/main을 보여주는 화면">
</figure>
