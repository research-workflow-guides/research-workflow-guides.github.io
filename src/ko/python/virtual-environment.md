---
layout: layouts/doc.njk
title: 가상 환경 만들기
description: 프로젝트 안에 .venv를 만들고 NumPy 같은 패키지를 설치합니다.
lang: ko
section: python
order: 2
group: python-basics
permalink: /ko/python/virtual-environment/
translationKey: python-virtual-environment
eyebrow: 선택
lead: 프로젝트마다 분리된 Python 환경을 만든 뒤 필요한 패키지를 설치합니다.
toc:
  - id: 터미널-열기
    label: 터미널 열기
  - id: venv-만들기
    label: .venv 만들기
  - id: python-interpreter-선택
    label: Python interpreter 선택
  - id: interpreter-확인
    label: Interpreter 확인
  - id: venv에-numpy-설치
    label: .venv에 NumPy 설치
  - id: venv를-gitignore에-추가
    label: .venv를 .gitignore에 추가
tags:
  - doc
---
## 터미널 열기

VS Code에서 프로젝트 폴더를 연 뒤, Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd>로 통합 터미널을 엽니다.

명령어는 프로젝트 폴더에서 실행하세요. 이렇게 하면 가상 환경이 코드와 같은 프로젝트 안에 만들어집니다.

## .venv 만들기

Windows PowerShell에서는 다음 명령어를 사용합니다.

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
```

macOS 또는 Linux에서는 다음 명령어를 사용합니다.

```bash
python3 -m venv .venv
source .venv/bin/activate
```

활성화되면 터미널 프롬프트 앞에 `(.venv)`가 표시됩니다. VS Code가 interpreter를 고르라고 물어보면 `.venv` 안에 있는 Python interpreter를 선택하세요.

## Python interpreter 선택

VS Code가 프로젝트 안의 `.venv`에 있는 Python 실행 파일을 사용하도록 지정합니다.

Command Palette를 Windows에서는 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, macOS에서는 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>로 열고 **Python: Select Interpreter**를 실행합니다.

<figure class="image-frame">
  <img src="/assets/images/python-installation-4.png" alt="VS Code Command Palette에서 Python Select Interpreter 명령 선택">
</figure>

선택 목록에 프로젝트 `.venv` 안의 interpreter가 보이면 그 항목을 선택합니다. 보통 virtual environment로 표시되거나 경로에 `.venv`가 들어 있습니다.

목록에 `.venv`가 보이지 않으면 <strong>Enter interpreter path...</strong>를 선택한 뒤 interpreter를 직접 지정합니다.

<figure class="image-frame">
  <img src="/assets/images/python-installation-5.png" alt="VS Code interpreter 선택 목록의 Enter interpreter path 옵션">
</figure>

- Windows: `.venv\Scripts\python.exe`
- macOS 또는 Linux: `.venv/bin/python`

<figure class="image-frame">
  <img src="/assets/images/python-installation-6.png" alt="VS Code에 .venv Python 실행 파일 경로 입력">
</figure>

프로젝트 밖의 global Python 항목은 특별한 이유가 없으면 선택하지 마세요. 그러면 패키지가 이 프로젝트의 `.venv`가 아니라 전역 Python에 설치될 수 있습니다.

## Interpreter 확인

Interpreter를 선택한 뒤, VS Code 터미널에서 현재 Python 경로를 확인합니다.

```powershell
python -c "import sys; print(sys.executable)"
```

출력된 경로가 프로젝트의 `.venv` 폴더 안을 가리키면 제대로 설정된 것입니다.

Windows에서는 보통 다음처럼 끝납니다.

```text
\.venv\Scripts\python.exe
```

macOS 또는 Linux에서는 보통 다음처럼 끝납니다.

```text
/.venv/bin/python
```

VS Code 하단 status bar에 표시되는 선택된 interpreter도 확인할 수 있습니다. 여기에도 global Python이 아니라 `.venv`가 표시되어야 합니다.

VS Code가 터미널을 열거나 interpreter를 바꾼 직후 활성화 스크립트를 자동으로 실행할 수 있습니다. 정상적인 동작입니다. 첫 확인 뒤에 프롬프트가 `(.venv)`로 바뀌었다면, 활성화된 터미널에서 경로 확인 명령어를 한 번 더 실행하세요.

<figure class="image-frame">
  <img src="/assets/images/python-installation-7.png" alt="VS Code 터미널에서 .venv 환경이 활성화된 모습">
</figure>

## .venv에 NumPy 설치

패키지는 방금 만든 `.venv`가 활성화된 상태에서만 설치합니다. 아래 명령어를 실행하기 전에 터미널 프롬프트 앞에 `(.venv)`가 보이는지 확인하세요.

```powershell
python -m pip install --upgrade pip
python -m pip install numpy
```

NumPy가 정상적으로 설치됐는지 확인합니다.

```powershell
python -c "import numpy as np; print(np.__version__)"
```

다른 프로젝트 패키지도 같은 방식으로 설치하면 됩니다. 연구용 패키지는 전역 Python에 바로 설치하지 말고 프로젝트마다 `.venv`를 만들어 관리하는 편이 안정적입니다.

## .venv를 .gitignore에 추가

`.venv`는 Git에 올리지 않습니다. 로컬에 설치된 패키지가 들어 있고, 용량도 커질 수 있기 때문입니다.

프로젝트의 `.gitignore` 파일에 다음 줄을 추가하세요.

```text
.venv/
```

<figure class="image-frame">
  <img src="/assets/images/python-installation-8.png" alt=".gitignore 파일에 .venv가 추가된 모습">
</figure>

Git에서 특정 파일이나 폴더를 제외하는 방법은 [Gitignore](/ko/git-github/gitignore/) 문서에서 더 자세히 확인할 수 있습니다.
