# Background for the editable closing slide: icons, rule and illustration only.
# The heading and the four action lines are live Canva text placed over it.
R="/home/user/-/nami-website"
I=f"{R}/design/instagram/last/surfer-woodblock-cut.png"
SEND='<path d="M22 3 9.5 13.5M22 3l-7 18-5.5-7.5L2 10z"/>'
FOLLOW='<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7M19 8v6M16 11h6"/>'
SAVE='<path d="M6 3h12v18l-6-5-6 5z"/>'
SHARE='<path d="M4 12v8h16v-8M12 3v12M7 8l5-5 5 5"/>'
ys=[500,590,680,770]
icons="".join(f'<svg style="top:{y-28}px" viewBox="0 0 24 24">{s}</svg>' for s,y in zip([SEND,FOLLOW,SAVE,SHARE],ys))
open("final_bg.html","w").write(f'''<!doctype html><html><head><meta charset=utf-8><style>
*{{margin:0;padding:0}}body{{width:1080px;height:1350px}}
.s{{width:1080px;height:1350px;position:relative;background:#f4f1ec}}
svg{{position:absolute;left:250px;width:56px;height:56px;fill:none;stroke:#1e3a5c;stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round}}
.rule{{position:absolute;left:512px;top:385px;width:56px;height:1.5px;background:#1e3a5c;opacity:.5}}
.ill{{position:absolute;left:250px;bottom:60px;width:580px;height:387px;background:url(file://{I}) center/contain no-repeat;filter:saturate(.85)}}
</style></head><body><div class="s"><div class="rule"></div>{icons}<div class="ill"></div></div></body></html>''')
