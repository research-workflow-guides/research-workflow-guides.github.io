---
layout: layouts/doc.njk
title: 2차원 시각화
description: Matplotlib으로 기본 2차원 그래프를 만듭니다.
lang: ko
section: python
order: 6
group: visualization
permalink: /ko/python/two-dimensions/
translationKey: python-two-dimensions
eyebrow: Visualization 1
lead: 2차원 그래프는 trend, comparison, numerical output을 확인할 때 가장 기본이 되는 시각화입니다.
toc:
  - id: 2차원-그래프를-쓸-때
    label: 2차원 그래프를 쓸 때
  - id: 최소-예제
    label: 최소 예제
  - id: figure-저장
    label: figure 저장
tags:
  - doc
---
## 2차원 그래프를 쓸 때

Curve, scatter plot, 조건별 비교처럼 한두 개의 quantity를 명확히 확인해야 할 때 2차원 그래프를 사용합니다.

## 최소 예제

아래 예제는 `y = x^2`를 그리고, `Illustration` 폴더가 없으면 만든 뒤 figure를 저장하고 화면에 표시합니다.

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

## figure 저장

이 script는 figure를 `Illustration/Figure 1.png`로 저장합니다. 생성된 figure를 나중에 다시 찾기 쉽도록 folder와 file name을 명확하게 둡니다.
