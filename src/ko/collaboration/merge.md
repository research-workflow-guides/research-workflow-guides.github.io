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

## 넘어가기 전

어떤 branch가 변경 사항을 받아야 하는지 확실할 때만 merge하세요. 다른 사람이 작업을 확인한 뒤 `main`에 포함해야 한다면 직접 merge하는 대신 Pull Request를 사용하세요.
