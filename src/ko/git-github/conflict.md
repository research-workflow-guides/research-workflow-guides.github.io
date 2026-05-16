---
layout: layouts/doc.njk
title: 충돌 해결
description: 같은 파일 충돌을 침착하게 정리하고 다시 정상 작업 흐름으로 돌아갑니다.
lang: ko
section: git-github
order: 9
permalink: /ko/git-github/conflict/
translationKey: git-conflict
eyebrow: 주제 4
lead: conflict는 재난이 아니라, 겹치는 수정 중 어떤 최종 텍스트를 남길지 Git이 도움을 요청하는 상태입니다.
toc:
  - id: conflict의-의미
    label: conflict의 의미
  - id: 세-가지-선택지
    label: 세 가지 선택지
  - id: merge-마무리
    label: merge 마무리
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## conflict의 의미

Push가 무사히 이루어지려면 'GitHub에 업로드되어 있는 파일'과 '수정을 시작할 때 Local에 있던 파일'이 같아야 합니다.

그렇지 않은 경우에 push를 하면 충돌(conflict)이 발생합니다(아래 사진 참고). 이를 해결하는 방법을 배워보도록 하겠습니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/conflict-push-warning.png" alt="먼저 pull하라는 VS Code push 경고">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>'Cancel'을 클릭하고 Pull을 진행하세요.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.3-11%20(1).png" alt="Pull 메뉴가 강조된 VS Code Source Control 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그러면 Stage가 취소되면서 아래와 같은 화면을 확인할 수 있습니다. 초록색 상자 안에는 Local에서 수정한 내용을 보여주고, 파란색 상자 안에는 GitHub의 내용을 보여줍니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.4-4.png" alt="conflict 중 staging이 취소된 VS Code Source Control 화면">

  </figure>
</div>

## 세 가지 선택지

세 가지 선택지가 있고, 원하는 것을 클릭하면 됩니다:

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">선택지</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">의미</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Accept Current Change</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Local에서 수정한 내용만 받아들이고 GitHub의 내용은 삭제합니다.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Accept Incoming Change</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Local에서 수정한 내용은 삭제하고 GitHub의 내용만 받아들입니다.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Accept Both Changes</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Local과 GitHub의 내용을 모두 받아들입니다. 가장 안전합니다.</td>
      </tr>
    </tbody>
  </table>
</div>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-5.png" alt="Accept Current Change, Accept Incoming Change, Accept Both Changes 선택지가 보이는 VS Code conflict 화면">

</figure>

예를 들어, 'Accept Both Changes'를 클릭하면 오른쪽과 같은 화면을 확인할 수 있습니다. 이제 컴파일(혹은 저장)을 실행하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-6.png" alt="Accept Both Changes가 강조된 VS Code conflict 화면">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-7.png" alt="두 conflict 변경 사항을 모두 반영한 뒤의 VS Code 화면">

</figure>

## merge 마무리

Source Control에서 'Merge Changes'의 '+' 버튼을 클릭하고, 'Changes'에서도 '+' 버튼을 클릭하세요. 그러면 오른쪽 화면처럼 모든 변경 사항이 Stage된 것을 확인할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-8.png" alt="Merge Changes를 stage할 수 있는 VS Code Source Control 화면">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-9.png" alt="Changes를 stage할 수 있는 VS Code Source Control 화면">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-10.png" alt="모든 conflict 변경 사항이 staged 상태가 된 VS Code Source Control 화면">

</figure>

Commit & Push를 진행하세요. 이로써 충돌이 해결되었습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-11.png" alt="Commit & Push가 강조된 VS Code Source Control 메뉴">

</figure>

## 넘어가기 전

최종 파일 내용이 무엇이어야 하는지 설명할 수 있고, 그 뒤 repository가 다시 clean 상태로 돌아오면 conflict 처리는 올바르게 끝난 것입니다.
