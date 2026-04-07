---
layout: layouts/doc.njk
title: Shortcuts
description: Pin the few shortcuts that remove friction from the daily writing loop.
lang: en
section: writing-in-vs-code
order: 4
permalink: /en/writing-in-vs-code/shortcuts/
translationKey: writing-shortcuts
eyebrow: Topic 4
lead: You do not need a large shortcut system. Keep only the commands you reach for every day.
toc:
  - id: start-with-command-palette-names
    label: Start with command names
  - id: promote-repeat-actions
    label: Promote repeat actions
  - id: keep-the-list-small
    label: Keep the list small
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Start with command names

Before binding keys, learn the command names you actually use:

- build LaTeX project
- view PDF
- SyncTeX from cursor
- clean auxiliary files

The Command Palette is the fastest place to discover which commands deserve a shortcut.

<div class="doc-step-pair">
  <div>
    <p>Open the keyboard shortcuts view first. This is the cleanest place to see what VS Code already exposes before you add anything new.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/open-keyboard-shortcuts.png" alt="VS Code Command Palette showing Preferences Open Keyboard Shortcuts">
    <figcaption>Open the Keyboard Shortcuts view before assigning custom bindings.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then filter the list to LaTeX Workshop commands so the actions you care about are easier to compare.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/latex-workshop-shortcuts-list.png" alt="VS Code Keyboard Shortcuts filtered to LaTeX Workshop commands">
    <figcaption>Filter the shortcut list to LaTeX Workshop commands.</figcaption>
  </figure>
</div>

## Promote repeat actions

Once the daily loop is clear, turn the most repeated actions into keyboard shortcuts.

Two or three good bindings are usually more valuable than a long keymap you cannot remember.

<div class="doc-step-pair">
  <div>
    <p>If the list is still too broad, search for one exact command before binding it. The screenshot below shows one command-focused search example.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/filter-specific-shortcut.png" alt="VS Code Keyboard Shortcuts view filtered to one environment-related LaTeX Workshop command">
    <figcaption>Narrow the shortcut list to one concrete command before assigning a key.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After choosing the command, enter the key combination you actually want to remember. The important step is picking a repeat action first, then adding the key.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/select-shortcut-command.png" alt="VS Code Keyboard Shortcuts view with one command selected for keybinding entry">
    <figcaption>Select a command and then enter the shortcut you want to use for it.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>A good example is <strong>SyncTeX from cursor</strong>, because it is useful often enough to justify a shortcut in a long manuscript.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/synctex-from-cursor-shortcut.png" alt="VS Code Keyboard Shortcuts view showing LaTeX Workshop SyncTeX from cursor command">
    <figcaption>Use repeated actions like <strong>SyncTeX from cursor</strong> as shortcut candidates.</figcaption>
  </figure>
</div>

## Keep the list small

If a shortcut is rarely used, leave it in the Command Palette. Reserve keyboard space for actions that save real time every writing session.

## Before proceeding

Confirm that the commands you use every day are easy to reach and that your shortcut list is still short enough to remember.
