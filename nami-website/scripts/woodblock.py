"""Turn an illustration into a woodblock-print look: flat inks from a small
palette, crisp shape edges, a faint wood grain inside each ink and paper
showing through. Undoes the smeared, painted look of AI upscaling.
Usage: python scripts/woodblock.py in.jpg out.jpg [colours] [fine]"""
import sys
import cv2
import numpy as np

PAPER = np.array([217, 232, 242], np.float32)  # BGR, --color-cream


def woodblock(img, k=12, seed=3, fine=False):
    h, w = img.shape[:2]
    # 1. flatten the brush texture so shapes read as areas of ink
    # fine: lighter flattening, for pictures carried by thin lines
    flat = cv2.pyrMeanShiftFiltering(img, 3, 10) if fine else cv2.pyrMeanShiftFiltering(img, 6, 16)
    flat = cv2.bilateralFilter(flat, 5 if fine else 7, 30, 5 if fine else 7)
    # 2. a small set of inks, as if cut on separate blocks
    lab = cv2.cvtColor(flat, cv2.COLOR_BGR2LAB).reshape(-1, 3).astype(np.float32)
    crit = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 30, 0.5)
    cv2.setRNGSeed(seed)
    _, labels, centers = cv2.kmeans(lab, k, None, crit, 3, cv2.KMEANS_PP_CENTERS)
    labels = labels.reshape(h, w).astype(np.uint8)
    # 3. clean the cut: a mode filter removes specks and smooths edges
    m = 3 if fine else 5
    votes = np.stack([cv2.blur((labels == i).astype(np.float32), (m, m)) for i in range(k)])
    labels = votes.argmax(0).astype(np.uint8)
    inks = cv2.cvtColor(centers[None].astype(np.uint8), cv2.COLOR_LAB2BGR)[0].astype(np.float32)
    out = inks[labels]
    # the lightest, least saturated ink is the paper itself
    paper_i = int(np.argmin(np.abs(inks - PAPER).sum(1)))
    on_paper = np.zeros((h, w, 1), np.float32)
    if np.abs(inks[paper_i] - PAPER).sum() < 60:
        out[labels == paper_i] = PAPER
        on_paper[labels == paper_i] = 1
    ink = 1 - on_paper  # grain and fibre only where ink was laid
    # 4. wood grain: long soft streaks, stronger in darker inks
    rng = np.random.default_rng(seed)
    grain = rng.normal(0, 1, (h // 6 + 1, w // 60 + 1)).astype(np.float32)
    grain = cv2.resize(grain, (w, h), interpolation=cv2.INTER_CUBIC)
    grain = cv2.GaussianBlur(grain, (0, 0), 1.2)
    dark = 1 - out.mean(2, keepdims=True) / 255
    out = out * (1 + grain[..., None] * 0.035 * (0.3 + dark) * ink)
    # 5. uneven ink: the paper fibre shows through, a little more in solid areas
    fib = rng.normal(0, 1, (h, w)).astype(np.float32)
    fib = cv2.GaussianBlur(fib, (0, 0), 0.7)
    out = out + fib[..., None] * 5 * (0.1 + dark) * ink
    # key block: in fine mode, print the original's thin lines back over the inks
    if fine:
        src = img.astype(np.float32)
        detail = np.abs(src - cv2.medianBlur(img, 7).astype(np.float32)).sum(2)
        line = np.clip((detail - 14) / 24, 0, 1)
        line = cv2.GaussianBlur(line, (0, 0), 0.6)[..., None]
        out = out * (1 - line) + src * line
    # 6. a hair of softness on the cut edge, like ink pressed into paper
    out = cv2.GaussianBlur(out, (0, 0), 0.6)
    return np.clip(out, 0, 255).astype(np.uint8)


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    k = int(sys.argv[3]) if len(sys.argv) > 3 else 12
    fine = len(sys.argv) > 4 and sys.argv[4] == "fine"
    cv2.imwrite(dst, woodblock(cv2.imread(src), k, fine=fine), [cv2.IMWRITE_JPEG_QUALITY, 90])
