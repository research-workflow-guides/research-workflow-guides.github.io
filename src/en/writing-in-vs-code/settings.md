---
layout: layouts/doc.njk
title: Settings
description: Set the small VS Code and LaTeX Workshop defaults that keep the writing loop calm.
lang: en
section: writing-in-vs-code
order: 2
permalink: /en/writing-in-vs-code/settings/
translationKey: writing-settings
eyebrow: Topic 2
lead: Keep the settings small and durable. You only need the defaults that make build, preview, and cleanup predictable.
toc:
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
## Start with a small settings file

Avoid building a giant `settings.json` on day one. A smaller file is easier to understand, debug, and carry to the next project.

Focus on build stability, auto-clean behavior, and predictable PDF preview.

<div class="doc-step-pair">
  <div>
    <p>Start from the Command Palette and open your user settings. This keeps the first changes explicit and easy to undo.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/open-user-settings.png" alt="VS Code Command Palette showing Preferences Open User Settings">
    <figcaption>Open the user settings before changing LaTeX-related defaults.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If you prefer to inspect the settings files directly, first locate the VS Code <code>Code/User</code> folder for your operating system. The screenshot below shows the Windows location.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/code-user-folder.png" alt="Windows File Explorer opened to the VS Code Code User folder">
    <figcaption>The user-level VS Code settings live in the <code>Code/User</code> folder.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Inside that folder, confirm where <code>settings.json</code> and <code>keybindings.json</code> live so you know what file you are editing.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/settings/settings-keybindings-files.png" alt="Windows File Explorer showing settings and keybindings files inside the VS Code user folder">
    <figcaption>Look for <code>settings</code> and <code>keybindings</code> in the VS Code user folder.</figcaption>
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
    <figcaption>Filter the settings view to LaTeX Workshop before editing values.</figcaption>
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
