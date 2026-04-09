---
layout: layouts/doc.njk
title: 버전 관리
description: tracked, staged, committed, ignored 상태를 구분해 안정적으로 작업합니다.
lang: ko
section: git-github
order: 7
permalink: /ko/git-github/version-control/
translationKey: git-version-control
eyebrow: 주제 2
lead: 침착한 Git 사용은 파일 상태를 구분하고, repository에 들어가면 안 되는 파일을 아는 데서 시작합니다.
toc:
  - id: 기본-파일-상태
    label: 기본 파일 상태
  - id: status-자주-확인
    label: status 자주 확인
  - id: 로컬-잡파일-무시
    label: 로컬 잡파일 무시
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## 기본 파일 상태

가장 중요한 파일 상태는 다음 정도면 충분합니다.

- tracked
- modified
- staged
- committed
- ignored

Git 개념을 한 번에 다 알 필요는 없습니다. 이 상태들만 구분해도 대부분의 일상 repository 동작을 설명할 수 있습니다.

## status 자주 확인

헷갈릴 때 실행할 명령은 `git status`입니다.

```bash
git status
```

무엇이 바뀌었는지, 무엇이 staged인지, 무엇이 더 필요한지 보여줍니다.

## 로컬 잡파일 무시

생성된 auxiliary file, local cache, machine-specific 파일처럼 version control에 들어가면 안 되는 것들이 있습니다.

이런 파일은 `.gitignore`로 repository 밖에 두어 이력이 불필요하게 지저분해지지 않도록 합니다.

<div class="doc-step-pair">
  <div>
    <p>version control에 올리면 안 되는 큰 로컬 폴더나 generated file을 식별합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/example-folder.png" alt="heavy 폴더가 있는 예시 project 구조">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 project 최상위에 <code>.gitignore</code> 파일을 만들어 ignore 규칙을 둘 자리를 잡습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/step1-root-file.png" alt="project 최상위의 .gitignore 파일">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>이제 <code>.gitignore</code>에 실제 폴더 이름이나 패턴을 적어 Git이 local clutter를 제외하게 만듭니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/step2-ignore-entry.png" alt=".gitignore에 ignore 규칙이 적힌 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>규칙을 저장하면 VS Code에서는 보통 ignored 폴더가 explorer에서 더 흐리게 보입니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/step2-gray-folder.png" alt="VS Code에서 흐리게 보이는 ignored 폴더">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>이후 commit과 push를 해도 그런 파일은 GitHub 저장소 화면에 나타나지 않아야 합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/step3-commit-result.png" alt="GitHub 저장소에서 보이지 않는 ignored 폴더">

  </figure>
</div>

## 넘어가기 전

`git status`를 보고 어떤 파일이 commit 준비가 됐는지, 어떤 파일이 로컬 잡파일인지, 어떤 파일이 ignore 대상인지 설명할 수 있으면 충분합니다.
