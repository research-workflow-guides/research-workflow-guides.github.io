---
layout: layouts/doc.njk
title: 문법
description: 글을 쓸 때 자주 사용하는 LaTeX 문법 패턴을 정리합니다.
lang: ko
section: writing-in-vs-code
order: 5
permalink: /ko/writing-in-vs-code/syntax/
translationKey: writing-syntax
eyebrow: 주제 2
lead: 먼저 LaTeX 패턴을 이해하고, 반복 입력은 VS Code snippet으로 저장합니다.
outcome: 문서화된 LaTeX 패턴을 사용한 수학 구조와 figure가 원고에 추가되어 PDF에 나타납니다.
prerequisites:
  - 내용을 수정하기 전 프로젝트가 정상적으로 build됩니다.
  - main `.tex` 파일이 VS Code에 열려 있습니다.
completion: PDF에 새 수식 또는 theorem 구조와 figure가 LaTeX 오류 없이 나타납니다.
commonProblems:
  - delimiter나 brace의 짝이 맞지 않으면 문서가 compile되지 않습니다.
  - figure 경로는 프로젝트 기준 상대 경로이며 실제 파일 이름과 정확히 같아야 합니다.
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
    label: Texts
tags:
  - doc
---
## LaTeX과 JSON 비교

아래 예시는 LaTeX source와 JSON snippet syntax를 비교해서 봅니다.

- **LaTeX 코드**: snippet이 펼쳐진 뒤 `.tex` 파일에 실제로 들어가야 하는 source입니다.
- **Snippet 문법**: `latex.json` 안에 넣는 JSON entry입니다.

가장 중요한 차이는 escape입니다. LaTeX source에서는 명령어에 backslash를 하나만 씁니다. 하지만 JSON snippet 문자열 안에서는 그 backslash를 두 개로 적어야 합니다.

```latex
\begin{equation*}
```

```json
"\\begin{equation*}"
```

`$1`, `$2`, `$3`는 tab stop입니다. `$0`은 마지막 cursor 위치입니다. `${1:label}`처럼 쓰면 수정 가능한 placeholder text를 만들 수 있습니다.

`latex.json`에 snippet을 여러 개 넣을 때는 모든 entry를 바깥 `{ ... }` object 안에 두고, 이웃한 entry 사이를 comma로 구분합니다.

## 수식 구분자

자주 쓰는 수식 구분자에는 다음 LaTeX 패턴을 씁니다.

```latex
\left\| x \right\|
\left\vert x \right\vert
\left\langle x \right\rangle
```

`latex.json`에는 다음 snippet entry들을 넣습니다.

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

2x2 matrix에는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{bmatrix}
    a & b \\
    c & d
\end{bmatrix}
```

`latex.json`에는 다음 snippet entry를 넣습니다.

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

Integral에는 다음 LaTeX 패턴을 씁니다.

```latex
\int_{a}^{b}  f(x)  \, dx
```

`latex.json`에는 다음 snippet entry를 넣습니다.

```json
"Integration": {
  "prefix": "int",
  "body": "\\int_{${1:a}}^{${2:b}}  ${3:f(x)}  \\, d${4:x} $0"
}
```

## 표시 수식

번호가 필요 없는 display equation에는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{equation*}
    ...
\end{equation*}
```

`latex.json`에는 다음 snippet entry를 넣습니다.

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

`eq`를 입력하면 VS Code가 environment를 삽입하고 cursor를 수식 안쪽에 둡니다.

나중에 참조할 equation에는 label이 있는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{equation}    \label{eq:main-estimate}
    ...
\end{equation}
```

`latex.json`에는 다음 snippet entry를 넣습니다.

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

첫 번째 tab stop은 label을 채우는 자리입니다. 마지막 cursor 위치는 equation body 안에 남습니다.

## 정렬 수식

번호가 필요 없는 여러 줄 계산에는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{align*}
    ...
    &= ...
    &= ...
\end{align*}
```

`latex.json`에는 다음 snippet entry를 넣습니다.

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

Snippet 문법의 `\\\\`는 LaTeX 파일에서는 `\\`가 됩니다. 이것이 `align`에서 줄을 바꾸는 명령입니다.

중요한 줄마다 label이 필요할 때는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{align}
    ...
    &= ...    \label{ag:first-step}    \\
    &= ...    \label{ag:second-step}
\end{align}
```

`latex.json`에는 다음 snippet entry를 넣습니다.

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

초안에서는 unnumbered alignment로 시작하고, 다른 문단에서 특정 줄을 참조해야 할 때만 numbered alignment로 바꿉니다.

## 정리 블록과 증명

정리류 block에는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{theorem}    \label{thm:main-result}
    ...
\end{theorem}
```

`latex.json`에는 다음 snippet entry를 넣습니다.

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

definition, proposition, lemma, corollary도 같은 구조로 만들 수 있습니다. environment 이름, prefix, label prefix를 함께 바꾸면 됩니다.

증명에는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{proof}
    ...
\end{proof}
```

`latex.json`에는 다음 snippet entry를 넣습니다.

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

Label prefix는 의미가 보이게 유지합니다. `thm:`, `lem:`, `prop:`, `def:`, `crl:`처럼 쓰면 reference를 훨씬 빨리 읽을 수 있습니다.

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

`latex.json`에는 다음 snippet entry를 넣습니다.

```json
"Two cases": {
  "prefix": "css2",
  "body": [
    "\\begin{equation*}",
    "    ${1:f(x)}",
    "    \\begin{cases}",
    "        $2    &    \\text{${3:if} } $4,    \\\\",
    "        $5    &    \\text{${6:if} } $7",
    "    \\end{cases}",
    "\\end{equation*}",
    "$0"
  ]
}
```

Displayed formula는 짧게 유지합니다. 조건이 길다면 display 앞에서 먼저 설명하고, 수식 안에서는 case split만 읽기 쉽게 남깁니다.

## 그림

Figure에는 다음 LaTeX 패턴을 씁니다.

```latex
\begin{figure}[htbp]
    \centering
    \includegraphics[width=0.8\linewidth]{figure-filename}
    \caption{Caption text}
    \label{fig:main-figure}
\end{figure}
```

`latex.json`에는 다음 snippet entry를 넣습니다.

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

첫 번째 placeholder는 width를 조절합니다. 두 번째는 파일 이름입니다. 세 번째는 caption입니다. 네 번째는 figure label입니다.

## Texts

자주 쓰는 text snippet에는 다음 LaTeX 패턴을 씁니다.

```latex
Fr\'echet
\mathbb{R}
\qquad\text{and}\qquad
```

`latex.json`에는 다음 snippet entry들을 넣습니다.

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

짧은 inline snippet은 일반 단어 안에서 실수로 확장되지 않도록 prefix를 고르는 것이 중요합니다. 편한 shortcut도 원하지 않을 때 펼쳐지면 오히려 방해가 됩니다.

Snippet은 이미 이해하고 있는 LaTeX code에서 출발해야 합니다. 목적은 반복 입력을 줄이는 것이지, 나중에 직접 읽고 고쳐야 할 문법을 숨기는 것이 아닙니다.
