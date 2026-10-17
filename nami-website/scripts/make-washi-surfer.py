"""Recolour the NAMI surfer (story-surfer.jpg) into the palette of the
Instagram-post illustrations: navy, teal, pale aqua, muted vermilion, straw,
on washi paper. Keeps the drawing; only the colours move.
Usage: python scripts/make-washi-surfer.py"""
import os
import cv2
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "public", "images", "illustrations", "story-surfer.jpg")
OUT = os.path.join(HERE, "..", "public", "images", "washi", "surfer.jpg")

# RGB palette sampled from the post illustrations
PALETTE = np.array([
    (242, 232, 217),  # washi paper (--color-cream)
    (30, 52, 84),     # navy
    (44, 86, 118),    # deep indigo
    (70, 128, 150),   # teal
    (150, 190, 192),  # pale aqua
    (214, 228, 222),  # foam
    (214, 92, 62),    # vermilion
    (196, 168, 118),  # straw
    (92, 122, 104),   # pine green
    (28, 34, 46),     # ink
    (236, 204, 178),  # skin
    (90, 132, 96),    # turtle green
], np.float32)

img = cv2.imread(SRC)[:, :, ::-1].astype(np.float32)
lab = cv2.cvtColor(img / 255, cv2.COLOR_RGB2LAB).reshape(-1, 3)
pal_lab = cv2.cvtColor((PALETTE / 255)[None], cv2.COLOR_RGB2LAB)[0]

# Soft assignment: each pixel leans towards its nearest palette colours
d = ((lab[:, None, :] - pal_lab[None]) ** 2).sum(2)
w = np.exp(-(d - d.min(1, keepdims=True)) / 60)
w /= w.sum(1, keepdims=True)
mapped = (w @ PALETTE).reshape(img.shape)
out = img * 0.3 + mapped * 0.7

# The cream ground becomes the site's paper exactly
paper = PALETTE[0]
ref = np.median(img[:10].reshape(-1, 3), axis=0)
a = np.clip((np.abs(img - ref).sum(2) - 20) / 30, 0, 1)
a = cv2.GaussianBlur(a, (0, 0), 1.5)[..., None]
out = out * a + paper * (1 - a)

import sys  # noqa: E402

sys.path.insert(0, HERE)
from woodblock import woodblock  # noqa: E402

out = np.clip(out, 0, 255).astype(np.uint8)[:, :, ::-1]
cv2.imwrite(OUT, woodblock(np.ascontiguousarray(out), 18), [cv2.IMWRITE_JPEG_QUALITY, 90])
print(OUT)
