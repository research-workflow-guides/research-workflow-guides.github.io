---
layout: layouts/doc.njk
title: 버전 관리
description: tracked, modified, staged, committed 상태를 구분해 안정적으로 작업합니다.
lang: ko
section: git-github
order: 8
permalink: /ko/git-github/version-control/
translationKey: git-version-control
eyebrow: 주제 3
lead: Git graph를 이용하여 버전 관리하는 방법을 배워보도록 하겠습니다.
toc:
  - id: extension-추가하기
    label: Extension 추가하기
  - id: git-graph
    label: Git Graph
  - id: 인터페이스
    label: 인터페이스
  - id: 변경사항-확인review-of-changes
    label: 변경사항 확인
  - id: 옛날-버전으로-돌아가기
    label: 옛날 버전으로 돌아가기
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## Extension 추가하기

[Git Graph on Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

<figure class="image-frame">
  <img src="/assets/images/gitgraph.png" alt="Git Graph extension">
</figure>

## Git Graph

Source Control에서 그래프 모양의 버튼을 클릭하거나 window 하단의 'Git Graph'를 클릭하여 Git graph에 접근할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/clone-2.png" alt="Git Graph 접근 버튼이 보이는 VS Code Source Control panel">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-1.png" alt="VS Code의 Git Graph 화면">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-2.png" alt="VS Code의 Git Graph history 화면">
</figure>

Git graph에 접근하면 다음과 같은 화면을 확인할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-3.png" alt="VS Code의 Git Graph 화면">
</figure>

## 인터페이스

각 영역의 설명은 다음과 같습니다:

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Section</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">설명</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><span style="display:inline-flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border-radius:50%;background:#ffffff;border:2px solid #ff2d2d;color:#ff2d2d;font-weight:700;font-size:0.85rem;line-height:1">1</span></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">지금까지 Push한 commit들을 시각화하여 보여줍니다.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><span style="display:inline-flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border-radius:50%;background:#ffffff;border:2px solid #ff2d2d;color:#ff2d2d;font-weight:700;font-size:0.85rem;line-height:1">2</span></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">현재 다루고 있는 Commit과 해당 message를 나타냅니다. 이것을 <code>Current branch</code>라고 합니다. <code>Check out</code>으로 다른 Commit으로 이동할 수 있지만, 본 강의에서는 다루지 않습니다.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><span style="display:inline-flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border-radius:50%;background:#ffffff;border:2px solid #ff2d2d;color:#ff2d2d;font-weight:700;font-size:0.85rem;line-height:1">3</span></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">각 Commit이 Push된 날짜와 Push한 사람, 그리고 Commit의 고유 번호를 나타냅니다.</td>
      </tr>
    </tbody>
  </table>
</div>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-4.png" alt="Git Graph interface section 설명">
</figure>

## 변경사항 확인(Review of changes)

변경사항을 확인하고 싶은 Commit을 클릭하면 다음과 같은 화면을 확인할 수 있습니다. 파일명의 색깔의 의미는 다음과 같습니다:

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">색상</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">의미</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code style="color:#7ec36f">초록색</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">파일이 새로 생성된 경우입니다.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code style="color:#e4c75f">노란색</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">기존의 파일을 수정한 경우입니다.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code style="color:#ff5f5f">빨간색</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">파일이 삭제된 경우입니다.</td>
      </tr>
    </tbody>
  </table>
</div>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-5%20(1).png" alt="Git Graph commit 변경 사항 확인 화면">
</figure>

변경사항을 더 자세히 확인하고 싶은 경우 Commit을 클릭하면 다음과 같은 화면을 확인할 수 있습니다.

왼쪽은 변경 전의 내용이고, 오른쪽은 변경 후의 내용입니다.

예를 들어, 'revised file.txt'를 클릭하면 다음과 같이 'Also, I like dogs'라는 문장이 추가되었음을 알아낼 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-6%20(1).png" alt="추가된 문장을 보여주는 Git Graph 상세 변경 화면">
</figure>

## 옛날 버전으로 돌아가기

Commit들 간의 이동은 예민하고 복잡하므로, 옛날 버전으로 돌아가기 전에는 오른쪽의 화면처럼 Source Control에서 변경 사항이 없는 상태에서 진행하는 것을 추천합니다.

만약 코드를 공유하고 있는 경우 `reset`이 아니라 `revert`를 추천합니다. 또한 `branch`를 추천합니다. 하지만 본 강의에서는 다루지 않습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-9.png" alt="이전 version으로 reset하기 전 깨끗한 Source Control 상태">
</figure>

1. 돌아가고 싶은 버전의 commit을 오른쪽 클릭하고, "Reset current branch to this commit."을 클릭하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-7%20(1).png" alt="Git Graph에서 Reset current branch to this commit 메뉴를 선택하는 화면">
</figure>

2. 그러면 오른쪽 화면을 확인할 수 있습니다. 세 가지 option 중에 하나를 선택할 수 있고, 각 option의 설명은 다음과 같습니다:

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Option</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">의미</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Soft</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">변경 이력은 모두 삭제하지만 선택한 과거의 Commit과 현재의 변경 사항을 모두 받아들입니다.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Mixed</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">변경 이력은 모두 삭제하지만 변경 내용은 남기고 선택한 과거의 Commit을 받아들입니다.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Hard</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">변경 사항을 모두 삭제하고 선택한 과거의 Commit만 받아들입니다.</td>
      </tr>
    </tbody>
  </table>
</div>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-8.png" alt="Git Graph reset option 화면">
</figure>

3. 선택한 option에 따라서 최우선적으로 Push를 성공시킨 후에 작업을 이어나가는 것을 추천합니다.

Version Control은 과정이 복잡하기 때문에 처음에는 신중히 "Hard" option만을 사용하는 것을 추천합니다.

보다 자세한 내용은 아래 링크의 자료들을 참고하세요.

[Git 도구 - Reset 명확히 알고 가기](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Reset-%EB%AA%85%ED%99%95%ED%9E%88-%EC%95%8C%EA%B3%A0-%EA%B0%80%EA%B8%B0)

## 넘어가기 전

Git Graph와 reset은 version history를 확인하거나 관리할 때 유용합니다. 기록을 되돌리기 전에는 Source Control 상태가 깨끗한지 확인하고, 어떤 변경 사항이 남는지 먼저 이해한 뒤 진행하세요.
