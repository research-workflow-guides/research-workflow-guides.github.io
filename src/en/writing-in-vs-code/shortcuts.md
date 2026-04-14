---
layout: layouts/doc.njk
title: Shortcuts
description: Pin the few shortcuts that remove friction from the daily writing loop.
lang: en
section: writing-in-vs-code
order: 2
permalink: /en/writing-in-vs-code/shortcuts/
translationKey: writing-shortcuts
eyebrow: Topic 2
lead: You do not need a large shortcut system. Keep only the commands you reach for every day.
toc:
  - id: command-palette
    label: Command Palette
  - id: basic-shortcuts
    label: Basic shortcuts
  - id: snippets
    label: Snippets
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Command Palette

<div class="doc-step-pair">
  <div>
    <p>The <strong>Command Palette</strong> gives you access to every VS Code command by name. Instead of navigating menus, type what you want and run it directly.</p>
    <p>Open it with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>).</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/palette.png" alt="VS Code Command Palette">

  </figure>
</div>

## Basic shortcuts

- <kbd>Alt</kbd>+<i class="fa-solid fa-arrow-pointer"></i> Click (macOS: <kbd>⌘</kbd>+<i class="fa-solid fa-arrow-pointer"></i> Click)

  Place multiple cursors at once.

- <kbd>Ctrl</kbd>+<kbd>/</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>/</kbd>)

  Toggle comment on the current line.

- <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>⌘</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd>)

  Show a live preview of the formula you are typing.

- <kbd>Ctrl</kbd>+<kbd>S</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>S</kbd>) or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>⌘</kbd>+<kbd>B</kbd>)

  Compile the LaTeX code.

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>&#96;</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>&#96;</kbd>)

  Open a new terminal.

- <kbd>Ctrl</kbd>+<kbd>R</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>R</kbd>)

  Open a registered folder.

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd>)

  Open a new VS Code window.

## Snippets

VS Code <strong>snippets</strong> allow you to insert long LaTeX commands or formulas instantly by typing a short prefix. It is the most efficient way to handle complex mathematical syntax without repetitive typing.

- <kbd>@</kbd>+<kbd>a</kbd>

  <code>&#92;alpha</code>

- <kbd>@</kbd>+<kbd>A</kbd>

  <code>&#92;Alpha</code>

- <kbd>@</kbd>+<kbd>6</kbd>

  <code>&#92;partial</code>

- <kbd>@</kbd>+<kbd>(</kbd>

  <code>&#92;left( &#92;right)</code>

- <kbd>@</kbd>+<kbd>{</kbd>

  <code>&#92;left&#92;{ &#92;right&#92;}</code>

- <kbd>@</kbd>+<kbd>[</kbd>

  <code>&#92;left[ &#92;right]</code>


You can use the <kbd>Tab</kbd> key to jump between predefined positions (e.g., $1, $2) within a snippet. This allows you to fill in numerators, denominators, or bracket contents rapidly without using arrow keys.

- <kbd>@</kbd>+<kbd>/</kbd> → <kbd>Tab</kbd> → Type numerator → <kbd>Tab</kbd> → Type denominator

  <code>&#92;frac{$1}{$2}</code>

- <kbd>@</kbd>+<kbd>S</kbd> → <kbd>Tab</kbd> → Type lower bound → <kbd>Tab</kbd> → Type upper bound

  <code>&#92;sum_{$1}^{$2}</code>

- <kbd>@</kbd>+<kbd>I</kbd> → <kbd>Tab</kbd> → Type lower bound → <kbd>Tab</kbd> → Type upper bound

  <code>&#92;int_{$1}^{$2}</code>


You can also define your own snippets. See the [VS Code documentation](https://code.visualstudio.com/docs/editing/userdefinedsnippets) for details. We will cover how to create custom snippets later in this guide.

## Before proceeding

Confirm that the commands you use every day are easy to reach and that your shortcut list is still short enough to remember.
