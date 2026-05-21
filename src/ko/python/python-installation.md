---
layout: layouts/doc.njk
title: 설치
description: 사용하는 OS에 맞는 Python 설치 파일을 내려받아 설치합니다.
lang: ko
section: python
order: 1
group: python-basics
permalink: /ko/python/python-installation/
translationKey: python-installation
eyebrow: Step 1
lead: 공식 Python 다운로드 페이지에서 사용하는 OS에 맞는 설치 파일을 선택합니다.
toc:
  - id: python-download
    label: Python 다운로드
  - id: python-extension
    label: Python Extension
  - id: jupyter-extension
    label: Jupyter Extension
  - id: 주요-패키지-설치
    label: 주요 패키지 설치
tags:
  - doc
---
## Python 다운로드

<div class="doc-step-pair">
  <div>
    <p>공식 Python 다운로드 페이지를 열고, Windows, macOS, Linux 중 사용하는 OS에 맞는 설치 파일을 선택합니다.</p>
    <p>페이지가 현재 OS를 자동으로 감지해 다운로드 버튼을 보여주면 그 버튼을 사용하면 됩니다. 다른 OS용 파일이 필요하면 다운로드 페이지에서 해당 OS 항목을 선택하세요.</p>
    <p><a href="https://www.python.org/downloads/">공식 Python 다운로드 페이지</a></p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/python-installation-1.png" alt="Python 다운로드 페이지">
  </figure>
</div>

## Python Extension

VS Code에서 Python을 사용하려면 다음 extension을 설치하세요.

[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

<figure class="image-frame">
  <img src="/assets/images/python-installation-2.png" alt="VS Code Python extension">
</figure>

## Jupyter Extension

VS Code에서 Jupyter notebook을 사용하려면 다음 extension을 설치하세요.

[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

<figure class="image-frame">
  <img src="/assets/images/python-installation-3.png" alt="VS Code Jupyter extension">
</figure>

## 주요 패키지 설치

Python 설치가 끝나면 터미널에서 패키지를 전역으로 설치할 수 있습니다. 먼저 NumPy를 설치합니다.

Windows PowerShell에서는 다음 명령어를 사용합니다.

```powershell
py -m pip install numpy
```

macOS 또는 Linux에서는 다음 명령어를 사용합니다.

```bash
python3 -m pip install numpy
```

Jupyter Notebook 셀 안에서는 `%pip`로 NumPy를 설치할 수 있습니다.

```python
%pip install numpy
```

이 방식은 notebook 셀에서만 사용합니다. `.py` 파일에서는 설치 명령어를 쓰는 것이 아니라, 설치된 패키지를 `import numpy as np`처럼 불러와서 사용합니다.

여러 개의 라이브러리를 한 번에 설치할 수도 있습니다. 예를 들어 Matplotlib과 Pandas는 다음처럼 설치합니다.

```powershell
py -m pip install matplotlib pandas
```

macOS 또는 Linux에서는 다음 명령어를 사용합니다.

```bash
python3 -m pip install matplotlib pandas
```

Jupyter Notebook에서도 `%pip install package1 package2`처럼 한 셀에서 여러 패키지를 이어서 설치할 수 있습니다.

```python
%pip install matplotlib pandas
```
