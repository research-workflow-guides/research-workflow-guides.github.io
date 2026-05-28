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
        label: 패키지 설치
tags:
  - doc
---
## 주요 패키지 설치

Python 설치가 끝나면 `pip`으로 터미널이나 Jupyter Notebook 셀에서 패키지를 설치할 수 있습니다. `python -m pip` 형식은 현재 사용하려는 Python 환경에 연결된 `pip`을 실행한다는 점에서 더 명확합니다.

### Windows

Windows PowerShell에서는 `py -m pip`을 사용합니다. 먼저 `pip`을 최신화합니다. 이 과정에서 `pip`이 현재 사용하려는 Python 환경에 연결되어 있는지도 함께 확인할 수 있습니다.

```powershell
py -m pip install --upgrade pip
```

그 다음 여러 개의 자주 쓰는 라이브러리를 한 번에 설치합니다. 예를 들어 NumPy, Matplotlib, Pandas는 다음처럼 설치합니다.

```powershell
py -m pip install numpy matplotlib pandas
```

### macOS / Linux

macOS 또는 Linux 터미널에서는 `python3 -m pip`을 사용합니다. 먼저 `pip`을 최신화합니다. 이 과정에서 `pip`이 현재 사용하려는 Python 환경에 연결되어 있는지도 함께 확인할 수 있습니다.

```bash
python3 -m pip install --upgrade pip
```

일부 Linux 배포판에서는 system Python의 `pip` 업그레이드가 막힐 수 있습니다. 그런 경우에는 virtual environment를 만든 뒤 그 안에서 진행합니다.

그 다음 여러 개의 자주 쓰는 라이브러리를 한 번에 설치합니다. 예를 들어 NumPy, Matplotlib, Pandas는 다음처럼 설치합니다.

```bash
python3 -m pip install numpy matplotlib pandas
```

## Jupyter Notebook

처음 설정하는 Python 환경이라면 먼저 터미널에서 Jupyter Notebook과 Python 커널을 설치합니다. `ipykernel`은 설치한 Python 환경을 notebook 셀에서 실행할 수 있게 연결해주는 패키지입니다.

<h3 id="jupyter-windows">Windows</h3>

Windows PowerShell에서는 notebook kernel로 사용할 Python 환경에 Jupyter Notebook과 `ipykernel`을 설치합니다.

```powershell
py -m pip install notebook ipykernel
```

<h3 id="jupyter-macos-linux">macOS / Linux</h3>

macOS 또는 Linux 터미널에서는 notebook kernel로 사용할 Python 환경에 Jupyter Notebook과 `ipykernel`을 설치합니다.

```bash
python3 -m pip install notebook ipykernel
```

<h3 id="jupyter-install-packages">패키지 설치</h3>

notebook을 연 뒤에는 Jupyter Notebook 셀 안에서 `%pip`를 사용합니다. `%pip`는 현재 notebook kernel이 사용하는 Python 환경에 패키지를 설치합니다.

```python-jupyter
%pip install numpy matplotlib pandas
```

이 방식은 notebook 셀에서만 사용합니다. `.py` 파일에서는 설치 명령어를 쓰는 것이 아니라, 설치된 패키지를 `import numpy as np`처럼 불러와서 사용합니다.
