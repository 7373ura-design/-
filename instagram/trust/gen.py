import json,sys
NAVY='#1D3F6E';INK='#3C4B63';RED='#E4552F';BLUE='#2A8FB8';CREAM='#FBF6EC';MUT='#7B8799'
HEAD='''<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600&family=Jost:wght@400;500&display=swap" rel="stylesheet">
<style>body{margin:0;background:#ddd}section{position:relative;width:1080px;height:1350px;overflow:hidden;background:%s;font-family:Jost,sans-serif;color:%s;margin-bottom:20px}
.top{position:absolute;top:70px;left:90px;right:90px;display:flex;justify-content:space-between;font-size:24px;letter-spacing:.24em;color:%s}
.top b{color:%s;font-weight:500;margin-right:14px}
h1{font-family:'Shippori Mincho';font-weight:600;color:%s;margin:0;line-height:1.18}
.rule{width:70px;height:3px;background:%s}
.body{font-size:34px;line-height:1.6;color:%s}
.row{display:flex;gap:34px;padding:30px 0;border-top:2px solid #E2DED3;align-items:baseline}
.row .n{font-family:'Shippori Mincho';color:%s;font-size:40px;min-width:60px;font-weight:600}
.row b{display:block;color:%s;font-weight:500;font-size:36px;margin-bottom:6px}
.row span{font-size:30px;line-height:1.5}
.mark{position:absolute;right:-200px;bottom:-200px;width:620px;opacity:1}
.chip{display:inline-block;border:2px solid #D6DCE4;border-radius:12px;padding:18px 24px;margin:0 14px 14px 0;font-size:30px;color:%s;background:#fff8}
.chip i{display:block;font-style:normal;font-size:20px;letter-spacing:.2em;color:%s;margin-bottom:6px}
.photo{background:linear-gradient(135deg,#ddd2bd,#bfae92);display:flex;align-items:center;justify-content:center;color:#fff;font-size:26px;letter-spacing:.3em;border-radius:14px}
.navy{background:%s}.navy h1{color:#fff}.navy .body{color:#dfe6f0}
</style></head><body>'''%(CREAM,INK,MUT,RED,NAVY,RED,INK,RED,NAVY,NAVY,RED,NAVY)
def top(label,i,n,dark=False):
    c='#c9d3df' if dark else MUT
    return f'<div class="top" style="color:{c}"><span><b>{label[0]}</b>{label[1]}</span><span>{i:02d} / {n:02d}</span></div>'
def page(inner,cls=''):
    return f'<section data-document-role="page" class="{cls}">{inner}</section>'
def write(fn,pages):
    open(fn,'w').write(HEAD+''.join(pages)+'</body></html>')

