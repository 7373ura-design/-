// Washi edition panorama: 3240x1440 → three 1080x1440 covers.
// Left = post 03, middle = post 02, right = post 01 (post 01 → 02 → 03, grid shows newest on the left).
const fs = require('fs');
const path = require('path');
const A = require('./ink');
const { K } = A;
const { icon } = require('./icons');

const W = 3240, H = 1440;
const b64 = f => 'data:image/' + (f.endsWith('.jpg') ? 'jpeg' : 'png') + ';base64,' + fs.readFileSync(path.join(__dirname, '../assets', f)).toString('base64');

function art() {
  let s = '';
  // far mountains
  s += A.mountains(-40, 3300, 1010, 70, 'url(#mtn)', 3);
  // Fuji in the middle, behind the wave
  s += A.W(`<path d="M 1180 1010 L 1330 905 Q 1360 884 1390 905 L 1560 1010 Z" fill="url(#mtn2)"/>`);
  s += A.I(`<path d="M 1330 905 Q 1360 884 1390 905 L 1415 925 L 1395 921 L 1378 934 L 1360 920 L 1343 931 L 1312 920 Z" fill="${K.paper}" stroke="${K.ai}" stroke-width="1.4"/>`);
  // sun on the right + kasumi
  s += A.sun(2965, 925, 185);
  s += A.kasumi(2760, 905, 300, 24) + A.kasumi(2930, 965, 330, 20) + A.kasumi(2840, 860, 150, 14);
  // right island with a small house and gum trees
  s += A.hill(`M 2440 1040 C 2540 975, 2660 958, 2760 972 C 2880 945, 3000 960, 3100 990 C 3180 975, 3240 985, 3300 1000 L 3300 1050 L 2440 1050 Z`, K.ai, .55);
  s += A.house(2700, 995, 120, 64, 'gable');
  s += A.gum(2600, 1012, .42, 8) + A.gum(2880, 1005, .4, 12);
  // left hill with three homes
  s += A.hill(`M -40 1100 L -40 950 C 140 915, 300 908, 460 930 C 600 905, 760 912, 880 945 C 990 975, 1090 1010, 1220 1090 Z`, K.matsu, .5);
  s += A.hill(`M -40 1100 L -40 1010 C 200 990, 440 1000, 660 1015 C 840 1030, 1020 1050, 1200 1100 Z`, K.matsu, .55);
  s += A.house(130, 985, 190, 108, 'gable');
  s += A.house(450, 965, 170, 98, 'shed');
  s += A.house(745, 995, 150, 88, 'gable');
  s += A.pine(60, 1000, .55) + A.gum(395, 985, .36, 3) + A.gum(955, 1030, .42, 6);
  // sea
  s += A.W(`<rect x="0" y="1035" width="${W}" height="${H - 1035 + 80}" fill="url(#bokashiMizu)"/>`);
  s += A.waves({ x0: 0, x1: W, y: 1150, amp: 46, wl: 250, fill: 'url(#bokashiMizu)', bottom: H + 80, phase: 40 });
  s += A.greatWave(1240, 1330, .92, 11);
  s += A.waves({ x0: 0, x1: W, y: 1265, amp: 62, wl: 330, fill: 'url(#bokashiHana)', bottom: H + 80, phase: 120 });
  s += A.waves({ x0: 0, x1: W, y: 1375, amp: 46, wl: 230, fill: 'url(#bokashiAi)', bottom: H + 80, phase: 10 });
  return s;
}

const covers = [
  { n: '03', title: 'Founding<br>Monitors', sub: '3 homes. 3 stories.', items: [['gift', 'Free design', 'No design fee'], ['pin', 'Sydney homes', 'Owners or renters'], ['cal', 'Only 3 places', 'Applications open 05.11.2026']] },
  { n: '02', title: 'Why<br>Japandi?', sub: 'Japanese roots. Australian perspective.', items: [['leaf', 'Raised in Japan', 'Principles we grew up with'], ['sun', 'Living in Australia', 'A different way of home'], ['wave', 'Designing in between', 'Something new']] },
  { n: '01', title: 'What is<br>NAMI?', sub: 'One name. Three meanings.', items: [['wave', '波 Waves', 'Homes that move with life'], ['pair', '並 Side by Side', 'Different things, in balance'], ['house', 'N.A.M.I', 'Nest And Memories Inside']] },
];

const css = `
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;position:relative;background:url(${b64('washi_pano.jpg')});color:${K.sumi}}
svg{position:absolute;inset:0}
.p{position:absolute;top:0;width:1080px;height:${H}px;padding:110px 96px 0}
.brand{display:flex;align-items:center;gap:22px;font-family:'EB Garamond',serif;font-size:34px;letter-spacing:.06em;color:${K.body}}
.brand .ln{height:1px;width:90px;background:${K.kin};opacity:.7}
.brand b{font-weight:500;color:${K.kin};font-size:26px;letter-spacing:.2em}
.t{font-family:'EB Garamond',serif;font-weight:600;font-size:132px;line-height:.98;letter-spacing:-.005em;margin:26px 0 22px;color:#3B322B}
.sub{font-family:'EB Garamond',serif;font-style:italic;font-size:44px;color:${K.body};margin-bottom:34px}
.it{display:flex;gap:24px;align-items:center;margin-bottom:20px}
.it svg{position:static;width:58px;height:58px;flex:none}
.it b{display:block;font-family:'Alegreya Sans',sans-serif;font-weight:500;font-size:32px;color:#3B322B}
.it span{font-family:'Alegreya Sans',sans-serif;font-size:27px;color:${K.body}}
`;

module.exports = {
  W, H,
  html: `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;1,400&family=Alegreya+Sans:wght@400;500&family=Yuji+Syuku&display=swap" rel="stylesheet">
<style>${css}</style></head><body>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${A.defs}</defs>${art()}</svg>
${covers.map((c, i) => `<div class="p" style="left:${i * 1080}px">
  <div class="brand">NAMI <span class="ln"></span> <b>${c.n} / 03</b></div>
  <div class="t">${c.title}</div><div class="sub">${c.sub}</div>
  ${c.items.map(([ic, t, d]) => `<div class="it">${icon(ic)}<div><b>${t}</b><span>${d}</span></div></div>`).join('')}
</div>`).join('')}
</body></html>`,
};
