"""Static HTML preview of the site, as published to the claude.ai artifact.

  npm run build && npx next start -p 3200 &
  python3 scripts/static-preview/export.py /path/to/output

Fetches every page from the running server, strips the Next.js runtime, inlines
CSS, swaps next/font for Google Fonts and copies public/images. index.html is the
artifact's main page; the other pages, site.css, site.js and images are its files.
"""
import re, urllib.request, os, shutil
import sys
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.join(HERE,"..","..")
B=os.environ.get("NAMI_BASE","http://localhost:3200")
OUT=sys.argv[1] if len(sys.argv)>1 else os.path.join(ROOT,"..","nami-static-preview")
shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT)
get=lambda p: urllib.request.urlopen(B+p).read().decode()
routes={"/":"index.html","/about":"about.html","/services":"services.html","/projects":"projects.html","/contact":"contact.html"}
from importlib import import_module
import json
works=["new-lynn-house","remuera-renovation","glen-innes-unit","hillcrest-house"]
for s in works: routes[f"/works/{s}"]=f"works-{s}.html"

# CSS
home=get("/")
css=""
for href in re.findall(r'<link rel="stylesheet" href="([^"]+)"',home): css+=get(href)+"\n"
css=re.sub(r'@font-face\s*{[^}]*}','',css)
css+='''
html:root{--font-noto-serif-jp:"Noto Serif JP";--font-caslon:"Libre Caslon Text";--font-dm-sans:"DM Sans";color-scheme:light}
'''
open(f"{OUT}/site.css","w").write(css)

def link(m):
    q,path,frag=m.group(1),m.group(2),m.group(3) or ""
    p=path.split("?")[0]
    if p in routes: return f'href={q}{routes[p]}{frag}{q}'
    return m.group(0)

JS=open(os.path.join(HERE,"site.js")).read()
_i18n=open(os.path.join(ROOT,"src/lib/i18n.tsx")).read()
LANG_SCRIPT=re.search(r"export const languageScript = `(.*?)`;",_i18n,re.S).group(1)
for r,fn in routes.items():
    h=get(r)
    title=re.search(r"<title>(.*?)</title>",h).group(1)
    body=re.search(r"<body[^>]*>(.*)</body>",h,re.S).group(1)
    body=re.sub(r"<script\b.*?</script>","",body,flags=re.S)
    body=re.sub(r'<link [^>]*>',"",body)
    body=re.sub(r'href=(["\'])(/[^"\'#]*)(#[^"\']*)?\1',link,body)
    body=body.replace('href="#','href="#')
    from urllib.parse import unquote
    body=re.sub(r'\s(srcSet|srcset|sizes)="[^"]*"','',body)
    body=re.sub(r'src="/_next/image\?url=([^&"]+)[^"]*"',lambda m:'src="'+unquote(m.group(1)).lstrip('/')+'"',body)
    body=re.sub(r'src="/images/',r'src="images/',body)
    body=body.replace('action="javascript', 'data-x="')
    # No server in the preview: the booking form shows its confirmation without sending
    body=re.sub(r'(<form[^>]*\sdata-booking(="[^"]*")?)',r'\1 data-demo=""',body)
    htmlcls=re.search(r'<html[^>]*class="([^"]*)"',h).group(1)
    head=f'''<title>{title}</title>
<meta name="color-scheme" content="light">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500&family=Noto+Serif+JP:wght@400;500;600&display=swap">
<link rel="stylesheet" href="site.css">
<script>document.documentElement.classList.add("js");document.documentElement.className+=" {htmlcls}";</script>\n<script>{LANG_SCRIPT}</script>'''
    tail=f'<script src="site.js"></script><script src="js/nami.js"></script>'
    if fn=="index.html":
        doc=f"{head}\n{body}\n{tail}\n"
    else:
        doc=f'<!doctype html>\n<html lang="ja" class="{htmlcls}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">{head}</head><body>{body}{tail}</body></html>\n'
    open(f"{OUT}/{fn}","w").write(doc)
shutil.copytree(os.path.join(ROOT,"public/images"),f"{OUT}/images",ignore=shutil.ignore_patterns("*.md"))
import subprocess
shutil.copy(os.path.join(HERE,"site.js"),f"{OUT}/site.js")
shutil.copytree(os.path.join(ROOT,"public/js"),f"{OUT}/js")
print(len(routes),"pages")

# Post-process: link "/" to "./", and give the main page a charset for local viewing
for fn in os.listdir(OUT):
    if fn.endswith(".html"):
        p=os.path.join(OUT,fn); t=open(p).read().replace('href="index.html"','href="./"')
        if fn=="index.html" and not t.startswith('<meta charset'): t='<meta charset="utf-8">\n'+t
        open(p,"w").write(t)
