"""Cut the illustrations out of the NAMI Instagram posts for the site.

Export the Canva designs as PNG at 2160 px wide (NAMI Post 01 -> p1_01.png …,
Post 02 -> p2_01.png …) into one folder, then:
    python scripts/make-washi-art.py <folder>
Each picture is cut at the straight line where it meets the paper, and its
tone is shifted so its paper matches the site's paper colour. No upscaling,
no filters: this is the real art, washi texture and all.
"""
import os
import sys

import cv2
import numpy as np

src = sys.argv[1]
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "images", "washi")
EDGE = 1119  # where the illustration band meets the paper on a 2160x2700 page

# name: (page, crop box x0, y0, x1, y1)
CROPS = {
    "hills": ("p1_01", (0, 1270, 2160, 2700)),
    "desk": ("p1_03", (0, 0, 2160, EDGE)),
    "scrolls": ("p1_04", (0, 0, 2160, EDGE)),
    "wave-sun": ("p1_05", (0, 0, 2160, EDGE)),
    "maple-island": ("p1_06", (0, 0, 2160, EDGE)),
    "maple-window": ("p1_07", (0, 0, 2160, EDGE)),
    "moon-window": ("p1_08", (0, 0, 2160, EDGE)),
    "tea": ("p1_09", (0, 0, 2160, EDGE)),
    "gum-frame": ("p1_10", (0, 0, 2160, EDGE)),
    "pavilion": ("p1_11", (0, 0, 2160, EDGE)),
    "harbour": ("p1_12", (0, 0, 2160, EDGE)),
    "great-wave": ("p2_01", (0, 1620, 2160, 2700)),
    "byobu": ("p2_03", (0, 0, 2160, 1080)),
    "aus-house": ("p2_04", (0, 0, 2160, EDGE)),
    "washitsu": ("p2_05", (0, 0, 2160, EDGE)),
    "shoji": ("p2_06", (0, 0, 2160, EDGE)),
    "village": ("p2_07", (0, 0, 2160, EDGE)),
    "fuji": ("p2_08", (0, 0, 2160, EDGE)),
    "bridge": ("p2_09", (0, 0, 2160, EDGE)),
    "luna-park": ("p2_10", (0, 0, 2160, EDGE)),
}

COVERS = {"p1_01", "p2_01"}
PAPER = np.array([217, 232, 242], np.float32)  # BGR of --color-cream #f2e8d9

for name, (page, (x0, y0, x1, y1)) in CROPS.items():
    page_img = cv2.imread(os.path.join(src, f"{page}.png")).astype(np.float32)
    # the page's own paper colour: the empty lower margin, or on a cover
    # (art at the bottom) the empty sky to the right of the title
    area = page_img[850:950, 1400:2050] if page in COVERS else page_img[2600:2680, 200:1960]
    ref = np.median(area.reshape(-1, 3), axis=0)
    img = page_img[y0:y1, x0:x1]
    # shift the tone so its paper matches the site's paper; the washi texture stays
    flat = np.clip(img * (PAPER / ref), 0, 255)
    cv2.imwrite(os.path.join(out, f"{name}.jpg"), flat.astype(np.uint8), [cv2.IMWRITE_JPEG_QUALITY, 86])
    print(name)
