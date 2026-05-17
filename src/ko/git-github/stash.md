---
layout: layouts/doc.njk
title: 소스 컨트롤
description: VS Code Source Control에서 변경 사항을 stash하거나 discard합니다.
lang: ko
section: git-github
order: 10
permalink: /ko/git-github/source-control/
translationKey: git-stash
eyebrow: 선택
lead: VS Code Source Control에서 변경 사항을 임시로 저장하거나 필요 없는 변경을 취소하는 방법을 정리합니다.
toc:
  - id: open-changes
    label: Open changes
  - id: stash
    label: Stash
  - id: discard-changes
    label: Discard Changes
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
