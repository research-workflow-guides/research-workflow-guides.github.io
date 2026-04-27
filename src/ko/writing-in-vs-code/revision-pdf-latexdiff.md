---
layout: layouts/doc.njk
title: 수정 사항이 표시된 PDF 만들기
description: 이전 TeX 파일과 현재 TeX 파일을 비교해 수정 사항이 표시된 PDF를 만듭니다.
lang: ko
section: writing-in-vs-code
order: 7
permalink: /ko/writing-in-vs-code/revision-pdf-latexdiff/
translationKey: writing-revision-pdf-latexdiff
eyebrow: 선택
lead: 지도교수, 공동저자, 또는 reviewer에게 두 원고 버전 사이의 변경 사항이 명확히 표시된 PDF를 전달해야 할 때 사용합니다.
toc:
  - id: prepare-old-version
    label: 이전 버전 준비
  - id: prepare-revised-version
    label: 수정 버전 준비
  - id: run-latexdiff
    label: latexdiff 실행
  - id: compile-the-diff-file
    label: 수정 사항 파일 컴파일
  - id: before-proceeding
    label: 확인 사항
tags:
  - doc
---
## 이전 버전 준비

이전 원고를 `old_version.tex`로 저장합니다. 단순한 임시 백업이 아니라 실제 비교 기준이 되는 버전이어야 합니다. TeX 파일만 있으면 되고, 다른 파일은 필요하지 않습니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-1.png" alt="Example earlier manuscript file saved as old_version.tex">

  </figure>
</div>

## 수정 버전 준비

수정된 TeX 파일을 준비합니다. 예를 들어, 수정된 파일의 이름이 `Check_document.tex`라면 그대로 사용하면 됩니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-2.png" alt="latexdiff 실행 전에 현재 원고 파일을 따로 준비한 화면">

  </figure>
</div>

## latexdiff 실행

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
    <p>terminal에서 <code>latexdiff</code>를 실행해 <code>diff_version.tex</code>를 생성합니다. 터미널에 입력해야 할 코드는 다음과 같습니다.</p>

```bash
latexdiff --math-markup=0 old_version.tex revised_version.tex > diff_version.tex
```

    <p>Enter를 누르면 실행됩니다.</p>

  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-4.png" alt="latexdiff command executed in a terminal to produce diff_version.tex">

  </figure>
</div>


`--math-markup=<number>`의 숫자를 바꾸면 수식 내부 변경 사항을 얼마나 자세히 표시할지 조정할 수 있습니다.

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Code</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Value</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:left">동작</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>--math-markup=0</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>off</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">수식 내부 변경 표시 안 함 (현재 설정)</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>--math-markup=1</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>coarse</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">수식 환경 전체를 하나의 단위로 비교</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>--math-markup=2</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>whole</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">내용이 바뀌면 수식 환경 전체를 변경으로 표시</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>--math-markup=3</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>fine</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">수식 내부 원소 단위로 세밀하게 표시</td>
      </tr>
    </tbody>
  </table>
</div>

terminal에서 latexdiff를 실행하고 나면, `diff_version.tex` 파일이 생성됩니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-5.png" alt="project 안에 생성된 diff_version 파일이 보이는 화면">

  </figure>
</div>

## 수정 사항 파일 컴파일

생성된 TeX 파일을 컴파일합니다.

```bash
latexmk -pdf diff_version.tex
```

<div class="doc-step-pair">
  <div>
    <p>컴파일이 성공하면, 아래와 같이 수정 사항이 표시된 PDF를 얻을 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-6.png" alt="Compiled redlined PDF with highlighted manuscript changes">

  </figure>
</div>

## 확인 사항

아래 항목이 모두 맞는지 확인하세요.

- `old_version.tex`와 `revised_version.tex`가 실제 비교하려는 두 원고 버전을 나타낸다
- `diff_version.tex`가 의도한 입력 파일 기준으로 생성됐다
- `latexmk -pdf diff_version.tex`가 읽을 수 있는 수정 사항이 표시된 PDF를 만들었다
