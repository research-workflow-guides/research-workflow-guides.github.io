---
layout: layouts/doc.njk
title: 소스 컨트롤
description: Windows의 VS Code Source Control에서 변경을 확인하고 임시 저장·취소하며 로컬 커밋을 되돌립니다.
lang: ko
section: git-github
order: 10
permalink: /ko/git-github/source-control/
translationKey: git-source-control
eyebrow: 선택
lead: Windows의 VS Code Source Control에서 파일 변경을 확인하고, 필요한 경우 임시 저장하거나 취소합니다. 아직 게시하지 않은 로컬 커밋을 되돌리는 방법도 다룹니다.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code Source Control과 통합 터미널을 기준으로 안내합니다.
  workflow: 변경 확인, stash 저장과 적용, 변경 취소, 미게시 로컬 커밋 취소.
  lastVerified: 2026-09-24 VS Code와 Git 공식 문서를 확인했습니다. 현재 Windows 화면 검증 대기 중.
  support: 기존 이미지는 오래된 Source Control 화면과 생성 파일을 포함하므로 업데이트가 필요합니다.
toc:
  - id: open-changes
    label: 변경 확인
  - id: stash
    label: Stash로 임시 보관
  - id: discard-changes
    label: 변경 취소
  - id: local-commit-취소하기
    label: 로컬 커밋 취소
tags:
  - doc
---
<h2 id="open-changes">변경 확인</h2>

Windows의 VS Code에서 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd>로 Source Control을 열면 수정·추가·삭제된 파일을 확인할 수 있습니다. **Changes**에는 아직 스테이징하지 않은 파일이, **Staged Changes**에는 다음 커밋에 넣기로 고른 파일이 표시됩니다.

<figure class="image-frame">
  <img src="/assets/images/source-control-1.png" alt="변경 파일 세 개와 Changes 목록이 표시된 예전 VS Code Source Control 화면">
</figure>

활동 표시줄의 Source Control 배지는 저장소의 변경 항목 수를 요약합니다. **Changes** 옆 숫자는 아직 스테이징하지 않은 항목 수를 보여줍니다.

**Changes**에서 파일을 선택하면 해당 파일의 변경 내용을 확인할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/source-control-2.png" alt="VS Code Source Control의 Changes 목록에서 파일을 선택한 기존 화면">
</figure>

좌우 비교 화면에서는 왼쪽이 마지막 커밋의 파일, 오른쪽이 현재 작업 파일입니다. 창이 좁으면 변경 내용이 한 열로 표시될 수 있습니다. 추가·삭제 표시를 보고 바뀐 줄을 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/source-control-3.png" alt="파일의 마지막 커밋 내용과 작업 중 내용을 좌우로 비교하는 기존 VS Code 화면">
</figure>

<h2 id="stash">Stash로 임시 보관</h2>

다른 작업을 하기 전에 미커밋 변경을 잠시 치우려면 Stash를 사용합니다. Stash는 로컬에 남으며 Push로 GitHub에 올라가지 않습니다. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>에서 `Git: Stash`를 실행하고 알아볼 수 있는 메시지를 입력합니다. 새 파일도 함께 보관해야 하면 `Git: Stash (Include Untracked)`를 선택합니다.

아래 기존 화면에는 `.aux`, `.log`, `.pdf` 같은 생성 파일도 보입니다. 새 파일을 Stash에 포함하기 전에 보관할 자료인지 확인하고, 평소 커밋하지 않을 생성 파일은 [Gitignore](/ko/git-github/gitignore/) 규칙으로 관리합니다.

<figure class="image-frame">
  <img src="/assets/images/stash-1.png" alt="생성 파일이 보이는 예전 VS Code Source Control 메뉴의 Stash 명령">
</figure>

적용 전에 `Git: View Stash`로 내용을 확인할 수 있습니다. `Git: Apply Stash...`는 변경을 복원하면서 Stash 기록을 남기고, `Git: Pop Stash...`는 적용에 성공하면 기록에서 제거합니다. 현재 작업과 겹치면 충돌을 해결한 뒤 계속합니다.

<figure class="image-frame">
  <img src="/assets/images/stash-2.png" alt="예전 VS Code Source Control 메뉴의 Apply Latest Stash와 Apply Stash 명령">
</figure>

<h2 id="discard-changes">변경 취소</h2>

한 파일의 미커밋 변경만 취소하려면 **Changes**에서 해당 파일을 오른쪽 클릭해 **Discard Changes**를 선택합니다. 추적되지 않은 새 파일은 되돌릴 이전 내용이 없어 제거될 수 있으므로 대상 파일을 먼저 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/discard-changes-1.png" alt="추적되지 않은 파일 행의 변경 취소 버튼이 강조된 예전 Source Control 화면">
</figure>

**Changes** 옆의 취소 버튼은 목록의 변경을 한꺼번에 버립니다. 일부 파일만 되돌리려면 파일별 명령을 사용하고, 전체 취소 전에는 확인 창의 대상 목록을 살펴봅니다.

<figure class="image-frame">
  <img src="/assets/images/discard-changes-2.png" alt="Changes 목록 전체의 변경 취소 버튼이 강조된 예전 Source Control 화면">
</figure>

<h2 id="local-commit-취소하기">로컬 커밋 취소</h2>

마지막 커밋을 만들었지만 아직 Push하지 않았다면, 커밋을 취소하고 파일 변경을 작업 폴더에 남길 수 있습니다. 먼저 현재 브랜치와 취소할 커밋을 확인합니다.

아래 예시의 `Sync Changes 1↑`는 원격 브랜치보다 로컬 커밋이 하나 앞서 있음을 나타냅니다. 해당 커밋이 아직 Push되지 않았는지 확인한 뒤 진행합니다.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-1.png" alt="새 이미지 파일 일곱 개와 수정 파일 하나를 커밋하려는 예전 VS Code 화면">
</figure>

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-2.png" alt="Sync Changes 1↑로 원격보다 로컬 커밋 하나가 앞선 상태를 보여주는 예전 VS Code 화면">
</figure>

현재 브랜치에서 마지막 미게시 커밋 하나만 취소하려면 통합 터미널에서 다음 명령을 실행합니다.

```shell
git reset --mixed HEAD~1
```

이 명령은 현재 브랜치를 한 커밋 전으로 옮기고 스테이징 영역을 초기화하되 작업 파일은 유지합니다. 기존 파일의 수정은 **Changes**에, 그 커밋에서 처음 추가한 파일은 추적되지 않은 파일로 나타날 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-3.png" alt="PowerShell 터미널에서 git reset --mixed HEAD~1을 실행한 기존 화면">
</figure>

Reset 후 Source Control에서 남은 파일을 확인하고, 필요한 파일만 다시 스테이징합니다.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-4.png" alt="Reset 뒤 수정 파일과 추적되지 않은 새 파일이 Changes에 다시 표시된 예전 VS Code 화면">
</figure>

이미 Push하거나 공유한 커밋을 취소할 때는 이 Reset 명령을 사용하지 않습니다. 변경을 되돌리는 새 커밋이 필요하면 [Git revert 설명](https://git-scm.com/docs/git-revert)을 확인합니다.

Discard, Stash 적용, Reset 전에 `git status`로 수정·스테이징·추적되지 않은 파일을 확인합니다. 필요한 작업은 먼저 별도 커밋이나 복사본으로 보존합니다.

```shell
git status
```
