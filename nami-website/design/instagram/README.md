# Instagram washi paper

`washi-paper.jpg` is the paper behind the Instagram carousels in Canva. It uses the
same washi texture as the website (`body::before` in `src/app/globals.css`) with
added kozo fibres. To render it again:

    node design/instagram/render.js "$PWD/design/instagram/washi-paper.html" washi.png
