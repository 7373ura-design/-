import sys, glob
from PIL import Image
d = sys.argv[1]; out = sys.argv[2]
fs = sorted(glob.glob(d + '/*.png')); ims = [Image.open(f).resize((270, 360)) for f in fs]
cols = 5; rows = (len(ims) + cols - 1) // cols
c = Image.new('RGB', (cols * 280, rows * 370), 'white')
for i, im in enumerate(ims): c.paste(im, ((i % cols) * 280, (i // cols) * 370))
c.save(out)
