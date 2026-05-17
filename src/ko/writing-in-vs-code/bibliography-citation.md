---
layout: layouts/doc.njk
title: Bibtex
description: .bib 파일에서 reference를 관리하고 manuscript에서 source를 cite합니다.
lang: ko
section: writing-in-vs-code
order: 6
permalink: /ko/writing-in-vs-code/bibliography-citation/
translationKey: writing-bibliography-citation
eyebrow: 주제 3
lead: LaTeX에서는 .bib 파일에 참고 문헌들을 정리하는 것이 편리합니다. tex 파일에서 인용하지 않는 자료들은 컴파일 된 pdf 파일에서 나타나지 않기 때문에 하나의 .bib 파일을 만들어서 여러 논문들이 공유할 수 있습니다.
toc:
  - id: bibtex에-필요한-것
    label: BibTeX에 필요한 것
  - id: bib-파일-만들기
    label: .bib 파일 만들기
  - id: bibtex-entry-찾기
    label: BibTeX entry 찾기
  - id: entry-추가하기
    label: entry 추가하기
  - id: source-cite하기
    label: Source cite하기
  - id: bibliography-출력
    label: Bibliography 출력
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## BibTeX에 필요한 것

BibTeX workflow에서는 두 파일을 함께 사용합니다.

- `.bib` 파일에는 reference entry를 저장합니다.
- `.tex` 파일에서는 citation key를 사용해 필요한 entry를 cite합니다.

`.tex` 파일에서 cite한 entry만 컴파일된 PDF에 나타납니다. 따라서 하나의 bibliography 파일에 많은 reference를 보관해두고, 현재 manuscript에서 실제로 사용한 source만 출력할 수 있습니다.

## .bib 파일 만들기

Project root folder에 새 file을 만드세요.

<figure class="image-frame">
  <img src="/assets/images/reference-1.png" alt="VS Code explorer에서 새 파일을 만드는 메뉴">
</figure>

파일 이름은 `reference.bib`로 만듭니다.

<figure class="image-frame">
  <img src="/assets/images/reference-2.png" alt="VS Code explorer에 생성된 reference.bib 파일">
</figure>

`.bib` 파일을 manuscript 옆에 두면 Git에서 함께 관리하기 쉽고, 관련 논문들 사이에서 같은 reference 파일을 재사용하기 편합니다.

## BibTeX entry 찾기

[MathSciNet](https://mathscinet-ams-org.proxy1.cl.msu.edu/mathscinet/publications-search), Google Scholar, journal website, publisher page 같은 bibliographic database를 엽니다.

<figure class="image-frame">
  <img src="/assets/images/reference-3.png" alt="MathSciNet publication search page">
</figure>

인용하고 싶은 book, article, paper를 검색합니다.

<figure class="image-frame">
  <img src="/assets/images/reference-4.png" alt="reference 검색 결과가 보이는 MathSciNet 화면">
</figure>

Record를 열고 citation tool을 선택합니다.

<figure class="image-frame">
  <img src="/assets/images/reference-5.png" alt="Cite 버튼이 강조된 MathSciNet record page">
</figure>

`BibTeX`를 선택한 뒤 citation entry를 복사합니다.

<figure class="image-frame">
  <img src="/assets/images/reference-6.png" alt="BibTeX가 선택된 MathSciNet citation formatting 창">
</figure>

## entry 추가하기

복사한 BibTeX entry를 `reference.bib`에 붙여넣습니다.

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
       URL = {https://doi-org.proxy1.cl.msu.edu/10.1007/978-3-642-61798-0},
}
```

<figure class="image-frame">
  <img src="/assets/images/reference-7.png" alt="reference.bib 안에 BibTeX entry가 들어간 VS Code editor 화면">
</figure>

`{` 뒤에 나오는 부분이 citation key입니다. 이 예시에서는 `MR737190`이 citation key입니다.

## Source cite하기

Manuscript에서 citation key를 사용해 source를 cite합니다.

```latex
\cite{MR737190}
```

그다음 LaTeX에 어떤 bibliography file을 사용할지 알려줍니다.

```latex
\bibliographystyle{plain}
\bibliography{reference}
```

<figure class="image-frame">
  <img src="/assets/images/reference-8.png" alt="tex 파일에 citation command와 bibliography command가 들어간 VS Code editor 화면">
</figure>

File name은 `.bib` 없이 적습니다. 따라서 `reference.bib`는 `reference`로 적습니다.

## Bibliography 출력

Manuscript를 compile하고 PDF를 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/reference-9.png" alt="본문 citation과 references section이 표시된 컴파일된 PDF">
</figure>

본문에는 citation이 표시되고, references section에는 cite한 entry가 나타납니다. `reference.bib`에 reference가 들어 있어도 `.tex` 파일에서 cite하지 않으면 PDF에는 나타나지 않습니다.

일부 template은 BibTeX 대신 `biblatex`를 사용합니다. 이 경우 project 상단에는 `\addbibresource{reference.bib}`, 끝부분에는 `\printbibliography` 같은 command를 사용할 수 있습니다. Template이 기대하는 system을 사용하세요.

## 넘어가기 전

Citation을 추가하거나 수정한 뒤에는 manuscript를 다시 compile하고 PDF를 확인하세요.

Bibliography가 바로 업데이트되지 않는다면 build를 한 번 더 실행하세요. Bibliography tool은 citation과 reference list를 완전히 업데이트하기 위해 build pass가 여러 번 필요할 수 있습니다.
