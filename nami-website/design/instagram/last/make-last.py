R="/home/user/-/nami-website"
I=f"{R}/design/instagram/last/surfer-woodblock-cut.png"
# Instagram-style line icons
SEND='<path d="M22 3 9.5 13.5M22 3l-7 18-5.5-7.5L2 10z"/>'
FOLLOW='<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7M19 8v6M16 11h6"/>'
SAVE='<path d="M6 3h12v18l-6-5-6 5z"/>'
SHARE='<path d="M4 12v8h16v-8M12 3v12M7 8l5-5 5 5"/>'
items=[(SEND,"DM us","if you have any questions about your home"),(FOLLOW,"Follow","for more homes"),(SAVE,"Save","for your next project"),(SHARE,"Share","with someone planning a home")]
li="".join(f'<li><svg viewBox="0 0 24 24">{s}</svg><p><b>{k}</b> {v}</p></li>' for s,k,v in items)
open("final_last.html","w").write(f'''<!doctype html><html><head><meta charset=utf-8>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&family=Jost:wght@400;500&display=block" rel="stylesheet"><style>
*{{margin:0;padding:0;box-sizing:border-box}}body{{width:1080px;height:1350px;color:#1e3a5c;font-family:Jost,sans-serif}}
.s{{width:1080px;height:1350px;position:relative;overflow:hidden;background:#f4f1ec;display:flex;flex-direction:column;align-items:center;justify-content:center}}
.k{{font-size:20px;letter-spacing:.42em;color:#7a8a9c}}
h1{{font-family:'Playfair Display';font-weight:500;font-size:84px;line-height:1.1;text-align:center;margin-top:26px}}
h1 i{{font-style:italic}}
.rule{{width:56px;height:1.5px;background:#1e3a5c;opacity:.5;margin:54px 0 58px}}
ul{{list-style:none;display:flex;flex-direction:column;gap:38px}}
li{{display:flex;align-items:center;gap:30px}}
svg{{width:40px;height:40px;flex:none;fill:none;stroke:#1e3a5c;stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round}}
p{{font-size:31px;color:#4a5f78;letter-spacing:.01em}} b{{font-weight:500;color:#1e3a5c}}

.ill{{margin-top:80px;width:390px;height:260px;background:url(file://{I}) center/cover;filter:saturate(.85);-webkit-mask-image:radial-gradient(ellipse 72% 70% at 50% 52%,#000 62%,transparent 100%);mask-image:radial-gradient(ellipse 72% 70% at 50% 52%,#000 62%,transparent 100%)}}
</style></head><body><div class="s">
<div class="k">@NAMI.STUDIO_AU</div>
<h1>Thanks for <i>looking</i></h1>
<div class="rule"></div>
<ul>{li}</ul>
<div class="ill"></div>
</div></body></html>''')
