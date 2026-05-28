---
layout: layouts/doc.njk
title: 라이브러리
description: 터미널이나 Jupyter Notebook 셀에서 자주 쓰는 Python 라이브러리를 설치합니다.
lang: ko
section: python
order: 2
group: python-basics
permalink: /ko/python/libraries/
translationKey: python-libraries
eyebrow: Step 2
lead: 수치 계산, 그래프, notebook 작업에 필요한 Python 라이브러리를 설치합니다.
toc:
  - id: 주요-패키지-설치
    label: 주요 패키지 설치
  - id: windows
    label: Windows
  - id: macos-linux
    label: macOS / Linux
  - id: jupyter-notebook
    label: Jupyter Notebook
tags:
  - doc
---
## 주요 패키지 설치

Python 설치가 끝나면 터미널이나 Jupyter Notebook 셀에서 패키지를 설치할 수 있습니다. 먼저 NumPy를 설치하고, 필요하면 여러 패키지를 한 번에 설치합니다.

### Windows

Windows PowerShell에서는 `py` 명령어를 사용합니다. 먼저 NumPy를 설치합니다.

```powershell
py -m pip install numpy
```

여러 개의 라이브러리를 한 번에 설치할 수도 있습니다. 예를 들어 Matplotlib과 Pandas는 다음처럼 설치합니다.

```powershell
py -m pip install matplotlib pandas
```

### macOS / Linux

macOS 또는 Linux 터미널에서는 `python3` 명령어를 사용합니다. 먼저 NumPy를 설치합니다.

```bash
python3 -m pip install numpy
```

여러 개의 라이브러리를 한 번에 설치할 수도 있습니다. 예를 들어 Matplotlib과 Pandas는 다음처럼 설치합니다.

```bash
python3 -m pip install matplotlib pandas
```

### Jupyter Notebook

Jupyter Notebook 셀 안에서는 `%pip`를 사용합니다. 먼저 NumPy를 설치합니다.

```python-jupyter
%pip install numpy
```

여러 개의 라이브러리를 한 번에 설치할 수도 있습니다. 예를 들어 Matplotlib과 Pandas는 다음처럼 설치합니다.

```python-jupyter
%pip install matplotlib pandas
```

이 방식은 notebook 셀에서만 사용합니다. `.py` 파일에서는 설치 명령어를 쓰는 것이 아니라, 설치된 패키지를 `import numpy as np`처럼 불러와서 사용합니다.
