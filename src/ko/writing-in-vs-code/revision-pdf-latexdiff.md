---
layout: layouts/doc.njk
title: latexdiff로 revision PDF 만들기
description: old TeX와 revised TeX를 비교해 latexdiff로 review PDF를 만드는 흐름을 정리합니다.
lang: ko
section: writing-in-vs-code
order: 7
permalink: /ko/writing-in-vs-code/revision-pdf-latexdiff/
translationKey: writing-revision-pdf-latexdiff
eyebrow: 선택
lead: 이전 원고와 현재 원고의 차이를 표시한 review PDF가 필요할 때 사용하는 선택 흐름입니다.
toc:
  - id: what-this-page-is-for
    label: 이 문서의 역할
  - id: prepare-old-version
    label: old version 준비
  - id: prepare-revised-version
    label: revised version 준비
  - id: run-latexdiff
    label: latexdiff 실행
  - id: inspect-diff-version
    label: diff_version.tex 확인
  - id: compile-the-diff-file
    label: diff file 컴파일
  - id: review-the-generated-pdf
    label: PDF 검토
  - id: before-you-move-on
    label: 확인 사항
tags:
  - doc
---
## What this page is for

이 흐름은 지도교수, 공동저자, reviewer에게 수정 사항이 보이는 PDF를 전달해야 할 때 사용합니다.

흐름은 의도적으로 좁게 유지합니다. 두 TeX 파일을 준비하고, `diff_version.tex`를 생성하고, compile해서 결과 PDF를 읽습니다.

## Prepare old version

이전 원고를 `old_version.tex`로 저장합니다. 단순한 임시 백업이 아니라 실제 비교 기준이 되는 버전이어야 합니다.

<div class="doc-step-pair">
  <div>
    <p>비교 기준 파일 이름이 분명해야 결과 PDF도 분명해집니다. 무엇을 기준으로 비교했는지 모호하면 revision PDF의 의미도 바로 흐려집니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-1.png" alt="Example earlier manuscript file saved as old_version.tex">

  </figure>
</div>

## Prepare revised version

현재 원고 상태는 `revised_version.tex`로 둡니다. 두 파일은 같은 문서의 이전/현재 버전이어야지, 서로 다른 초안이면 안 됩니다.

<div class="doc-step-pair">
  <div>
    <p>이전 버전과 현재 버전은 분리된 비교 입력으로 두세요. 실행 전에 현재 원고 파일이 따로 구분되어 있어야 결과를 해석하기 쉽습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-2.png" alt="latexdiff 실행 전에 현재 원고 파일을 따로 준비한 화면">

  </figure>
</div>

## Run latexdiff

두 파일이 들어 있는 폴더에서 terminal을 연 뒤 아래 명령을 실행합니다.

```bash
latexdiff --math-markup=0 old_version.tex revised_version.tex > diff_version.tex
```

<div class="doc-step-pair">
  <div>
    <p>두 TeX 파일이 있는 manuscript 폴더에서 terminal을 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-3.png" alt="VS Code command palette에서 Create New Terminal을 선택하는 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 <code>latexdiff</code>를 실행해 비교 결과가 반영된 새 TeX 파일인 <code>diff_version.tex</code>를 생성합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-4.png" alt="latexdiff command executed in a terminal to produce diff_version.tex">

  </figure>
</div>

## Inspect diff_version.tex

compile하기 전에 `diff_version.tex`를 열고 정상적으로 생성됐는지 확인합니다. 간단한 확인만으로도 build 실패 전에 문제를 잡을 수 있습니다.

<div class="doc-step-pair">
  <div>
    <p>모든 줄을 읽을 필요는 없습니다. 파일이 존재하는지, markup이 합리적으로 보이는지, 의도한 두 문서의 diff인지 확인하면 충분합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-5.png" alt="project 안에 생성된 diff_version 파일이 보이는 화면">

  </figure>
</div>

## Compile the diff file

생성된 diff 파일을 별도 target으로 compile합니다.

```bash
latexmk -pdf diff_version.tex
```

이 단계가 끝나면 삽입과 삭제가 표시된 reviewer 친화적 PDF가 생성됩니다.

## Review the generated PDF

만들어진 PDF를 열고 수정 표시가 충분히 명확해서 보낼 수 있는지 확인합니다.

<div class="doc-step-pair">
  <div>
    <p>최종 점검은 시각적인 확인입니다 — markup이 읽기 좋은지, 수식이 온전한지, PDF가 의도한 비교 결과와 맞는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-6.png" alt="Compiled revision PDF with highlighted manuscript changes">

  </figure>
</div>

## Before you move on

아래 항목이 모두 맞는지 확인하세요.

- `old_version.tex`와 `revised_version.tex`가 실제 비교 대상 원고 상태를 나타낸다
- `diff_version.tex`가 의도한 입력 파일 기준으로 생성됐다
- `latexmk -pdf diff_version.tex`가 읽을 수 있는 review PDF를 만들었다
