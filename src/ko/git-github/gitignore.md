---
layout: layouts/doc.njk
title: Gitignore
description: 특정 파일이나 폴더를 GitHub 커밋에서 제외합니다.
lang: ko
section: git-github
order: 12
permalink: /ko/git-github/gitignore/
translationKey: git-gitignore
eyebrow: 선택
lead: "<code>.gitignore</code>를 사용하면 GitHub에 올리지 않을 파일과 폴더를 정리할 수 있습니다."
toc:
  - id: 로컬-잡파일-무시
    label: 로컬 잡파일 무시
  - id: 이미-올라간-잡파일들
    label: 이미 올라간 잡파일들
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 로컬 잡파일 무시

특정 파일 혹은 폴더를 GitHub에 커밋하고 싶지 않을 때에는 `.gitignore` 파일을 생성하면 됩니다.

데이터셋이나 생성된 결과물처럼 GitHub에 업로드하기에는 너무 큰 파일을 컴퓨터에만 보관하고 싶을 때에도 유용합니다.

<div class="doc-step-pair">
  <div>
    <p>다음과 같이 <code>heavy</code>라는 폴더 안에 있는 모든 자료들을 커밋하고 싶지 않다고 합시다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-1.png" alt="heavy 폴더가 있는 예시 프로젝트 구조">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p><code>.gitignore</code>를 최상위 폴더에 생성하세요.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-2.png" alt="project 최상위의 .gitignore 파일">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-3.png" alt=".gitignore에 무시 규칙이 적힌 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>커밋하고 싶지 않은 폴더 이름이나 무시 패턴을 <code>.gitignore</code>에 추가합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-4.png" alt="VS Code에서 회색으로 표시된 무시된 폴더">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>파일을 저장하면 폴더가 회색으로 표시된 것을 확인할 수 있습니다.</p>
    <p>무시 규칙을 저장한 뒤 commit과 push를 진행합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-5.png" alt=".gitignore 규칙을 추가한 뒤 commit과 push를 진행하는 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>commit과 push를 해보면 무시된 파일들은 GitHub에 업로드되지 않았지만, <code>.gitignore</code> 파일 자체는 업로드된 것을 확인할 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-6.png" alt="GitHub 저장소에 무시된 폴더가 없는 화면">

  </figure>
</div>

## 이미 올라간 잡파일들

`.gitignore`는 Git에 한 번도 올라가지 않은 파일에만 적용됩니다. 이미 add나 commit을 한 적이 있다면, 목록에 적어도 무시하지 않습니다. 이미 Git에 올라간 파일들은 캐시(Cache)를 한 번 지워줘야 `.gitignore`가 적용됩니다.

이미 올라간 파일이나 폴더를 내 컴퓨터에는 남겨두고 GitHub에서만 지우고 싶다면, 터미널에 다음 명령어를 입력하세요.

```bash
git rm -r --cached <file-or-folder-name>
git commit -m "Stop tracking ignored files"
git push
```

## 넘어가기 전

넘어가기 전에 `.gitignore`에 제외하려는 파일이나 폴더가 적혀 있고, VS Code에서 회색으로 표시되며, commit과 push 후 GitHub에 올라가지 않았는지 확인하세요. 여전히 Git에 보인다면 무시 규칙을 추가하기 전에 이미 Git이 추적하던 파일인지 확인합니다.
