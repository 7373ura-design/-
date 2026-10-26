L="/home/user/-/nami-website/public/images/logo/nami-logo.png"
open("final_last.html","w").write(f'''<!doctype html><html><head><meta charset=utf-8>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Jost:wght@400;500&display=block" rel="stylesheet"><style>
*{{margin:0;padding:0;box-sizing:border-box}}body{{width:1080px;height:1350px;background:#f4f1ec;color:#1e3a5c;font-family:Jost,sans-serif}}
.s{{width:1080px;height:1350px;padding:150px 110px 0;position:relative}}
h1{{font-family:'Playfair Display';font-weight:600;font-size:104px;line-height:1.08;letter-spacing:.01em}}
.lead{{font-size:34px;line-height:1.5;margin:44px 0 70px;color:#3d5570;max-width:820px}}
.row{{display:flex;align-items:baseline;border-top:2px solid rgba(30,58,92,.18);padding:30px 0}}
.row:last-of-type{{border-bottom:2px solid rgba(30,58,92,.18)}}
.k{{width:250px;font-weight:500;font-size:26px;letter-spacing:.22em;color:#e8553b}}
.v{{font-size:36px;line-height:1.3}}
.logo{{position:absolute;left:50%;bottom:110px;transform:translateX(-50%);width:300px}}
</style></head><body><div class="s">
<h1>NO QUESTION<br>IS TOO SMALL</h1>
<p class="lead">Thinking about your home, big change or small detail? We'd love to hear from you.</p>
<div class="row"><div class="k">DM</div><div class="v">@nami.studio_au</div></div>
<div class="row"><div class="k">EMAIL</div><div class="v">hello@nami-studio.com.au</div></div>
<div class="row"><div class="k">FOLLOW</div><div class="v">for more homes</div></div>
<div class="row"><div class="k">SAVE</div><div class="v">this post for your next project</div></div>
<img class="logo" src="file://{L}"></div></body></html>''')
