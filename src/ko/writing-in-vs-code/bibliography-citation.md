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
lead: Reference data는 bibliography file에 보관하고, manuscript text에서는 해당 entry를 cite합니다.
toc:
  - id: what-citations-need
    label: Citation에 필요한 것
  - id: create-a-bib-file
    label: .bib 파일 만들기
  - id: add-a-reference-entry
    label: Reference entry 추가
  - id: cite-the-source
    label: Source cite하기
  - id: print-the-bibliography
    label: Bibliography 출력
  - id: before-proceeding
    label: 넘어가기 전
tags:
  - doc
---
## Citation에 필요한 것

LaTeX citation workflow에서는 보통 manuscript text와 reference data를 분리해서 관리합니다.

- Manuscript file에는 글과 citation command를 작성합니다.
- `.bib` file에는 reference entry를 저장합니다.
- 각 reference entry에는 citation key가 있습니다.
- Manuscript에서는 그 key를 사용해 source를 cite합니다.

Journal template이나 project template에 이미 bibliography command가 들어 있다면, 먼저 그 template의 방식을 따르세요. 이유를 정확히 모른다면 한 project 안에서 여러 bibliography system을 섞어 쓰지 않는 것이 좋습니다.

## .bib 파일 만들기

Project root folder에 `references.bib`라는 file을 만드세요.

Bibliography file을 main manuscript 옆에 두면 Git에서 함께 관리하기 쉽고, chapter나 section이 나뉘어 있어도 같은 reference file을 재사용할 수 있습니다.

## Reference entry 추가

`references.bib`에 reference entry 하나를 추가합니다.

```bibtex
@article{smith2024workflow,
  author  = {Smith, Jane and Lee, Min},
  title   = {Research Workflow Example},
  journal = {Example Journal},
  year    = {2024}
}
```

`{` 뒤에 나오는 부분이 citation key입니다. 이 예시에서는 `smith2024workflow`가 citation key입니다.

Citation key는 짧고 읽기 쉽게 만드세요. 흔히 `authorYearKeyword` 형식을 사용합니다. 예를 들어 `smith2024workflow`나 `kim2025latex`처럼 만들 수 있습니다.

## Source cite하기

Manuscript에서 citation key를 사용해 source를 cite합니다.

```latex
This workflow follows earlier research practice \cite{smith2024workflow}.
```

Citation key가 틀렸거나 `.bib` file에 없다면 PDF에 물음표가 표시되거나 build log에 warning이 나올 수 있습니다.

## Bibliography 출력

Template에 bibliography command가 이미 들어 있을 수 있습니다. 그런 경우에는 template에 있는 방식을 유지하세요.

기본적인 BibTeX-style setup에서는 manuscript 끝부분이 보통 다음과 비슷합니다.

```latex
\bibliographystyle{plain}
\bibliography{references}
```

File name은 `.bib` 없이 적습니다. 따라서 `references.bib`는 `references`로 적습니다.

일부 template은 `biblatex`를 사용합니다. 이 경우 project 상단에는 `\addbibresource{references.bib}`, 끝부분에는 `\printbibliography` 같은 command를 사용할 수 있습니다. Template이 기대하는 system을 사용하세요.

## 넘어가기 전

Citation을 추가하거나 수정한 뒤에는 manuscript를 다시 compile하고 PDF를 확인하세요.

Bibliography가 바로 업데이트되지 않는다면 build를 한 번 더 실행하세요. Bibliography tool은 citation과 reference list를 완전히 업데이트하기 위해 build pass가 여러 번 필요할 수 있습니다.
