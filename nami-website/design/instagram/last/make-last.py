R="/home/user/-/nami-website"
I=f"{R}/design/instagram/last/surfer.png"
open("final_last.html","w").write(f'''<!doctype html><html><head><meta charset=utf-8>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Jost:wght@400;500&display=block" rel="stylesheet"><style>
*{{margin:0;padding:0;box-sizing:border-box}}body{{width:1080px;height:1350px;color:#1e3a5c;font-family:Jost,sans-serif}}
.s{{width:1080px;height:1350px;position:relative;overflow:hidden;background:#fbf5e8}}
.ill{{position:absolute;left:0;bottom:0;width:1080px;height:720px;background:url(file://{I}) center/cover}}
.top{{position:absolute;top:110px;left:0;right:0;text-align:center}}
h1{{font-family:'Playfair Display';font-weight:600;font-size:88px;line-height:1.08}}
.lead{{font-size:30px;line-height:1.5;margin-top:26px;color:#3d5570}}
.dm{{display:inline-block;margin-top:40px;background:#1e3a5c;color:#fbf5e8;font-size:32px;letter-spacing:.04em;padding:20px 46px;border-radius:999px}}
.sub{{margin-top:18px;font-size:24px;color:#3d5570;letter-spacing:.02em}}
</style></head><body><div class="s"><div class="ill"></div><div class="top">
<h1>No question<br>is too small</h1>
<p class="lead">Big change or small detail, just ask.</p>
<div class="dm">DM @nami.studio_au</div>
<div class="sub">hello@nami-studio.com.au &nbsp;·&nbsp; Save &amp; share</div>
</div></div></body></html>''')
