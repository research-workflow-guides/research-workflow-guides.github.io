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
    <p>Open the official Python download page and choose the installer that matches your operating system.</p>
    <p>If the page detects your system automatically, use that download button. Otherwise, choose the correct Windows, macOS, or Linux option from the download page.</p>
    <p><a href="https://www.python.org/downloads/">Official Python downloads</a></p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/python-installation-1.png" alt="Python downloads page">
  </figure>
</div>

## Python Extension

To use Python in VS Code, install the following extension.

[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

<figure class="image-frame">
  <img src="/assets/images/python-installation-2.png" alt="Python extension for Visual Studio Code">
</figure>

## Jupyter Extension

To work with Jupyter notebooks in VS Code, install the following extension.

[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

<figure class="image-frame">
  <img src="/assets/images/python-installation-3.png" alt="Jupyter extension for Visual Studio Code">
</figure>

## Install common packages

After Python is installed, you can install a package globally from a terminal. Start with NumPy:

On Windows PowerShell:

```powershell
py -m pip install numpy
```

On macOS or Linux:

```bash
python3 -m pip install numpy
```

In a Jupyter Notebook cell, install NumPy with `%pip`:

```python
%pip install numpy
```

This is for notebook cells only. In a `.py` file, use packages with `import`, such as `import numpy as np`, after they are installed.

You can also install multiple libraries in one command. For example, install Matplotlib and Pandas like this:

```powershell
py -m pip install matplotlib pandas
```

On macOS or Linux:

```bash
python3 -m pip install matplotlib pandas
```

Jupyter Notebook also supports installing multiple packages in one cell with the same `%pip install package1 package2` pattern.

```python
%pip install matplotlib pandas
```
