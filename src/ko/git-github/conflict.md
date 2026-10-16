---
layout: layouts/doc.njk
title: 충돌 해결
description: Windows의 VS Code에서 Pull 중 생긴 merge 충돌을 해결하고 변경을 확인합니다.
lang: ko
section: git-github
order: 9
permalink: /ko/git-github/conflict/
translationKey: git-conflict
eyebrow: 주제 4
lead: Windows의 VS Code에서 Pull 중 같은 부분을 다르게 수정한 파일을 확인하고 merge를 마무리합니다.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code와 Git 통합 터미널을 기준으로 안내합니다.
  workflow: Pull 전 로컬 상태 확인, 충돌 구간 편집, 원본 파일만 stage한 뒤 merge 완료.
  lastVerified: 2026-10-16 Windows의 VS Code에서 Stage와 커밋 메뉴 화면을 확인했습니다. 이번 화면 검토에서는 merge와 Push를 실행하지 않았습니다.
  support: 기존 사진을 Stage와 커밋 메뉴 위치 예시로 유지하며 생성 파일은 제외하도록 안내합니다. 전체 절차는 실행 검증하지 않았습니다.
toc:
  - id: conflict의-의미
    label: 충돌이 발생할 때
  - id: 세-가지-선택지
    label: 충돌 구간 편집
  - id: merge-마무리
    label: merge 완료
tags:
  - doc
---
<h2 id="conflict의-의미">충돌이 발생할 때</h2>

원격 저장소에 새 커밋이 있어 Push가 거절되면, 먼저 `git status`로 로컬 변경을 확인합니다. 이 안내는 로컬 작업을 정리한 뒤 Pull이 merge를 시작하고 같은 부분에서 충돌한 경우를 다룹니다.

로컬 브랜치와 가져온 브랜치가 같은 부분을 다르게 수정해 Git이 자동으로 합치지 못하면 충돌이 발생합니다. 충돌 구간마다 남길 내용을 편집해야 합니다.

<div class="doc-step-pair">
  <div>
    <p>Push 경고에서 <strong>Cancel</strong>을 누릅니다. Pull 전에 <code>git status</code>로 작업 중인 파일을 확인하고, 필요한 원본 변경을 커밋하거나 <a href="/ko/git-github/source-control/#stash">Stash로 임시 보관</a>합니다. 예상하지 못한 변경이 없는지 다시 확인한 뒤 Pull합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/conflict-push-warning.png" alt="Pull로 원격 변경을 가져오라는 예전 VS Code Push 경고">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Pull 중 충돌이 생기면 Source Control의 <strong>Merge Changes</strong>에 충돌 파일이 나타납니다. 기존 화면의 <strong>Current Change</strong>는 로컬 브랜치 내용이고 <strong>Incoming Change</strong>는 가져온 브랜치 내용입니다. <strong>Changes</strong>에 함께 보이는 <code>.log</code>, <code>.pdf</code> 등 생성 파일은 충돌 해결을 위해 stage할 필요가 없습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.4-4.png" alt="Merge Changes에 TeX 충돌 파일이 있고 Changes에 생성 파일이 표시된 예전 VS Code 화면">

  </figure>
</div>

<h2 id="세-가지-선택지">충돌 구간 편집</h2>

충돌 파일을 열고 각 구간의 최종 내용을 정합니다. 기존 화면의 인라인 동작은 선택한 충돌 구간에 적용됩니다.

- `Accept Current Change`: 현재 브랜치의 내용을 남깁니다.
- `Accept Incoming Change`: 가져온 브랜치의 내용을 남깁니다.
- `Accept Both Changes`: 두 내용을 이어 붙입니다. 순서와 중복을 확인하고 필요한 부분을 다시 편집합니다.
- 직접 편집: 두 내용의 일부를 조합하거나 새 문장으로 고친 뒤 충돌 표시를 지웁니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-5.png" alt="충돌 구간에 Accept Current, Incoming, Both 선택지가 보이는 예전 VS Code 화면">

</figure>

`Accept Both Changes`를 누르면 두 내용이 이어집니다. 기존 결과 이미지에는 `!Conflict!` 문구가 남아 있으므로 완료된 문서의 예시로 보지 마세요. 중복과 문맥을 고쳐 최종 내용을 저장한 다음 빌드합니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-6.png" alt="Accept Both Changes 동작을 강조한 예전 VS Code 충돌 화면">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-7.png" alt="두 내용을 이어 붙여 !Conflict! 문구가 남은 예전 VS Code 결과 화면">

</figure>

수정 파일을 저장한 뒤 다음 명령으로 미해결 항목, 남은 충돌 표시와 공백 오류, 합쳐진 내용을 확인합니다.

```shell
git status
git diff --check
git diff
```

문서를 빌드해 결과를 확인한 다음 해결한 원본 파일만 stage합니다. `git diff --check`가 통과해도 내용이 올바른지는 파일과 빌드 결과를 직접 검토해야 합니다.

<h2 id="merge-마무리">merge 완료</h2>

Source Control의 **Merge Changes**에서 해결한 TeX 원본 파일만 stage합니다. `git status`와 `git diff --cached`로 stage된 파일을 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-8.png" alt="Merge Changes의 해결한 TeX 파일만 stage하는 버튼을 표시한 예전 VS Code 화면">

</figure>

아래 사진의 **Changes** 옆 `+`는 전체 파일을 Stage하는 버튼입니다. 실제 작업에서는 필요한 `.tex`, `.bib` 원본 파일만 선택하고, 사진에 보이는 `.log`, `.pdf` 등 생성 파일은 제외합니다. **Staged Changes**에 불필요한 파일이 있으면 해당 행의 `-`로 Stage를 취소합니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-9.png" alt="해결한 TeX 파일이 Stage된 상태와 Changes 전체 선택 버튼이 표시된 기존 VS Code 화면">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-10.png" alt="Staged Changes에 TeX 원본과 생성 파일이 함께 표시된 기존 VS Code 화면">

</figure>

Stage된 원본 파일과 빌드 결과를 확인한 뒤 **Commit**으로 merge를 완료하고 **Push**합니다. 아래 사진은 **Commit & Push** 메뉴의 위치를 보여줍니다. 실행 전에 불필요한 생성 파일을 Stage에서 빼고 merge 결과 검토를 먼저 마칩니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-11.png" alt="merge 커밋 메시지와 Commit & Push 메뉴가 표시된 기존 VS Code 화면">

</figure>

`git status`에서 진행 중인 merge가 없는지 확인합니다. 빌드 생성 파일은 작업 트리에 남아 있을 수 있습니다. Pull 전에 임시 보관한 작업은 merge를 끝낸 뒤 다시 적용하고 상태를 확인합니다.
