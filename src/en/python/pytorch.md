---
layout: layouts/doc.njk
title: PyTorch
description: Use PyTorch tensors for machine learning experiments and GPU-backed computation.
lang: en
section: python
order: 6
group: backends
permalink: /en/python/pytorch/
translationKey: python-pytorch
eyebrow: Backend 3
lead: PyTorch is a tensor library commonly used for machine learning and GPU-backed research code.
toc:
  - id: when-to-use-pytorch
    label: When to use PyTorch
  - id: minimal-example
    label: Minimal example
  - id: working-habit
    label: Working habit
tags:
  - doc
---
## When to use PyTorch

<div class="doc-action-row">
  <p>Use the official PyTorch site when you need installation notes, documentation, or ecosystem information.</p>
  <a class="doc-action-link" href="https://pytorch.org/">Official PyTorch site</a>
</div>

Use PyTorch when your workflow involves neural networks, tensor operations on a GPU, or model training loops.

It can also be useful for numerical experiments that benefit from tensors and automatic differentiation.

## Minimal example

```python
import torch

x = torch.tensor([0.0, 1.0, 2.0])
y = x ** 2

print(y)
```

## Working habit

Check where tensors live before mixing CPU and GPU code. Device mismatches are a common source of early errors.

```python
print(x.device)
```
