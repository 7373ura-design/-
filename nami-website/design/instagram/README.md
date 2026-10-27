# Instagram washi paper

`washi-paper.jpg` is the paper behind the Instagram carousels in Canva. It uses the
same washi texture as the website (`body::before` in `src/app/globals.css`) with
added kozo fibres. To render it again:

    node design/instagram/render.js "$PWD/design/instagram/washi-paper.html" washi.png

## Carousel covers

The first slide of each carousel is the first portfolio photo darkened
(`covers/bg-<home>.jpg`, from `covers/make-cover-bg.py`) with the title as
live Canva text in the closing slide's serif, a short rule and a spaced-caps
label. The rest of the carousel is photos only; the text goes in the post
caption.

`covers/*.jpg` (other than `bg-*`) are the earlier flat covers with the title
in Playfair Display, built with `covers/make-covers.py` and a Playwright
screenshot at 1080×1350 with `deviceScaleFactor: 2` (2160×2700).

`photos/<home>/NN.jpg` are the carousel photos: the 2560px versions from
Houzz (sharper than the 1800px website copies), centre-cropped to 4:5.

## Closing slide

The final slide of every carousel is built from separate Canva elements, so
the wording, icons, rule and illustration can each be edited or moved.

- `last/make-washi.py` makes the washi paper texture (`washi.png`,
  uploaded as `washi-bg.jpg`).
- `last/make-icons.py` writes the four icon pages; screenshot them at 4x with
  a transparent background into `last/icons/`.
- `last/surfer-canva.png` is the woodblock surfer, trimmed and slightly
  desaturated.
- In Canva the heading uses a serif and the four action lines a spaced
  sans, both taken from the earlier NAMI posts. The source page is the
  Canva design "NAMI 投稿03 FOUNDING MONITORS" resized to 1080x1350
  (DAHZL-IxBd8); it is inserted into each carousel as page 13.
- `last/make-last-bg.py` (`last-bg.jpg`) is the earlier single-image
  background, and `last/last.jpg` / `make-last.py` the first flat version.
