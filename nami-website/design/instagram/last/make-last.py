R="/home/user/-/nami-website"
W=f"{R}/design/instagram/washi-paper.jpg"
P=f"{R}/public/images/washi/wave-sun.jpg"
E=f"{R}/public/images/logo/nami-emblem.png"
# Instagram icons, drawn as simple outlines so they read as the real buttons
BOOK='<svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-5-6 5z"/></svg>'
SEND='<svg viewBox="0 0 24 24"><path d="M22 3 9.5 13.5M22 3l-7 18-5.5-7.5L2 10z"/></svg>'
PLUS='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><path d="M12 7.5v9M7.5 12h9"/></svg>'
open("final_last.html","w").write(f'''<!doctype html><html><head><meta charset=utf-8>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Jost:wght@400;500&display=block" rel="stylesheet"><style>
*{{margin:0;padding:0;box-sizing:border-box}}body{{width:1080px;height:1350px;color:#1e3a5c;font-family:Jost,sans-serif}}
.s{{width:1080px;height:1350px;position:relative;overflow:hidden;background:#efe6d6 url(file://{W}) center/cover}}
.print{{position:absolute;left:0;right:0;bottom:0;height:560px;background:url(file://{P}) center 62%/cover;
  -webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 34%);mask-image:linear-gradient(to bottom,transparent 0,#000 34%)}}
.top{{position:absolute;top:96px;left:0;right:0;text-align:center}}
.em{{width:92px;height:92px;display:block;margin:0 auto 34px}}
.k{{font-weight:500;font-size:22px;letter-spacing:.42em;color:#e8553b;margin-bottom:26px}}
h1{{font-family:'Playfair Display';font-weight:600;font-size:96px;line-height:1.06}}
.lead{{font-size:31px;line-height:1.55;margin:34px auto 0;color:#3d5570;max-width:760px}}
.dm{{display:inline-block;margin-top:46px;background:#1e3a5c;color:#f6efe2;font-size:34px;letter-spacing:.04em;padding:22px 48px;border-radius:999px}}
.mail{{margin-top:20px;font-size:27px;color:#3d5570}}
.acts{{display:flex;justify-content:center;gap:66px;margin-top:52px}}
.a{{display:flex;flex-direction:column;align-items:center;gap:12px;font-size:20px;font-weight:500;letter-spacing:.24em}}
.a svg{{width:46px;height:46px;fill:none;stroke:#1e3a5c;stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}}
</style></head><body><div class="s"><div class="print"></div><div class="top">
<img class="em" src="file://{E}">
<div class="k">NEST AND MEMORIES INSIDE</div>
<h1>No question<br>is too small</h1>
<p class="lead">Thinking about your home, a big change or a small detail? We'd love to hear from you.</p>
<div class="dm">DM @nami.studio_au</div>
<div class="mail">or hello@nami-studio.com.au</div>
<div class="acts"><div class="a">{BOOK}SAVE</div><div class="a">{SEND}SHARE</div><div class="a">{PLUS}FOLLOW</div></div>
</div></div></body></html>''')
