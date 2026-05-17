---
layout: layouts/doc.njk
title: Pull과 Push
description: 로컬 작업과 원격 이력을 맞추는 기본 sync 루프를 반복합니다.
lang: ko
section: git-github
order: 7
permalink: /ko/git-github/pull-push/
translationKey: git-pull-push
eyebrow: 주제 2
lead: 일상적인 원격 작업 흐름은 작게 유지합니다. 필요하면 먼저 pull하고, 의미 있는 단위로 commit한 뒤, 준비되면 push합니다.
toc:
  - id: 용어-정리
    label: 용어 정리
  - id: pull-첫-번째-방법
    label: Pull (첫 번째 방법)
  - id: pull-두-번째-방법
    label: Pull (두 번째 방법)
  - id: pull-세-번째-방법
    label: Pull (세 번째 방법)
  - id: push-첫-번째-방법
    label: Push (첫 번째 방법)
  - id: push-두-번째-방법
    label: Push (두 번째 방법)
  - id: push-세-번째-방법
    label: Push (세 번째 방법)
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---

<figure class="image-frame">
  <img src="/assets/images/3-topic-1-1.PNG" alt="Pull과 Push 워크플로우 개요">
</figure>

## 용어 정리

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">용어</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">의미</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Stage</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">변경 사항을 커밋에 포함시키기 전에 준비하는 작업.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Commit</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">로컬 Git 저장소에 변경 사항을 저장하는 작업.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Push</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">로컬 Git 저장소에 있는 커밋을 원격 저장소로 전송하는 작업.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Pull</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">원격 저장소에 있는 커밋을 가져와 로컬 브랜치에 병합하는 작업.</td>
      </tr>
    </tbody>
  </table>
</div>

## Pull (첫 번째 방법)

GitHub에 업로드 되어 있는 것을 등록된 폴더로 다운로드하는 것을 배워보도록 하겠습니다.

Source Control에서 오른쪽 버튼을 클릭하고 'Pull'을 선택하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-10.png" alt="VS Code Source Control Pull 메뉴">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-11%20(1).png" alt="Pull 메뉴가 강조된 VS Code Source Control 화면">
</figure>

Pull이 성공적으로 완료되면 다음과 같은 화면을 확인할 수 있습니다.

아무도 remote를 바꾸지 않았다면 pull은 아무 일도 하지 않습니다. 그것도 정상입니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-12.png" alt="Pull 완료 후 VS Code Source Control 화면">
</figure>

## Pull (두 번째 방법)

Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>로 새 터미널을 엽니다. 그런 다음 다음 명령어를 입력하세요:

```bash
git pull
```

## Pull (세 번째 방법)

Command Palette에서도 Pull 명령을 실행할 수 있습니다. Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>를 사용하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-10%20(2).png" alt="VS Code Command Palette Pull 명령">
</figure>

## Push (첫 번째 방법)

변경된 사항을 Stage하고 Commit 후에 Push함으로써 GitHub에 업로드할 수 있습니다.

Source Control에서 Changes의 '+'버튼을 클릭하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-1.png" alt="VS Code Source Control Changes의 plus 버튼">
</figure>

Staged Changes가 생긴 것을 확인할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-2.png" alt="Staged Changes가 생긴 VS Code Source Control 화면">
</figure>

Commit message를 입력하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-3.png" alt="commit message가 입력된 VS Code Source Control 화면">
</figure>

오른쪽 버튼을 클릭하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-5.png" alt="VS Code Source Control commit 버튼 메뉴">
</figure>

'Commit & Push'를 선택하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-6.png" alt="VS Code Source Control Commit & Push 선택지">
</figure>

## Push (두 번째 방법)

Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>로 새 터미널을 엽니다. 그런 다음 다음 명령어를 입력하세요:

```bash
git add .
git commit -m "Describe your change"
git push
```

## Push (세 번째 방법)

Command Palette에서도 Push 명령을 실행할 수 있습니다. Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>를 사용하세요.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-11%20(2).png" alt="VS Code Command Palette Push 명령">
</figure>

## 넘어가기 전

언제 pull하고, 언제 commit하고, 언제 push하는지 즉흥적으로 판단하지 않고 설명할 수 있으면 기본 sync 루프는 자리 잡은 것입니다.
