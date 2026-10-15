"""Generate a washi (Japanese paper) texture: soft mottling, long kozo fibres, specks.
Usage: python3 washi.py OUT.png WIDTH HEIGHT [seed]"""
import sys, math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

out, W, H = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
seed = int(sys.argv[4]) if len(sys.argv) > 4 else 3
rng = np.random.default_rng(seed)

base = np.array([244, 238, 227], dtype=np.float32)  # kinari


def blur_noise(scale, amp):
    small = rng.normal(0, 1, (max(2, H // scale), max(2, W // scale))).astype(np.float32)
    im = Image.fromarray(((small - small.min()) / (np.ptp(small) + 1e-6) * 255).astype(np.uint8))
    im = im.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(scale / 3))
    return (np.asarray(im, np.float32) / 255 - 0.5) * amp


tone = blur_noise(220, 16) + blur_noise(60, 8) + blur_noise(5, 4)
img = np.clip(base[None, None, :] + tone[..., None] * np.array([1, 1, 1.15]), 0, 255)
paper = Image.fromarray(img.astype(np.uint8)).convert('RGBA')

# fibres: long, thin, wandering strands drawn into masks (avoids dark blur fringes)
lightM = Image.new('L', (W, H), 0); darkM = Image.new('L', (W, H), 0)
dl, dd = ImageDraw.Draw(lightM), ImageDraw.Draw(darkM)
n = int(W * H / 4200)
for _ in range(n):
    x, y = rng.uniform(0, W), rng.uniform(0, H)
    ang = rng.uniform(0, math.pi * 2)
    L = rng.uniform(20, 260)
    pts = []
    for t in range(16):
        ang += rng.normal(0, 0.16)
        x += math.cos(ang) * L / 16
        y += math.sin(ang) * L / 16
        pts.append((x, y))
    if rng.random() < 0.88:
        dl.line(pts, fill=int(rng.uniform(90, 200)), width=int(rng.choice([1, 1, 2, 2, 3])))
    else:
        dd.line(pts, fill=int(rng.uniform(25, 60)), width=1)
lightM = lightM.filter(ImageFilter.GaussianBlur(1.2)); darkM = darkM.filter(ImageFilter.GaussianBlur(0.7))
paper = Image.composite(Image.new('RGBA', (W, H), (255, 253, 246, 255)), paper, lightM)
paper = Image.composite(Image.new('RGBA', (W, H), (196, 178, 150, 255)), paper, darkM)

# specks of bark / inclusions
sp = Image.new('RGBA', (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(sp)
for _ in range(int(W * H / 30000)):
    x, y, r = rng.uniform(0, W), rng.uniform(0, H), rng.uniform(0.6, 2.2)
    d.ellipse((x - r, y - r * 0.6, x + r, y + r * 0.6), fill=(150, 128, 100, int(rng.uniform(40, 110))))
paper = Image.alpha_composite(paper, sp)
paper.convert('RGB').save(out, quality=92)
