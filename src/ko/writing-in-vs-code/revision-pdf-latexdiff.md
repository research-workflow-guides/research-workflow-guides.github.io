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

핵심 단계는 좁게 유지합니다. 두 개의 TeX 파일을 준비하고, `diff_version.tex`를 만든 다음, 그것을 compile해서 revision PDF를 확인하는 흐름입니다.

## Prepare old version

먼저 이전 원고 상태를 `old_version.tex`로 따로 둡니다. 이 파일은 단순한 임시 백업이 아니라, 실제로 비교 기준이 되는 원고 상태여야 합니다.

<div class="doc-section-grid">
  <div>
    <p>비교 기준 파일 이름이 분명해야 결과 PDF도 분명해집니다. 무엇을 기준으로 비교했는지 모호하면 revision PDF의 의미도 바로 흐려집니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-1.png" alt="Example earlier manuscript file saved as old_version.tex">
    <figcaption>이전 원고 상태를 <code>old_version.tex</code>로 준비합니다.</figcaption>
  </figure>
</div>

## Prepare revised version

현재 원고 상태는 `revised_version.tex`로 둡니다. 두 파일은 같은 문서의 이전/현재 버전이어야지, 서로 다른 초안이면 안 됩니다.

<div class="doc-section-grid">
  <div>
    <p>입력 파일 이름을 명확하게 나누면 이후 점검이 쉬워집니다. 실행 전에 old와 revised가 분리돼 있어야 명령과 결과를 해석하기 쉽습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-2.png" alt="Example current manuscript file saved as revised_version.tex">
    <figcaption>현재 원고 상태를 <code>revised_version.tex</code>로 둡니다.</figcaption>
  </figure>
</div>

## Run latexdiff

두 파일이 들어 있는 폴더에서 terminal을 연 뒤 아래 명령을 실행합니다.

```bash
latexdiff --math-markup=0 old_version.tex revised_version.tex > diff_version.tex
```

<div class="doc-section-grid">
  <div>
    <p>이 단계는 곧바로 PDF를 만들지 않습니다. 먼저 비교 결과가 반영된 새 TeX 파일인 <code>diff_version.tex</code>를 생성합니다.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-3.png" alt="Terminal opened in the manuscript directory before running latexdiff">
      <figcaption>먼저 두 입력 파일이 있는 manuscript 폴더에서 terminal을 엽니다.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-4.png" alt="latexdiff command executed in a terminal to produce diff_version.tex">
      <figcaption><code>latexdiff</code>를 실행해 <code>diff_version.tex</code>를 생성합니다.</figcaption>
    </figure>
  </div>
</div>

## Inspect diff_version.tex

compile하기 전에 `diff_version.tex`를 한 번 열어 정상적으로 만들어졌는지 확인하세요. 이 짧은 확인만으로도 입력 파일을 잘못 넣은 경우를 빨리 잡을 수 있습니다.

<div class="doc-section-grid">
  <div>
    <p>모든 줄을 읽을 필요는 없습니다. 파일이 실제로 생성됐는지, 표시용 markup가 대체로 정상인지, 의도한 문서를 비교한 결과가 맞는지만 보면 충분합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-5.png" alt="Generated diff_version.tex opened for inspection in an editor">
    <figcaption>compile 전에 <code>diff_version.tex</code>를 한 번 열어 확인합니다.</figcaption>
  </figure>
</div>

## Compile the diff file

생성된 diff 파일을 별도 target으로 compile합니다.

```bash
latexmk -pdf diff_version.tex
```

이 단계가 끝나면 reviewer가 읽기 쉬운 revision PDF가 생성돼야 합니다.

## Review the generated PDF

마지막으로 만들어진 PDF를 열어 수정 표시가 실제로 읽기 좋은지 확인합니다.

<div class="doc-section-grid">
  <div>
    <p>최종 점검은 시각적인 확인입니다. 변경 표시가 지나치게 깨지지 않았는지, 수식이 읽히는지, 의도한 비교 결과가 맞는지 확인하세요.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-6.png" alt="Compiled revision PDF with highlighted manuscript changes">
    <figcaption>완성된 revision PDF는 삽입과 삭제를 읽기 쉽게 보여줘야 합니다.</figcaption>
  </figure>
</div>

## Before you move on

아래 항목이 모두 맞는지 확인하세요.

- `old_version.tex`와 `revised_version.tex`가 실제 비교 대상 원고 상태를 나타낸다
- `diff_version.tex`가 의도한 입력 파일 기준으로 생성됐다
- `latexmk -pdf diff_version.tex`가 읽을 수 있는 review PDF를 만들었다
