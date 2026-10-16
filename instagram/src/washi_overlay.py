"""Transparent washi-paper overlay: kozo fibres, soft mottling, bark specks.
Laid over the illustration band so every page shares the cover's paper feel.
Usage: python3 washi_overlay.py OUT.png WIDTH HEIGHT [seed]"""
import sys, math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

out, W, H = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
rng = np.random.default_rng(int(sys.argv[4]) if len(sys.argv) > 4 else 7)


def noise(scale):
    small = rng.normal(0, 1, (max(2, H // scale), max(2, W // scale))).astype(np.float32)
    im = Image.fromarray(((small - small.min()) / (np.ptp(small) + 1e-6) * 255).astype(np.uint8))
    return np.asarray(im.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(scale / 3)), np.float32) / 255


# soft warm mottling (ivory haze, uneven like hand-made paper)
mott = noise(160) * 0.6 + noise(40) * 0.4
layer = np.zeros((H, W, 4), np.float32)
layer[..., 0], layer[..., 1], layer[..., 2] = 246, 238, 222
layer[..., 3] = np.clip((mott - 0.3) * 120, 0, 60)
img = Image.fromarray(layer.astype(np.uint8), 'RGBA')

# light kozo fibres
fib = Image.new('L', (W, H), 0)
d = ImageDraw.Draw(fib)
for _ in range(int(W * H / 4500)):
    x, y = rng.uniform(0, W), rng.uniform(0, H)
    ang, L = rng.uniform(0, math.tau), rng.uniform(20, 140)
    pts = []
    for _ in range(16):
        ang += rng.normal(0, 0.18)
        x += math.cos(ang) * L / 16
        y += math.sin(ang) * L / 16
        pts.append((x, y))
    d.line(pts, fill=int(rng.uniform(25, 75)), width=int(rng.choice([1, 2, 2])))
fib = fib.filter(ImageFilter.GaussianBlur(1.6))
white = Image.new('RGBA', (W, H), (255, 252, 244, 0))
white.putalpha(fib)
img = Image.alpha_composite(img, white)

# a few darker fibres and bark specks
dk = Image.new('RGBA', (W, H), (0, 0, 0, 0))
dd = ImageDraw.Draw(dk)
for _ in range(int(W * H / 30000)):
    x, y = rng.uniform(0, W), rng.uniform(0, H)
    ang, L = rng.uniform(0, math.tau), rng.uniform(15, 90)
    dd.line([(x, y), (x + math.cos(ang) * L, y + math.sin(ang) * L)], fill=(150, 125, 95, int(rng.uniform(30, 70))), width=1)
for _ in range(int(W * H / 9000)):
    x, y, r = rng.uniform(0, W), rng.uniform(0, H), rng.uniform(0.6, 2.0)
    dd.ellipse((x - r, y - r * 0.6, x + r, y + r * 0.6), fill=(140, 115, 85, int(rng.uniform(50, 120))))
img = Image.alpha_composite(img, dk.filter(ImageFilter.GaussianBlur(0.4)))
img.save(out)
