---
layout: layouts/doc.njk
title: CUDA
description: Use CUDA-capable GPUs when the workload is large enough to benefit from GPU execution.
lang: en
section: python
order: 11
group: acceleration
permalink: /en/python/cuda/
translationKey: python-cuda
eyebrow: Acceleration 3
lead: CUDA acceleration is useful when a large numerical workload can be expressed as parallel GPU work.
toc:
  - id: when-to-use-cuda
    label: When to use CUDA
  - id: minimal-example
    label: Minimal example
  - id: working-habit
    label: Working habit
tags:
  - doc
---
## When to use CUDA

Use CUDA when the computation is large, parallel, and worth the cost of moving data to and from the GPU.

For many research workflows, start with a library that already supports CUDA, such as PyTorch or JAX. Write custom CUDA kernels only when the library path is not enough.

## Minimal example

This PyTorch example runs on CUDA if a compatible GPU and CUDA-enabled PyTorch installation are available.

```python
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"

x = torch.linspace(0.0, 1.0, 1000, device=device)
y = x**2

print(device)
print(y[:5])
```

## Working habit

Check correctness on the CPU first, then move the same calculation to the GPU. Measure end-to-end runtime, including data transfer, before deciding that CUDA actually helped.
