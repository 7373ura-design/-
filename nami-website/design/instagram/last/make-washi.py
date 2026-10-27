# Washi paper texture for the closing slide background (2160x2700).
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from scipy.ndimage import gaussian_filter
W,H=2160,2700
rng=np.random.default_rng(7)
base=np.array([241,235,223],float)
# uneven pulp: large soft clouds plus finer flecks
m=gaussian_filter(rng.standard_normal((H,W)),45);m=m/np.abs(m).max()*7
f=gaussian_filter(rng.standard_normal((H,W)),3);m+=f/np.abs(f).max()*3
img=base[None,None,:]+m[...,None]
# kozo fibres: thin wandering strands, long and short, light and dark
def strands(n,lmin,lmax,a,blur):
  d=Image.new("L",(W,H),0);dr=ImageDraw.Draw(d)
  for _ in range(n):
    x,y=rng.uniform(-50,W+50),rng.uniform(-50,H+50);ang=rng.uniform(0,np.pi*2)
    pts=[(x,y)]
    for _ in range(rng.integers(lmin,lmax)):
      ang+=rng.normal(0,.15);x+=np.cos(ang)*4;y+=np.sin(ang)*4;pts.append((x,y))
    dr.line(pts,fill=int(a*rng.uniform(.35,1)),width=int(rng.choice([1,1,2,2,3])))
  return np.array(d.filter(ImageFilter.GaussianBlur(blur)),float)/255
light=strands(2200,20,110,255,1.4)+strands(4000,3,12,255,1)
dark=strands(700,20,90,255,1.2)+strands(1500,2,8,255,.9)
img=img+light[...,None]*14-dark[...,None]*np.array([17,17,15])
img+=rng.normal(0,1.8,(H,W,1))
Image.fromarray(np.clip(img,0,255).astype(np.uint8)).save("washi.png")
