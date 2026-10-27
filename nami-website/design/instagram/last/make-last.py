R="/home/user/-/nami-website"
I=f"{R}/design/instagram/last/surfer-woodblock.png"
W=f"{R}/design/instagram/washi-paper.jpg"
open("final_last.html","w").write(f'''<!doctype html><html><head><meta charset=utf-8>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Jost:wght@400;500&display=block" rel="stylesheet"><style>
*{{margin:0;padding:0;box-sizing:border-box}}body{{width:1080px;height:1350px;color:#1e3a5c;font-family:Jost,sans-serif}}
.s{{width:1080px;height:1350px;position:relative;overflow:hidden;background:#f1e9d8 url(file://{W}) center/cover}}
.ill{{position:absolute;left:0;bottom:0;width:1080px;height:720px;background:url(file://{I}) center/cover;
  -webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 14%);mask-image:linear-gradient(to bottom,transparent 0,#000 14%)}}
.top{{position:absolute;top:120px;left:0;right:0;text-align:center}}
h1{{font-family:'Playfair Display';font-weight:600;font-size:150px;line-height:1}}
.h{{font-size:40px;margin-top:22px;letter-spacing:.02em}}
.btns{{display:flex;justify-content:center;gap:22px;margin-top:52px}}
.b{{font-size:24px;font-weight:500;letter-spacing:.2em;padding:18px 34px;border:2px solid #1e3a5c;border-radius:999px}}
.b.f{{background:#1e3a5c;color:#f6efe2}}
</style></head><body><div class="s"><div class="ill"></div><div class="top">
<h1>DM us</h1>
<div class="h">@nami.studio_au</div>
<div class="btns"><div class="b f">SAVE</div><div class="b">SHARE</div><div class="b">FOLLOW</div></div>
</div></div></body></html>''')
