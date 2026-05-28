---
layout: layouts/doc.njk
title: Numba
description: Use Numba to speed up numerical Python loops with just-in-time compilation.
lang: en
section: python
order: 9
group: acceleration
permalink: /en/python/numba/
translationKey: python-numba
eyebrow: Acceleration 1
lead: Numba is useful when a numerical loop is clear in Python but too slow to run repeatedly.
toc:
  - id: when-to-use-numba
    label: When to use Numba
  - id: minimal-example
    label: Minimal example
  - id: working-habit
    label: Working habit
tags:
  - doc
---
## When to use Numba

Use Numba when the slow part of your code is a numerical loop over arrays, and rewriting the whole workflow in another language would be unnecessary.

Numba works best with numerical code that uses simple Python control flow and NumPy arrays. It is not a general way to speed up every Python program.

## Minimal example

```python
import numpy as np
from numba import njit

@njit
def moving_average(values, radius):
    output = np.empty_like(values)

    for i in range(values.size):
        left = max(0, i - radius)
        right = min(values.size, i + radius + 1)
        output[i] = np.mean(values[left:right])

    return output

x = np.linspace(0.0, 1.0, 1000)
y = moving_average(x**2, radius=5)
```

The first call includes compilation time. Time the second call if you want to measure runtime performance.

## Working habit

Write the function in plain Python first, test it, then add `@njit`. If Numba raises a typing error, simplify the function until the numerical core is explicit.
