---
layout: layouts/doc.njk
title: Git status
description: stage, commit, push 전에 무엇이 바뀌었는지 확인합니다.
lang: ko
section: git-github
order: 7
permalink: /ko/git-github/git-status/
translationKey: git-status
eyebrow: 주제 2
lead: stage, commit, push 전에 무엇이 바뀌었는지 확인합니다.
toc:
  - id: 현재-상태-확인
    label: 현재 상태 확인
  - id: 기본-파일-상태
    label: 기본 파일 상태
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 현재 상태 확인

Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>로 새 터미널을 엽니다. 그런 다음 다음 명령어를 입력하세요:

```bash
git status
```

그러면 터미널에서 다음과 같은 결과를 확인할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/gitstatus.png" alt="터미널에 표시된 git status 결과">
</figure>

## 기본 파일 상태

가장 중요한 파일 상태는 다음 정도면 충분합니다.

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">상태</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">의미</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>tracked</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Git이 이미 알고 있고 변경 사항을 추적하는 파일입니다.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>modified</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">로컬에서 파일이 바뀌었지만 아직 stage되지 않은 상태입니다.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>staged</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">변경 사항이 다음 commit에 포함되도록 준비된 상태입니다.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>committed</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">변경 사항이 로컬 Git 이력에 저장된 상태입니다.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>ignored</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">ignore 규칙 때문에 Git이 의도적으로 제외하는 파일입니다.</td>
      </tr>
    </tbody>
  </table>
</div>

## 넘어가기 전

기본 파일 상태를 구분할 수 있으면 `git status`를 더 의식적으로 사용할 준비가 된 것입니다.
