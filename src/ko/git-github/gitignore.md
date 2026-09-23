---
layout: layouts/doc.njk
title: Gitignore
description: Windows의 VS Code에서 .gitignore로 생성 파일과 로컬 폴더를 Git 추적에서 제외합니다.
lang: ko
section: git-github
order: 12
permalink: /ko/git-github/gitignore/
translationKey: git-gitignore
eyebrow: 선택
lead: "Windows의 VS Code에서 <code>.gitignore</code>로 Git이 추적하지 않을 생성 파일과 로컬 폴더를 지정합니다."
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code와 Git 통합 터미널을 기준으로 안내합니다.
  workflow: .gitignore 규칙 추가, 무시 여부 확인, 이미 추적 중인 파일 정리.
  lastVerified: 2026-09-24 Git과 GitHub 공식 문서를 확인했습니다. 현재 Windows 화면 검증 대기 중.
  support: 기존 이미지는 오래된 VS Code 화면과 공개 GitHub 저장소를 보여주므로 업데이트가 필요합니다.
toc:
  - id: 로컬-잡파일-무시
    label: 새 폴더 무시
  - id: 이미-올라간-잡파일들
    label: 이미 추적 중인 파일
tags:
  - doc
---
<h2 id="로컬-잡파일-무시">새 폴더 무시</h2>

프로젝트에서 생성되지만 Git으로 추적하지 않을 파일이나 폴더는 저장소의 `.gitignore`에 적습니다. 이 규칙에 맞는 새 파일은 일반적인 `git add` 대상에서 제외됩니다.

빌드가 다시 만드는 `.aux`, `.log` 파일이나 이 컴퓨터에서만 쓰는 임시 폴더에 무시 규칙을 적용할 수 있습니다. 원고와 참고문헌처럼 공유할 원본 파일은 필요한 범위를 정해 커밋합니다.

<div class="doc-step-pair">
  <div>
    <p>예시 프로젝트의 <code>heavy</code> 폴더를 Git에서 무시해 보겠습니다. 이 폴더는 아직 Git이 추적하지 않는 파일을 담고 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-1.png" alt="추적되지 않은 파일을 담은 heavy 폴더가 보이는 예전 VS Code 탐색기 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>VS Code에서 저장소의 최상위 폴더를 오른쪽 클릭하고 <strong>New File...</strong>을 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-2.png" alt="저장소 최상위 폴더의 메뉴에서 New File을 선택하는 예전 VS Code 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>새 파일 이름으로 <code>.gitignore</code>를 입력합니다. 이 파일은 예시의 <code>heavy</code> 폴더와 같은 최상위 폴더에 둡니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-3.png" alt="저장소 최상위에 .gitignore 파일 이름을 입력하는 예전 VS Code 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p><code>.gitignore</code>에 <code>heavy/</code>를 한 줄로 입력하고 저장합니다. 끝의 <code>/</code>는 폴더를 뜻합니다. 이 패턴은 <code>.gitignore</code>가 있는 위치 아래에서 이름이 <code>heavy</code>인 폴더에 적용됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-4.png" alt=".gitignore 파일에 heavy/ 규칙을 입력한 예전 VS Code 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>파일을 저장하면 VS Code에서 무시된 폴더가 흐리게 보일 수 있습니다. 표시 방식과 관계없이 아래 Git 명령으로 규칙을 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-5.png" alt="heavy/ 규칙을 저장한 뒤 heavy 폴더가 흐리게 표시된 예전 VS Code 화면">

  </figure>
</div>

저장소 최상위 폴더에서 다음 명령을 실행합니다. 출력에 `.gitignore`의 `heavy/` 규칙이 보이면 예시 파일이 무시되고 있습니다.

```shell
git check-ignore -v heavy/this-is-a-heavy-file.txt
```

`.gitignore`와 필요한 원본 파일만 골라 커밋하고 Push합니다.

<div class="doc-step-pair">
  <div>
    <p>GitHub의 비공개 저장소에는 커밋한 <code>.gitignore</code>가 보이고, 처음부터 무시한 <code>heavy</code> 폴더는 보이지 않습니다. 아래 기존 이미지는 공개 저장소에서 만든 예시입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-6.png" alt="공개 GitHub 저장소에 .gitignore 파일이 있고 heavy 폴더가 없는 예전 화면">

  </figure>
</div>

<h2 id="이미-올라간-잡파일들">이미 추적 중인 파일</h2>

`.gitignore` 규칙은 아직 Git이 추적하지 않는 파일에 적용됩니다. 이미 `git add`로 추적을 시작한 파일에는 새 규칙이 바로 적용되지 않습니다. 로컬 파일을 남겨두고 추적을 중지하려면 Git의 추적 목록에서 해당 경로를 제거합니다.

예시의 `heavy/`가 이미 추적 중이었다면, 저장소 최상위 폴더의 터미널에서 먼저 추적 중인 파일을 확인합니다. 출력에 의도한 파일만 있는 경우 다음 명령으로 Git의 추적 목록에서 폴더를 제거합니다. 로컬 작업 파일은 남습니다.

```shell
git ls-files -- heavy/
git rm -r --cached -- heavy/
git add .gitignore
git status
```

`git status`에서 `heavy/`의 추적 중지와 `.gitignore` 변경을 검토한 뒤 해당 변경만 커밋하고 Push합니다. 이후 GitHub의 최신 파일 목록에서는 `heavy/`가 사라지지만, 이전 커밋의 이력은 남습니다. 새 파일이 무시되지 않는다면 `git check-ignore -v`로 적용된 규칙을 확인합니다.
