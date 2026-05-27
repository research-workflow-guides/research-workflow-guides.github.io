---
layout: layouts/doc.njk
title: GIF animation
description: Export short Matplotlib animations as GIF files.
lang: en
section: python
order: 8
group: visualization
permalink: /en/python/gif-animation/
translationKey: python-gif-animation
eyebrow: Visualization 3
lead: GIF animation is useful for showing a short changing process without requiring an interactive viewer.
toc:
  - id: when-to-use-gif-animation
    label: When to use GIF animation
  - id: minimal-example
    label: Minimal example
  - id: working-habit
    label: Working habit
tags:
  - doc
---
## When to use GIF animation

Use a GIF when the change over time is the point: an iteration, a wave, a parameter sweep, or a short simulation.

Keep it short. A small animation is easier to inspect and easier to share.

## Minimal example

This example first saves a sequence of PNG frames, then combines those frames into a GIF animation.

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

If `Pillow` or `imageio` is not installed, install them first.

```shell
python -m pip install pillow imageio
```

Then create the GIF from the saved frames.

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

## Working habit

Export and inspect a few still frames first. Once the axes, labels, and limits are right, generate the full frame sequence and build the GIF.
