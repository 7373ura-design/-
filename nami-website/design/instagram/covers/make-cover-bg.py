# Darkened cover photos without text; the title is live Canva text on top.
from PIL import Image, ImageEnhance
R="/home/user/-/nami-website/design/instagram/photos"
for h in ["new-lynn","remuera","glen-innes","hillcrest"]:
  im=Image.open(f"{R}/{h}/01.jpg").convert("RGB").resize((2160,2700),Image.LANCZOS)
  ImageEnhance.Brightness(im).enhance(.5).save(f"bg-{h}.jpg",quality=92)
