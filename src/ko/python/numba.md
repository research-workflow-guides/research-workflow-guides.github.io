---
layout: layouts/doc.njk
title: Numba
description: just-in-time compilation으로 numerical Python loop를 빠르게 실행합니다.
lang: ko
section: python
order: 10
group: acceleration
permalink: /ko/python/numba/
translationKey: python-numba
eyebrow: Acceleration 1
lead: Numba는 Python으로 명확하게 쓴 numerical loop가 반복 실행하기에 너무 느릴 때 유용합니다.
toc:
  - id: numba를-쓸-때
    label: Numba를 쓸 때
  - id: 최소-예제
    label: 최소 예제
  - id: 작업-습관
    label: 작업 습관
tags:
  - doc
---
## Numba를 쓸 때

코드에서 느린 부분이 array를 순회하는 numerical loop이고, 전체 workflow를 다른 언어로 다시 쓸 필요까지는 없을 때 Numba를 사용합니다.

Numba는 단순한 Python control flow와 NumPy array를 사용하는 numerical code에서 가장 잘 맞습니다. 모든 Python 프로그램을 자동으로 빠르게 만드는 도구는 아닙니다.

## 최소 예제

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

첫 실행에는 compile 시간이 포함됩니다. Runtime 성능을 재려면 두 번째 실행부터 시간을 확인합니다.

## 작업 습관

먼저 plain Python 함수로 작성해 테스트한 뒤 `@njit`을 붙입니다. Numba typing error가 나면 numerical core가 명확해질 때까지 함수를 단순하게 나눕니다.
