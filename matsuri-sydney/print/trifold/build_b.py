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
row=lambda k,t: f'<div style="display:flex;align-items:center;gap:3mm;margin-top:2.2mm">{ic(k)}<span class="t" style="color:#fff;font-size:11.5pt">{t}</span></div>'
CSS_EXTRA='<style>.chk{display:flex;gap:2.4mm;align-items:baseline;margin:1.4mm 0}.chk i{font-style:normal;color:var(--red);font-weight:600}.chk b{font-weight:500;color:var(--navy)}.mini{font-size:10.5pt;line-height:1.4}</style>'

flap=f'''<div class="pad">
<div class="eyebrow">FOUNDING DESIGN EXPERIENCE</div>
<div class="h" style="font-size:21pt;margin:3mm 0 3mm">Celebrating<br>our beginning.</div>
<div class="rule"></div>
<p class="t" style="margin:3.5mm 0 3mm">To mark the launch of NAMI, we're inviting <b>3 homes</b> to become part of our founding design collection.</p>
<div class="eyebrow" style="font-size:9pt">A$0 DESIGN FEE — WHAT'S INCLUDED</div>
<div class="chk t mini"><i>✓</i><span><b>Personal design consultation</b> — your home, lifestyle and vision</span></div>
<div class="chk t mini"><i>✓</i><span><b>Tailored design concept</b> — inspired by your needs and style</span></div>
<div class="chk t mini"><i>✓</i><span><b>Up to two rounds of revisions</b> — refined together</span></div>
<div class="eyebrow" style="font-size:9pt;margin-top:2.6mm">GROWING TOGETHER</div>
<p class="t mini" style="margin-top:1mm">Your honest feedback, permission to share the design in our portfolio, and a tag on social media.</p>
<p class="t mini" style="margin-top:2mm;color:var(--muted)">Furniture, materials and construction are not included.</p>
<div style="margin-top:auto;border-top:.3mm solid var(--red);padding-top:2.6mm">
<div class="t" style="font-weight:500;color:var(--navy)">Want the details?</div>
<div class="t mini">Email us or DM <b>@nami.studio_au</b>.<br>Not selected? We'll still have a thank-you for you.</div></div>
</div>'''

back=f'''<div class="pad">
<img src="nami_wordmark_cream.svg" style="height:8mm;align-self:flex-start">
<div class="hair" style="margin:6mm 0 5mm"></div>
<div class="h" style="font-size:21pt">Let's design<br>your home.</div>
<p class="t" style="margin-top:3.5mm">From a small everyday worry to a full renovation or a brand-new home — tell us anything.</p>
<p class="t" style="margin-top:2mm;color:#fff;font-weight:500">It all starts with a chat.</p>
<div style="margin-top:auto;display:flex;gap:5mm">
<div><img class="qr" src="qr_ig.png" style="width:23mm"><div class="cap" style="margin-top:1.4mm;text-align:center">INSTAGRAM</div></div>
<div><img class="qr" src="qr_web.png" style="width:23mm"><div class="cap" style="margin-top:1.4mm;text-align:center">WEBSITE</div></div></div>
<div style="margin-top:4mm">
{row('mail','hello@nami-studio.com.au')}
{row('phone','0406 880 243')}
{row('ig','@nami.studio_au')}
{row('fb','NAMI')}
</div></div>'''

cover='''<div style="position:absolute;left:11mm;top:0;bottom:0;width:.4mm;background:var(--red)"></div>
<img src="nami_mark.svg" style="position:absolute;width:118mm;right:-46mm;top:40mm">
<div class="pad" style="left:17mm">
<img src="nami_wordmark.svg" style="height:11mm;align-self:flex-start">
<div class="cap" style="margin-top:3mm;color:var(--navy)">JAPANDI INTERIOR DESIGN</div>
<div style="margin-top:auto"><div class="h" style="font-size:21pt">A new wave<br>of Japandi.</div>
<p class="t" style="margin-top:3mm;font-size:10.5pt;max-width:62mm">Calm, natural homes — inspired by Japan, made for everyday life.</p></div></div>'''

