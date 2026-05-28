---
layout: layouts/doc.njk
title: 3차원 시각화
description: surface나 trajectory를 위한 간단한 3차원 그래프를 만듭니다.
lang: ko
section: python
order: 8
group: visualization
permalink: /ko/python/three-dimensions/
translationKey: python-three-dimensions
eyebrow: Visualization 2
lead: 3차원 그래프는 surface, trajectory, spatial relationship을 빠르게 확인할 때 유용합니다.
toc:
  - id: 필요한-라이브러리-설치
    label: 필요한 라이브러리 설치
  - id: 최소-예제
    label: 최소 예제
  - id: 전체-예제
    label: 전체 예제
tags:
  - doc
---
## 필요한 라이브러리 설치

<div class="doc-action-row">
  <p><code>Matplotlib</code>이 설치되어 있지 않다면 먼저 설치합니다.</p>
  <a class="doc-action-link" href="https://matplotlib.org/">Matplotlib 문서</a>
</div>

Windows PowerShell에서는 다음 명령어를 사용합니다.

```powershell
py -m pip install matplotlib
```

macOS 또는 Linux에서는 다음 명령어를 사용합니다.

```bash
python3 -m pip install matplotlib
```

## 최소 예제

아래 최소 예제는 <span class="math-inline"><var>f</var>(<var>x</var>, <var>y</var>) = <var>e</var><sup>-(<var>x</var><sup>2</sup> + <var>y</var><sup>2</sup>)</sup></span>를 그리고 화면에 표시합니다.

```python
# Basic packages
import numpy as np
import matplotlib.pyplot as plt

# function
def f(x, y):
    return np.exp(-(x ** 2 + y ** 2))

# domain
x = np.linspace(-2.0, 2.0, 80)
y = np.linspace(-2.0, 2.0, 80)
X, Y = np.meshgrid(x, y)
Z = f(X, Y)

# visualization
fig = plt.figure(figsize=(6, 6))
ax = fig.add_subplot(projection="3d")
ax.plot_surface(X, Y, Z, cmap="viridis")
plt.show()
```

## 전체 예제

아래 예제는 <span class="math-inline"><var>f</var>(<var>x</var>, <var>y</var>) = <var>e</var><sup>-(<var>x</var><sup>2</sup> + <var>y</var><sup>2</sup>)</sup></span>를 그리고, `.py` 파일 옆에 `figures` 폴더를 만든 뒤 figure를 저장하고 화면에 표시합니다.

```python
# Basic packages
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path

# save path setting
script_dir = Path(__file__).resolve().parent
figures_dir = script_dir / "figures"
figures_dir.mkdir(exist_ok=True)

# function
def f(x, y):
    return np.exp(-(x ** 2 + y ** 2))

# domain
x = np.linspace(-2.0, 2.0, 80)
y = np.linspace(-2.0, 2.0, 80)
X, Y = np.meshgrid(x, y)
Z = f(X, Y)

# visualization
fig = plt.figure(figsize=(6, 6))
ax = fig.add_subplot(projection="3d")
ax.plot_surface(X, Y, Z, cmap="viridis")
ax.set_xlabel("$x$", fontsize=11)
ax.set_ylabel("$y$", fontsize=11)
ax.set_zlabel("$f(x, y)$", fontsize=11, labelpad=12)
ax.set_title("Surface plot of $f(x, y) = e^{-(x^2 + y^2)}$", fontsize=11, pad=14)
ax.view_init(elev=30, azim=45)

figure_path = figures_dir / "surface-3d.png"
fig.savefig(figure_path, dpi=300, bbox_inches="tight", pad_inches=0.2)
plt.show()
```

이 script는 figure를 `.py` 파일 옆의 `figures/surface-3d.png`로 저장합니다. 이렇게 두면 생성된 figure가 해당 script와 가까운 위치에 남습니다.

생성된 figure는 다음처럼 보입니다.

<figure class="image-frame image-frame--plot-result">
  <img src="/assets/images/surface-3d.png?v=2" alt="f of x y equals e to the negative x squared plus y squared의 3차원 surface plot">
</figure>
