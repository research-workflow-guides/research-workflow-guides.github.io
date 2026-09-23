---
layout: layouts/doc.njk
title: 복구
description: Windows의 VS Code 터미널에서 Git 파일 변경과 삭제를 확인하고 선택한 버전을 복구합니다.
lang: ko
section: git-github
order: 11
permalink: /ko/git-github/recovery/
translationKey: git-recovery
eyebrow: 선택
lead: Windows의 VS Code 터미널에서 Git 상태를 확인하고 필요한 파일만 이전 버전으로 되돌립니다.
verificationCard: false
verification:
  status: needs-review
  environment: Windows의 VS Code 통합 터미널을 기준으로 안내합니다.
  workflow: 파일 상태 확인, 변경 취소 또는 stage 해제, 삭제 파일과 이전 커밋의 파일 복구.
  lastVerified: 2026-09-24 Git 공식 문서를 확인했습니다. 현재 Windows 실행 화면 검증 대기 중.
toc:
  - id: git이-복구할-수-있는-것
    label: Git이 복구할 수 있는 것
  - id: 로컬-변경-사항-되돌리기
    label: 작업 파일 변경 취소
  - id: staged-파일-내리기
    label: Stage 해제
  - id: 삭제된-파일-복구하기
    label: 삭제된 파일 복구하기
  - id: 이전-commit에서-복구하기
    label: 이전 커밋의 파일 가져오기
tags:
  - doc
---
## Git이 복구할 수 있는 것

Git에서 되찾을 수 있는 내용은 파일이 Git에 기록된 상태에 따라 다릅니다. 커밋한 파일 버전은 이력에서 다시 가져올 수 있습니다. 커밋하지 않은 현재 변경은 버리기 전에 따로 보존해야 합니다.

저장만 한 새 파일은 Git이 추적하지 않을 수 있고, stage는 커밋 이력을 만들지 않습니다. 큰 수정이나 폴더 정리 전에는 `git status`로 파일을 확인하고 필요한 작업을 커밋하거나 별도 사본으로 보관합니다.

<h2 id="로컬-변경-사항-되돌리기">작업 파일 변경 취소</h2>

변경을 버리기 전에 대상 파일의 상태, stage하지 않은 차이, stage한 차이를 확인합니다.

```shell
git status --short -- path/to/file.tex
git diff -- path/to/file.tex
git diff --cached -- path/to/file.tex
```

이미 커밋된 파일에서 `git restore -- path/to/file.tex`는 아직 stage하지 않은 작업 파일의 변경을 버리고, 파일을 현재 stage된 내용으로 되돌립니다. 이미 stage한 변경이 있다면 마지막 커밋 버전과 다를 수 있습니다.

```shell
git restore -- path/to/file.tex
```

이 커밋된 파일에 stage된 변경과 stage하지 않은 변경을 모두 버리고 마지막 커밋 버전으로 되돌리려면, 위 차이를 확인한 뒤 다음 명령을 실행합니다.

```shell
git restore --staged --worktree -- path/to/file.tex
```

이 명령은 지정한 파일의 현재 수정 내용을 버립니다. 필요한 내용은 먼저 별도 사본이나 커밋으로 보존합니다.

<h2 id="staged-파일-내리기">Stage 해제</h2>

`git add`를 너무 일찍 했다면 다음 명령으로 지정한 파일을 다음 커밋의 stage 목록에서 내립니다. 작업 파일의 내용은 남습니다.

```shell
git restore --staged -- path/to/file.tex
```

기존 추적 파일은 unstaged 변경으로, 새 파일은 untracked 파일로 보일 수 있습니다. `git status`로 결과를 확인합니다.

## 삭제된 파일 복구하기

커밋한 파일을 삭제했다면 `git status`에서 삭제가 stage됐는지 확인합니다. Stage하지 않은 삭제는 다음 명령으로 복구합니다.

```shell
git restore -- path/to/file.tex
```

이미 stage한 삭제는 다음 명령으로 마지막 커밋 버전을 가져옵니다.

```shell
git restore --staged --worktree -- path/to/file.tex
```

한 번도 커밋하지 않은 untracked 파일은 이 명령으로 복구할 수 없습니다.

<h2 id="이전-commit에서-복구하기">이전 커밋의 파일 가져오기</h2>

이전 커밋의 파일 버전이 필요하면 Git Graph나 다음 명령으로 해당 파일의 커밋을 찾습니다.

```shell
git log --oneline -- path/to/file.tex
```

찾은 해시를 아래 명령의 `COMMIT_HASH`로 바꿉니다. `git show`로 그 버전을 먼저 읽고, 현재 파일의 필요한 변경을 보존합니다.

```shell
git show COMMIT_HASH:path/to/file.tex
```

실행 전 `git status`로 대상 파일의 staged 변경도 확인합니다. 그다음 해당 파일의 작업 사본만 선택한 버전으로 바꿉니다.

```shell
git restore --source=COMMIT_HASH --worktree -- path/to/file.tex
```

이 명령은 이미 stage된 내용은 바꾸지 않습니다. `git diff -- path/to/file.tex`로 복구한 내용을 확인합니다. 이 버전을 새 커밋으로 남기려면 파일을 stage한 뒤 커밋합니다.

```shell
git diff -- path/to/file.tex
```

복구한 내용이 빌드 대상이라면 파일을 저장하고 빌드 결과도 확인합니다.
