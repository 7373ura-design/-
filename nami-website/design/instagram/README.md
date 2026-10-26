# Instagram washi paper

`washi-paper.jpg` is the paper behind the Instagram carousels in Canva. It uses the
same washi texture as the website (`body::before` in `src/app/globals.css`) with
added kozo fibres. To render it again:

    node design/instagram/render.js "$PWD/design/instagram/washi-paper.html" washi.png

## Carousel covers

`covers/*.jpg` are the first slide of each home's Instagram carousel: the first
portfolio photo darkened, with the title in Playfair Display. The rest of the
carousel is photos only; the text goes in the post caption. Rebuild with
`covers/make-covers.py` (writes HTML) and a Playwright screenshot at 1080×1350
with `deviceScaleFactor: 2` (2160×2700).

`photos/<home>/NN.jpg` are the carousel photos: the 2560px versions from
Houzz (sharper than the 1800px website copies), centre-cropped to 4:5.

## Closing slide

`last/last.jpg` is the final slide of every carousel: DM, email, follow and
save, with the NAMI logo. Rebuild with `last/make-last.py` and the same 2x
Playwright screenshot as the covers.
