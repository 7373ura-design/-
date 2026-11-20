import re
src=open('build.py').read()
BASE=src[src.index("BASE='''")+8:src.index("'''",src.index("BASE='''")+8)]
END='</body></html>'
ICON={
'mail':'<path d="M3 6.5h18v11H3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M3.5 7l8.5 6 8.5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
'phone':'<path d="M6.6 3.5h3l1.6 4.2-2 1.3a10.5 10.5 0 005.8 5.8l1.3-2 4.2 1.6v3a1.6 1.6 0 01-1.7 1.6C10.6 18.5 5.5 13.4 5 5.2a1.6 1.6 0 011.6-1.7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
'ig':'<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>',
'fb':'<path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4a21 21 0 00-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z" fill="currentColor"/>',
}
def ic(k):
    return f'<span style="width:8mm;height:8mm;border-radius:50%;background:#FBF6EC;color:#1D3F6E;display:inline-flex;align-items:center;justify-content:center;flex:none"><svg viewBox="0 0 24 24" width="4.6mm" height="4.6mm">{ICON[k]}</svg></span>'
row=lambda k,t: f'<div style="display:flex;align-items:center;gap:3mm;margin-top:2mm">{ic(k)}<span style="color:#fff;font-size:12pt">{t}</span></div>'
CSS_EXTRA="""<style>
/* one type scale for every panel */
.eyebrow{font-size:10pt!important;letter-spacing:.16em!important}
.H{font-family:'Shippori Mincho';font-weight:500;color:var(--navy);font-size:22pt;line-height:1.2;margin:2.5mm 0 3mm}
.dark .H{color:#fff}
.B{font-size:12pt;line-height:1.45;color:var(--ink)}
.dark .B{color:#DCE3EE}
.B b{font-weight:500;color:var(--navy)} .dark .B b{color:#fff}
.S{font-size:10pt;letter-spacing:.06em;color:var(--muted)} .dark .S{color:#AFC0D6}
.row2{display:grid;grid-template-columns:7mm 1fr;align-items:baseline;padding:2.2mm 0;border-top:.2mm solid var(--line)}
.row2 i{font-style:normal;color:var(--red);font-weight:600;font-size:12pt}
.dark .row2{border-color:rgba(255,255,255,.16)}
.col{position:absolute;inset:13mm 10mm 11mm 10mm;display:flex;flex-direction:column;justify-content:space-between}
.o1 .col,.i1 .col{left:14mm}.o3 .col,.i3 .col{right:14mm}
.tag{display:inline-block;border:.3mm solid var(--line);border-radius:5mm;padding:1mm 2.6mm;margin:0 1.6mm 1.6mm 0;font-size:10.5pt;color:var(--navy)}
</style>"""

flap=f"""<div class="col">
<div>
<div class="eyebrow">FOUNDING DESIGN · FINAL ROUND</div>
<div class="H">One final round —<br>10 homes only.</div>
<div class="rule"></div>
<p class="B" style="margin-top:3.5mm">Thank you for the warm response to our first round. For everyone who missed out, here's one last chance.</p>
</div>
<div>
<div class="eyebrow" style="margin-bottom:1.5mm">A$0 DESIGN FEE</div>
<div class="row2 B"><i>✓</i><span><b>Personal design consultation</b></span></div>
<div class="row2 B"><i>✓</i><span><b>Tailored design concept</b></span></div>
<div class="row2 B"><i>✓</i><span><b>Up to two rounds of revisions</b></span></div>
<p class="S" style="margin-top:2.5mm;letter-spacing:.02em;line-height:1.4;font-size:11pt">In return: your feedback and photos for our portfolio. Furniture and construction not included.</p>
</div>
<div style="border-top:.3mm solid var(--red);padding-top:3mm">
<div class="B"><b>Want the details?</b><br>Email us or DM @nami.studio_au.</div>
</div>
</div>"""

back=f"""<div class="col">
<img src="nami_wordmark_cream.svg" style="height:8.5mm;align-self:flex-start">
<div>
<div class="H">Let's design<br>your home.</div>
<p class="B">From a small everyday worry to a full renovation or a new build — tell us anything.</p>
<p class="B" style="margin-top:2mm;color:#fff;font-weight:500">It all starts with a chat.</p>
</div>
<div>
<div style="display:flex;gap:5mm;margin-bottom:4mm">
<div><img class="qr" src="qr_ig.png" style="width:23mm"><div class="S" style="margin-top:1.4mm;text-align:center">Instagram</div></div>
<div><img class="qr" src="qr_web.png" style="width:23mm"><div class="S" style="margin-top:1.4mm;text-align:center">Website</div></div></div>
{row('mail','hello@nami-studio.com.au')}
{row('phone','0406 880 243')}
{row('ig','@nami.studio_au')}
{row('fb','NAMI')}
</div></div>"""

