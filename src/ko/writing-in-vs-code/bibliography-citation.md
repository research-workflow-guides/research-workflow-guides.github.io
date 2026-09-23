---
layout: layouts/doc.njk
title: BibTeX
description: .bib 파일에 참고 문헌 정보를 저장하고 LaTeX 원고에서 인용하는 방법을 안내합니다.
lang: ko
section: writing-in-vs-code
order: 6
permalink: /ko/writing-in-vs-code/bibliography-citation/
translationKey: writing-bibliography-citation
eyebrow: 주제 3
lead: BibTeX에서는 참고 문헌 정보를 .bib 파일에 모읍니다. 원고의 .tex 파일에서 필요한 항목을 인용 키로 인용하고, 같은 .bib 파일을 여러 원고에서 재사용할 수 있습니다.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: 기존 이미지는 Windows VS Code와 MathSciNet 화면을 보여줍니다.
  workflow: .bib 파일 작성, BibTeX 항목 복사, 원고 인용과 참고 문헌 출력.
  lastVerified: 2026-09-23 기존 이미지와 현재 단계 안내 비교. 실제 화면 재검증 대기 중.
  support: 기존 이미지는 예전 프로젝트 폴더 구조를 보여주므로 업데이트가 필요합니다.
workflowChecks: false
toc:
  - id: bibtex에-필요한-것
    label: BibTeX에서 쓰는 두 파일
  - id: bib-파일-만들기
    label: .bib 파일 준비하기
  - id: bibtex-entry-찾기
    label: BibTeX 항목 찾기
  - id: entry-추가하기
    label: 항목 추가하기
  - id: source-cite하기
    label: 원고에서 인용하기
  - id: bibliography-출력
    label: 참고 문헌 목록 확인하기
tags:
  - doc
---
<h2 id="bibtex에-필요한-것">BibTeX에서 쓰는 두 파일</h2>

- `.bib` 파일에는 각 문헌의 서지 정보와 인용 키를 저장합니다.
- `.tex` 파일에서는 인용 키로 필요한 문헌을 인용합니다.

아래 BibTeX 예제에서는 `.tex` 파일의 `\cite` 명령으로 인용한 항목만 참고 문헌 목록에 나타납니다. 따라서 `.bib` 파일 하나에 문헌을 여럿 저장하고, 현재 원고에 필요한 항목을 골라 인용할 수 있습니다.

<h2 id="bib-파일-만들기">.bib 파일 준비하기</h2>

앞 단계의 `seed-document` 예제에는 `bibliography.bib`가 이미 있으므로 이 파일을 엽니다. 새 원고라면 원고의 `.tex` 파일이 있는 폴더에 `.bib` 파일을 만듭니다.

<figure class="image-frame">
  <img src="/assets/images/reference-1.png" alt="VS Code explorer에서 새 파일을 만드는 메뉴">
</figure>

새 파일을 만드는 경우 예시 이름을 `reference.bib`로 지정합니다.

<figure class="image-frame">
  <img src="/assets/images/reference-2.png" alt="VS Code explorer에 생성된 reference.bib 파일">
</figure>

`.bib` 파일을 원고와 같은 폴더에 두면 Git에서 함께 관리하고, 그 폴더의 다른 원고에서도 사용할 수 있습니다.

<h2 id="bibtex-entry-찾기">BibTeX 항목 찾기</h2>

<div class="doc-action-row">
  <p>MathSciNet이나 Google Scholar에서 문헌을 검색하거나 학술지·출판사 웹페이지에서 해당 문헌을 찾습니다.</p>
  <a class="doc-action-link" href="https://mathscinet.ams.org/">MathSciNet</a>
</div>

아래 MathSciNet 이미지는 이전 화면입니다. 현재 화면에서는 본문에 적힌 **Export → BibTeX → Get Citations → Copy** 순서를 따릅니다.

<figure class="image-frame">
  <img src="/assets/images/reference-3.png" alt="MathSciNet publication search page">
</figure>

인용할 문헌의 제목이나 저자를 검색합니다.

<figure class="image-frame">
  <img src="/assets/images/reference-4.png" alt="reference 검색 결과가 보이는 MathSciNet 화면">
