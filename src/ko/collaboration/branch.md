---
layout: layouts/doc.njk
title: Branch
description: 브랜치를 사용해 작업을 분리하고, 작업 맥락을 바꾸며, main 흐름을 방해하지 않고 협업합니다.
lang: ko
section: collaboration
order: 2
permalink: /ko/collaboration/branch/
translationKey: git-branch
eyebrow: 주제 2
lead: 브랜치는 협업자가 각자의 작업 흐름에서 수정한 뒤, 준비된 변경 사항을 main 프로젝트 이력으로 다시 합칠 수 있게 해줍니다.
toc:
  - id: branch의-의미
    label: Branch의 의미
  - id: branch-만들기
    label: Branch 만들기
  - id: branch-목록-확인하기
    label: Branch 목록 확인하기
  - id: branch-이동하기
    label: Branch 이동하기
  - id: 다른-branch에서-pull하기
    label: 다른 branch에서 pull하기
  - id: branch-삭제하기
    label: Branch 삭제하기
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## Branch의 의미

Branch는 같은 repository 안에서 이름을 가진 별도의 작업 흐름입니다. 보통 `main` branch에는 안정적인 프로젝트 이력이 있고, 다른 branch에는 초안, 실험, 수정, 협업자별 작업을 따로 담을 수 있습니다.

Branch에서 작업한다고 해서 repository를 새로 만드는 것은 아닙니다. commit 이력을 가리키는 별도의 포인터를 만드는 것이므로, main 흐름을 바로 바꾸지 않고 commit을 만들 수 있습니다.

Branch는 다음과 같은 경우에 유용합니다.

- 두 명 이상이 동시에 작업해야 할 때
- 하나의 변경 사항이 여러 commit으로 나뉠 때
- main 작업에 합치기 전에 아이디어를 먼저 테스트하고 싶을 때

## Branch 만들기

Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>로 새 terminal을 여세요. 그다음 다음 명령어를 입력합니다.

`main`과 분리해서 진행해야 하는 작업을 시작하기 전에 branch를 만듭니다.

```bash
git branch draft-section
git switch draft-section
```

새 branch를 만들고 바로 이동하려면 다음 명령어를 사용할 수도 있습니다.

```bash
git switch -c draft-section
```

Branch 이름은 작업을 설명하는 짧은 이름으로 만드세요. 예를 들어 `fix-conflict-notes`, `revise-introduction`, `add-results-table`처럼 정할 수 있습니다.

## Branch 목록 확인하기

repository 안의 local branch를 확인하려면 다음을 입력합니다.

```bash
git branch
```

현재 사용 중인 branch 옆에는 `*` 표시가 붙습니다.

GitHub에 있는 remote branch까지 함께 확인하려면 다음을 입력합니다.

```bash
git branch -a
```

이 명령어는 branch가 내 컴퓨터에만 있는지, GitHub에도 있는지 확실하지 않을 때 유용합니다.

## Branch 이동하기

Branch를 이동한다는 것은 현재 폴더에서 어떤 작업 흐름을 보고 있는지 바꾸는 것입니다. 이동 후에는 VS Code 안의 파일들이 선택한 branch 상태에 맞게 바뀝니다.

```bash
git switch main
git switch draft-section
```

Branch를 이동하기 전에 현재 변경 사항을 commit하거나 stash하세요. commit하지 않은 변경 사항이 덮어써질 수 있다면 Git이 branch 이동을 멈출 수 있습니다.

Branch를 이동하는 것은 작업을 삭제하는 것이 아닙니다. 현재 폴더가 보여주는 commit과, 다음 commit이 추가될 위치를 바꾸는 것입니다.

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

## Branch 삭제하기

분리해서 진행하던 작업이 끝났거나, merge되었거나, 더 이상 필요하지 않다면 branch를 삭제합니다.

현재 사용 중인 branch는 삭제할 수 없습니다. 먼저 유지할 branch로 이동합니다.

```bash
git switch main
```

그다음 local branch를 삭제합니다.

```bash
git branch -d draft-section
```

`-d` 옵션은 더 안전한 선택입니다. merge되지 않은 commit이 있으면 Git이 삭제를 막아줍니다. 정말 버릴 branch라면 강제로 삭제할 수 있습니다.

```bash
git branch -D draft-section
```

이미 GitHub에 push한 branch라면 remote branch도 따로 삭제합니다.

```bash
git push origin --delete draft-section
```

## 넘어가기 전

아직 공유할 준비가 되지 않은 작업은 branch로 분리하세요. Branch를 merge하거나 삭제하기 전에는 중요한 commit이 유지할 branch에 push되었거나 merge되었는지 확인하세요.
