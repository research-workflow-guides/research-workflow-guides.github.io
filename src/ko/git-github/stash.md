---
layout: layouts/doc.njk
title: 변경 사항
description: 변경 사항을 임시로 저장하고 필요할 때 다시 불러옵니다.
lang: ko
section: git-github
order: 10
permalink: /ko/git-github/stash/
translationKey: git-stash
eyebrow: 선택
lead: 변경 사항을 임시로 저장하거나 필요 없는 변경을 취소하는 방법을 정리합니다.
toc:
  - id: stash
    label: Stash
  - id: discard-changes
    label: Discard Changes
tags:
  - doc
---
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
