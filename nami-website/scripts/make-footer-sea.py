"""Draws public/images/washi/footer-sea.svg, the woodblock sea along the top of the footer.

  python3 scripts/make-footer-sea.py  (then embed the surfer; see SURF)
"""
import math
W,H=1440,300
NAVY="#1e3a5c"; DEEP="#2a5b86"; LIGHT="#4a80b0"; FOAM="#f6efe3"
def bump(x,c,h,wb,wf):
    u=x-c; w=wb if u<0 else wf
    return h*math.exp(-(u/w)**2)
def profile(x,base,bumps,ph=0):
    y=base+3*math.sin(x/37+ph)+2*math.sin(x/91+ph*2)
    for b in bumps: y-=bump(x,*b)
    return y
def pts(f,x0=0,x1=W,step=4): return [(x,f(x)) for x in range(x0,x1+1,step)]
def smooth(p):  # Catmull-Rom -> cubic beziers
    d=f"M{p[0][0]:.1f} {p[0][1]:.1f}"
    for i in range(len(p)-1):
        p0=p[max(i-1,0)];p1=p[i];p2=p[i+1];p3=p[min(i+2,len(p)-1)]
        c1=(p1[0]+(p2[0]-p0[0])/6,p1[1]+(p2[1]-p0[1])/6); c2=(p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6)
        d+=f"C{c1[0]:.1f} {c1[1]:.1f} {c2[0]:.1f} {c2[1]:.1f} {p2[0]:.1f} {p2[1]:.1f}"
    return d
def layer(f,fill,extra=""):
    return f'<path fill="{fill}" {extra} d="{smooth(pts(f))}L{W} {H}L0 {H}Z"/>'
def lines(f,offs,color,op,w=1.3,clip=""):
    out=[]
    for o in offs:
        out.append(f'<path fill="none" stroke="{color}" stroke-opacity="{op}" stroke-width="{w}" stroke-linecap="round" {clip} d="{smooth(pts(lambda x:f(x)+o))}"/>')
    return "".join(out)
def foam(f,c,h,wb,wf,th,claws,layercol):
    x0=int(c-wb*0.55); x1=int(c+wf*0.35)
    top=pts(f,x0,x1,2)
    bot=[(x,y+th*math.sin(math.pi*(x-x0)/(x1-x0))) for x,y in top][::-1]
    s=f'<path fill="{FOAM}" d="{smooth(top)}{smooth(bot).replace("M","L",1)}Z"/>'
    # claws: little crescents curling forward off the crest
    for i in range(claws):
        t=(i+0.5)/claws; x=c+wf*(0.05+0.32*t); y=f(x)+th*0.4
        L=th*(1.5-0.5*t)
        s+=(f'<path fill="none" stroke="{FOAM}" stroke-width="{max(1.6,th*0.38):.1f}" stroke-linecap="round" '
            f'd="M{x-L*0.6:.1f} {y-L*0.2:.1f}C{x+L*0.2:.1f} {y-L*0.7:.1f} {x+L*0.9:.1f} {y:.1f} {x+L*0.3:.1f} {y+L*0.6:.1f}"/>')
    return s

back_b=[(90,26,70,40),(330,34,90,46),(560,30,80,40),(800,38,90,48),(1040,30,80,40),(1300,40,90,50)]
mid_b=[(260,52,120,56),(570,66,130,60),(860,84,140,64),(1150,100,150,70)]
front_b=[(120,30,130,55),(420,46,150,62),(720,58,160,64),(1000,80,180,70),(1290,140,220,62)]
fb=lambda x:profile(x,232,back_b,0.4)
fm=lambda x:profile(x,256,mid_b,1.7)
ff=lambda x:profile(x,282,front_b,3.1)

svg=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMaxYMax slice">',
 '<defs><clipPath id="cb"><path d="'+smooth(pts(fb))+f'L{W} {H}L0 {H}Z"/></clipPath>',
 '<clipPath id="cm"><path d="'+smooth(pts(fm))+f'L{W} {H}L0 {H}Z"/></clipPath>',
 '<clipPath id="cf"><path d="'+smooth(pts(ff))+f'L{W} {H}L0 {H}Z"/></clipPath></defs>']
svg.append(layer(fb,LIGHT))
svg.append(lines(fb,[7,15,25],FOAM,.35,1.1,'clip-path="url(#cb)"'))
for b in back_b: svg.append(foam(fb,*b[:4],6,2,LIGHT))
svg.append(layer(fm,DEEP))
svg.append(lines(fm,[8,18,30,44],FOAM,.28,1.2,'clip-path="url(#cm)"'))
for b in mid_b: svg.append(foam(fm,*b[:4],10,4,DEEP))
svg.append(layer(ff,NAVY))
svg.append(lines(ff,[9,20,33,48,66],"#9fc0dc",.30,1.3,'clip-path="url(#cf)"'))
for b in front_b[:-1]: svg.append(foam(ff,*b[:4],12,4,NAVY))
open("parts.svg","w").write("\n".join(svg))
import json; json.dump({"crest":[1290,ff(1290)],"fx":[ (x,ff(x)) for x in range(1290,1440,10)]},open("crest.json","w"))

