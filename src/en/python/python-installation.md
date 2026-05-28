---
layout: layouts/doc.njk
title: Installation
description: Download the Python installer that matches your operating system.
lang: en
section: python
order: 1
group: python-basics
permalink: /en/python/python-installation/
translationKey: python-installation
eyebrow: Step 1
lead: Download Python from the official site and choose the installer for your operating system.
toc:
  - id: download-python
    label: Download Python
  - id: python-extension
    label: Python Extension
  - id: jupyter-extension
    label: Jupyter Extension
tags:
  - doc
---
## Download Python

<div class="doc-step-pair">
  <div>
    <div class="doc-action-row">
      <p>Open the official Python download page and choose the installer that matches your operating system.</p>
      <a class="doc-action-link" href="https://www.python.org/downloads/">Official Python downloads</a>
    </div>
    <p>If the page detects your system automatically, use that download button. Otherwise, choose the correct Windows, macOS, or Linux option from the download page.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/python-installation-1.png" alt="Python downloads page">
  </figure>
</div>

### Windows

You can check whether Python is installed and where it is installed from Windows PowerShell.

```powershell
py -0p
py --version
py -c "import sys; print(sys.executable)"
```

`py -0p` lists the Python versions detected by the Windows Python Launcher and shows each executable path. The `*` mark shows the default Python selected by `py`. `py --version` checks the default Python version. The final command prints the exact Python executable used by `py`.

If several Python versions are installed and you need to target Python 3.14 explicitly, replace `py` with `py -3.14`.

### macOS / Linux

Using Python 3.14 as the baseline, you can check whether Python is installed and where it is installed from the terminal.

```bash
python3 --version
which python3
python3 -c "import sys; print(sys.executable)"
```

`python3 --version` checks the installed Python version. `which python3` shows the command path found by the shell. The final command prints the exact Python executable used by that `python3` command.

## Python Extension

<div class="doc-action-row">
  <p>To use Python in VS Code, install the following extension.</p>
  <a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=ms-python.python">Visual Studio Marketplace</a>
</div>

<figure class="image-frame">
  <img src="/assets/images/python-installation-2.png" alt="Python extension for Visual Studio Code">
</figure>

## Jupyter Extension

<div class="doc-action-row">
  <p>To work with Jupyter notebooks in VS Code, install the following extension.</p>
  <a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter">Visual Studio Marketplace</a>
</div>

<figure class="image-frame">
  <img src="/assets/images/python-installation-3.png" alt="Jupyter extension for Visual Studio Code">
</figure>
