"""Real-ESRGAN x4 (RRDBNet) upscaler, used to sharpen the photos cut from the
low-resolution reference. Needs torch, numpy, opencv. Weights are downloaded
to scripts/.cache on first use."""
import torch, torch.nn as nn, torch.nn.functional as F, numpy as np, cv2, sys
class RDB(nn.Module):
    def __init__(s, nf=64, gc=32):
        super().__init__()
        s.conv1=nn.Conv2d(nf,gc,3,1,1); s.conv2=nn.Conv2d(nf+gc,gc,3,1,1); s.conv3=nn.Conv2d(nf+2*gc,gc,3,1,1)
        s.conv4=nn.Conv2d(nf+3*gc,gc,3,1,1); s.conv5=nn.Conv2d(nf+4*gc,nf,3,1,1); s.l=nn.LeakyReLU(0.2,True)
    def forward(s,x):
        x1=s.l(s.conv1(x)); x2=s.l(s.conv2(torch.cat((x,x1),1))); x3=s.l(s.conv3(torch.cat((x,x1,x2),1)))
        x4=s.l(s.conv4(torch.cat((x,x1,x2,x3),1))); x5=s.conv5(torch.cat((x,x1,x2,x3,x4),1)); return x5*0.2+x
class RRDB(nn.Module):
    def __init__(s,nf=64,gc=32):
        super().__init__(); s.rdb1=RDB(nf,gc); s.rdb2=RDB(nf,gc); s.rdb3=RDB(nf,gc)
    def forward(s,x): return s.rdb3(s.rdb2(s.rdb1(x)))*0.2+x
class RRDBNet(nn.Module):
    def __init__(s,nb=23,nf=64,gc=32):
        super().__init__()
        s.conv_first=nn.Conv2d(3,nf,3,1,1); s.body=nn.Sequential(*[RRDB(nf,gc) for _ in range(nb)])
        s.conv_body=nn.Conv2d(nf,nf,3,1,1); s.conv_up1=nn.Conv2d(nf,nf,3,1,1); s.conv_up2=nn.Conv2d(nf,nf,3,1,1)
        s.conv_hr=nn.Conv2d(nf,nf,3,1,1); s.conv_last=nn.Conv2d(nf,3,3,1,1); s.l=nn.LeakyReLU(0.2,True)
    def forward(s,x):
        f=s.conv_first(x); f=f+s.conv_body(s.body(f))
        f=s.l(s.conv_up1(F.interpolate(f,scale_factor=2,mode='nearest')))
        f=s.l(s.conv_up2(F.interpolate(f,scale_factor=2,mode='nearest')))
        return s.conv_last(s.l(s.conv_hr(f)))
import os, urllib.request
WEIGHTS=os.path.join(os.path.dirname(os.path.abspath(__file__)),'.cache','RealESRGAN_x4plus.pth')
if not os.path.exists(WEIGHTS):
    os.makedirs(os.path.dirname(WEIGHTS),exist_ok=True)
    urllib.request.urlretrieve('https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth',WEIGHTS)
m=RRDBNet(); sd=torch.load(WEIGHTS,map_location='cpu'); sd=sd.get('params_ema',sd); m.load_state_dict(sd,strict=True); m.eval()
torch.set_num_threads(8)
def up(img_bgr):
    x=torch.from_numpy(img_bgr[:,:,::-1].astype(np.float32)/255.).permute(2,0,1)[None]
    with torch.no_grad(): y=m(x)
    y=y[0].clamp(0,1).permute(1,2,0).numpy()[:,:,::-1]
    return (y*255+0.5).astype(np.uint8)
