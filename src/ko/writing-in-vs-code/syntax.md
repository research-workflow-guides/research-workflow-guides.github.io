---
layout: layouts/doc.njk
title: 문법
description: 자주 쓰는 LaTeX 패턴과 VS Code snippet 정의를 비교합니다.
lang: ko
section: writing-in-vs-code
order: 5
permalink: /ko/writing-in-vs-code/syntax/
translationKey: writing-syntax
eyebrow: 주제 2
lead: 자주 쓰는 수식·정리·그림의 LaTeX 코드와 VS Code snippet 정의를 함께 보여줍니다.
workflowChecks: false
toc:
  - id: latex과-json-비교
    label: LaTeX과 JSON 비교
  - id: 수식-구분자
    label: 수식 구분자
  - id: 수식
    label: 수식
  - id: 표시-수식
    label: 표시 수식
  - id: 정렬-수식
    label: 정렬 수식
  - id: 정리-블록과-증명
    label: 정리 블록과 증명
  - id: cases와-조각별-정의
    label: cases와 조각별 정의
  - id: 그림
    label: 그림
  - id: texts
    label: 텍스트와 수식 기호
tags:
  - doc
---
## LaTeX과 JSON 비교

- **LaTeX 코드**: snippet이 확장되면 `.tex` 파일에 들어가는 내용입니다.
- **snippet 정의**: `latex.json`에 저장하는 JSON 항목입니다.

JSON 문자열에서는 역슬래시를 한 번 더 써서 표현합니다. 아래 LaTeX 명령은 `.tex`에서 역슬래시 하나로 시작하지만, `latex.json`의 snippet 본문에서는 두 개로 시작합니다.

```latex
\begin{equation*}
```

```json
"\\begin{equation*}"
```

`$1`, `$2`, `$3`은 Tab 키로 차례로 이동하는 입력 위치입니다. `$0`은 마지막 커서 위치를 지정하고, `${1:label}`은 첫 번째 입력 위치에 기본 텍스트 `label`을 넣습니다.

`latex.json`에 정의를 여러 개 넣을 때는 바깥쪽 `{ ... }` 안에 각 항목을 배치하고 항목 사이를 쉼표로 구분합니다.

수식 구분자·행렬·적분 snippet은 수식 모드 안에서 사용합니다. `equation*`, `align`, `cases` snippet은 표시 수식 환경 전체를 삽입합니다.

아래 예제의 `bmatrix`, `equation*`, `align`, `cases`, `\text`에는 `amsmath`가 필요합니다. `\mathbb{R}`을 쓰려면 `amsfonts` 또는 `amssymb`를 불러옵니다.

## 수식 구분자

자주 쓰는 수식 구분자에는 다음 LaTeX 패턴을 씁니다.

```latex
\left\| x \right\|
\left\vert x \right\vert
\left\langle x \right\rangle
```

다음 JSON 항목들을 `latex.json`에 추가합니다.

```json
"norm": {
  "prefix": "@11",
  "body": "\\left\\| $1 \\right\\| $0"
},
"absolute value": {
  "prefix": "@1",
  "body": "\\left\\vert $1 \\right\\vert $0"
},
"angle brackets": {
  "prefix": "@<",
  "body": "\\left\\langle $1 \\right\\rangle $0"
}
```

## 수식

2×2 행렬에는 다음 LaTeX 패턴을 사용합니다.

```latex
\begin{bmatrix}
    a & b \\
    c & d
\end{bmatrix}
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"2x2 Matrix": {
  "prefix": "mtx2",
  "body": [
    "\\begin{bmatrix}",
    "    ${1:a} & ${2:b} \\\\",
    "    ${3:c} & ${4:d}",
    "\\end{bmatrix}$0"
  ]
}
```

정적분에는 다음 LaTeX 패턴을 사용합니다.

```latex
\int_{a}^{b}  f(x)  \, dx
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"Integration": {
  "prefix": "int",
  "body": "\\int_{${1:a}}^{${2:b}}  ${3:f(x)}  \\, d${4:x} $0"
}
```

## 표시 수식

번호 없는 단일 표시 수식에는 다음 패턴을 사용합니다.

```latex
\begin{equation*}
    ...
\end{equation*}
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"Equation without numbering": {
  "prefix": "eq",
  "body": [
    "\\begin{equation*}",
    "    $0",
    "\\end{equation*}",
    ""
  ]
}
```

`eq`를 입력하고 제안 목록에서 해당 snippet을 선택하면 `equation*` 환경이 삽입되고 커서는 수식 안에 놓입니다.

문서의 다른 곳에서 참조할 수식에는 번호가 붙는 `equation`과 `\label{...}`을 사용합니다.

```latex
\begin{equation}    \label{eq:main-estimate}
    ...
\end{equation}
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"Equation with numbering": {
  "prefix": "eqn",
  "body": [
    "\\begin{equation}    \\label{eq:${1:main-estimate}}",
    "    $0",
    "\\end{equation}",
    ""
  ]
}
```

`eqn` snippet을 선택하면 첫 입력 위치에서 `eq:` 뒤의 label을 고칩니다. Tab으로 이동하면 수식 본문 안의 마지막 커서 위치에 도달합니다.

## 정렬 수식

번호가 필요 없는 여러 줄 계산에는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{align*}
    f(x)
    &= g(x) \\
    &= h(x)