about='''<div class="pad">
<div class="eyebrow">ABOUT NAMI</div>
<div class="h" style="font-size:20pt;margin:3mm 0 2.5mm">Why NAMI.</div>
<p class="t mini">Homes &amp; businesses, new builds &amp; renovations — designing for today and the years ahead.</p>
<div class="cap" style="margin-top:1.5mm">FOUNDER · NANAMI URA</div>
<ul class="list" style="margin-top:3mm">
<li><span>JAPAN HOMES</span><div><b>Mentored &amp; backed</b> — 20+ years of housing in Australia &amp; NZ.</div></li>
<li><span>BUILD</span><div><b>We manage construction too</b> — your budget shapes the design from the first sketch.</div></li>
<li><span>JDF</span><div><b>Authentic Japanese makers</b> — tatami, hinoki baths and more.</div></li>
<li><span>GARDEN</span><div><b>Japanese garden design</b> — from balcony to backyard.</div></li>
<li><span>VALUE</span><div><b>Real estate know-how</b> (NSW &amp; Japan) — beyond taste, with your property's value in mind.</div></li>
</ul>
<div class="eyebrow" style="margin-top:auto;font-size:9pt">QUALIFIED IN</div>
<p class="t mini" style="margin-top:1mm;color:var(--navy)">Interior Design &amp; Property Styling · Japanese Garden Design · Japandi Design · Architecture — Japan · Real Estate — NSW &amp; Japan</p>
</div>'''

why='''<div class="ph" style="position:absolute;left:0;right:0;top:0;height:54mm;background-image:url(img/rem_02.jpg)"></div>
<div class="pad" style="top:60mm">
<div class="eyebrow">WHY JAPANDI</div>
<div class="h" style="font-size:18pt;margin:2mm 0 2.5mm">In Japan, we never<br>called it Japandi.</div>
<p class="t mini">It was never just a look — it was a way of living. Many Japandi homes copy the style but miss the reasons behind it. We bring both.</p>
<ul class="list" style="margin-top:2.6mm">
<li><span>間 MA</span><div><b>× Open-plan</b> — big open rooms that still feel calm.</div></li>
<li><span>光 LIGHT</span><div><b>× Strong sun</b> — screens and layers that soften harsh light.</div></li>
<li><span>木 WOOD</span><div><b>× Relaxed living</b> — warm, natural materials made for every day.</div></li>
</ul>
<div style="margin-top:auto"><div class="h" style="font-size:15pt;letter-spacing:.14em;white-space:nowrap">温故知新</div><div class="t" style="font-size:9.5pt;color:var(--muted)">Learning from the old to create the new.</div></div>
</div>'''

items=[('rem_03','Old Meets New','Renovation'),('glen_02','Living in Green','New home'),('lynn_02','Welcome Home','New home'),('hill_04','Simply Special','New home'),(None,'Project name','Type'),(None,'Project name','Type')]
cells=''
for f,a,b in items:
    ph=f'<div class="ph" style="height:30mm;background-image:url(img/{f}.jpg)"></div>' if f else '<div style="height:30mm;border:.4mm dashed rgba(255,255,255,.45);display:flex;align-items:center;justify-content:center;color:#AFC0D6;font-size:9pt;letter-spacing:.1em">PHOTO</div>'
    cells+=f'<div>{ph}<div class="wt" style="font-size:10.5pt;margin-top:1.2mm;font-weight:500">{a}</div><div class="cap" style="font-size:8.6pt">{b}</div></div>'
works=f'''<div class="pad">
<div class="eyebrow">SELECTED PROJECTS</div>
<div class="h" style="font-size:19pt;margin:2.5mm 0 3.5mm">Homes we've<br>worked on.</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:2.6mm 3mm">{cells}</div>
<div class="cap" style="margin-top:auto;font-size:8.6pt">WITH JAPAN HOMES · MORE ON INSTAGRAM</div></div>'''

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
