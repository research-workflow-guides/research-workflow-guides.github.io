---
layout: layouts/doc.njk
title: 소스 컨트롤
description: VS Code Source Control에서 변경 사항을 stash하거나 discard합니다.
lang: ko
section: git-github
order: 10
permalink: /ko/git-github/source-control/
translationKey: git-source-control
eyebrow: 선택
lead: VS Code Source Control에서 변경 사항을 임시로 저장하거나 필요 없는 변경을 취소하는 방법을 정리합니다.
toc:
  - id: open-changes
    label: Open changes
  - id: stash
    label: Stash
  - id: discard-changes
    label: Discard Changes
  - id: local-commit-취소하기
    label: Local commit 취소하기
  - id: before-proceeding
    label: 넘어가기 전
tags:
  - doc
---
## Open changes

Source Control view를 열면 마지막 commit 이후 변경된 file들을 확인할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/source-control-1.png" alt="변경된 file들이 표시된 VS Code Source Control view">
</figure>

Source Control icon과 Changes 옆의 숫자는 현재 변경된 file 개수를 보여줍니다.

Changes 아래의 file을 클릭하면 변경 내용을 확인할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/source-control-2.png" alt="VS Code Source Control에서 변경된 file을 선택한 화면">
</figure>

VS Code는 comparison view를 엽니다. 왼쪽은 이전 상태를, 오른쪽은 현재 working tree를 보여줍니다. 빨간색은 삭제되었거나 변경 전의 내용을 나타내고, 초록색은 추가되었거나 현재의 내용을 나타냅니다.

<figure class="image-frame">
  <img src="/assets/images/source-control-3.png" alt="이전 상태와 현재 working tree를 비교하는 VS Code 화면">
</figure>

## Stash

변경 사항(changes)를 임시로 저장하고 싶을 경우, source control에서 'stash'를 이용하세요. Stash는 버전 관리에 사용될 수 있습니다.

Stash를 만들려면 'Stash'를 클릭하세요.

<figure class="image-frame">
  <img src="/assets/images/stash-1.png" alt="VS Code Source Control Stash 명령">
</figure>

Stash를 불러오려면 'Apply Stash'를 클릭하세요.

<figure class="image-frame">
  <img src="/assets/images/stash-2.png" alt="VS Code Source Control Apply Stash 명령">
</figure>

## Discard Changes

변경 사항(changes)를 삭제하고 싶을 경우, source control에서 다음과 같은 버튼들을 클릭하면 됩니다.

<figure class="image-frame">
  <img src="/assets/images/discard-changes-1.png" alt="VS Code Source Control 변경 사항 삭제 버튼">
</figure>

모든 변경 사항을 취소하려면 Changes 옆에 있는 버튼을 클릭하세요.

<figure class="image-frame">
  <img src="/assets/images/discard-changes-2.png" alt="VS Code Source Control 모든 변경 사항 취소 버튼">
</figure>

## Local commit 취소하기

이미 commit했지만 아직 push하지 않았다면, 마지막 commit을 풀어서 변경 사항을 다시 unstaged 상태로 되돌릴 수 있습니다.

예를 들어, 실수로 commit을 만든 뒤 Source Control에 `Sync Changes 1↑` 버튼이 보일 수 있습니다. 이것은 아직 push되지 않은 local commit이 하나 있다는 뜻입니다.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-1.png" alt="실수로 commit하기 전의 VS Code Source Control 화면">
</figure>

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-2.png" alt="push되지 않은 local commit 하나가 있는 VS Code Source Control 화면">
</figure>

마지막 local commit 하나만 취소하려면 다음 명령어를 실행하세요.

```bash
git reset --mixed HEAD~1
```

이 명령은 마지막 commit을 취소하고, 파일 변경 내용은 유지하며, 변경 사항을 staged가 아니라 unstaged 상태로 되돌립니다.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-3.png" alt="터미널에서 git reset mixed HEAD one commit back 명령을 실행한 화면">
</figure>

Reset 후에는 file들이 다시 Changes 아래에 나타납니다.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-4.png" alt="file들이 unstaged changes로 돌아온 VS Code Source Control 화면">
</figure>

최근 local commit 2개를 취소하려면 숫자를 바꾸면 됩니다.

```bash
git reset --mixed HEAD~2
```

이미 push했거나 다른 사람과 공유한 commit에는 조심해서 사용해야 합니다.

<h2 id="before-proceeding">넘어가기 전</h2>

변경 사항을 discard하거나, stash를 불러오거나, local commit을 reset하기 전에는 먼저 현재 상태를 확인하세요.

```bash
git status
```

현재 작업 내용이 조금이라도 필요할 수 있다면, 변경 사항을 삭제하거나 local history를 바꾸는 명령어를 실행하기 전에 commit하거나 stash하거나 중요한 내용을 따로 저장해두세요.
