---
layout: layouts/doc.njk
title: JAX
description: Use JAX when array code needs gradients, compilation, or accelerator support.
lang: en
section: python
order: 4
group: backends
permalink: /en/python/jax/
translationKey: python-jax
eyebrow: Backend 2
lead: JAX keeps a NumPy-like style while adding automatic differentiation and compilation tools.
toc:
  - id: when-to-use-jax
    label: When to use JAX
  - id: minimal-example
    label: Minimal example
  - id: working-habit
    label: Working habit
tags:
  - doc
---
## When to use JAX

<div class="doc-action-row">
  <p>Use the official JAX repository when you need source code, issues, releases, or development details.</p>
  <a class="doc-action-link" href="https://github.com/jax-ml/jax">Official repository</a>
</div>

Use JAX when the same array workflow needs gradients, just-in-time compilation, or accelerator-backed computation.

It is useful for optimization, differentiable simulations, and research code where gradients are part of the method.

## Minimal example

```python
import jax.numpy as jnp
from jax import grad

def loss(values):
    return jnp.sum((values - 1.0) ** 2)

values = jnp.array([0.0, 1.5, 2.0])
gradient = grad(loss)(values)

print(gradient)
```

## Working habit

Start from plain array code, then add JAX features only when they solve a concrete problem. This keeps debugging easier.
