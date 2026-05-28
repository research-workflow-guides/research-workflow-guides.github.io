---
layout: layouts/doc.njk
title: Two dimensions
description: Create basic two-dimensional plots with Matplotlib.
lang: en
section: python
order: 6
group: visualization
permalink: /en/python/two-dimensions/
translationKey: python-two-dimensions
eyebrow: Visualization 1
lead: Two-dimensional plots are the default way to inspect trends, comparisons, and numerical output.
toc:
  - id: when-to-use-2d-plots
    label: When to use 2D plots
  - id: minimal-example
    label: Minimal example
  - id: export-the-figure
    label: Export the figure
tags:
  - doc
---
## When to use 2D plots

Use a two-dimensional plot when you need to inspect one or two quantities clearly: a curve, a scatter plot, or a comparison across conditions.

## Minimal example

This example plots `y = x^2`, creates an `Illustration` folder if needed, saves the figure, and then shows it.

```python
# Basic packages
import numpy as np
import matplotlib.pyplot as plt

# save path setting
import os
if not os.path.exists('Illustration'):
    os.makedirs('Illustration')

# function
def f(x):
    return x**2

# domain
x = np.linspace(-10, 10, 400)

# visualization
plt.figure(figsize=(6, 6))
plt.plot(x, f(x), label='$y = x^2$', color='blue')
plt.xlabel('$x$', fontsize=11)
plt.ylabel('$y$', fontsize=11)
plt.xlim(-5, 5)
plt.ylim(-5, 5)
plt.xticks(fontsize=10)
plt.yticks(fontsize=10)
plt.grid()
plt.legend()
plt.title('Plot of $y = x^2$', fontsize=11)
plt.savefig('Illustration/Figure 1.png', dpi=600, bbox_inches='tight')
plt.show()
```

## Export the figure

The script saves the figure as `Illustration/Figure 1.png`. Use a clear folder name and file name so generated figures are easy to reuse later.
