---
layout: layouts/doc.njk
title: GIF animation
description: 짧은 Matplotlib animation을 GIF 파일로 저장합니다.
lang: ko
section: python
order: 8
group: visualization
permalink: /ko/python/gif-animation/
translationKey: python-gif-animation
eyebrow: Visualization 3
lead: GIF animation은 interactive viewer 없이 짧은 변화 과정을 보여줘야 할 때 유용합니다.
toc:
  - id: gif-animation을-쓸-때
    label: GIF animation을 쓸 때
  - id: 최소-예제
    label: 최소 예제
  - id: 작업-습관
    label: 작업 습관
tags:
  - doc
---
## GIF animation을 쓸 때

Iteration, wave, parameter sweep, 짧은 simulation처럼 시간에 따른 변화 자체가 핵심일 때 GIF를 사용합니다.

짧게 유지하세요. 작은 animation이 확인하기 쉽고 공유하기도 쉽습니다.

## 최소 예제

아래 예제는 먼저 PNG frame들을 저장하고, 그 frame들을 묶어서 GIF animation을 만듭니다.

```python
# Basic packages
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path

# save path setting
illustration_dir = Path("Illustration")
animation_dir = Path("Animation")
illustration_dir.mkdir(exist_ok=True)
animation_dir.mkdir(exist_ok=True)

# function
def f(x):
    return x**2

# frame generation
def zoom(x_range=10):
    assert 0 <= x_range <= 10, "Input x_range should be in [0, 10]"

    x = np.linspace(-10, 10, 400)

    fig, ax = plt.subplots(figsize=(6, 6))
    ax.plot(x, f(x), label="$y = x^2$", color="blue")
    ax.set_xlabel("$x$", fontsize=11)
    ax.set_ylabel("$y$", fontsize=11)
    ax.set_xlim(-x_range, x_range)
    ax.set_ylim(0, 100)
    ax.tick_params(labelsize=10)
    ax.grid()
    ax.legend(loc="upper right")
    ax.set_title("Plot of $y = x^2$", fontsize=11)

    frame_path = illustration_dir / f"{x_range:.1f}.png"
    fig.savefig(frame_path, dpi=300, bbox_inches="tight")
    plt.close(fig)

for x_range in np.arange(0.5, 10.5, 0.5):
    zoom(x_range)
```

`Pillow`나 `imageio`가 설치되어 있지 않다면 먼저 설치합니다.

```shell
python -m pip install pillow imageio
```

그다음 저장된 frame들로 GIF를 만듭니다.

```python
from pathlib import Path

import imageio.v3 as iio
from PIL import Image, ImageOps

input_dir = Path("Illustration")
output_path = Path("Animation") / "Figure 1 - Animation.gif"

frame_paths = sorted(
    input_dir.glob("*.png"),
    key=lambda path: float(path.stem)
)

frames = []
for frame_path in frame_paths:
    image = Image.open(frame_path).convert("RGBA")
    image_with_border = ImageOps.expand(
        image,
        border=20,
        fill=(0, 0, 0, 0)
    )
    frames.append(image_with_border)

iio.imwrite(output_path, frames, duration=400, loop=0)

print("GIF animation creation completed.")
```

## 작업 습관

먼저 still frame 몇 개를 저장해서 확인합니다. 축, label, limit이 맞는지 확인한 뒤 전체 frame sequence를 만들고 GIF로 묶으세요.
