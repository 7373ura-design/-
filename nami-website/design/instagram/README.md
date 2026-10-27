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

The final slide of every carousel is a background image with live Canva
text on top, so the wording can be edited in Canva.

- `last/make-washi.py` makes the washi paper texture (`washi.png`).
- `last/make-last-bg.py` lays the icons, rule and woodblock surfer over it;
  render it with the same 2x Playwright screenshot as the covers and save
  as `last-bg.jpg`.
- In Canva the heading uses a serif and the four action lines a spaced
  sans, both taken from the earlier NAMI posts. The source page is the
  Canva design "NAMI 投稿03 FOUNDING MONITORS" resized to 1080x1350
  (DAHZL-IxBd8); it is inserted into each carousel as page 13.
- `last/last.jpg` and `last/make-last.py` are the older flat-image version.
