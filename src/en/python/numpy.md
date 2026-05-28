---
layout: layouts/doc.njk
title: NumPy
description: Use NumPy arrays for small numerical workflows and data preparation.
lang: en
section: python
order: 3
group: backends
permalink: /en/python/numpy/
translationKey: python-numpy
eyebrow: Backend 1
lead: NumPy is the default starting point for array-based numerical work in Python.
toc:
  - id: when-to-use-numpy
    label: When to use NumPy
  - id: minimal-example
    label: Minimal example
  - id: working-habit
    label: Working habit
tags:
  - doc
---
## When to use NumPy

<div class="doc-action-row">
  <p>Use the official NumPy repository when you need source code, issues, releases, or development details.</p>
  <a class="doc-action-link" href="https://github.com/numpy/numpy">Official repository</a>
</div>

Use NumPy when your data fits naturally into arrays and you need fast, predictable numerical operations.

It is a good backend for early analysis, data cleaning, simulations, and preparing data before moving to a heavier library.

## Minimal example

```python
import numpy as np

x = np.linspace(0.0, 1.0, 6)
y = x ** 2

print(y)
```

## Working habit

Keep NumPy code explicit at first. Check array shapes often, and avoid hiding several transformations inside one long line.

```python
print(x.shape)
print(y.shape)
```
