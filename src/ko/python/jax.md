---
layout: layouts/doc.njk
title: JAX
description: gradient, compile, accelerator 지원이 필요한 array 코드에 JAX를 사용합니다.
lang: ko
section: python
order: 5
group: backends
permalink: /ko/python/jax/
translationKey: python-jax
eyebrow: Backend 2
lead: JAX는 NumPy와 비슷한 array 문법에 automatic differentiation과 compilation 도구를 더합니다.
toc:
  - id: jax를-쓸-때
    label: JAX를 쓸 때
  - id: 최소-예제
    label: 최소 예제
  - id: 작업-습관
    label: 작업 습관
tags:
  - doc
---
## JAX를 쓸 때

<div class="doc-action-row">
  <p>설치 안내, API detail, 예제를 확인해야 할 때는 JAX 공식 문서를 사용합니다.</p>
  <a class="doc-action-link" href="https://docs.jax.dev/en/latest/">공식 문서</a>
</div>

같은 array workflow에서 gradient, just-in-time compilation, accelerator 기반 계산이 필요할 때 JAX를 사용합니다.

Optimization, differentiable simulation, gradient가 방법론의 일부인 연구 코드에 유용합니다.

## 최소 예제

```python
import jax.numpy as jnp
from jax import grad

def loss(values):
    return jnp.sum((values - 1.0) ** 2)

values = jnp.array([0.0, 1.5, 2.0])
gradient = grad(loss)(values)

print(gradient)
```

## 작업 습관

먼저 평범한 array 코드로 시작하고, 실제로 필요한 지점에서만 JAX 기능을 추가합니다. 이렇게 해야 디버깅이 쉬워집니다.
