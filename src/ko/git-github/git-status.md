---
layout: layouts/doc.njk
title: Git status
description: 클론한 저장소에 옮긴 프로젝트 파일의 Git 상태를 확인합니다.
lang: ko
section: git-github
order: 6
permalink: /ko/git-github/git-status/
translationKey: git-status
eyebrow: 주제 1
lead: 클론한 저장소에 프로젝트 원본 파일을 옮긴 뒤 <code>git status</code>를 실행해 Git이 아직 추적하지 않는 파일을 확인합니다.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code 통합 터미널을 기준으로 작성했습니다.
  workflow: 클론한 저장소에서 git status를 실행하고 추적되지 않는 파일을 확인합니다.
  lastVerified: 2026-09-23 Git 공식 문서와 빈 저장소의 로컬 출력을 확인했습니다. 현재 Windows 화면 검증 대기 중.
  support: 기존 터미널 이미지는 업데이트가 필요합니다. macOS와 Linux 화면은 추후 검증합니다.
  scopeNote: 현재 Windows 화면을 기준으로 안내합니다. macOS와 Linux 화면은 추후 검증합니다.
toc:
  - id: 현재-상태-확인
    label: 현재 상태 확인
  - id: 기본-파일-상태
    label: 기본 파일 상태
tags:
  - doc
---
## 현재 상태 확인

VS Code에서 클론한 저장소 폴더를 연 상태로 **Terminal > New Terminal**을 선택합니다. 터미널이 그 저장소 폴더에서 열렸는지 확인한 뒤 `git status`를 실행합니다.

```shell
git status
```

첫 커밋 전에는 `No commits yet`와 `Untracked files`가 표시될 수 있습니다. 아래 기존 이미지는 커밋이 있는 저장소의 화면이므로, 이미지의 `origin/main` 문구는 현재 결과와 다를 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/gitstatus.png" alt="이미 커밋이 있는 저장소에서 새 파일이 Untracked files로 표시된 예전 Windows 터미널 화면">
</figure>

## 기본 파일 상태

처음 파일을 옮긴 뒤에는 `Untracked files`를 확인합니다. 이후 작업에서는 `Changes not staged for commit`과 `Changes to be committed`를 구분하면 됩니다.

- **Untracked files**: Git이 아직 추적하지 않는 새 파일입니다.
- **Changes not staged for commit**: 이미 추적하던 파일을 수정했지만 다음 커밋에 넣도록 준비하지 않은 변경입니다.
- **Changes to be committed**: 다음 커밋에 넣도록 준비한 변경입니다.

`git status`에 생성된 PDF나 LaTeX 보조 파일이 보이면 스테이징 전에 필요한 파일인지 확인합니다. 제외할 파일은 [`.gitignore`](/ko/git-github/gitignore/)에 기록합니다.
