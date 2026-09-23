---
layout: layouts/doc.njk
title: 버전 관리
description: Windows의 VS Code에서 Git Graph로 커밋 기록과 파일별 변경 내용을 확인합니다.
lang: ko
section: git-github
order: 8
permalink: /ko/git-github/version-control/
translationKey: git-version-control
eyebrow: 주제 3
lead: Windows의 VS Code에서 Git Graph로 커밋 기록과 파일별 변경 내용을 확인합니다.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code와 Git Graph 확장을 기준으로 안내합니다.
  workflow: Git Graph 설치, 커밋 기록과 파일 변경 확인.
  lastVerified: 2026-09-24 Git Graph Marketplace와 Git 공식 문서를 확인했습니다. 현재 Windows 화면 검증 대기 중.
  support: 기존 이미지는 오래된 Git Graph 화면과 예전 저장소 기록이므로 업데이트가 필요합니다.
toc:
  - id: extension-추가하기
    label: Git Graph 설치
  - id: git-graph
    label: Git Graph
  - id: 인터페이스
    label: 인터페이스
  - id: 변경사항-확인review-of-changes
    label: 변경 사항 확인
  - id: 옛날-버전으로-돌아가기
    label: 이전 버전 확인과 Reset
tags:
  - doc
---
<h2 id="extension-추가하기">Git Graph 설치</h2>

VS Code의 **Extensions**에서 `Git Graph`를 검색하고, 게시자가 `mhutchie`인지 확인한 뒤 **Install**을 선택합니다. 아래 Marketplace 링크에서 확장 정보를 확인할 수 있습니다.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph">Git Graph on Visual Studio Marketplace</a></p>

<figure class="image-frame">
  <img src="/assets/images/gitgraph.png" alt="게시자 mhutchie의 Git Graph 확장이 설치된 예전 VS Code 상세 화면">
</figure>

## Git Graph

Git 저장소 폴더를 VS Code에서 연 뒤 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>를 눌러 `Git Graph: View Git Graph`를 실행합니다. 아래 기존 화면처럼 Source Control의 버튼이나 상태 표시줄의 **Git Graph** 항목으로도 열 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/clone-2.png" alt="VS Code 왼쪽 활동 표시줄의 Source Control 아이콘이 강조된 기존 화면">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-1.png" alt="VS Code Source Control 영역에서 Git Graph를 여는 버튼이 강조된 기존 화면">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-2.png" alt="Windows의 VS Code 상태 표시줄에 표시된 Git Graph 항목의 기존 화면">
</figure>

그래프의 점과 선은 커밋 및 브랜치의 연결을 보여줍니다. `main`은 로컬 브랜치, `origin/main`은 마지막으로 확인한 원격 브랜치 위치를 가리킵니다. 두 표식은 항상 같은 커밋에 있지는 않습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-3.png" alt="main과 origin/main 표식이 함께 보이는 예전 Git Graph 커밋 기록">
</figure>

## 인터페이스

아래 기존 화면의 번호는 다음 영역을 가리킵니다.

| 번호 | 영역 | 표시 내용 |
| --- | --- | --- |
| 1 | 그래프 | 점은 커밋, 선은 커밋 사이의 연결과 브랜치 분기를 보여줍니다. |
| 2 | 설명과 표식 | 커밋 메시지와 `main`, `origin/main` 같은 브랜치 위치를 보여줍니다. 선택한 커밋과 현재 브랜치는 서로 다른 개념입니다. |
| 3 | 날짜·작성자·커밋 | 화면 설정에 따른 커밋 날짜, 작성자, 짧은 커밋 ID를 보여줍니다. 날짜는 Push 시각을 뜻하지 않습니다. |

<figure class="image-frame">
  <img src="/assets/images/2.2.5-4.png" alt="그래프, 커밋 설명과 브랜치 표식, 날짜와 작성자 및 커밋 ID 영역에 번호가 표시된 기존 화면">
</figure>

<h2 id="변경사항-확인review-of-changes">변경 사항 확인</h2>

커밋을 선택하면 그 커밋에서 변경된 파일 목록이 열립니다. 아래 기존 화면에서는 `new file.tex`가 추가되고, `revised file.txt`가 수정됐으며, `deleted file.txt`가 삭제됐습니다. 화면 색상은 표시 설정에 따라 달라질 수 있으니 파일 상태도 함께 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-5%20(1).png" alt="삭제·추가·수정된 파일 세 개가 표시된 기존 Git Graph 커밋 상세 화면">
</figure>

커밋의 파일 목록에서 파일명을 선택하면 VS Code 비교 화면이 열립니다. 왼쪽은 변경 전, 오른쪽은 변경 후입니다. 아래 예시에서는 `revised file.txt`에 “Also, I like dogs.”가 추가됐습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-6%20(1).png" alt="revised file.txt의 변경 전 내용과 추가된 Also, I like dogs. 문장을 나란히 보여주는 기존 비교 화면">
</figure>

<h2 id="옛날-버전으로-돌아가기">이전 버전 확인과 Reset</h2>

과거 커밋의 내용을 살펴보려면 그래프에서 해당 커밋을 선택합니다. 커밋을 선택해 변경 내용을 보는 것만으로 현재 파일이나 브랜치는 바뀌지 않습니다. 실제 복구 방법을 고르기 전에는 Source Control에서 미커밋 변경이 있는지 확인합니다.

이미 공유한 커밋 하나의 변경을 취소할 때는 새 취소 커밋을 만드는 `revert`가 적합합니다. 아래 기존 화면의 `Reset current branch to this commit`은 현재 브랜치 위치를 옮기므로, 단순히 과거 내용을 살펴볼 때 실행하지 않습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-9.png" alt="미커밋 변경이 표시되지 않은 예전 VS Code Source Control 화면과 Git Graph">
</figure>

아래 기존 이미지는 Git Graph의 **Reset current branch to this commit** 메뉴를 보여줍니다. Reset은 현재 브랜치를 선택한 커밋으로 옮기는 명령입니다. 실행 전에 각 옵션이 작업 파일과 스테이징 영역에 미치는 영향을 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-7%20(1).png" alt="과거 커밋의 메뉴에서 Reset current branch to this Commit이 강조된 기존 Git Graph 화면">
</figure>

| 옵션 | 브랜치·파일에 미치는 영향 |
| --- | --- |
| **Soft** | 브랜치를 선택한 커밋으로 옮기고, 스테이징 영역과 작업 파일은 그대로 둡니다. |
| **Mixed** | 브랜치를 옮기고 스테이징 영역을 선택한 커밋과 맞춥니다. 작업 파일은 그대로 둡니다. |
| **Hard** | 브랜치, 스테이징 영역, 추적 중인 작업 파일을 선택한 커밋과 맞춥니다. 저장하지 않은 변경이 사라질 수 있습니다. |

<figure class="image-frame">
  <img src="/assets/images/2.2.5-8.png" alt="Soft, Mixed, Hard 옵션이 표시된 기존 Git Graph Reset 대화상자">
</figure>

이미 GitHub에 게시한 브랜치를 과거 커밋으로 Reset하면 로컬과 원격 이력이 달라져 일반 Push가 거부될 수 있습니다. 공유된 변경을 취소하려면 새 취소 커밋을 만드는 `revert`를 검토합니다. **Hard**는 미커밋 변경이 사라질 수 있으므로 작업을 보존할 방법을 확인한 뒤 사용합니다.

자세한 동작은 Git의 [reset 설명](https://git-scm.com/docs/git-reset)과 [revert 설명](https://git-scm.com/docs/git-revert)을 확인합니다.
