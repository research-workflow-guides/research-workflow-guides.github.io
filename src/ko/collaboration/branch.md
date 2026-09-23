---
layout: layouts/doc.njk
title: 브랜치
description: 브랜치로 작업을 분리하고 만들기, 확인, 전환, 삭제를 익힙니다.
lang: ko
section: collaboration
order: 3
permalink: /ko/collaboration/branch/
translationKey: git-branch
eyebrow: 주제 2
lead: 브랜치를 만들면 현재 커밋에서 작업을 분리할 수 있습니다. 그 브랜치에서 만든 커밋은 병합하기 전까지 <code>main</code>에 반영되지 않습니다.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  environment: Windows의 VS Code 통합 터미널을 기준으로 작성했습니다.
  workflow: 브랜치 만들기, 목록 확인, 전환, 병합 후 삭제.
  lastVerified: 2026-09-23 Git 공식 문서와 임시 로컬 저장소의 명령 흐름을 확인했습니다. 현재 Windows 화면 검증 대기 중.
  support: macOS와 Linux의 터미널 절차는 추후 검증합니다.
  scopeNote: 현재 Windows의 VS Code 통합 터미널을 기준으로 안내합니다. macOS와 Linux 절차는 추후 검증합니다.
toc:
  - id: branch의-의미
    label: 브랜치의 의미
  - id: branch-만들기
    label: 브랜치 만들기
  - id: branch-목록-확인하기
    label: 브랜치 목록 확인하기
  - id: branch-이동하기
    label: 브랜치 전환하기
  - id: branch-삭제하기
    label: 브랜치 삭제하기
tags:
  - doc
---
<h2 id="branch의-의미">브랜치의 의미</h2>

브랜치는 같은 저장소의 특정 커밋을 가리키는 이름입니다. 새 브랜치는 현재 커밋에서 시작하며, 그 브랜치에서 새 커밋을 만들면 이름이 새 커밋을 가리킵니다.

브랜치는 다음과 같은 경우에 유용합니다.

- 두 명 이상이 동시에 작업해야 할 때
- 하나의 변경 사항이 여러 커밋으로 나뉠 때
- `main`에 합치기 전에 아이디어를 먼저 테스트하고 싶을 때

<h2 id="branch-만들기">브랜치 만들기</h2>

Windows의 VS Code에서 **Terminal > New Terminal**을 엽니다. `git status`로 작업 중인 변경을 확인하고 정리합니다. 아래에서는 기본 브랜치 이름을 `main`으로 가정합니다.

`main`으로 이동해 [Pull](/ko/git-github/pull-push/)로 원격 변경을 받은 뒤, 새 브랜치를 만들면서 전환합니다. 기본 브랜치 이름이 다르면 첫 명령의 `main`을 바꾸세요.

```powershell
git switch main
git pull
git switch -c draft-section
```

브랜치 이름은 한 작업을 설명하도록 짧게 정합니다. 예를 들어 `revise-introduction`이나 `add-results-table`을 사용할 수 있습니다.

<h2 id="branch-목록-확인하기">브랜치 목록 확인하기</h2>

현재 브랜치 이름은 `git branch --show-current`로 확인합니다. `git branch`는 로컬 브랜치 목록을 보여주며, 현재 브랜치에는 `*`가 붙습니다.

```powershell
git branch --show-current
git branch
```

GitHub의 브랜치를 함께 확인하려면 원격 정보를 갱신한 뒤 전체 목록을 봅니다. `origin/`으로 시작하는 항목은 마지막으로 가져온 원격 브랜치 정보입니다.

```powershell
git fetch origin
git branch -a
```

<h2 id="branch-이동하기">브랜치 전환하기</h2>

브랜치를 전환하면 VS Code에 보이는 파일이 선택한 브랜치의 커밋 상태에 맞게 바뀝니다.

```powershell
git switch main
git switch draft-section
```

전환 전 `git status`로 미완료 변경을 확인하고 필요한 작업을 커밋하거나 안전하게 보관합니다. `git switch`는 변경을 덮어쓸 위험이 있으면 멈추지만, 겹치지 않는 변경은 새 브랜치로 함께 이동할 수도 있습니다.

<h2 id="branch-삭제하기">브랜치 삭제하기</h2>

작업을 `main`에 병합한 뒤 브랜치를 정리할 수 있습니다. 먼저 `main`으로 이동해 원격 변경을 받고, 작업 브랜치에만 남은 커밋을 확인합니다. `git log`에 출력이 없으면 해당 브랜치의 커밋이 모두 `main`에 포함된 상태입니다.

```powershell
git switch main
git pull
git log main..draft-section --oneline
```

출력이 없다면 로컬 작업 브랜치를 삭제합니다. `-d`가 삭제를 거절하면 병합 상태를 다시 확인하세요.

```powershell
git branch -d draft-section
```

GitHub에 원격 브랜치가 남아 있고 팀에서 더 이상 사용하지 않는다면 별도로 삭제할 수 있습니다.

```powershell
git push origin --delete draft-section
```
