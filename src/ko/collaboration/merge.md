---
layout: layouts/doc.njk
title: Merge
description: 분리된 branch의 작업이 준비되었을 때 main으로 다시 합칩니다.
lang: ko
section: collaboration
order: 3
permalink: /ko/collaboration/merge/
translationKey: git-merge
eyebrow: 주제 3
lead: Merge는 한 branch의 작업을 다른 branch로 가져오는 과정입니다. 보통 작업 branch를 main으로 다시 합칠 때 사용합니다.
toc:
  - id: merge의-의미
    label: Merge의 의미
  - id: branch-준비하기
    label: Branch 준비하기
  - id: main으로-merge하기
    label: main으로 merge하기
  - id: merge-후-push하기
    label: merge 후 push하기
  - id: 다른-branch에서-pull하기
    label: 다른 branch에서 pull하기
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## Merge의 의미

Merge는 한 branch의 commit 이력을 다른 branch에 합치는 작업입니다. 일반적인 흐름에서는 어떤 작업을 위해 별도 branch를 만들고, 그곳에서 작업을 끝낸 뒤 해당 branch를 `main`으로 다시 merge합니다.

Merge는 파일을 손으로 복사하는 것이 아닙니다. Git이 branch 이력을 비교한 뒤 선택한 변경 사항을 현재 사용 중인 branch로 가져오는 것입니다.

Merge는 다음과 같은 경우에 사용합니다.

- branch 작업이 끝났을 때
- 변경 사항을 `main`의 일부로 만들고 싶을 때
- 혼자 작업 중이거나 팀이 해당 branch를 합쳐도 된다고 합의했을 때

## Branch 준비하기

Merge하기 전에는 현재 변경 사항을 commit하거나 stash하세요. Merge는 깨끗한 작업 상태에서 시작하는 것이 좋습니다.

Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>로 새 terminal을 여세요. 그다음 완료된 작업을 받을 branch로 이동합니다.

```bash
git switch main
```

그다음 `main`의 최신 버전을 내려받습니다.

```bash
git pull
```

## main으로 merge하기

완료된 branch를 현재 사용 중인 branch로 merge합니다.

```bash
git merge draft-section
```

이 예시에서 `draft-section`은 완료된 작업이 들어 있는 branch입니다. `main`은 그 작업을 받는 branch입니다.

Git이 변경 사항을 자동으로 합칠 수 있으면 merge는 바로 끝납니다. 두 branch에서 같은 파일의 같은 부분을 수정했다면 Git이 멈추고 conflict 해결을 요청할 수 있습니다.

## merge 후 push하기

Merge가 성공하면 업데이트된 `main` branch를 GitHub에 올립니다.

```bash
git push origin main
```

Merge된 branch가 더 이상 필요하지 않다면 중요한 작업이 `main`에 들어갔는지 확인한 뒤 삭제할 수 있습니다.

## 다른 branch에서 pull하기

예를 들어 `new-contents` branch에서 작업 중인데 `main`의 최신 작업을 가져와야 할 때가 있습니다. 이 경우 먼저 변경 사항을 받을 branch에 있는지 확인합니다.

예를 들어 `new-contents`에 있는 상태에서 다음을 실행합니다.

```bash
git pull origin main
```

이 명령어는 GitHub의 최신 `main` branch를 가져와 현재 사용 중인 branch에 merge합니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-1.png" alt="다른 branch에서 git pull origin main을 실행하는 terminal">
</figure>

두 branch가 같은 파일의 같은 부분을 수정했다면 Git이 멈추고 conflict 해결을 요청할 수 있습니다. 이때 VS Code의 Source Control에 merge 상태가 표시됩니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-2.png" alt="main을 다른 branch로 pull한 뒤 VS Code Source Control에 표시된 merge changes">
</figure>

Conflict를 해결하고 파일을 stage한 뒤 `Continue`를 클릭하면 merge commit을 만들 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-3.png" alt="merge changes가 stage된 뒤 VS Code Source Control의 Continue 버튼">
</figure>

VS Code가 merge commit message를 준비합니다. 기본 message를 그대로 사용하거나, merge 내용을 설명하는 짧은 message로 바꿀 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-4.png" alt="branch에 main을 pull한 뒤 VS Code Source Control에 표시된 commit message">
</figure>

그다음 sync하거나 push해서 GitHub에도 merge commit이 올라가게 합니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-5.png" alt="merge commit 뒤 VS Code Source Control의 Sync Changes 버튼">
</figure>

VS Code가 현재 branch의 commit을 pull하고 push한다고 경고할 수 있습니다. GitHub의 해당 branch를 업데이트할 준비가 되었을 때만 확인하세요.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-6.png" alt="branch commit을 sync하기 전 VS Code 확인 창">
</figure>

Sync가 끝나면 Git Graph에서 현재 branch에 merge commit이 표시됩니다.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-7.png" alt="main을 다른 branch에 pull한 뒤 Git Graph에 표시된 merge commit">
</figure>

단순히 `git pull`만 입력하면 현재 branch의 upstream branch에서 pull합니다. 다른 branch에 머무른 채 `main`에서 pull하려면 `origin main`을 명시하세요.

## 넘어가기 전

어떤 branch가 변경 사항을 받아야 하는지 확실할 때만 merge하세요. 다른 사람이 작업을 확인한 뒤 `main`에 포함해야 한다면 직접 merge하는 대신 Pull Request를 사용하세요.
