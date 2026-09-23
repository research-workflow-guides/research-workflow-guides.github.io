---
layout: layouts/doc.njk
title: Settings
description: Check LaTeX Workshop shortcuts, user settings, and auto-build options in VS Code on Windows.
lang: en
section: writing-in-vs-code
order: 3
permalink: /en/writing-in-vs-code/settings/
translationKey: writing-settings
eyebrow: Step 3
lead: After building and previewing <code>seed-document.tex</code> in the previous step, review LaTeX Workshop settings in VS Code on Windows. Change only the settings you need, then check the build and preview again.
verificationCard: false
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written around Windows screenshots; macOS and Linux screen guidance awaits review.
  workflow: Command Palette, Keyboard Shortcuts, User and Workspace settings, and builds on save.
  lastVerified: Official VS Code and LaTeX Workshop documentation and settings example repository checked on 2026-09-23. Windows execution check pending.
  support: Existing Windows screenshots await current-version review. macOS and Linux steps will be written and checked later.
  scopeNote: This page uses Windows screenshots. The existing images need updating, and macOS and Linux steps will be written and checked later.
toc:
  - id: start-with-command-names
    label: Start with command names
  - id: promote-repeat-actions
    label: Promote repeat actions
  - id: find-your-settings-files
    label: Find your settings files
  - id: useful-defaults
    label: Useful defaults
  - id: example-settings
    label: Example settings
tags:
  - doc
---
## Start with command names

Before changing settings, run `Build LaTeX project` and `View LaTeX PDF file` from the Command Palette (`Ctrl+Shift+P`) to check the current build and preview behavior.

- `Build LaTeX project`: build the manuscript
- `View LaTeX PDF file`: preview the PDF
- `SyncTeX from cursor`: find the cursor position in the PDF
- `Clean up auxiliary files`: remove build auxiliary files

If you use a command repeatedly, check its current binding in Keyboard Shortcuts and assign a new combination only when it helps.

<div class="doc-step-pair">
  <div>
    <p>Press <kbd>Ctrl</kbd>+<kbd>K</kbd>, then <kbd>Ctrl</kbd>+<kbd>S</kbd> to open Keyboard Shortcuts. You can also run <strong>Preferences: Open Keyboard Shortcuts</strong> from the Command Palette.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/open-keyboard-shortcuts.png" alt="VS Code Command Palette showing Preferences Open Keyboard Shortcuts">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Enter <code>LaTeX Workshop</code> in the Keyboard Shortcuts search box. Check the listed commands and their current bindings, then choose one to change.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/latex-workshop-shortcuts-list.png" alt="VS Code Keyboard Shortcuts filtered to LaTeX Workshop commands">

  </figure>
</div>

## Promote repeat actions

Check the existing binding first. Choose one frequently used command without a convenient shortcut and assign a new one.

<div class="doc-step-pair">
  <div>
    <p>For example, add <code>environment</code> to the search box to show LaTeX Workshop commands whose names contain that word.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/filter-specific-shortcut.png" alt="LaTeX Workshop shortcuts filtered by the word environment">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Select the command, press the desired key combination in the shortcut input, then press <kbd>Enter</kbd> to save it.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/select-shortcut-command.png" alt="VS Code Keyboard Shortcuts view with one command selected for keybinding entry">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p><strong>SyncTeX from cursor</strong> jumps from the source cursor to the corresponding PDF position. On Windows, try its default shortcut, <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>J</kbd>; search for the command in Keyboard Shortcuts if you want to change it.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/shortcuts/synctex-from-cursor-shortcut.png" alt="VS Code Keyboard Shortcuts view showing LaTeX Workshop SyncTeX from cursor command">

  </figure>
</div>

## Find your settings files

<div class="doc-step-pair">
  <div>
    <p>On Windows, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and run <strong>Preferences: Open User Settings</strong> from the Command Palette. User settings apply to all your VS Code projects.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/open-user-settings.png" alt="VS Code Command Palette showing Preferences Open User Settings">

  </figure>
</div>

To apply a setting only to this project, run `Preferences: Open Workspace Settings` from the Command Palette. To open the JSON file directly, run `Preferences: Open Workspace Settings (JSON)`. VS Code stores it in the project’s `.vscode/settings.json`, and it takes precedence over user settings.

<div class="doc-step-pair">
  <div>
    <p>To edit <code>settings.json</code> directly, run <strong>Preferences: Open User Settings (JSON)</strong> from the Command Palette. For the default Windows profile, the file is at <code>%APPDATA%\Code\User\settings.json</code>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/code-user-folder.png" alt="Windows File Explorer opened to the VS Code Code User folder">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <div class="doc-action-row">
      <p><code>settings.json</code> stores user settings, and <code>keybindings.json</code> stores customized shortcuts. When using the linked settings example repository, add only the entries you need to your current files.</p>
      <a class="doc-action-link" href="https://github.com/research-workflow-guides/setting">Settings example repository</a>
    </div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/settings-keybindings-files.png" alt="Windows File Explorer showing settings and keybindings files inside the VS Code user folder">

  </figure>
</div>

## Useful defaults

Check LaTeX Workshop’s defaults first. The options below control building, PDF preview, and auxiliary-file cleanup.

<div class="doc-step-pair">
  <div>
    <p>Enter <code>LaTeX Workshop</code> in the Settings search box. Use the User tab for values shared across your projects and the Workspace tab for values specific to this project.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/search-latex-workshop-settings.png" alt="VS Code Settings filtered to LaTeX Workshop extension settings">

  </figure>
</div>

- `latex-workshop.latex.autoBuild.run`: defaults to `onFileChange`; use `onSave` to build when saving
- `latex-workshop.view.pdf.viewer`: defaults to `tab`
- `latex-workshop.latex.autoClean.run`: defaults to `never`
- `latex-workshop.latex.recipe.default`: defaults to `first`

## Example settings

To build when you save a `.tex` file, add the following entry inside the User or Workspace `settings.json` object you chose above. Keep your other settings in place.

```json
{
  "latex-workshop.latex.autoBuild.run": "onSave"
}
```

Add a short test phrase to the body of `seed-document.tex` and save it. Check that LaTeX Workshop builds automatically and the phrase appears in the PDF preview, then remove the phrase and save again.