</figure>

검색 결과 위쪽에서 **Export**를 열고 인용할 항목을 선택합니다.

<figure class="image-frame">
  <img src="/assets/images/reference-5.png" alt="Cite 버튼이 강조된 MathSciNet record page">
</figure>

인용 형식을 **BibTeX**로 정하고 **Get Citations**를 누른 뒤 **Copy**로 항목을 복사합니다.

<figure class="image-frame">
  <img src="/assets/images/reference-6.png" alt="BibTeX가 선택된 MathSciNet citation formatting 창">
</figure>

<h2 id="entry-추가하기">항목 추가하기</h2>

복사한 BibTeX 항목을 사용 중인 `.bib` 파일에 붙여넣습니다. 아래 예시는 `reference.bib`에 추가한 모습입니다.

```bibtex
@book {MR737190,
    AUTHOR = {Gilbarg, David and Trudinger, Neil S.},
     TITLE = {Elliptic partial differential equations of second order},
    SERIES = {Grundlehren der mathematischen Wissenschaften [Fundamental
              Principles of Mathematical Sciences]},
    VOLUME = {224},
   EDITION = {Second},
 PUBLISHER = {Springer-Verlag, Berlin},
      YEAR = {1983},
     PAGES = {xiii+513},
      ISBN = {3-540-13025-X},
   MRCLASS = {35Jxx (35-01)},
  MRNUMBER = {737190},
MRREVIEWER = {O.\ John},
       DOI = {10.1007/978-3-642-61798-0},
       URL = {https://doi.org/10.1007/978-3-642-61798-0},
}
```

<figure class="image-frame">
  <img src="/assets/images/reference-7.png" alt="reference.bib 안에 BibTeX entry가 들어간 VS Code editor 화면">
</figure>

첫 줄에서 `@book` 뒤 중괄호 안의 `MR737190`이 인용 키입니다. 원고의 `\cite{...}`에 같은 값을 씁니다.

<h2 id="source-cite하기">원고에서 인용하기</h2>

```latex
\cite{MR737190}
```

새로 만든 `reference.bib`를 쓰는 원고라면 `\end{document}` 앞에 다음 명령을 넣습니다. 첫 명령은 참고 문헌 목록의 형식을, 둘째 명령은 읽을 `.bib` 파일을 지정합니다. `seed-document` 예제의 기존 `abbrv` 스타일과 `bibliography.bib` 연결은 그대로 사용합니다.

```latex
\bibliographystyle{plain}
\bibliography{reference}
```

<figure class="image-frame">
  <img src="/assets/images/reference-8.png" alt="tex 파일에 citation command와 bibliography command가 들어간 VS Code editor 화면">
</figure>

`\bibliography{...}`에는 `.bib` 확장자를 뺀 파일 이름을 적습니다. `reference.bib`라면 `\bibliography{reference}`, `bibliography.bib`라면 `\bibliography{bibliography}`입니다.

<h2 id="bibliography-출력">참고 문헌 목록 확인하기</h2>

VS Code에서 원고의 `.tex` 파일을 열고 Command Palette의 **Build LaTeX project**를 실행한 다음 PDF 미리보기를 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/reference-9.png" alt="본문 citation과 references section이 표시된 컴파일된 PDF">
</figure>

PDF 본문의 인용 표시가 `?`가 아닌지, 참고 문헌 목록에 해당 문헌이 있는지 확인합니다. 항목이 없으면 `.tex`의 인용 키와 `.bib` 항목 첫 줄의 인용 키가 같은지 확인합니다.

원고 템플릿이 `biblatex`를 불러온다면 위 BibTeX 명령을 추가하지 말고, 템플릿의 `\addbibresource{...}`와 `\printbibliography` 설정을 따릅니다. 참고 문헌이 나오지 않으면 템플릿에서 지정한 백엔드가 빌드에 포함되는지 확인합니다.

인용이 `?`로 남거나 참고 문헌 목록이 갱신되지 않으면 LaTeX Workshop 빌드 로그에서 BibTeX 또는 템플릿의 백엔드 오류를 확인합니다. 오류를 수정한 뒤 다시 빌드하고 PDF를 확인합니다.