# ---------- POST 04: MEET THE FOUNDER ----------
L=('04','MEET THE FOUNDER');N=5
p=[]
p.append(page(f'''{top(L,1,N)}
<img src="nami_mark.svg" class="mark" style="width:560px;right:-180px;bottom:-160px">
<div style="position:absolute;left:90px;top:230px;width:500px">
<div style="font-size:26px;letter-spacing:.3em;color:{RED}">THE PERSON BEHIND NAMI</div>
<h1 style="font-size:104px;margin-top:30px">Meet<br>the Founder</h1>
<div class="rule" style="margin:44px 0"></div>
<div class="body">Nanami Ura<br><span style="color:{MUT};font-size:28px;letter-spacing:.2em">FOUNDER · NAMI STUDIO</span></div></div>
<div class="photo" style="position:absolute;right:90px;top:330px;width:400px;height:500px">PHOTO</div>'''))
p.append(page(f'''{top(L,2,N)}
<div style="position:absolute;left:90px;right:90px;top:200px">
<h1 style="font-size:76px">Qualified to design<br>beyond taste.</h1><div class="rule" style="margin:40px 0 50px"></div>
<div class="chip"><i>QUALIFIED</i>Interior Design &amp; Property Styling</div>
<div class="chip"><i>QUALIFIED</i>Japanese Garden Design</div>
<div class="chip"><i>QUALIFIED</i>Japandi Design</div>
<div class="chip"><i>QUALIFIED</i>Architecture — Japan</div>
<div class="chip"><i>QUALIFIED</i>Real Estate — NSW &amp; Japan</div>
<div class="body" style="margin-top:50px">Design, gardens, architecture and property —<br>so every idea is made with your home's<br><b style="color:{NAVY};font-weight:500">value</b> in mind, not just its look.</div></div>'''))
p.append(page(f'''{top(L,3,N,True)}
<div style="position:absolute;left:90px;right:90px;top:230px">
<div style="font-size:26px;letter-spacing:.3em;color:#F07B55">IN SAFE HANDS</div>
<h1 style="font-size:86px;margin-top:30px">Mentored by<br>Japan Homes.</h1><div class="rule" style="margin:44px 0"></div>
<div class="body" style="font-size:36px">20+ years of building homes<br>in Australia &amp; New Zealand.</div>
<div class="body" style="margin-top:40px">That experience means we design with<br>construction and budget in mind —<br>from the very first sketch.</div></div>
<img src="nami_mark.svg" style="position:absolute;right:-180px;bottom:-180px;width:560px">''','navy'))
p.append(page(f'''{top(L,4,N)}
<div style="position:absolute;left:90px;right:90px;top:200px">
<h1 style="font-size:76px">Why I started<br>NAMI.</h1><div class="rule" style="margin:40px 0 50px"></div>
<div class="body">When I moved from Japan to Australia,<br>homes here felt very different —<br>open-plan, strong sun, life outdoors.</div>
<div class="body" style="margin-top:36px">But the more I lived here, the more<br>I saw how well Japanese calm fits<br>Australian living.</div>
<div class="body" style="margin-top:36px;color:{NAVY};font-family:'Shippori Mincho';font-size:44px;line-height:1.4">NAMI is where the two<br>live side by side.</div></div>'''))
p.append(page(f'''{top(L,5,N)}
<img src="nami_mark.svg" style="position:absolute;left:50%;top:170px;width:360px;transform:translateX(-50%)">
<div style="position:absolute;left:90px;right:90px;top:600px;text-align:center">
<h1 style="font-size:72px">Let's design<br>your home together.</h1><div class="rule" style="margin:40px auto"></div>
<div class="body">Follow <b style="color:{NAVY};font-weight:500">@nami.studio_au</b> for Japandi ideas<br>DM us or email hello@nami-studio.com.au</div>
<div style="margin-top:50px;font-size:24px;letter-spacing:.3em;color:{RED}">SAVE · SHARE · SAY HELLO</div></div>'''))
write('04_meet-the-founder.html',p)

# ---------- POST 05: HOW WE WORK ----------
L=('05','HOW WE WORK');N=5;p=[]
p.append(page(f'''{top(L,1,N)}
<img src="nami_mark.svg" class="mark" style="width:760px;right:-240px;bottom:-180px">
<div style="position:absolute;left:90px;top:230px;width:640px">
<div style="font-size:26px;letter-spacing:.3em;color:{RED}">FROM IDEA TO HOME</div>
<h1 style="font-size:104px;margin-top:30px">How we<br>work.</h1><div class="rule" style="margin:44px 0"></div>
<div class="body">Design and construction,<br>thought through together.</div></div>'''))
steps=[('01','Chat','We listen first — your space, your routine, your budget.'),('02','Concept','Mood, materials and layout ideas, with costs in view.'),('03','Design','Detailed plans, finishes and styling for your home.'),('04','Build','Construction managed with trusted partners — no guesswork.')]
rows=''.join(f'<div class="row"><div class="n">{a}</div><div><b>{b}</b><span>{c}</span></div></div>' for a,b,c in steps)
p.append(page(f'''{top(L,2,N)}<div style="position:absolute;left:90px;right:90px;top:200px"><h1 style="font-size:76px">Four simple steps.</h1><div class="rule" style="margin:40px 0 40px"></div>{rows}</div>'''))
p.append(page(f'''{top(L,3,N,True)}
<div style="position:absolute;left:90px;right:90px;top:230px">
<div style="font-size:26px;letter-spacing:.3em;color:#F07B55">WHY IT MATTERS</div>
<h1 style="font-size:80px;margin-top:30px">Beautiful designs<br>that can actually<br>be built.</h1><div class="rule" style="margin:44px 0"></div>
<div class="body">Many designs stop at the picture.<br>Ours are checked against real<br>construction and real budgets —<br>so what you see is what you get.</div></div>''','navy'))
p.append(page(f'''{top(L,4,N)}
<div style="position:absolute;left:90px;right:90px;top:200px"><h1 style="font-size:76px">What we design.</h1><div class="rule" style="margin:40px 0 50px"></div>
<div class="chip"><i>HOMES</i>New builds</div><div class="chip"><i>HOMES</i>Renovations</div><div class="chip"><i>SPACES</i>Living · Bedroom · Kitchen</div>
<div class="chip"><i>OUTSIDE</i>Japanese gardens &amp; balconies</div><div class="chip"><i>BUSINESS</i>Shops &amp; commercial spaces</div><div class="chip"><i>STYLING</i>Property styling</div>
<div class="body" style="margin-top:50px">Big project or one room —<br>we start where you are.</div></div>'''))
p.append(page(f'''{top(L,5,N)}
<img src="nami_mark.svg" style="position:absolute;left:50%;top:170px;width:360px;transform:translateX(-50%)">
<div style="position:absolute;left:90px;right:90px;top:600px;text-align:center"><h1 style="font-size:72px">Start with<br>a chat.</h1><div class="rule" style="margin:40px auto"></div>
<div class="body">DM us or email<br><b style="color:{NAVY};font-weight:500">hello@nami-studio.com.au</b></div>
<div style="margin-top:50px;font-size:24px;letter-spacing:.3em;color:{RED}">SAVE FOR YOUR NEXT PROJECT</div></div>'''))
write('05_how-we-work.html',p)

