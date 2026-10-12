"""Cuts the site imagery (hero, illustrations, photos, icons, logo) out of the
NAMI reference design in design/reference/. Needs: pip install opencv-python-headless pillow numpy.
Replace these with full-resolution originals or real photography when available."""
import cv2, numpy as np
from PIL import Image, ImageFilter
import os
ROOT=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..')
REF=os.path.join(ROOT,'design/reference/website-reference.png')
LOGO=os.path.join(ROOT,'design/reference/logo.png')
OUT=os.path.join(ROOT,'public/images')
ref=cv2.imread(REF)
print("bg sample", ref[460,30][::-1], ref[1650,30][::-1], ref[1000,30][::-1])

def up(img, scale=2):
    pil=Image.fromarray(cv2.cvtColor(img,cv2.COLOR_BGR2RGB))
    pil=pil.resize((pil.width*scale,pil.height*scale),Image.LANCZOS)
    return pil.filter(ImageFilter.UnsharpMask(radius=1.6,percent=60,threshold=2))

def erase_text(img, rects, thresh=150):
    mask=np.zeros(img.shape[:2],np.uint8)
    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    for (x0,y0,x1,y1) in rects:
        sub=(gray[y0:y1,x0:x1]<thresh).astype(np.uint8)*255
        mask[y0:y1,x0:x1]=sub
    mask=cv2.dilate(mask,np.ones((5,5),np.uint8),iterations=1)
    return cv2.inpaint(img,mask,5,cv2.INPAINT_TELEA)

def save(pil,path,q=86):
    pil.convert("RGB").save(f"{OUT}/{path}",quality=q,optimize=True,progressive=True)

import os
for d in ["hero","services","projects","journal","illustrations","logo","approach"]: os.makedirs(f"{OUT}/{d}",exist_ok=True)

# hero (y 45..435), text in local coords (subtract 45)
hero=ref[50:436,0:822].copy()

def big_shapes(img):
    """Mask of large coloured shapes (waves, sun, photo) — thin text strokes are removed by opening."""
    hsv=cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    col=((hsv[:,:,1]>60)).astype(np.uint8)*255
    col=cv2.morphologyEx(col,cv2.MORPH_OPEN,np.ones((11,11),np.uint8))
    return cv2.dilate(col,np.ones((3,3),np.uint8))

def cream_fill(img, x0,y0,x1,y1, band_y, keep):
    band=img[band_y:band_y+6,x0:x1].astype(np.float32).mean(axis=0)
    fill=np.clip(band[None,:,:]+np.random.normal(0,1.0,(y1-y0,x1-x0,1)),0,255).astype(np.uint8)
    region=img[y0:y1,x0:x1]
    k=keep[y0:y1,x0:x1][:,:,None]>0
    img[y0:y1,x0:x1]=np.where(k,region,fill)

# 1) remove text from the photo edge first
hero=erase_text(hero,[(232,100,320,258)],thresh=195)
keep=big_shapes(hero)
keep[:, 300:]=255           # never touch the photo proper
# 2) replace everything that is not a big coloured shape with clean paper, left of the photo
cream_fill(hero,0,0,236,300,2,keep)
# 3) feather the photo's left edge into the paper
paper=np.clip(hero[2:8,0:20].astype(np.float32).mean(axis=(0,1)),0,255)
for x in range(236,306):
    t=(x-236)/70.0; t=t*t*(3-2*t)
    col=hero[0:280,x].astype(np.float32)
    shape=keep[0:280,x][:,None]>0
    blended=paper*(1-t)+col*t
    hero[0:280,x]=np.where(shape & (x>=1000), col, blended).astype(np.uint8)
save(up(hero),"hero/hero.jpg",88)

# CTA (y 1650..1913)
cta=ref[1662:1913,0:822].copy()
keep=big_shapes(cta)
cream_fill(cta,0,0,560,190,8,keep)
cream_fill(cta,0,0,330,200,8,keep)
save(up(cta),"illustrations/cta-wave.jpg",88)

# story illustration
save(up(ref[440:746,358:822].copy()),"illustrations/story-surfer.jpg",90)

try:
    import sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    from esrgan import up as esrgan_up  # AI upscaling for the framed photos
except Exception as e:  # torch not installed: fall back to plain resampling
    print("Real-ESRGAN unavailable, using Lanczos:", e); esrgan_up = None

def crop(x0,y0,x1,y1,path):
    c=ref[y0:y1,x0:x1].copy()
    if esrgan_up is None:
        return save(up(c,3),path,90)
    save(Image.fromarray(cv2.cvtColor(esrgan_up(c),cv2.COLOR_BGR2RGB)),path,92)
for i,(x0,x1) in enumerate([(263,391),(403,531),(544,672),(685,813)]):
    crop(x0,988,x1,1102,f"services/s{i+1}.jpg")
for i,(x0,x1) in enumerate([(263,443),(456,635),(648,819)]):
    crop(x0,1230,x1,1375,f"projects/p{i+1}.jpg")
for i,(x0,x1) in enumerate([(285,449),(463,627),(643,806)]):
    crop(x0,1483,x1,1604,f"journal/j{i+1}.jpg")

# approach icons as transparent-ish PNG crops (circle r~38)
for i,cx in enumerate([372,493,615,741]):
    c=ref[815-40:815+40,cx-40:cx+40].copy()
    pil=up(c,3).convert("RGBA")
    # circular alpha mask
    m=Image.new("L",pil.size,0)
    from PIL import ImageDraw
    ImageDraw.Draw(m).ellipse((4,4,pil.width-4,pil.height-4),fill=255)
    pil.putalpha(m); pil.save(f"{OUT}/approach/a{i+1}.png",optimize=True)

# logo: key out background
lg=Image.open(LOGO).convert("RGB"); a=np.array(lg).astype(int)
bg=a[5,5]; print("logo bg",bg)
dist=np.abs(a-bg).sum(axis=2)
alpha=np.clip((dist-12)*8,0,255).astype(np.uint8)
rgba=np.dstack([a.astype(np.uint8),alpha])
full=Image.fromarray(rgba,"RGBA")
# stacked logo: emblem + wordmark (exclude cut-off tagline below y~440)
stack=full.crop((340,0,866,445)); stack=stack.crop(stack.getbbox())
stack.save(f"{OUT}/logo/nami-logo-stacked.png",optimize=True)
emb=full.crop((420,0,790,345)); emb=emb.crop(emb.getbbox())
word=full.crop((340,345,866,445)); word=word.crop(word.getbbox())
emb.save(f"{OUT}/logo/nami-emblem.png",optimize=True)
# horizontal lockup
h=word.height*2
e=emb.resize((int(emb.width*h/emb.height),h),Image.LANCZOS)
gap=int(h*0.28)
W=e.width+gap+word.width
lock=Image.new("RGBA",(W,h),(0,0,0,0)); lock.paste(e,(0,0),e); lock.paste(word,(e.width+gap,(h-word.height)//2),word)
lock.save(f"{OUT}/logo/nami-logo.png",optimize=True)
print("sizes", stack.size, emb.size, word.size, lock.size)
