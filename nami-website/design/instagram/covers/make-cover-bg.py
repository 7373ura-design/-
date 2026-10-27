# Darkened cover photos without text; the title is live Canva text on top.
# The shadow leans navy (#1e3a5c) to match the closing slide's text colour.
import numpy as np
from PIL import Image
R="/home/user/-/nami-website/design/instagram/photos"
navy=np.array([30,58,92],float)
for h in ["new-lynn","remuera","glen-innes","hillcrest"]:
  a=np.asarray(Image.open(f"{R}/{h}/01.jpg").convert("RGB").resize((2160,2700),Image.LANCZOS),float)
  Image.fromarray(np.clip(a*.5+navy*.3,0,255).astype(np.uint8)).save(f"bg-{h}.jpg",quality=92)
