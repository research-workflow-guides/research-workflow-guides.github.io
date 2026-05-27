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
  - id: install-common-packages
    label: Install common packages
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

## Install common packages

After Python is installed, you can install packages from a terminal or a Jupyter Notebook cell. Start with NumPy, then install multiple packages at once when needed.

### Windows

Use `py` in Windows PowerShell. Start by installing NumPy.

```powershell
py -m pip install numpy
```

You can also install multiple libraries in one command. For example, install Matplotlib and Pandas like this:

```powershell
py -m pip install matplotlib pandas
```

### macOS / Linux

Use `python3` in a macOS or Linux terminal. Start by installing NumPy.

```bash
python3 -m pip install numpy
```

You can also install multiple libraries in one command. For example, install Matplotlib and Pandas like this:

```bash
python3 -m pip install matplotlib pandas
```

### Jupyter Notebook

Use `%pip` inside a Jupyter Notebook cell. Start by installing NumPy.

```python-jupyter
%pip install numpy
```

You can also install multiple libraries in one cell. For example, install Matplotlib and Pandas like this:

```python-jupyter
%pip install matplotlib pandas
```

This is for notebook cells only. In a `.py` file, use installed packages with `import`, such as `import numpy as np`.
