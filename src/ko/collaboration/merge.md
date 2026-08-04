---
layout: layouts/doc.njk
title: Merge
description: 승인된 Pull Request를 main에 merge하고 local repository를 동기화합니다.
lang: ko
section: collaboration
order: 5
permalink: /ko/collaboration/merge/
translationKey: git-merge
eyebrow: 주제 4
lead: Review를 마친 task branch를 Pull Request를 통해 merge하고, 그 결과를 local repository의 main으로 가져옵니다.
outcome: 승인된 Pull Request가 GitHub의 main에 merge되고 local main도 같은 이력으로 동기화됩니다.
prerequisites:
  - Pull Request에 해결되지 않은 review 요청이나 실패한 필수 check가 없습니다.
  - Merge하기 전에 base branch와 merge 방법을 확인했습니다.
completion: GitHub가 Pull Request를 merged로 표시하고, pull한 local main이 clean하고 최신 상태입니다.
commonProblems:
  - Review가 끝나기 전에 merge하면 Pull Request에 기록된 협업 결정을 건너뛰게 됩니다.
  - 의도하지 않은 merge 방법을 선택하면 repository 정책과 다른 형태의 이력이 만들어질 수 있습니다.
toc:
  - id: merge의-의미
    label: Merge의 의미
  - id: pull-request가-준비됐는지-확인하기
    label: Pull Request가 준비됐는지 확인하기
  - id: 승인된-pull-request-merge하기
    label: 승인된 Pull Request merge하기
  - id: local-main-업데이트하기
    label: local main 업데이트하기
  - id: task-branch로-main-가져오기
    label: task branch로 main 가져오기
tags:
  - doc
---
## Merge의 의미

Merge는 한 branch의 commit 이력을 다른 branch에 합치는 작업입니다. 이 핵심 흐름에서는 이전 문서에서 만든 Pull Request를 review한 뒤 task branch를 `main`에 merge합니다.

Merge는 파일을 손으로 복사하는 것이 아닙니다. Git은 branch 이력을 비교하고, GitHub는 review 결정과 merge 결과를 Pull Request에 기록합니다.

같은 Git 작업을 local repository에서 직접 실행할 수도 있습니다. 직접 local merge는 혼자 작업할 때 유용할 수 있지만, Pull Request review를 건너뛰므로 이 협업 핵심 경로에는 포함하지 않습니다.

## Pull Request가 준비됐는지 확인하기

Pull Request로 돌아가 base branch와 compare branch를 다시 확인합니다. 보통 base는 `main`이고 compare branch에는 task 작업이 들어 있어야 합니다.

요청된 수정 사항을 반영했고, 필요한 승인이 있으며, 필수 check가 통과했는지 확인합니다. 마지막 review 뒤에 commit이 추가됐다면 최종 파일 차이를 다시 읽습니다.

## 승인된 Pull Request merge하기

Repository에서 허용하는 merge 방법을 사용합니다. GitHub는 merge commit, squash merge, rebase merge를 제공할 수 있습니다. 팀 정책이 문서화되어 있다면 버튼 이름이 짧다는 이유로 선택하지 말고 그 정책을 따릅니다.

GitHub가 Pull Request를 merge할 수 있다고 표시할 때만 merge를 확정합니다. 작업이 끝나면 GitHub가 PR을 merged로 표시하고 `main`에 검토된 변경 사항이 포함됩니다. Remote task branch는 merge가 성공한 것을 확인한 뒤에만 삭제합니다.

## local main 업데이트하기

Merge는 GitHub에서 이루어졌으므로 새 작업을 시작하기 전에 local repository를 업데이트합니다. Terminal을 열고 `main`으로 이동한 뒤 merge된 이력을 가져옵니다.

```shell
git switch main
git pull
```

`git status`와 필요하면 `git log --oneline --graph`를 실행해 local `main`이 clean하고 최신이며 merge된 작업을 포함하는지 확인합니다.

## task branch로 main 가져오기

예를 들어 `new-contents` branch에서 작업 중인데 `main`의 최신 작업을 가져와야 할 때가 있습니다. 이 경우 먼저 변경 사항을 받을 branch에 있는지 확인합니다.

예를 들어 `new-contents`에 있는 상태에서 다음을 실행합니다.

```shell
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

어떤 branch가 변경 사항을 받아야 하는지 확실할 때만 merge하세요. 다른 사람이 작업을 확인한 뒤 `main`에 포함해야 한다면 직접 merge하는 대신 Pull Request를 사용하세요.
