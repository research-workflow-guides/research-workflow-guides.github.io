---
layout: layouts/doc.njk
title: Virtual environment
description: Create a project-local .venv and install packages such as NumPy.
lang: en
section: python
order: 3
group: python-basics
permalink: /en/python/virtual-environment/
translationKey: python-virtual-environment
eyebrow: Optional
lead: Create an isolated Python environment for one project before installing packages.
toc:
  - id: open-the-terminal
    label: Open the terminal
  - id: create-venv
    label: Create .venv
  - id: select-the-python-interpreter
    label: Select the Python interpreter
  - id: verify-the-interpreter
    label: Verify the interpreter
  - id: install-numpy-in-venv
    label: Install NumPy in .venv
  - id: add-venv-to-gitignore
    label: Add .venv to .gitignore
tags:
  - doc
---
## Open the terminal

Open your project folder in VS Code, then open the integrated terminal with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on macOS.

Run the commands from the project folder. This keeps the virtual environment next to your code.

## Create .venv

On Windows PowerShell:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
```

On macOS or Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

After activation, the terminal prompt should show `(.venv)`. If VS Code asks which interpreter to use, choose the Python interpreter inside `.venv`.

## Select the Python interpreter

Tell VS Code to use the Python executable inside `.venv`.

Open the Command Palette with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on macOS, then run **Python: Select Interpreter**.

<figure class="image-frame">
  <img src="/assets/images/python-installation-4.png" alt="Python Select Interpreter command in the VS Code Command Palette">
</figure>

If the picker shows an interpreter from your project `.venv`, choose that item. It is usually labeled as a virtual environment or shows a path inside `.venv`.

If `.venv` does not appear in the list, choose **Enter interpreter path...** and select the interpreter manually:

<figure class="image-frame">
  <img src="/assets/images/python-installation-5.png" alt="Enter interpreter path option in the VS Code interpreter picker">
</figure>

- Windows: `.venv\Scripts\python.exe`
- macOS or Linux: `.venv/bin/python`

<figure class="image-frame">
  <img src="/assets/images/python-installation-6.png" alt="Typing the .venv Python executable path in VS Code">
</figure>

Do not choose a global Python entry unless you intentionally want to install packages outside this project.

## Verify the interpreter

After selecting the interpreter, check the Python path from the VS Code terminal.

```powershell
python -c "import sys; print(sys.executable)"
```

The output should point inside your project `.venv` folder.

On Windows, it should end like this:

```output
\.venv\Scripts\python.exe
```

On macOS or Linux, it should end like this:

```output
/.venv/bin/python
```

You can also check the selected interpreter shown in the VS Code status bar. It should refer to `.venv`, not a global Python installation.

VS Code may automatically run the activation script when the terminal opens or after you change the interpreter. This is normal. If the prompt changes to `(.venv)` after your first check, run the path check again from that activated terminal.

<figure class="image-frame">
  <img src="/assets/images/python-installation-7.png" alt="VS Code terminal showing the .venv environment activated">
</figure>

## Install NumPy in .venv

Install packages only after `.venv` is active. The terminal prompt should show `(.venv)` before you run these commands.

```powershell
python -m pip install --upgrade pip
python -m pip install numpy
```

On Windows, `py` is the Python Launcher. If `python` is not recognized, first check that `py` points to this project's `.venv`:

```powershell
py -c "import sys; print(sys.executable)"
```

Use `py` only if the printed path contains `.venv\Scripts\python.exe`. Then install packages with:

```powershell
py -m pip install --upgrade pip
py -m pip install numpy
```

Check that NumPy is available:

```powershell
python -c "import numpy as np; print(np.__version__)"
```

If you installed with `py`, use `py -c "import numpy as np; print(np.__version__)"` for this check.

Use this pattern for other project packages as well. Create one `.venv` per project instead of installing research dependencies globally.

## Add .venv to .gitignore

Do not commit `.venv` to Git. It contains local installed packages and can become very large.

Add this line to your project `.gitignore` file:

```text
.venv/
```

<figure class="image-frame">
  <img src="/assets/images/python-installation-8.png" alt=".gitignore file with .venv excluded">
</figure>

If you need a refresher on excluding files from Git, see [Gitignore](/en/git-github/gitignore/).
