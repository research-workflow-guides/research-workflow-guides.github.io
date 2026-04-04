---
layout: layouts/doc.njk
title: Version Control
description: tracked, staged, committed, ignored 상태를 구분해 안정적으로 작업합니다.
lang: ko
section: git-github
order: 7
permalink: /ko/git-github/version-control/
translationKey: git-version-control
eyebrow: Step 7
lead: 침착한 Git 사용은 파일 상태를 구분하고, repository에 들어가면 안 되는 파일을 아는 데서 시작합니다.
toc:
  - id: learn-the-basic-file-states
    label: 기본 파일 상태
  - id: check-status-often
    label: status 자주 확인
  - id: ignore-local-clutter
    label: 로컬 잡파일 무시
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 기본 파일 상태

가장 중요한 파일 상태는 다음 정도면 충분합니다.

- tracked
- modified
- staged
- committed
- ignored

Git 개념을 한 번에 다 알 필요는 없습니다. 이 상태들만 구분해도 대부분의 일상 repository 동작을 설명할 수 있습니다.

## status 자주 확인

헷갈릴 때 가장 안전하게 먼저 실행할 명령은 `git status`입니다.

```bash
git status
```

무엇이 바뀌었는지, 무엇이 staged인지, 무엇이 더 필요한지 보여줍니다.

## 로컬 잡파일 무시

생성된 auxiliary file, local cache, machine-specific 파일처럼 version control에 들어가면 안 되는 것들이 있습니다.

이런 파일은 `.gitignore`로 repository 밖에 두어 이력이 불필요하게 지저분해지지 않도록 합니다.

## 점검

`git status`를 보고 어떤 파일이 commit 준비가 됐는지, 어떤 파일이 로컬 잡파일인지, 어떤 파일이 ignore 대상인지 설명할 수 있으면 충분합니다.

