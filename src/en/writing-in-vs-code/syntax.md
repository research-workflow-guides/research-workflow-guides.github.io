---
layout: layouts/doc.njk
title: Syntax
description: Reference the LaTeX syntax patterns you reach for most often while writing.
lang: en
section: writing-in-vs-code
order: 5
permalink: /en/writing-in-vs-code/syntax/
translationKey: writing-syntax
eyebrow: Topic 5
lead: Learn the LaTeX pattern first, then save the repeated typing as a VS Code snippet.
toc:
  - id: read-the-two-layers
    label: Read the two layers
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
  - id: inline-math-shortcuts
    label: Inline math shortcuts
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Read the two layers

Each example below has two parts:

- **LaTeX code**: the source you want to appear in your `.tex` file after the snippet expands.
- **Snippet syntax**: the JSON entry you put inside `latex.json`.

The main difference is escaping. In LaTeX source, a command uses one backslash. Inside a JSON snippet string, that backslash must be written as two backslashes.

```latex
\begin{equation*}
```

```json
"\\begin{equation*}"
```

Use `$1`, `$2`, and `$3` for tab stops. Use `$0` for the final cursor position. Use `${1:label}` when you want editable placeholder text.

When you add more than one snippet to `latex.json`, keep all entries inside the outer `{ ... }` object and separate neighboring entries with commas.

## Display equations

Use this LaTeX pattern for an unnumbered display equation.

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

When you type `eq`, VS Code inserts the environment and places the cursor inside it.

Use this LaTeX pattern when the equation needs a label.

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

The first tab stop fills the label. The final cursor position stays inside the equation body.

## Alignments

Use this LaTeX pattern for a multi-line calculation without equation numbers.

```latex
\begin{align*}
    ...
    &= ...
    &= ...
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
    "    &${4:=} $5   \\\\",
    "    &${6:=} $7",
    "\\end{align*}",
    "",
    "$0"
  ]
}
```

The `\\\\` in the snippet syntax becomes `\\` in the LaTeX file. That is the line break command used by `align`.

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
    "    &${5:=} $6    \\label{ag:${7:second-step}}    \\\\",
    "    &${8:=} $9    \\label{ag:${10:third-step}}",
    "\\end{align}",
    "",
    "$0"
  ]
}
```

Use unnumbered alignment while drafting. Switch to numbered alignment only when another paragraph needs to refer to a specific line.

## Theorem blocks and proofs

Use this LaTeX pattern for a theorem-like block.

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

The same pattern works for definitions, propositions, lemmas, and corollaries. Change the environment name, prefix, and label prefix together.

```json
"Lemma": {
  "prefix": "lem",
  "body": [
    "\\begin{lemma}    \\label{lem:${1:technical-step}}",
    "    $0",
    "\\end{lemma}",
    ""
  ]
}
```

Use this LaTeX pattern for a proof.

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

Keep the label prefix meaningful: `thm:`, `lem:`, `prop:`, `def:`, and `crl:` make references easier to scan.

## Cases and piecewise definitions

Use this LaTeX pattern for a two-case definition.

```latex
\begin{equation*}
    f(x) =
    \begin{cases}
        ...    &    \mbox{if } ...,    \\
        ...    &    \mbox{if } ...
    \end{cases}
\end{equation*}
```

Put this snippet entry in `latex.json`.

```json
"Two cases": {
  "prefix": "css2",
  "body": [
    "\\begin{equation*}",
    "    ${1:}",
    "    \\begin{cases}",
    "        $2    &    \\mbox{${3:if} } $4,    \\\\",
    "        $5    &    \\mbox{${6:if} } $7",
    "    \\end{cases}",
    "\\end{equation*}",
    "$0"
  ]
}
```

Use this LaTeX pattern for a three-case definition.

```latex
\begin{equation*}
    f(x) =
    \begin{cases}
        ...    &    \mbox{if } ...,    \\
        ...    &    \mbox{if } ...,    \\
        ...    &    \mbox{if } ...
    \end{cases}
\end{equation*}
```

Put this snippet entry in `latex.json`.

```json
"Three cases": {
  "prefix": "css3",
  "body": [
    "\\begin{equation*}",
    "    ${1:}",
    "    \\begin{cases}",
    "        $2    &    \\mbox{${3:if} } $4,    \\\\",
    "        $5    &    \\mbox{${6:if} } $7,    \\\\",
    "        $8    &    \\mbox{${9:if} } $10",
    "    \\end{cases}",
    "\\end{equation*}",
    "$0"
  ]
}
```

Keep the displayed formula short. If a condition is long, explain it before the display and keep the case split readable.

## Figures

Use this LaTeX pattern for a figure.

```latex
\begin{figure}[h]
    \centering
    \includegraphics[width=1\textwidth]{figure-file}
    \caption{Caption text}
    \label{fig:main-figure}
\end{figure}
```

Put this snippet entry in `latex.json`.

```json
"Inserting a picture": {
  "prefix": "pct",
  "body": [
    "\\begin{figure}[h]",
    "    \\centering",
    "    \\includegraphics[width=${1:1}\\textwidth]{${2:write the file name}}",
    "    \\caption{$3}",
    "    \\label{fig:${4:main-figure}}",
    "\\end{figure}",
    "",
    "$0"
  ]
}
```

The first placeholder controls the width. The second chooses the file. The third writes the caption. The fourth sets the figure label.

## Inline math shortcuts

Inline snippets can use a single JSON string instead of an array. Use this LaTeX pattern for an integral.

```latex
\int_{a}^{b}  f(x)  \, dx
```

Put this snippet entry in `latex.json`.

```json
"Integration": {
  "prefix": "int",
  "body": "\\int_{$1}^{$2}  $3  \\, d${4:x} $0"
}
```

Use this LaTeX pattern for a norm.

```latex
\left\| x \right\|
```

Put this snippet entry in `latex.json`.

```json
"norm": {
  "prefix": "@11",
  "body": "\\left\\| $1 \\right\\| $0"
}
```

Use this LaTeX pattern for accented mathematical terminology.

```latex
Fr\'echet
G\^ateaux
```

Put these snippet entries in `latex.json`.

```json
"Frechet": {
  "prefix": "Fre",
  "body": "Fr\\'echet$0"
},
"Gateaux": {
  "prefix": "Gat",
  "body": "G\\^ateaux$0"
}
```

For short inline snippets, choose prefixes that do not appear inside ordinary words. A convenient shortcut is only useful if it does not expand by accident.

## Before proceeding

Build snippets from LaTeX code you already understand. The snippet should save repeated typing, not hide syntax that you still need to inspect and edit.
