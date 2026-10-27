# Separate transparent icon PNGs (and a plain washi background) so the
# icons can be moved in Canva on their own.
SEND='<path d="M22 3 9.5 13.5M22 3l-7 18-5.5-7.5L2 10z"/>'
FOLLOW='<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7M19 8v6M16 11h6"/>'
SAVE='<path d="M6 3h12v18l-6-5-6 5z"/>'
SHARE='<path d="M4 12v8h16v-8M12 3v12M7 8l5-5 5 5"/>'
for n,s in [("dm",SEND),("follow",FOLLOW),("save",SAVE),("share",SHARE)]:
  open(f"icon_{n}.html","w").write(f'''<!doctype html><html><head><meta charset=utf-8><style>
*{{margin:0;padding:0}}html,body{{background:transparent}}
svg{{display:block;width:44px;height:44px;fill:none;stroke:#1e3a5c;stroke-width:1.3;stroke-linejoin:round;stroke-linecap:round}}
</style></head><body><svg viewBox="0 0 24 24">{s}</svg></body></html>''')