# --- the big breaking wave on the right, built into the front layer
xc=1290; yc=ff(xc)
P=lambda dx,dy:(xc+dx,yc+dy)
back=[(x,ff(x)) for x in range(1080,xc+1,4)]
outer=[P(0,0),P(22,-12),P(50,-16),P(78,-8),P(100,10),P(110,36),P(106,60),P(94,72)]
down=[P(94,72),P(104,96),P(118,118),(xc+138,ff(xc+138))]
rest=[(x,ff(x)) for x in range(xc+142,W+1,4)]
wave_d=smooth([(x,ff(x)) for x in range(0,1080,4)]+back[:-1]+outer)+smooth(down).replace("M","L",1)+smooth(rest).replace("M","L",1)+f"L{W} {H}L0 {H}Z"
inner=[P(94,72),P(98,52),P(92,32),P(76,16),P(54,10),P(34,16),P(20,32)]
facel=[P(20,32),P(18,58),P(30,90),P(56,116),P(96,134),(xc+138,ff(xc+138)+2)]
hollow=smooth(inner)+smooth(facel).replace("M","L",1)+f"L{xc+118} {yc+118}L{xc+104} {yc+96}Z"
rim_out=[P(-34,26),P(-14,8),P(0,0),P(22,-12),P(50,-16),P(78,-8),P(100,10),P(110,36),P(106,60),P(94,72)]
rim_in=[P(94,72),P(100,58),P(100,38),P(88,18),P(66,4),P(40,0),P(16,6),P(-4,14),P(-34,26)]
rim=smooth(rim_out)+smooth(rim_in).replace("M","L",1)+"Z"
# replace the plain front layer drawn above with this one
svg=[l for l in svg if not l.startswith(f'<path fill="{NAVY}" d="M0')]
k=[j for j,l in enumerate(svg) if 'url(#cf)' in l][0]
svg.insert(k,f'<path fill="{NAVY}" d="{wave_d}"/>')
big=[f'<defs><linearGradient id="fg" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="{LIGHT}"/><stop offset=".6" stop-color="{DEEP}"/><stop offset="1" stop-color="{NAVY}"/></linearGradient></defs>',
 f'<path fill="url(#fg)" d="{hollow}"/>',
 f'<g fill="none" stroke="{FOAM}" stroke-opacity=".3" stroke-width="1.3" stroke-linecap="round"><path d="M{xc+30} {yc+46}C{xc+36} {yc+80} {xc+56} {yc+104} {xc+88} {yc+120}"/><path d="M{xc+44} {yc+30}C{xc+50} {yc+66} {xc+70} {yc+92} {xc+100} {yc+108}"/><path d="M{xc+62} {yc+24}C{xc+70} {yc+54} {xc+82} {yc+76} {xc+104} {yc+92}"/></g>',
 f'<path fill="{FOAM}" d="{rim}"/>']
for (dx,dy,L) in [(108,28,15),(110,50,14),(102,68,12),(92,80,10)]:
    x,y=xc+dx,yc+dy
    big.append(f'<path fill="none" stroke="{FOAM}" stroke-width="4" stroke-linecap="round" d="M{x-L*0.5:.1f} {y-L*0.4:.1f}C{x+L*0.3:.1f} {y-L*0.6:.1f} {x+L*0.8:.1f} {y+L*0.1:.1f} {x+L*0.15:.1f} {y+L*0.6:.1f}"/>')
for (dx,dy,r) in [(128,8,3),(136,30,2.2),(132,52,1.6),(120,-6,2.4),(144,14,1.4),(126,92,1.8)]:
    big.append(f'<circle cx="{xc+dx}" cy="{yc+dy}" r="{r}" fill="{FOAM}"/>')
big.append(f'<path fill="{FOAM}" opacity=".9" d="M{xc+96} {yc+128}C{xc+120} {yc+136} {xc+140} {yc+138} {W} {yc+138}L{W} {yc+146}C{xc+130} {yc+146} {xc+110} {yc+142} {xc+96} {yc+134}Z"/>')
big.append(f'<image href="SURF" x="{xc+8}" y="{yc+20}" width="100" height="112"/>')
svg.extend(big)
svg.append('</svg>')
open("sea.svg","w").write("\n".join(svg))
