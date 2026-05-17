---
layout: layouts/doc.njk
title: 복구
description: commit된 작업을 복구하고, 로컬 실수를 되돌리며, 안전하게 알고 있는 Git 상태로 돌아갑니다.
lang: ko
section: git-github
order: 11
permalink: /ko/git-github/recovery/
translationKey: git-recovery
eyebrow: 선택
lead: Git은 Git에 기록된 작업만 복구하는 데 도움을 줄 수 있습니다.
toc:
  - id: git이-복구할-수-있는-것
    label: Git이 복구할 수 있는 것
  - id: 로컬-변경-사항-되돌리기
    label: 로컬 변경 사항 되돌리기
  - id: staged-파일-내리기
    label: staged 파일 내리기
  - id: 삭제된-파일-복구하기
    label: 삭제된 파일 복구하기
  - id: 이전-commit에서-복구하기
    label: 이전 commit에서 복구하기
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## Git이 복구할 수 있는 것

Git은 컴퓨터의 모든 파일을 자동으로 백업해주는 도구가 아닙니다. Git은 보통 commit을 통해 Git에 기록된 작업을 복구할 수 있습니다.

파일을 저장하거나, stage하거나, commit하거나, push한 적이 없다면 Git으로 복구하지 못할 수 있습니다. 위험한 수정, 큰 rewrite, 폴더 정리 전에는 중요한 지점을 commit해두세요.

## 로컬 변경 사항 되돌리기

tracked 파일을 수정했지만 마지막 commit 상태로 되돌리고 싶다면 `git restore`를 사용합니다.

```bash
git restore path/to/file.tex
```

tracked 파일의 현재 로컬 변경 사항을 모두 버리려면 다음을 입력합니다.

```bash
git restore .
```

주의해서 사용하세요. 아직 commit하지 않은 현재 수정 내용이 삭제됩니다.

## staged 파일 내리기

`git add`를 너무 일찍 했다면, 수정 내용은 유지한 채 staging area에서만 파일을 내릴 수 있습니다.

```bash
git restore --staged path/to/file.tex
```

이 명령은 폴더 안의 수정 내용은 그대로 두고, 다음 commit에 포함되도록 stage된 상태만 해제합니다.

## 삭제된 파일 복구하기

tracked 파일을 실수로 삭제했다면 마지막 commit 상태에서 복구할 수 있습니다.

```bash
git restore path/to/file.tex
```

Git이 이미 알고 있던 파일에만 적용됩니다. 한 번도 commit하지 않은 새 untracked 파일은 이 방식으로 복구할 수 없습니다.

## 이전 commit에서 복구하기

이전 commit에 있던 특정 파일 버전이 필요하다면 먼저 Git Graph나 `git log`로 commit hash를 찾습니다.

그다음 선택한 commit에서 해당 파일만 복구합니다.

```bash
git restore --source <commit-hash> path/to/file.tex
```

이 방식은 저장소 전체를 reset하는 것보다 안전합니다. 지정한 파일 하나만 복구하기 때문입니다.

## 넘어가기 전

복구 명령어를 실행하기 전에 현재 상태를 확인하세요.

```bash
git status
```

현재 수정 내용이 필요할 수도 있다면, 변경 사항을 버리기 전에 commit하거나, stash하거나, 중요한 텍스트를 다른 곳에 따로 복사해두세요. 넓은 범위의 reset 명령어보다 파일 단위의 restore 명령어를 먼저 사용하는 것이 좋습니다.
