---
layout: layouts/doc.njk
title: Syntax
description: Compare common LaTeX patterns with their VS Code snippet definitions.
lang: en
section: writing-in-vs-code
order: 5
permalink: /en/writing-in-vs-code/syntax/
translationKey: writing-syntax
eyebrow: Topic 2
lead: Compare LaTeX code for common equations, theorem blocks, and figures with their VS Code snippet definitions.
workflowChecks: false
toc:
  - id: comparing-latex-and-json
    label: Comparing LaTeX and JSON
  - id: math-delimiters
    label: Math delimiters
  - id: math-structures
    label: Math structures
  - id: display-equations
    label: Display equations
  - id: alignments
    label: Alignments
  - id: theorem-blocks-and-proofs
    label: Theorem blocks and proofs
  - id: cases-and-piecewise-definitions
    label: Cases and piecewise definitions
  - id: figures
    label: Figures
  - id: texts
    label: Text and math symbols
tags:
  - doc
---
## Comparing LaTeX and JSON

- **LaTeX code**: the text inserted into a `.tex` file when a snippet expands.
- **Snippet definition**: the JSON entry saved in `latex.json`.

A JSON string escapes a backslash by doubling it. The LaTeX command below begins with one backslash in a `.tex` file and two in the `latex.json` snippet body.

```latex
\begin{equation*}
```

```json
"\\begin{equation*}"
```

`$1`, `$2`, and `$3` are input positions visited in order with Tab. `$0` marks the final cursor position, and `${1:label}` supplies `label` as the default text at the first position.

To store multiple snippet definitions in `latex.json`, place them inside the outer `{ ... }` object and separate entries with commas.

Use the delimiter, matrix, and integral snippets inside math mode. The `equation*`, `align`, and `cases` snippets insert a full display environment.

The `bmatrix`, `equation*`, `align`, `cases`, and `\text` examples require `amsmath`. For `\mathbb{R}`, load `amsfonts` or `amssymb`.

## Math delimiters

Use these LaTeX patterns for common math delimiters.

```latex
\left\| x \right\|
\left\vert x \right\vert
\left\langle x \right\rangle
```

Put these snippet entries in `latex.json`.

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

## Math structures

Use this LaTeX pattern for a 2×2 matrix.

```latex
\begin{bmatrix}
    a & b \\
    c & d
\end{bmatrix}
```

Put this snippet entry in `latex.json`.

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

Use this LaTeX pattern for a definite integral.

```latex
\int_{a}^{b}  f(x)  \, dx
```

Put this snippet entry in `latex.json`.

```json
"Integration": {
  "prefix": "int",
  "body": "\\int_{${1:a}}^{${2:b}}  ${3:f(x)}  \\, d${4:x} $0"
}
```

## Display equations

Use this pattern for a single displayed equation without a number.

```latex
\begin{equation*}
    ...
\end{equation*}
```

Put this snippet entry in `latex.json`.

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

Type `eq` and select its snippet suggestion to insert the `equation*` environment with the cursor inside it.

For an equation you will reference elsewhere, use numbered `equation` with a `\label{...}`.

```latex
\begin{equation}    \label{eq:main-estimate}
    ...
\end{equation}
```

Put this snippet entry in `latex.json`.

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

After inserting `eqn`, edit the label after `eq:` at the first stop. Tab then moves to the final cursor position inside the equation.

## Alignments

Use this LaTeX pattern for a multi-line calculation without equation numbers.

```latex
\begin{align*}
    f(x)
    &= g(x) \\
    &= h(x)
\end{align*}
```

Put this snippet entry in `latex.json`.

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

Four backslashes in a `latex.json` body string become two in the `.tex` file. `align` uses this command to end a row.

Use this LaTeX pattern when the important lines need labels.

```latex
\begin{align}
    ...
    &= ...    \label{ag:first-step}    \\
    &= ...    \label{ag:second-step}
\end{align}
```

Put this snippet entry in `latex.json`.

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

Use `align*` when you do not need numbered lines. To refer to a specific line, use `align` and add a `\label{...}` to that line.

## Theorem blocks and proofs

Use this pattern after defining `theorem` in the preamble with `\newtheorem{theorem}{Theorem}`.

```latex
\begin{theorem}    \label{thm:main-result}
    ...
\end{theorem}
```

Put this snippet entry in `latex.json`.

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

If the preamble defines `definition`, `proposition`, `lemma`, or `corollary`, you can reuse this snippet structure. Change the environment name, snippet name and prefix, and label prefix together.

Use this pattern for the `proof` environment provided by `amsthm`.

```latex
\begin{proof}
    ...
\end{proof}
```

Put this snippet entry in `latex.json`.

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

Use label prefixes such as `thm:`, `lem:`, `prop:`, `def:`, and `crl:` so the target is easy to identify in the LaTeX source.

## Cases and piecewise definitions

Use this LaTeX pattern for a two-case definition.

```latex
\begin{equation*}
    f(x) =
    \begin{cases}
        ...    &    \text{if } ...,    \\
        ...    &    \text{if } ...
    \end{cases}
\end{equation*}
```

Put this snippet entry in `latex.json`.

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

If a condition is long, explain it before the display and keep each `cases` row concise.

## Figures

Use this figure pattern when the document loads `graphicx`.

```latex
\begin{figure}[htbp]
    \centering
    \includegraphics[width=0.8\linewidth]{figure-filename}
    \caption{Caption text}
    \label{fig:main-figure}
\end{figure}
```

Put this snippet entry in `latex.json`.

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

The first placeholder sets the fraction of `\linewidth`; the second supplies the graphics file path. The third sets the caption, and the fourth sets the label after `fig:`.

<h2 id="texts">Text and math symbols</h2>

Use the first pattern in text and the other two in math mode.

```latex
Fr\'echet
\mathbb{R}
\qquad\text{and}\qquad
```

Put these snippet entries in `latex.json`.

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

Choose distinctive prefixes for short snippets. If a one-letter prefix such as `R` appears too often in suggestions, add a marker such as `@R`.

Save patterns you understand as snippets, then check that you can still read and edit the expanded LaTeX.
