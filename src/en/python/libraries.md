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
    children:
      - id: windows
        label: Windows
      - id: macos-linux
        label: macOS / Linux
  - id: jupyter-notebook
    label: Jupyter Notebook
    children:
      - id: jupyter-windows
        label: Windows
      - id: jupyter-macos-linux
        label: macOS / Linux
      - id: jupyter-install-packages
        label: Install packages
tags:
  - doc
---
## Install common packages

After Python is installed, use `pip` to install packages from a terminal or a Jupyter Notebook cell. The `python -m pip` style keeps `pip` tied to the Python environment you are using.

### Windows

Use `py -m pip` in Windows PowerShell. First, upgrade `pip`; this also confirms that `pip` is connected to the Python environment you are using.

```powershell
py -m pip install --upgrade pip
```

Then install multiple common libraries in one command. For example, install NumPy, Matplotlib, and Pandas like this:

```powershell
py -m pip install numpy matplotlib pandas
```

### macOS / Linux

Use `python3 -m pip` in a macOS or Linux terminal. First, upgrade `pip`; this also confirms that `pip` is connected to the Python environment you are using.

```bash
python3 -m pip install --upgrade pip
```

On some Linux distributions, the system Python may block direct `pip` upgrades. In that case, continue from a virtual environment instead.

Then install multiple common libraries in one command. For example, install NumPy, Matplotlib, and Pandas like this:

```bash
python3 -m pip install numpy matplotlib pandas
```

## Jupyter Notebook

If this is a clean Python setup, install Jupyter Notebook and the Python kernel from a terminal first. `ipykernel` connects the installed Python environment to notebook cells.

<h3 id="jupyter-windows">Windows</h3>

In Windows PowerShell, install Jupyter Notebook and `ipykernel` into the Python environment you want to use as the notebook kernel.

```powershell
py -m pip install notebook ipykernel
```

<h3 id="jupyter-macos-linux">macOS / Linux</h3>

In a macOS or Linux terminal, install Jupyter Notebook and `ipykernel` into the Python environment you want to use as the notebook kernel.

```bash
python3 -m pip install notebook ipykernel
```

<h3 id="jupyter-install-packages">Install packages</h3>

After opening a notebook, use `%pip` inside a Jupyter Notebook cell. `%pip` installs packages into the Python environment used by the current notebook kernel.

```python-jupyter
%pip install numpy matplotlib pandas
```

This is for notebook cells only. In a `.py` file, use installed packages with `import`, such as `import numpy as np`.
