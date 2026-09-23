---
layout: layouts/doc.njk
title: Pull Request
description: 작업 브랜치로 Pull Request를 열고 변경 내용과 검토 의견을 확인합니다.
lang: ko
section: collaboration
order: 4
permalink: /ko/collaboration/pull-request/
translationKey: git-pull-request
eyebrow: 주제 3
lead: 작업 브랜치를 GitHub에 올리고 <code>main</code>을 대상으로 Pull Request를 엽니다. 변경 파일과 검토 의견을 확인해 병합을 준비합니다.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 데스크톱 브라우저의 개인 계정 소유 비공개 저장소를 기준으로 작성했습니다.
  workflow: Pull Request 생성, 변경 검토, 병합 준비.
  lastVerified: 2026-09-23 GitHub 공식 문서를 확인했습니다. 현재 Windows 화면 검증 대기 중.
  support: 기존 이미지는 new-contents 예시 브랜치를 보여줍니다. 현재 Windows 화면과 macOS·Linux 화면은 추후 검증합니다.
  scopeNote: 현재 Windows 데스크톱 브라우저의 개인 계정 소유 비공개 저장소를 기준으로 안내합니다. macOS와 Linux 화면은 추후 검증합니다.
toc:
  - id: pull-request의-의미
    label: Pull Request의 의미
  - id: branch를-github에-push하기
    label: 브랜치를 GitHub에 올리기
  - id: pull-request-열기
    label: Pull Request 열기
  - id: pull-request-검토하기
    label: Pull Request 검토하기
  - id: pull-request를-merge할-준비하기
    label: Pull Request 병합 준비
tags:
  - doc
---
## Pull Request의 의미

Pull Request(PR)는 작업 브랜치의 변경을 다른 브랜치에 합치자고 제안하는 GitHub 기능입니다. 병합하기 전에 변경 내용을 검토하고 의견을 나눌 수 있습니다.

PR을 만들 때 `base`에는 변경을 받을 `main`을, `compare`에는 작업 브랜치를 선택합니다. GitHub는 이 방향을 기준으로 변경 차이를 보여줍니다.

<h2 id="branch를-github에-push하기">브랜치를 GitHub에 올리기</h2>

작업 내용을 커밋한 뒤 VS Code 통합 터미널에서 `git branch --show-current`로 현재 브랜치가 `draft-section`인지 확인합니다. 처음 올리는 브랜치라면 다음 명령으로 GitHub에 게시합니다.

```powershell
git push -u origin draft-section
```

`-u`는 로컬 `draft-section`의 기본 원격 브랜치를 설정합니다. 이후 같은 브랜치에서는 `git push`로 새 커밋을 올릴 수 있습니다.

## Pull Request 열기

아래 기존 이미지는 `new-contents` 예시 브랜치를 보여줍니다. 실제 작업에서는 본문에 사용한 `draft-section`을 선택하세요.

GitHub 저장소에서 `draft-section` 브랜치를 선택합니다. 파일 목록 위에 `Compare & pull request`가 보이면 선택합니다. 보이지 않으면 **Pull requests > New pull request**로 이동합니다.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-1.png" alt="기존 GitHub 저장소 Pull requests 목록과 Compare & pull request 버튼">
</figure>

<figure class="image-frame">
  <img src="/assets/images/pull-requests-2.png" alt="기존 GitHub 화면의 Compare & pull request 버튼 확대">
</figure>

PR 작성 화면에서 `base: main`과 `compare: draft-section`인지 확인합니다. 아래 변경 목록이 의도한 작업만 보여주는지도 살펴봅니다.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-3.png" alt="기존 PR 작성 화면의 base main, compare new-contents, 제목과 설명 입력란">
</figure>

제목에는 작업을 짧게 적고, 설명에는 변경 내용과 이유, 검토할 부분을 적습니다. 준비되면 **Create pull request**를 선택합니다.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-4.png" alt="기존 PR 작성 화면에서 강조된 Create pull request 버튼">
</figure>

## Pull Request 검토하기

PR 페이지의 **Conversation**에서 설명과 댓글을, **Commits**에서 커밋을, **Checks**에서 자동 검사 결과를, **Files changed**에서 파일 차이를 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-5.png" alt="기존 PR Conversation 화면의 탭, Reviewers 영역, 병합 상태">
</figure>

**Files changed**에서 예상한 파일만 포함됐는지와 각 변경 내용을 확인합니다. 검토를 부탁하려면 오른쪽 **Reviewers**에서 공동 작업자를 선택합니다. 검토자는 댓글을 남기거나 승인 또는 수정을 요청할 수 있습니다.

수정 요청을 받으면 같은 `draft-section` 브랜치에서 파일을 고칩니다. **Source Control**에서 수정한 파일만 Stage하고 커밋한 뒤 `git push`로 올립니다. 새 커밋이 올라가면 PR의 변경 내용도 갱신됩니다.

```powershell
git push
```

<h2 id="pull-request를-merge할-준비하기">Pull Request 병합 준비</h2>

요청된 수정과 팀의 검토가 끝났는지 확인합니다. **Conversation** 하단의 병합 상태에서 충돌 여부를 확인하고, 저장소가 필수 승인이나 자동 검사를 요구한다면 해당 조건도 충족합니다.

검토가 끝난 PR은 열린 상태로 둡니다. [Merge](/ko/collaboration/merge/)에서 병합하고 로컬 `main`을 갱신합니다.
