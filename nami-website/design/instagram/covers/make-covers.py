R="/home/user/-/nami-website/public/images"
H=[("new-lynn","COLOUR<br>AND CALM","New Home"),("remuera","OLD<br>MEETS<br>NEW","Renovation"),("glen-innes","INTO<br>THE<br>GARDEN","New Home"),("hillcrest","SIMPLY<br>QUIET","New Home")]
B='''<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=block" rel="stylesheet"><style>*{margin:0;padding:0}body{width:1080px;height:1350px}
.s{width:1080px;height:1350px;position:relative;overflow:hidden}.ph{position:absolute;inset:0;background-size:cover;background-position:center;filter:brightness(.5)}
.t{position:absolute;left:0;width:1080px;top:50%;transform:translateY(-55%);text-align:center;color:#fff;font-family:'Playfair Display';font-weight:600;font-size:150px;line-height:1.08;text-shadow:0 2px 18px rgba(0,0,0,.55)}
.sub{display:block;font-size:52px;letter-spacing:.2em;text-transform:uppercase;margin-top:48px}</style>'''
for f,t,s in H:
  open(f"final_{f}.html","w").write(f'<!doctype html><html><head><meta charset=utf-8>{B}</head><body><div class="s"><div class="ph" style="background-image:url(file://{R}/portfolio/{f}/01.jpg)"></div><div class="t">{t}<span class="sub">{s}</span></div></div></body></html>')
