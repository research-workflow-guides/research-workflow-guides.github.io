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
tags:
  - doc
---
## Python 다운로드

<div class="doc-step-pair">
  <div>
    <div class="doc-action-row">
      <p>공식 Python 다운로드 페이지를 열고, Windows, macOS, Linux 중 사용하는 OS에 맞는 설치 파일을 선택합니다.</p>
      <a class="doc-action-link" href="https://www.python.org/downloads/">공식 Python 다운로드</a>
    </div>
    <p>페이지가 현재 OS를 자동으로 감지해 다운로드 버튼을 보여주면 그 버튼을 사용하면 됩니다. 다른 OS용 파일이 필요하면 다운로드 페이지에서 해당 OS 항목을 선택하세요.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/python-installation-1.png" alt="Python 다운로드 페이지">
  </figure>
</div>

### Windows

다음과 같이 Python 설치 여부와 설치 경로를 Windows PowerShell에서 확인할 수 있습니다.

```powershell
py -0p
py --version
py -c "import sys; print(sys.executable)"
```

`py -0p`는 Windows Python Launcher가 찾은 Python 버전과 각 실행 파일 경로를 보여줍니다. `*` 표시는 `py`가 기본으로 선택하는 Python입니다. `py --version`은 기본 Python 버전을 확인합니다. 마지막 명령은 `py`가 실제로 사용하는 Python 경로를 출력합니다.

여러 Python 버전이 설치되어 있고 Python 3.14를 명시적으로 지정해야 한다면 `py` 대신 `py -3.14`를 사용합니다.

### macOS / Linux

Python 3.14를 기준으로 다음과 같이 Python 설치 여부와 설치 경로를 터미널에서 확인할 수 있습니다.

```bash
python3 --version
which python3
python3 -c "import sys; print(sys.executable)"
```

`python3 --version`은 설치된 Python 버전을 확인합니다. `which python3`는 shell이 찾은 `python3` 명령의 경로를 보여줍니다. 마지막 명령은 그 `python3` 명령이 실제로 사용하는 Python 실행 파일 경로를 출력합니다.

## Python Extension

<div class="doc-action-row">
  <p>VS Code에서 Python을 사용하려면 다음 extension을 설치하세요.</p>
  <a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=ms-python.python">Visual Studio Marketplace</a>
</div>

<figure class="image-frame">
  <img src="/assets/images/python-installation-2.png" alt="VS Code Python extension">
</figure>

## Jupyter Extension

<div class="doc-action-row">
  <p>VS Code에서 Jupyter notebook을 사용하려면 다음 extension을 설치하세요.</p>
  <a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter">Visual Studio Marketplace</a>
</div>

<figure class="image-frame">
  <img src="/assets/images/python-installation-3.png" alt="VS Code Jupyter extension">
</figure>
