---
layout: layouts/doc.njk
title: 3차원 시각화
description: surface나 trajectory를 위한 간단한 3차원 그래프를 만듭니다.
lang: ko
section: python
order: 7
group: visualization
permalink: /ko/python/three-dimensions/
translationKey: python-three-dimensions
eyebrow: Visualization 2
lead: 3차원 그래프는 surface, trajectory, spatial relationship을 빠르게 확인할 때 유용합니다.
toc:
  - id: 3차원-그래프를-쓸-때
    label: 3차원 그래프를 쓸 때
  - id: 최소-예제
    label: 최소 예제
  - id: 작업-습관
    label: 작업 습관
tags:
  - doc
---
## 3차원 그래프를 쓸 때

3차원 그래프는 최종 설명보다 확인용으로 먼저 사용합니다. 2차원 view가 결과를 더 명확히 설명한다면 2차원 view를 우선합니다.

## 최소 예제

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2.0, 2.0, 80)
y = np.linspace(-2.0, 2.0, 80)
X, Y = np.meshgrid(x, y)
Z = np.exp(-(X ** 2 + Y ** 2))

fig = plt.figure()
ax = fig.add_subplot(projection="3d")
ax.plot_surface(X, Y, Z, cmap="viridis")
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_zlabel("z")
```

## 작업 습관

탐색 중에는 plot을 회전해 확인하고, 가장 명확한 view를 저장합니다.

```python
ax.view_init(elev=30, azim=45)
fig.savefig("surface-3d.png", dpi=200, bbox_inches="tight")
```
