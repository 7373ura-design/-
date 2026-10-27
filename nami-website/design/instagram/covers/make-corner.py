# Seigaiha (wave) pattern for the bottom-left corner of the covers.
# Transparent PNG, washi-cream lines fading out from the corner.
import numpy as np
from PIL import Image, ImageDraw
S=1680; r=168; lw=7                     # 4x of a 420px corner
m=Image.new("L",(S,S),0); d=ImageDraw.Draw(m)
for row in range(-2, S*2//r+4):
  y=row*r//2; off=r if row%2 else 0
  for x in range(-2*r+off, S+2*r, 2*r):
    d.ellipse([x-r,y-r,x+r,y+r],fill=0)
    for k in range(4):
      rr=r-k*r//4
      d.ellipse([x-rr,y-rr,x+rr,y+rr],outline=255,width=lw)
a=np.asarray(m,float)/255
yy,xx=np.mgrid[0:S,0:S]; dist=np.hypot(xx,S-yy)/S
fade=np.clip(1-dist/0.95,0,1)**1.4
alpha=(a*fade*0.8*255).astype(np.uint8)
img=np.zeros((S,S,4),np.uint8); img[...,:3]=[241,235,223]; img[...,3]=alpha
Image.fromarray(img).resize((840,840),Image.LANCZOS).save("corner-seigaiha.png")
