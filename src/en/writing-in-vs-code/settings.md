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
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Start with a small settings file

Avoid building a giant `settings.json` on day one. A smaller file is easier to understand, debug, and carry to the next project.

Focus on build stability, auto-clean behavior, and predictable PDF preview.

## Useful defaults

The most practical early settings are:

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

## Self-check

Confirm that saving a file behaves as expected, PDF preview opens in the place you want, and cleanup does not remove files you still need.
