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
