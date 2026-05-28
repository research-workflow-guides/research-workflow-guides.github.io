---
layout: layouts/doc.njk
title: PyTorch
description: machine learning 실험과 GPU 기반 계산에 PyTorch tensor를 사용합니다.
lang: ko
section: python
order: 5
group: backends
permalink: /ko/python/pytorch/
translationKey: python-pytorch
eyebrow: Backend 3
lead: PyTorch는 machine learning과 GPU 기반 연구 코드에서 자주 사용하는 tensor library입니다.
toc:
  - id: pytorch를-쓸-때
    label: PyTorch를 쓸 때
  - id: 최소-예제
    label: 최소 예제
  - id: 작업-습관
    label: 작업 습관
tags:
  - doc
---
## PyTorch를 쓸 때

<div class="doc-action-row">
  <p>Source code, issue, release, development 정보를 확인해야 할 때는 PyTorch 공식 repository를 사용합니다.</p>
  <a class="doc-action-link" href="https://github.com/pytorch/pytorch">공식 repository</a>
</div>

Neural network, GPU tensor operation, model training loop가 workflow에 포함될 때 PyTorch를 사용합니다.

Tensor와 automatic differentiation이 필요한 수치 실험에도 사용할 수 있습니다.

## 최소 예제

```python
import torch

x = torch.tensor([0.0, 1.0, 2.0])
y = x ** 2

print(y)
```

## 작업 습관

CPU와 GPU 코드를 섞기 전에는 tensor가 어느 device에 있는지 확인합니다. Device mismatch는 초기에 자주 만나는 오류입니다.

```python
print(x.device)
```
