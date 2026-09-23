---
layout: layouts/doc.njk
title: 수정 사항이 표시된 PDF 만들기
description: Windows에서 latexdiff로 두 TeX 파일을 비교하고 변경 표시 PDF를 만듭니다.
lang: ko
section: writing-in-vs-code
order: 9
permalink: /ko/writing-in-vs-code/revision-pdf-latexdiff/
translationKey: writing-revision-pdf-latexdiff
eyebrow: 선택
lead: Windows에서 latexdiff로 이전 버전과 수정 버전의 LaTeX 파일을 비교하고, 생성된 변경 표시 TeX 파일을 PDF로 컴파일합니다.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows의 VS Code와 PowerShell을 기준으로 안내하며 macOS와 Linux 절차는 추후 작성·검증합니다.
  workflow: 이전·수정 TeX 파일 준비, latexdiff 비교, 수식 변경 표시 선택, latexmk PDF 컴파일.
  lastVerified: 2026-09-24 VS Code·latexdiff·latexmk 공식 자료와 기존 이미지 확인. Windows 실제 실행 검증 대기 중.
  support: 기존 이미지는 예전 파일명과 화면을 포함하므로 현재 Windows 절차에 맞게 업데이트해야 합니다.
toc:
  - id: 이전-버전-준비
    label: 이전 버전 준비
  - id: 수정-버전-준비
    label: 수정 버전 준비
  - id: latexdiff-실행
    label: latexdiff 실행
  - id: 수정-사항-파일-컴파일
    label: 수정 사항 파일 컴파일
tags:
  - doc
---
## 이전 버전 준비

비교할 이전 버전의 `.tex` 파일을 `old_version.tex`로 복사합니다. PDF를 만들 때 필요한 이미지·참고문헌 등 프로젝트 파일은 계속 사용할 수 있게 둡니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-1.png" alt="Windows 파일 탐색기에서 이전 버전 원고 old_version이 강조된 화면">

  </figure>
</div>

## 수정 버전 준비

수정한 원고의 `.tex` 파일을 `revised_version.tex`로 복사합니다. `old_version.tex`와 같은 폴더에 두고, 두 파일이 실제 비교할 버전인지 확인합니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-2.png" alt="Windows 파일 탐색기에서 예전 수정 원고 파일명 Check_document가 강조된 화면">

  </figure>
</div>

## latexdiff 실행

<div class="doc-action-row">
  <p>명령 옵션이나 문제 해결에 대한 원문 설명이 필요하면 공식 latexdiff 문서를 확인합니다.</p>
  <a class="doc-action-link" href="https://github.com/ftilmann/latexdiff">공식 문서</a>
</div>

<div class="doc-step-pair">
  <div>
    <p>VS Code에서 <code>old_version.tex</code>와 <code>revised_version.tex</code>가 있는 폴더를 엽니다. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>를 눌러 명령 팔레트를 열고 <code>Terminal: Create New Terminal</code>을 실행합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-3.png" alt="VS Code 명령 팔레트에서 Terminal: Create New Terminal이 선택된 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>PowerShell 터미널에서 다음 명령을 실행해 <code>diff_version.tex</code>를 생성합니다.</p>

```powershell
cmd /c "latexdiff --math-markup=0 old_version.tex revised_version.tex > diff_version.tex"
```

  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-4.png" alt="PowerShell 터미널에 입력된 예전 latexdiff 명령">

  </figure>
</div>


위 명령의 `--math-markup=0`은 수식의 변경 표시를 끕니다. 삭제된 수식은 변경 파일에도 나타나지 않습니다. 수식 변경을 표시하려면 아래 표에서 `1`, `2`, `3` 중 하나를 선택해 명령에 적용합니다.

| 값 | 수식 변경 표시 |
|---|---|
| `0` (`off`) | 수식 변경 표시를 끄고 삭제된 수식은 변경 파일에서 제외 |
| `1` (`whole`) | 작은 변경에도 수식 전체를 변경으로 표시 |
| `2` (`coarse`) | 수식 내부 변경을 큰 단위로 표시 (기본값) |
| `3` (`fine`) | 수식 내부의 작은 변경까지 자세히 표시 |

명령이 끝나면 두 입력 파일이 있는 폴더에 `diff_version.tex`가 생성됐는지 확인합니다.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-5.png" alt="Windows 파일 탐색기에서 생성된 diff_version LaTeX 파일이 강조된 화면">

  </figure>
</div>

## 수정 사항 파일 컴파일

pdfLaTeX로 작성한 원고라면 같은 터미널에서 다음 명령으로 `diff_version.tex`를 컴파일합니다. XeLaTeX나 LuaLaTeX를 사용한다면 `-pdf`를 각각 `-xelatex` 또는 `-lualatex`로 바꿉니다.

```shell
latexmk -pdf diff_version.tex
```

<div class="doc-step-pair">
  <div>
    <p>컴파일 후 <code>diff_version.pdf</code>를 열어 아래 예시처럼 텍스트 변경이 표시되는지 확인합니다. 수식 변경 표시는 선택한 <code>--math-markup</code> 값에 따릅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-6.png" alt="삭제된 텍스트는 빨간색, 추가된 텍스트는 파란색으로 표시된 PDF 예시">

  </figure>
</div>
