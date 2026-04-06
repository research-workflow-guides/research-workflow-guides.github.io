---
layout: layouts/doc.njk
title: Folder Setup
description: Open the correct project root and keep one stable workspace shape in VS Code.
lang: en
section: writing-in-vs-code
order: 1
permalink: /en/writing-in-vs-code/folder-setup/
translationKey: writing-folder-setup
eyebrow: Topic 1
lead: Open the whole project folder in VS Code, not a single file. Keep the root stable and always build from the correct location.
toc:
  - id: open-the-project-root
    label: Open the project root
  - id: keep-one-stable-folder-shape
    label: Keep one stable folder shape
  - id: common-mistakes
    label: Common mistakes
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Open the project root

Open the whole project folder in VS Code, not just a single `.tex` file.

When the root folder is open, LaTeX Workshop, search, file references, and source control all see the same workspace boundary.

## Keep one stable folder shape

Keep one predictable structure for the working project:

- root folder for the repository or paper project
- a main `.tex` file near the root or in one clearly named subfolder
- figures, bibliography, and supplementary files in stable subfolders

The exact names can vary, but avoid moving files around every time you start a new document.

## Common mistakes

Do not start from the Downloads folder, a temporary ZIP preview, or a deeply nested child folder unless that folder is truly the project root.

If LaTeX Workshop cannot find the main file, the problem is often the folder you opened rather than the extension itself.

## Self-check

Confirm that the Explorer shows the whole project, the main `.tex` file is inside that tree, and builds are running against the intended root.

