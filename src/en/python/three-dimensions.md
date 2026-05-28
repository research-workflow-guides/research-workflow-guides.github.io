---
layout: layouts/doc.njk
title: Three dimensions
description: Create simple three-dimensional plots for surfaces and trajectories.
lang: en
section: python
order: 7
group: visualization
permalink: /en/python/three-dimensions/
translationKey: python-three-dimensions
eyebrow: Visualization 2
lead: Three-dimensional plots are useful for quick inspection of surfaces, trajectories, and spatial relationships.
toc:
  - id: when-to-use-3d-plots
    label: When to use 3D plots
  - id: minimal-example
    label: Minimal example
  - id: working-habit
    label: Working habit
tags:
  - doc
---
## When to use 3D plots

Use a three-dimensional plot for inspection, not as the first choice for final communication. If a 2D view explains the result more clearly, use the 2D view.

## Minimal example

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

## Working habit

Rotate and inspect the plot while exploring, then save the clearest view.

```python
ax.view_init(elev=30, azim=45)
fig.savefig("surface-3d.png", dpi=200, bbox_inches="tight")
```
