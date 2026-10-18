"""Cut the NAMI surfer (girl, basket and board) out of her picture so she can
ride across the page on her own. GrabCut inside a hand-traced outline finds
the figure; the red board and her pointing arm are added by colour, since
the sun shares the board's red and her skin is close to the paper.
Output: public/images/washi/surfer-rider.webp (transparent, 2x).
Usage: python scripts/make-surf-rider.py"""
import os
import sys

import cv2
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
BOX = (250, 55, 650, 495)  # the figure's area in the 928x612 picture

orig = cv2.imread(os.path.join(ROOT, "public/images/illustrations/story-surfer.jpg"))[BOX[1]:BOX[3], BOX[0]:BOX[2]]
art = cv2.imread(os.path.join(ROOT, "public/images/washi/surfer.jpg"))[BOX[1]:BOX[3], BOX[0]:BOX[2]]
h, w = orig.shape[:2]
B, G, R = [orig[..., i].astype(int) for i in range(3)]

# Outline traced around ponytail, basket, arm, legs and board (crop coordinates)
outline = np.array([(30,135),(45,100),(60,88),(90,92),(78,55),(95,25),(130,16),(162,33),(162,55),(185,60),(225,68),
    (250,100),(252,140),(256,158),(300,151),(366,146),(377,158),(332,172),(296,184),(292,206),(272,222),(264,262),
    (284,290),(296,330),(322,372),(346,393),(372,408),(375,426),(350,434),(318,426),(268,402),(200,372),(120,332),
    (58,302),(12,277),(12,256),(44,248),(48,234),(38,214),(52,204),(58,190),(28,176),(22,150)], np.int32)
inside = np.zeros((h, w), np.uint8)
cv2.fillPoly(inside, [outline], 1)

mask = np.full((h, w), cv2.GC_BGD, np.uint8)
mask[inside == 1] = cv2.GC_PR_FGD
for x, y, r in [(215,128,10),(180,88,10),(120,45,8),(200,190,8),(200,240,10),(160,240,6),(75,150,6),
                (270,175,6),(275,195,5),(250,285,5),(290,330,4)]:
    cv2.circle(mask, (x, y), r, cv2.GC_FGD, -1)
cv2.grabCut(orig, mask, None, np.zeros((1, 65)), np.zeros((1, 65)), 6, cv2.GC_INIT_WITH_MASK)
m = np.where((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 1, 0).astype(np.uint8)

board = ((R > 170) & (G < 140) & (B < 120) & (R - G > 60)).astype(np.uint8)
board[:235] = 0  # the sun is above
board = cv2.morphologyEx(board, cv2.MORPH_CLOSE, np.ones((11, 11), np.uint8))
rim = cv2.dilate(board, np.ones((9, 9), np.uint8)) & ((R > 215) & (G > 205) & (B > 185)).astype(np.uint8)
paper = ((R > 222) & (G > 212) & (B > 192) & ((R - B) < 38)).astype(np.uint8)
arm = np.zeros((h, w), np.uint8)
cv2.fillPoly(arm, [np.array([(250,150),(300,149),(366,144),(379,158),(334,174),(298,186),(294,208),(272,224),(250,215)], np.int32)], 1)

m = ((m | board | rim | (arm & (1 - paper))) & inside).astype(np.uint8)
m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))
n, lab, st, _ = cv2.connectedComponentsWithStats(m, 8)
m = (lab == 1 + np.argmax(st[1:, cv2.CC_STAT_AREA])).astype(np.uint8)
inv = (1 - m).astype(np.uint8)
n2, lab2, st2, _ = cv2.connectedComponentsWithStats(inv, 4)
for i in range(1, n2):
    x, y, ww, hh, area = st2[i]
    if x > 0 and y > 0 and x + ww < w and y + hh < h and area < 2500:
        m[lab2 == i] = 1  # holes inside her (white kimono)

# 2x: Real-ESRGAN for the colour, smooth upscale for the edge
sys.argv = sys.argv[:1]
sys.path.insert(0, HERE)
from esrgan import up  # noqa: E402

rgb = up(art)
rgb = cv2.resize(rgb, (w * 2, h * 2), interpolation=cv2.INTER_AREA) if rgb.shape[1] != w * 2 else rgb
alpha = cv2.resize(m.astype(np.float32), (w * 2, h * 2), interpolation=cv2.INTER_CUBIC)
alpha = np.clip(cv2.GaussianBlur(alpha, (0, 0), 1.0), 0, 1)
ys, xs = np.where(alpha > 0.05)
out = np.dstack([rgb, (alpha * 255).astype(np.uint8)])[ys.min():ys.max() + 1, xs.min():xs.max() + 1]
cv2.imwrite(os.path.join(ROOT, "public/images/washi/surfer-rider.webp"), out, [cv2.IMWRITE_WEBP_QUALITY, 90])
print(out.shape)
