R="/home/user/-/nami-website"
I=f"{R}/design/instagram/last/surfer-woodblock-cut.png"
items=[("DM us","any question about your home, big or small"),("Follow","@nami.studio_au for more homes"),("Save","this post for your own project"),("Share","with someone planning a home")]
li="".join(f'<li><b>{k}</b><span>{v}</span></li>' for k,v in items)
open("final_last.html","w").write(f'''<!doctype html><html><head><meta charset=utf-8>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Jost:wght@400;500&display=block" rel="stylesheet"><style>
*{{margin:0;padding:0;box-sizing:border-box}}body{{width:1080px;height:1350px;color:#1e3a5c;font-family:Jost,sans-serif}}
.s{{width:1080px;height:1350px;position:relative;overflow:hidden;background:#f4f1ec;padding:150px 130px 0}}
h1{{font-family:'Playfair Display';font-weight:600;font-size:80px;line-height:1.1}}
ul{{list-style:none;margin-top:60px}}
li{{display:flex;align-items:baseline;gap:30px;padding:26px 0;border-top:1.5px solid rgba(30,58,92,.2)}}
li:last-child{{border-bottom:1.5px solid rgba(30,58,92,.2)}}
b{{width:170px;flex:none;font-weight:500;font-size:34px}}
span{{font-size:30px;color:#4a5f78;line-height:1.35}}
.ill{{position:absolute;left:50%;bottom:90px;transform:translateX(-50%);width:480px;height:320px;background:url(file://{I}) center/cover;filter:saturate(.85) ;-webkit-mask-image:radial-gradient(ellipse 72% 70% at 50% 52%,#000 62%,transparent 100%);mask-image:radial-gradient(ellipse 72% 70% at 50% 52%,#000 62%,transparent 100%)}}
.foot{{position:absolute;left:130px;bottom:110px;font-size:24px;letter-spacing:.24em;color:#4a5f78}}
</style></head><body><div class="s">
<h1>Thanks for<br>looking</h1>
<ul>{li}</ul>
<div class="ill"></div>
</div></body></html>''')
