---
layout: layouts/doc.njk
title: Three dimensions
description: Create simple three-dimensional plots for surfaces and trajectories.
lang: en
section: python
order: 8
group: visualization
permalink: /en/python/three-dimensions/
translationKey: python-three-dimensions
eyebrow: Visualization 2
lead: Three-dimensional plots are useful for quick inspection of surfaces, trajectories, and spatial relationships.
toc:
  - id: install-required-library
    label: Install required library
  - id: minimal-example
    label: Minimal example
tags:
  - doc
---
## Install required library

<div class="doc-action-row">
  <p>If <code>Matplotlib</code> is not installed, install it first.</p>
  <a class="doc-action-link" href="https://matplotlib.org/">Matplotlib documentation</a>
</div>

On Windows PowerShell:

```powershell
py -m pip install matplotlib
```

On macOS or Linux:

```bash
python3 -m pip install matplotlib
```

## Minimal example

This example plots <span class="math-inline"><var>f</var>(<var>x</var>, <var>y</var>) = <var>e</var><sup>-(<var>x</var><sup>2</sup> + <var>y</var><sup>2</sup>)</sup></span>, creates a `figures` folder next to the `.py` file, saves the figure, and then shows it.

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

The script saves the figure as `figures/surface-3d.png` next to the `.py` file. This keeps generated figures close to the script that created them.

The resulting figure should look like this.

<figure class="image-frame image-frame--plot-result">
  <img src="/assets/images/surface-3d.png?v=2" alt="Three-dimensional surface plot of f of x y equals e to the negative x squared plus y squared">
</figure>
