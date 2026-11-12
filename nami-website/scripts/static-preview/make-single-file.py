"""One-file copy of the static preview, for sending to someone to open on a computer.

    python3 scripts/static-preview/make-single-file.py <preview folder> <out.html>

Every page, the CSS, the scripts and the images go into a single HTML file, so it
opens with a double-click (even straight from an email or a zip) with no other
files beside it. Pages are switched by the address's #page=... part; each switch
reloads the file so the page scripts start fresh.
"""
import base64, json, mimetypes, os, re, sys

SRC, OUT = sys.argv[1], sys.argv[2]
read = lambda p: open(os.path.join(SRC, p), encoding="utf-8").read()
pages = sorted(f for f in os.listdir(SRC) if f.endswith(".html"))

images = {}
def img(m):
    path = m.group(1)
    if path not in images:
        mime = mimetypes.guess_type(path)[0] or "image/jpeg"
        images[path] = f"data:{mime};base64," + base64.b64encode(open(os.path.join(SRC, path), "rb").read()).decode()
    return f'data-nami-src="{path}"'

def link(m):
    href = m.group(1)
    if href == "./": href = "index.html"
    page, _, at = href.partition("#")
    if page not in pages: return m.group(0)
    return f'href="#page={page}' + (f"&at={at}" if at else "") + '"'

templates, meta = [], {}
for p in pages:
    t = read(p)
    title = re.search(r"<title>(.*?)</title>", t, re.S).group(1)
    lang = re.search(r'setAttribute\("data-lang","([^"]+)"\)', t).group(1)
    if p == "index.html":
        body = t[t.index("</script>", t.index('setAttribute("data-lang"')) + 9:]
    else:
        body = re.search(r"<body[^>]*>(.*)</body>", t, re.S).group(1)
    body = re.sub(r'<script src="(site|js/nami)\.js"></script>', "", body)
    body = re.sub(r'src="(images/[^"]+)"', img, body)
    body = re.sub(r'href="([^"]+)"', link, body)
    meta[p] = {"title": title, "lang": lang}
    templates.append(f'<template id="page:{p}">{body}</template>')

cls = re.search(r'className\+=" ([^"]*)"', read("index.html")).group(1)
site_js = read("site.js").replace(
    "location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)))",
    "window.NAMI_AT && document.getElementById(window.NAMI_AT)")
router = """
(function(){
  var q = {}; location.hash.replace(/^#/, "").split("&").forEach(function(kv){ var i = kv.indexOf("="); if (i > 0) q[kv.slice(0, i)] = decodeURIComponent(kv.slice(i + 1)); });
  var page = PAGES[q.page] ? q.page : "index.html";
  var tpl = document.getElementById("page:" + page);
  document.body.appendChild(tpl.content.cloneNode(true));
  document.querySelectorAll("[data-nami-src]").forEach(function(el){ el.src = IMAGES[el.getAttribute("data-nami-src")]; });
  var d = document.documentElement;
  d.setAttribute("data-lang", PAGES[page].lang); d.lang = PAGES[page].lang === "ja" ? "ja" : "en-AU";
  document.title = PAGES[page].title;
  window.NAMI_AT = q.at || "";
  window.addEventListener("hashchange", function(){ location.reload(); });
})();
"""
html = f"""<!doctype html>
<html lang="en-AU" class="js {cls}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light">
<title>NAMI</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&display=swap">
<style>{read("site.css")}</style>
</head><body>
{"".join(templates)}
<script>var PAGES={json.dumps(meta, ensure_ascii=False)};var IMAGES={json.dumps(images)};{router}</script>
<script>{site_js}</script>
<script>{read("js/nami.js")}</script>
</body></html>
"""
open(OUT, "w", encoding="utf-8").write(html)
print(f"{len(pages)} pages, {len(images)} images, {len(html)/1e6:.1f} MB")