\end{align*}
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"Align without numbering": {
  "prefix": "ag",
  "body": [
    "\\begin{align*}",
    "    $1",
    "    &${2:=} $3   \\\\",
    "    &${4:=} $5",
    "\\end{align*}",
    "",
    "$0"
  ]
}
```

`latex.json`의 본문 문자열에 적은 역슬래시 네 개는 `.tex`에 역슬래시 두 개로 들어갑니다. `align`은 이 명령으로 행을 바꿉니다.

중요한 줄마다 label이 필요할 때는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{align}
    ...
    &= ...    \label{ag:first-step}    \\
    &= ...    \label{ag:second-step}
\end{align}
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"Align with numbering": {
  "prefix": "agn",
  "body": [
    "\\begin{align}",
    "    $1",
    "    &${2:=} $3    \\label{ag:${4:first-step}}    \\\\",
    "    &${5:=} $6    \\label{ag:${7:second-step}}",
    "\\end{align}",
    "",
    "$0"
  ]
}
```

줄별 번호가 필요 없으면 `align*`를 사용합니다. 특정 줄을 참조해야 하면 `align`을 사용하고 그 줄에 `\label{...}`을 붙입니다.

## 정리 블록과 증명

프리앰블에 `\newtheorem{theorem}{Theorem}`을 선언한 문서에서는 다음 패턴을 사용합니다.

```latex
\begin{theorem}    \label{thm:main-result}
    ...
\end{theorem}
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"Theorem": {
  "prefix": "thm",
  "body": [
    "\\begin{theorem}    \\label{thm:${1:main-result}}",
    "    $0",
    "\\end{theorem}",
    ""
  ]
}
```

프리앰블에 `definition`, `proposition`, `lemma`, `corollary` 환경이 정의되어 있다면 같은 형식으로 snippet을 만들 수 있습니다. 환경 이름, snippet 이름과 prefix, label 접두어를 함께 바꿉니다.

`amsthm`이 제공하는 `proof` 환경에는 다음 패턴을 사용합니다.

```latex
\begin{proof}
    ...
\end{proof}
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"Proof": {
  "prefix": "pf",
  "body": [
    "\\begin{proof}",
    "    $0",
    "\\end{proof}"
  ]
}
```

LaTeX 원문에서 참조 대상을 알아보기 쉽도록 label에 `thm:`, `lem:`, `prop:`, `def:`, `crl:` 같은 접두어를 사용합니다.

## cases와 조각별 정의

두 가지 경우로 나뉘는 정의에는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{equation*}
    f(x) =
    \begin{cases}
        ...    &    \text{if } ...,    \\
        ...    &    \text{if } ...
    \end{cases}
\end{equation*}
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"Two cases": {
  "prefix": "css2",
  "body": [
    "\\begin{equation*}",
    "    ${1:f(x)} =",
    "    \\begin{cases}",
    "        $2    &    \\text{${3:if} } $4,    \\\\",
    "        $5    &    \\text{${6:if} } $7",
    "    \\end{cases}",
    "\\end{equation*}",
    "$0"
  ]
}
```

조건이 길면 수식 앞 문장에서 설명하고, `cases` 안에는 경우를 구분하는 데 필요한 내용만 남깁니다.

## 그림

프리앰블에서 `graphicx`를 불러온 문서에는 다음 그림 패턴을 사용합니다.

```latex
\begin{figure}[htbp]
    \centering
    \includegraphics[width=0.8\linewidth]{figure-filename}
    \caption{Caption text}
    \label{fig:main-figure}
\end{figure}
```

다음 JSON 항목을 `latex.json`에 추가합니다.

```json
"Inserting a picture": {
  "prefix": "pct",
  "body": [
    "\\begin{figure}[htbp]",
    "    \\centering",
    "    \\includegraphics[width=${1:0.8}\\linewidth]{${2:figure-filename}}",
    "    \\caption{${3:Caption text}}",
    "    \\label{fig:${4:main-figure}}",
    "\\end{figure}",
    "",
    "$0"
  ]
}
```

첫 번째 입력값은 `\linewidth`에 곱할 너비 비율이고, 두 번째는 그림 파일 경로입니다. 세 번째와 네 번째에는 각각 캡션과 `fig:` 뒤의 label을 넣습니다.

<h2 id="texts">텍스트와 수식 기호</h2>

첫 번째 패턴은 본문 텍스트에, 나머지 두 패턴은 수식 모드에 사용합니다.

```latex
Fr\'echet
\mathbb{R}
\qquad\text{and}\qquad
```

다음 JSON 항목들을 `latex.json`에 추가합니다.

```json
"Frechet": {
  "prefix": "Fre",
  "body": "Fr\\'echet$0"
},
"Real numbers": {
  "prefix": "R",
  "body": "\\mathbb{R}$0"
},
"And in line": {
  "prefix": "qqand",
  "body": [
    "",
    "\\qquad\\text{${1:and}}\\qquad",
    "$0"
  ]
}
```

짧은 snippet은 다른 입력과 구분되는 prefix를 고릅니다. 한 글자짜리 `R`이 제안 목록에 자주 나타난다면 `@R`처럼 구분 기호를 붙일 수 있습니다.

이해한 LaTeX 패턴을 snippet으로 저장하고, 확장된 코드도 직접 읽고 수정할 수 있는지 확인하세요.
