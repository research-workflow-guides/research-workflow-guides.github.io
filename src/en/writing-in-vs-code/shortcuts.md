---
layout: layouts/doc.njk
title: Shortcuts
description: Review the Command Palette and basic VS Code shortcuts on Windows, plus LaTeX Workshop's @ completion examples.
lang: en
section: writing-in-vs-code
order: 2
permalink: /en/writing-in-vs-code/shortcuts/
translationKey: writing-shortcuts
eyebrow: Step 2 (Optional)
lead: Check the Windows VS Code shortcuts for commands you use while writing. If a shortcut behaves differently, inspect its current assignment in Keyboard Shortcuts.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for VS Code on Windows; macOS and Linux shortcuts await review.
  workflow: Command Palette, basic shortcuts, LaTeX Workshop @ suggestions, and snippet tabstops.
  lastVerified: Official VS Code and LaTeX Workshop documentation and the existing image checked on 2026-09-23. Windows screen check pending.
  support: The existing Command Palette image needs review and updating against the current Windows screen.
toc:
  - id: command-palette
    label: Command Palette
  - id: basic-shortcuts
    label: Basic shortcuts
  - id: snippets
    label: Snippets
tags:
  - doc
---
## Command Palette

<div class="doc-step-pair">
  <div>
    <p>Use the <strong>Command Palette</strong> to search for and run VS Code commands by name. Type part of a command name to narrow the list.</p>
    <p>On Windows, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> to open the Command Palette.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/palette.png" alt="VS Code Command Palette">

  </figure>
</div>

## Basic shortcuts

- <kbd>Alt</kbd>+Click

  On Windows, hold <kbd>Alt</kbd> and click a position in the editor to add a cursor there. Use multiple cursors to edit several positions at once.

- <kbd>Ctrl</kbd>+<kbd>/</kbd>

  Toggle line comments for the current line or selected lines.

- <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>M</kbd>

  Toggles LaTeX Workshop's Math Preview Panel in the default keymap. It shows a live preview of supported equations in a separate panel.

- <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd>

  Runs LaTeX Workshop's Build LaTeX project command in the default keymap. <kbd>Ctrl</kbd>+<kbd>S</kbd> saves the file; whether saving triggers an automatic build depends on the <code>latex-workshop.latex.autoBuild.run</code> setting.

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>&#96;</kbd>

  Opens a new integrated terminal in VS Code on Windows.

- <kbd>Ctrl</kbd>+<kbd>R</kbd>

  Shows recently opened folders, workspaces, and files. Select an item to reopen it.

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd>

  Opens a new VS Code window on Windows.

## Snippets

With LaTeX Workshop's default settings, typing an `@` prefix shows matching snippets in the completion list. Press <kbd>Tab</kbd> when the desired suggestion is selected to insert it.

- `@a`

  <code>&#92;alpha</code>

- `@D`

  <code>&#92;Delta</code>

- `@S`

  <code>&#92;Sigma</code>

- `@6`

  <code>&#92;partial</code>

- `@(`

  <code>&#92;left( $1 &#92;right)</code>

- `@{`

  <code>&#92;left&#92;{ $1 &#92;right&#92;}</code>

- `@[`

  <code>&#92;left[ $1 &#92;right]</code>


For snippets with tabstops, the cursor starts at `$1` after insertion. Enter the content, then press <kbd>Tab</kbd> to move to `$2` and later tabstops.

- `@/` → When the fraction suggestion is selected, press <kbd>Tab</kbd> → Type numerator → <kbd>Tab</kbd> → Type denominator

  <code>&#92;frac{$1}{$2}</code>

- `@I` → When the integral suggestion is selected, press <kbd>Tab</kbd> → Type lower bound → <kbd>Tab</kbd> → Type upper bound

  <code>&#92;int_{$1}^{$2}</code>


<div class="doc-action-row">
  <p>To create your own snippets, open the LaTeX user snippet file. The <a href="/en/writing-in-vs-code/snippets/">Set up LaTeX snippets</a> guide shows how to find that file and includes an example.</p>
  <a class="doc-action-link" href="https://code.visualstudio.com/docs/editing/userdefinedsnippets">VS Code snippet documentation</a>
</div>