cover="""<div style="position:absolute;left:11mm;top:0;bottom:0;width:.4mm;background:var(--red)"></div>
<img src="nami_mark.svg" style="position:absolute;width:118mm;right:-46mm;top:40mm">
<div class="col" style="left:17mm">
<div><img src="nami_wordmark.svg" style="height:11mm;display:block"><div class="S" style="margin-top:3mm;color:var(--navy);letter-spacing:.16em">JAPANDI INTERIOR DESIGN</div></div>
<div><div class="H" style="font-size:24pt;margin:0 0 3mm">A new wave<br>of Japandi.</div>
<p class="B" style="max-width:64mm">Calm, natural homes — inspired by Japan, made for everyday life.</p></div></div>"""

about="""<div class="col">
<div>
<div class="eyebrow">ABOUT NAMI</div>
<div class="H">Why NAMI.</div>
<p class="B">New builds, renovations and gardens — designed for today and the years ahead.</p>
</div>
<div>
<div class="row2 B"><i>—</i><span><b>Mentored by Japan Homes</b><br>20+ years building in AU &amp; NZ</span></div>
<div class="row2 B"><i>—</i><span><b>Design to build</b><br>We manage construction, on budget</span></div>
<div class="row2 B"><i>—</i><span><b>Authentic Japanese makers</b><br>Tatami, hinoki and more</span></div>
<div class="row2 B"><i>—</i><span><b>Japanese gardens</b><br>From balcony to backyard</span></div>
</div>
<div>
<div class="eyebrow" style="margin-bottom:2mm">QUALIFIED IN</div>
<span class="tag">Interior Design</span><span class="tag">Property Styling</span><span class="tag">Japanese Garden</span><span class="tag">Japandi Design</span><span class="tag">Architecture (JP)</span><span class="tag">Real Estate (NSW · JP)</span>
<div class="S" style="margin-top:1mm">Founder · Nanami Ura</div>
</div>
</div>"""

why="""<div class="ph" style="position:absolute;left:0;right:0;top:0;height:66mm;background-image:url(img/rem_02.jpg)"></div>
<div class="col" style="top:74mm">
<div>
<div class="eyebrow">WHY JAPANDI</div>
<div class="H" style="font-size:20pt">In Japan, we never<br>called it Japandi.</div>
<p class="B">It was a way of living, not just a look. We bring the reasons behind it.</p>
<div style="margin-top:5mm">
<div class="row2 B" style="grid-template-columns:11mm 1fr"><i style="font-family:'Shippori Mincho'">間</i><span><b>Calm</b> in open-plan rooms</span></div>
<div class="row2 B" style="grid-template-columns:11mm 1fr"><i style="font-family:'Shippori Mincho'">光</i><span><b>Soft light</b> under a strong sun</span></div>
<div class="row2 B" style="grid-template-columns:11mm 1fr"><i style="font-family:'Shippori Mincho'">木</i><span><b>Natural materials</b> for every day</span></div>
</div></div>
<div><div class="H" style="font-size:16pt;letter-spacing:.14em;margin:0">温故知新</div><div class="S">Learning from the old to create the new.</div></div>
</div>"""

items=[('rem_03','Old Meets New','Renovation'),('glen_02','Living in Green','New home'),('lynn_02','Welcome Home','New home'),('hill_04','Simply Special','New home'),(None,'Project name','Type'),(None,'Project name','Type')]
cells=''
for f,a,b in items:
    ph=f'<div class="ph" style="height:30mm;background-image:url(img/{f}.jpg)"></div>' if f else '<div style="height:30mm;border:.4mm dashed rgba(255,255,255,.45);display:flex;align-items:center;justify-content:center;color:#AFC0D6;font-size:10pt">PHOTO</div>'
    cells+=f'<div>{ph}<div style="font-size:11.5pt;margin-top:1.2mm;font-weight:500;color:#fff">{a}</div><div class="S">{b}</div></div>'
works=f"""<div class="col">
<div><div class="eyebrow">SELECTED PROJECTS</div>
<div class="H" style="margin-bottom:0">Homes we've<br>worked on.</div></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:2.4mm 3mm">{cells}</div>
<div class="S">With Japan Homes · more on Instagram</div></div>"""

html=BASE.replace('</style></head><body>','</style>'+CSS_EXTRA+'</head><body>')+f'''
<div class="sheet">
 <div class="pn o1">{flap}</div>
 <div class="pn o2 dark">{back}</div>
 <div class="pn o3">{cover}</div>
</div>
<div class="sheet">
 <div class="pn i1">{about}</div>
 <div class="pn i2">{why}</div>
 <div class="pn i3 dark">{works}</div>
</div>'''+END
open('option_B_brand.html','w').write(html)