# ---------- POST 06: FOUNDING MONITORS FAQ (Matsuri) ----------
L=('06','FREE DESIGN, EXPLAINED');N=5;p=[]
p.append(page(f'''{top(L,1,N)}
<img src="nami_mark.svg" class="mark" style="width:760px;right:-240px;bottom:-180px">
<div style="position:absolute;left:90px;top:230px;width:660px">
<div style="font-size:26px;letter-spacing:.3em;color:{RED}">FOUNDING MONITORS · 10 HOMES</div>
<h1 style="font-size:96px;margin-top:30px">Free design.<br>What's the<br>catch?</h1><div class="rule" style="margin:44px 0"></div>
<div class="body">Honest answers before<br>you apply.</div></div>'''))
qa=[('Why free?','We want you to see NAMI\'s design for your own home before you decide anything. Our first ten homes help us grow — together.'),('What\'s free?','Interior design by NAMI, one-on-one from first chat to final plan.'),('What\'s not?','Furniture, materials and construction. You only buy what you choose — no pressure.')]
rows=''.join(f'<div class="row" style="padding:36px 0"><div class="n">Q</div><div><b>{a}</b><span>{b}</span></div></div>' for a,b in qa)
p.append(page(f'''{top(L,2,N)}<div style="position:absolute;left:90px;right:90px;top:200px"><h1 style="font-size:76px">Your questions.</h1><div class="rule" style="margin:40px 0 30px"></div>{rows}</div>'''))
p.append(page(f'''{top(L,3,N)}<div style="position:absolute;left:90px;right:90px;top:200px"><h1 style="font-size:76px">What we ask<br>in return.</h1><div class="rule" style="margin:40px 0 30px"></div>
<div class="row"><div class="n">01</div><div><b>Before &amp; after photos</b><span>Of your space, for our portfolio.</span></div></div>
<div class="row"><div class="n">02</div><div><b>Permission to share</b><span>On our website and Instagram.</span></div></div>
<div class="row"><div class="n">03</div><div><b>Honest feedback</b><span>A short review and a quick chat.</span></div></div>
<div class="row"><div class="n">04</div><div><b>Time together</b><span>A few meetings during the project.</span></div></div></div>'''))
p.append(page(f'''{top(L,4,N,True)}
<div style="position:absolute;left:90px;right:90px;top:230px">
<div style="font-size:26px;letter-spacing:.3em;color:#F07B55">SAT 6 DECEMBER · MATSURI SYDNEY</div>
<h1 style="font-size:84px;margin-top:30px">Meet us at<br>the Japan Homes<br>booth.</h1><div class="rule" style="margin:44px 0"></div>
<div class="body">See our Japandi Christmas &amp;<br>New Year decorations in person —<br>and leave your email to apply.<br>We'll contact you within a week.</div></div>
<img src="nami_mark.svg" style="position:absolute;right:-180px;bottom:-180px;width:560px">''','navy'))
p.append(page(f'''{top(L,5,N)}
<img src="nami_mark.svg" style="position:absolute;left:50%;top:170px;width:360px;transform:translateX(-50%)">
<div style="position:absolute;left:90px;right:90px;top:600px;text-align:center"><h1 style="font-size:72px">Only 10 homes.</h1><div class="rule" style="margin:40px auto"></div>
<div class="body">Can't make it to Matsuri?<br>DM us "MONITOR" to apply.</div>
<div style="margin-top:50px;font-size:24px;letter-spacing:.3em;color:{RED}">SHARE WITH SOMEONE IN SYDNEY</div></div>'''))
write('06_free-design-explained.html',p)
