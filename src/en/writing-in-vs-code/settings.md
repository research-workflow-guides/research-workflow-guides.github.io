---
layout: layouts/doc.njk
title: Settings
description: Set the small VS Code and LaTeX Workshop defaults that keep the writing loop calm.
lang: en
section: writing-in-vs-code
order: 3
permalink: /en/writing-in-vs-code/settings/
translationKey: writing-settings
eyebrow: Topic 2
lead: Keep the settings small and durable. You only need the defaults that make build, preview, and cleanup predictable.
toc:
  - id: start-with-command-palette-names
    label: Start with command names
  - id: promote-repeat-actions
    label: Promote repeat actions
  - id: keep-the-list-small
    label: Keep the list small
  - id: start-with-a-small-settings-file
    label: Start with a small settings file
  - id: useful-latex-workshop-defaults
    label: Useful defaults
  - id: example-settings
    label: Example settings
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

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then filter the list to LaTeX Workshop commands so the actions you care about are easier to compare.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/latex-workshop-shortcuts-list.png" alt="VS Code Keyboard Shortcuts filtered to LaTeX Workshop commands">

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

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After choosing the command, enter the key combination you actually want to remember. The important step is picking a repeat action first, then adding the key.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/select-shortcut-command.png" alt="VS Code Keyboard Shortcuts view with one command selected for keybinding entry">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>A good example is <strong>SyncTeX from cursor</strong>, because it is useful often enough to justify a shortcut in a long manuscript.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/synctex-from-cursor-shortcut.png" alt="VS Code Keyboard Shortcuts view showing LaTeX Workshop SyncTeX from cursor command">

  </figure>
</div>

## Keep the list small

If a shortcut is rarely used, leave it in the Command Palette. Reserve keyboard space for actions that save real time every writing session.

## Start with a small settings file

Avoid building a giant `settings.json` on day one. A smaller file is easier to understand, debug, and carry to the next project.

Focus on build stability, auto-clean behavior, and predictable PDF preview.

<div class="doc-step-pair">
  <div>
    <p>Start from the Command Palette and open your user settings. This keeps the first changes explicit and easy to undo.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/open-user-settings.png" alt="VS Code Command Palette showing Preferences Open User Settings">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If you prefer to inspect the settings files directly, first locate the VS Code <code>Code/User</code> folder for your operating system. The screenshot below shows the Windows location.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/code-user-folder.png" alt="Windows File Explorer opened to the VS Code Code User folder">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Inside that folder, confirm where <code>settings.json</code> and <code>keybindings.json</code> live so you know what file you are editing.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/settings-keybindings-files.png" alt="Windows File Explorer showing settings and keybindings files inside the VS Code user folder">

  </figure>
</div>

## Useful defaults

The most practical early settings are:

<div class="doc-step-pair">
  <div>
    <p>Inside Settings, narrow the view to LaTeX Workshop before you start changing values. This keeps you focused on the settings that actually affect the writing loop.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/search-latex-workshop-settings.png" alt="VS Code Settings filtered to LaTeX Workshop extension settings">

  </figure>
</div>

- keep PDF preview behavior stable
- choose a clear cleanup policy
- avoid experimental recipes until the default recipe works

Do not customize everything at once. Add one change only when you feel the daily loop is too slow or too fragile.

## Example settings

```json
{
  "latex-workshop.latex.autoBuild.run": "onSave",
  "latex-workshop.view.pdf.viewer": "tab",
  "latex-workshop.latex.clean.enabled": true,
  "latex-workshop.latex.recipe.default": "lastUsed"
}
```

This is not the only valid setup. It is simply a calm starting point.

## Before proceeding

Confirm that saving a file behaves as expected, PDF preview opens in the place you want, and cleanup does not remove files you still need.
