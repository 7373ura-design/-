// 3240x1440 panorama, split into three 1080x1440 (3:4) covers.
// Left = post 03, middle = post 02, right = post 01: post 01 → 02 → 03 and the
// profile grid (newest on the left) shows the picture in the right order.
const fs = require('fs');
const path = require('path');
const A = require('./art');
const { C } = A;

const W = 3240, H = 1440;
const asset = f => 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '../assets', f)).toString('base64');

function art() {
  let s = `<rect width="${W}" height="${H}" fill="${C.bg}"/>`;

  // sky: sun behind the right island, small sun dots, clouds
  s += A.sun(2860, 830, 270);
  s += A.cloud(2620, 790, 300, 30) + A.cloud(2900, 860, 340, 26) + A.cloud(2700, 920, 220, 22);
  s += A.sun(1960, 720, 26);
  s += A.cloud(1500, 760, 160, 18, '#EFE6D4');

  // distant mountains along the horizon (y ≈ 1040)
  s += `<path d="M 1180 1045 L 1560 1045 L 1480 990 L 1390 920 Q 1370 902 1350 920 L 1260 990 Z" fill="${C.teal}"/>
        <path d="M 1350 920 Q 1370 902 1390 920 L 1420 948 L 1400 942 L 1380 956 L 1360 940 L 1340 952 L 1320 948 Z" fill="${C.cream}"/>`;

  // right island + pavilion + palms
  s += `<path d="M 2440 1050 C 2520 990, 2600 960, 2700 975 C 2800 940, 2920 950, 3000 985 C 3100 960, 3200 975, 3300 1000 L 3300 1050 Z" fill="${C.navy}"/>
        <path d="M 2560 1050 C 2620 1010, 2700 1000, 2780 1012 C 2850 1000, 2920 1010, 2980 1050 Z" fill="${C.pine}"/>`;
  s += A.house(2760, 990, 120, 62, 'gable');
  s += A.palm(2660, 1030, 150, -1) + A.palm(2990, 1020, 180, 1) + A.palm(3080, 1030, 130, 1);

  // sea
  s += `<rect x="0" y="1040" width="${W}" height="${H - 1040}" fill="${C.aqua}"/>`;
  s += `<path d="M 0 1040 L ${W} 1040" stroke="${C.cream}" stroke-width="4" opacity=".7"/>`;

  // left shore: hill with three Japandi homes (3 homes. 3 stories.)
  s += `<path d="M -40 1110 L -40 880 C 120 840, 260 830, 420 860 C 560 820, 720 830, 860 880 C 980 910, 1100 1000, 1240 1110 Z" fill="${C.leaf}"/>
        <path d="M -40 1110 L -40 960 C 200 930, 420 950, 640 975 C 820 990, 1000 1030, 1180 1110 Z" fill="${C.pine}"/>`;
  s += A.house(110, 900, 210, 120, 'gable');
  s += A.house(440, 880, 190, 110, 'shed');
  s += A.house(740, 925, 170, 100, 'gable');
  s += A.palm(380, 900, 170, -1) + A.palm(680, 930, 150, 1) + A.palm(950, 965, 190, 1);
  s += A.pine(60, 920, 0.75);

  // mid-ground waves across all three panels
  s += A.waveBand({ x0: 0, x1: W, y: 1150, amp: 50, wl: 260, fill: C.teal, bottom: H, phase: 40 });
  // the great wave rises out of the middle panel and breaks towards the right
  s += A.greatWave(1230, 1320, 0.95, 11);
  s += A.waveBand({ x0: 0, x1: W, y: 1270, amp: 70, wl: 340, fill: C.navy, bottom: H, phase: 120, foamW: 6 });
  s += A.waveBand({ x0: 0, x1: W, y: 1380, amp: 50, wl: 240, fill: C.deep, bottom: H, phase: 10 });

  s += A.paper(W, H);
  return s;
}

const panels = [
  // left — post 03
  `<div class="eb"><b>03</b> NAMI FOUNDING MONITORS</div>
   <div class="hero en">3 homes.<br>3 stories.</div>
   <div class="badge">Applications open <b>05.11.2026</b></div>`,
  // middle — post 02
  `<div class="eb"><b>02</b> WHY JAPANDI?</div>
   <div class="hero jp">なぜ、日本人が<br>オーストラリアで<br>Japandiなのか。</div>
   <div class="sub">JAPANESE ROOTS.<br>AUSTRALIAN PERSPECTIVE.</div>`,
  // right — post 01
  `<div class="eb"><b>01</b> WHAT IS NAMI?</div>
   <img class="wm" src="${asset('wordmark.png')}">
   <div class="sub">NEST AND MEMORIES INSIDE</div>
   <div class="jp-m">NAMIとは何なのか。</div>`,
];

const css = `
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;position:relative;background:${C.bg};color:${C.navy}}
svg{position:absolute;inset:0}
.p{position:absolute;top:0;width:1080px;height:${H}px;padding:130px 100px 0}
.eb{font-family:'Josefin Sans',sans-serif;font-size:26px;letter-spacing:.32em;margin-bottom:56px}
.eb b{color:${C.coral};font-weight:600;margin-right:18px}
.hero{font-family:'Shippori Mincho',serif;font-weight:500;line-height:1.35}
.hero.jp{font-size:92px;letter-spacing:.05em}
.hero.en{font-size:150px;line-height:1.08;letter-spacing:.01em;margin:10px 0 50px}
.jp-m{font-family:'Shippori Mincho',serif;font-size:40px;letter-spacing:.14em;margin-top:30px}
.sub{font-family:'Josefin Sans',sans-serif;font-size:30px;letter-spacing:.34em;line-height:1.8;margin-top:40px}
.wm{width:780px;display:block;margin:30px 0 0 -10px}
.badge{display:inline-block;font-family:'Josefin Sans',sans-serif;font-size:28px;letter-spacing:.16em;border:2px solid ${C.navy};border-radius:999px;padding:18px 36px 14px}
.badge b{color:${C.coral};font-weight:600}
`;

module.exports = {
  W, H,
  html: `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&family=Shippori+Mincho:wght@500;600&display=swap" rel="stylesheet">
<style>${css}</style></head><body>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${art()}</svg>
${panels.map((p, i) => `<div class="p" style="left:${i * 1080}px">${p}</div>`).join('')}
</body></html>`,
};
