---
layout: layouts/doc.njk
title: GIF animation
description: 짧은 Matplotlib animation을 GIF 파일로 저장합니다.
lang: ko
section: python
order: 9
group: visualization
permalink: /ko/python/gif-animation/
translationKey: python-gif-animation
eyebrow: Visualization 3
lead: GIF animation은 interactive viewer 없이 짧은 변화 과정을 보여줘야 할 때 유용합니다.
toc:
  - id: 필요한-라이브러리-설치
    label: 필요한 라이브러리 설치
  - id: 최소-예제
    label: 최소 예제
tags:
  - doc
---
## 필요한 라이브러리 설치

<div class="doc-action-row">
  <p><code>Pillow</code>가 설치되어 있지 않다면 먼저 설치합니다.</p>
  <a class="doc-action-link" href="https://pillow.readthedocs.io/en/stable/">Pillow 문서</a>
</div>

Windows PowerShell에서는 다음 명령어를 사용합니다.

```powershell
py -m pip install pillow
```

macOS 또는 Linux에서는 다음 명령어를 사용합니다.

```bash
python3 -m pip install pillow
```

## 최소 예제

아래 예제는 먼저 PNG frame들을 저장하고, 그 frame들을 묶어서 GIF animation을 만듭니다. 코드를 `.py` 파일로 저장하면 `figures`와 `animations` 폴더가 그 `.py` 파일이 있는 폴더 안에 만들어집니다.

```python
# Basic packages
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path
from PIL import Image

# save path setting
script_dir = Path(__file__).resolve().parent
figures_dir = script_dir / "figures"
animations_dir = script_dir / "animations"
figures_dir.mkdir(exist_ok=True)
animations_dir.mkdir(exist_ok=True)

for frame_path in figures_dir.glob("frame-*.png"):
    frame_path.unlink()

# function
def f(x):
    return x**2

# ==========
# Making frames
# ==========
def zoom(x_range=10, frame_index=1):
    assert 0 <= x_range <= 10, "Input x_range should be in [0, 10]"

    x = np.linspace(-10, 10, 400)

    fig, ax = plt.subplots(figsize=(6, 6))
    fig.subplots_adjust(left=0.14, right=0.96, bottom=0.12, top=0.90)
    ax.plot(x, f(x), label="$y = x^2$", color="blue")
    ax.set_xlabel("$x$", fontsize=11)
    ax.set_ylabel("$y$", fontsize=11)
    ax.set_xlim(-x_range, x_range)
    ax.set_ylim(0, 100)
    ax.tick_params(labelsize=10)
    ax.grid()
    ax.legend(loc="upper right")
    ax.set_title("Plot of $y = x^2$", fontsize=11)

    frame_path = figures_dir / f"frame-{frame_index:03d}.png"
    fig.savefig(frame_path, dpi=300)
    plt.close(fig)

for frame_index, x_range in enumerate(np.arange(10.0, 0.0, -0.5), start=1):
    zoom(x_range, frame_index)

frame_paths = sorted(
    figures_dir.glob("frame-*.png")
)

if not frame_paths:
    raise FileNotFoundError(f"No PNG frames found in {figures_dir}")

# ====================
# Making the animation
# ====================
frames = []
for frame_path in frame_paths:
    with Image.open(frame_path) as image:
        frames.append(image.convert("RGB").copy())

frame_size = frames[0].size
if any(frame.size != frame_size for frame in frames):
    raise ValueError("All frames must have the same size.")

frames[0].save(
    animations_dir / "figure-1-animation.gif",
    save_all=True,
    append_images=frames[1:],
    duration=400,
    loop=0,
    disposal=2
)

print("GIF animation creation completed.")
```

이 script는 PNG frame들을 `.py` 파일 옆의 `figures/`에 저장하고, GIF를 `animations/figure-1-animation.gif`로 저장합니다. 이렇게 두면 생성된 figure와 animation이 해당 script와 가까운 위치에 남습니다.

생성된 animation은 다음처럼 보입니다.

<figure class="image-frame image-frame--gif-result">
  <img src="/assets/images/animation.gif" alt="y equals x squared plot으로 확대되는 GIF animation">
</figure>
