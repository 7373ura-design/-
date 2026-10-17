"""Cut the illustrations out of the NAMI Instagram posts (Canva page previews,
400x500) and upscale them x4 with Real-ESRGAN for the site.
Usage: python scripts/make-washi-art.py <dir with numbered previews>"""
import os, sys, cv2
sys.argv, src = sys.argv[:1], sys.argv[1]
from esrgan import up  # noqa: E402

# name: (preview file, crop box x0, y0, x1, y1)
CROPS = {
    "hills": ("00.png", (0, 235, 400, 500)),
    "wave-sun": ("01.png", (0, 0, 400, 206)),
    "scrolls": ("02.png", (0, 0, 400, 206)),
    "moon-window": ("03.png", (0, 0, 400, 206)),
    "maple-window": ("04.png", (0, 0, 400, 206)),
    "maple-island": ("05.png", (0, 0, 400, 206)),
    "tea": ("06.png", (0, 0, 400, 206)),
    "gum-frame": ("07.png", (0, 0, 400, 206)),
    "pavilion": ("08.png", (0, 0, 400, 206)),
    "harbour": ("09.png", (0, 0, 400, 206)),
    "great-wave": ("10.png", (0, 300, 400, 500)),
    "shoji": ("11.png", (0, 0, 400, 206)),
    "byobu": ("12.png", (0, 0, 400, 200)),
}
out = os.path.join(os.path.dirname(__file__), "..", "public", "images", "washi")
for name, (f, (x0, y0, x1, y1)) in CROPS.items():
    img = cv2.imread(os.path.join(src, f))[y0:y1, x0:x1]
    cv2.imwrite(os.path.join(out, f"{name}.jpg"), up(img), [cv2.IMWRITE_JPEG_QUALITY, 88])
    print(name)

# Flatten the (upscaled) paper around the art to the site's paper colour, so the
# one washi texture laid over the page shows evenly on art and page alike.
import numpy as np  # noqa: E402

PAPER = np.array([217, 232, 242], np.float32)  # BGR of --color-cream #f2e8d9
for name in CROPS:
    path = os.path.join(out, f"{name}.jpg")
    img = cv2.imread(path).astype(np.float32)
    ref = np.median(img[:12].reshape(-1, 3), axis=0)  # the paper colour along the top edge
    d = np.abs(img - ref).sum(2)
    a = np.clip((d - 18) / 30, 0, 1)
    a = cv2.GaussianBlur(a, (0, 0), 2)[..., None]
    if np.abs(ref - PAPER).sum() > 45:  # the top edge is not paper: a full-bleed scene, leave it
        continue
    cv2.imwrite(path, (img * a + PAPER * (1 - a)).astype(np.uint8), [cv2.IMWRITE_JPEG_QUALITY, 88])
    print("flattened", name)

# Finally, print each one as a woodblock: flat inks, clean edges, paper grain.
from woodblock import woodblock  # noqa: E402

SETTINGS = {"harbour": (16, True)}  # name: (inks, fine)
for name in CROPS:
    path = os.path.join(out, f"{name}.jpg")
    k, fine = SETTINGS.get(name, (12, False))
    cv2.imwrite(path, woodblock(cv2.imread(path), k, fine=fine), [cv2.IMWRITE_JPEG_QUALITY, 90])
    print("woodblock", name)
