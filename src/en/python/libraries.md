---
layout: layouts/doc.njk
title: Libraries
description: Install common Python libraries from a terminal or a Jupyter Notebook cell.
lang: en
section: python
order: 2
group: python-basics
permalink: /en/python/libraries/
translationKey: python-libraries
eyebrow: Step 2
lead: Install the Python libraries you need for numerical work, plotting, and notebooks.
toc:
  - id: install-common-packages
    label: Install common packages
  - id: windows
    label: Windows
  - id: macos-linux
    label: macOS / Linux
  - id: jupyter-notebook
    label: Jupyter Notebook
tags:
  - doc
---
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
