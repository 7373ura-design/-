// SVG illustration helpers — flat ukiyo-e / Japandi style in NAMI brand colours.
const C = {
  bg: '#FAF5EA', cream: '#FFFBF2', navy: '#1F4E7A', deep: '#173B5E', teal: '#3F93B8',
  aqua: '#7BBCC9', coral: '#E8603F', pine: '#2F5D50', leaf: '#4F8A6E', wood: '#C8925E',
  plaster: '#F1E4CC', sand: '#E9D9BC',
};

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// A band of breaking waves: each crest rises, hooks forward and drops.
function waveBand({ x0, x1, y, amp, wl, fill, foam = C.cream, bottom, phase = 0, foamW = 5 }) {
  let d = `M ${x0 - wl} ${bottom} L ${x0 - wl} ${y}`;
  let foamD = '';
  for (let x = x0 - wl + phase; x < x1 + wl; x += wl) {
    const a = amp;
    d += ` C ${x + wl * 0.28} ${y - a * 0.9}, ${x + wl * 0.55} ${y - a * 1.25}, ${x + wl * 0.74} ${y - a * 0.85}`;
    d += ` Q ${x + wl * 0.79} ${y - a * 0.45}, ${x + wl * 0.69} ${y - a * 0.38}`;
    d += ` Q ${x + wl * 0.86} ${y - a * 0.05}, ${x + wl} ${y}`;
    foamD += ` M ${x + wl * 0.18} ${y - a * 0.62} C ${x + wl * 0.36} ${y - a * 1.05}, ${x + wl * 0.6} ${y - a * 1.1}, ${x + wl * 0.7} ${y - a * 0.72}`;
  }
  d += ` L ${x1 + wl} ${bottom} Z`;
  return `<path d="${d}" fill="${fill}"/>` +
    (foam ? `<path d="${foamD}" fill="none" stroke="${foam}" stroke-width="${foamW}" stroke-linecap="round" opacity=".9"/>` : '');
}

// Hokusai-like great wave curling to the right. (ox, oy) = base-left, s = scale.
function greatWave(ox, oy, s = 1, seed = 7) {
  const P = (x, y) => `${ox + x * s} ${oy + y * s}`;
  const body = `M ${P(0, 0)}
    C ${P(150, -20)}, ${P(250, -200)}, ${P(330, -360)}
    C ${P(390, -470)}, ${P(520, -540)}, ${P(640, -500)}
    C ${P(730, -470)}, ${P(760, -380)}, ${P(700, -330)}
    C ${P(670, -305)}, ${P(630, -320)}, ${P(640, -350)}
    C ${P(600, -380)}, ${P(520, -360)}, ${P(490, -280)}
    C ${P(450, -170)}, ${P(520, -60)}, ${P(700, 0)} Z`;
  const inner = `M ${P(120, 0)}
    C ${P(230, -40)}, ${P(300, -200)}, ${P(370, -330)}
    C ${P(420, -420)}, ${P(510, -470)}, ${P(600, -455)}
    C ${P(520, -430)}, ${P(450, -370)}, ${P(420, -280)}
    C ${P(390, -170)}, ${P(430, -70)}, ${P(560, 0)} Z`;
  const core = `M ${P(230, 0)}
    C ${P(300, -60)}, ${P(340, -170)}, ${P(380, -260)}
    C ${P(370, -160)}, ${P(390, -70)}, ${P(450, 0)} Z`;
  // foam claws along the crest
  let claws = '';
  const tips = [[640, -500, 700, -440], [600, -515, 650, -470], [540, -525, 590, -490], [700, -470, 735, -400]];
  for (const [x, y, x2, y2] of tips) {
    claws += `<path d="M ${P(x - 40, y + 30)} Q ${P(x, y - 20)}, ${P(x2, y2)} Q ${P(x + 5, y + 5)}, ${P(x - 40, y + 30)} Z" fill="${C.cream}"/>`;
  }
  const crest = `M ${P(300, -330)} C ${P(370, -470)}, ${P(500, -545)}, ${P(640, -505)} C ${P(720, -480)}, ${P(750, -400)}, ${P(705, -340)}`;
  const r = rng(seed);
  let spray = '';
  for (let i = 0; i < 26; i++) {
    const t = r();
    const x = 560 + t * 260 + r() * 40, y = -540 + t * 260 - r() * 60;
    spray += `<circle cx="${ox + x * s}" cy="${oy + y * s}" r="${(4 + r() * 14) * s}" fill="${i % 3 ? C.cream : C.aqua}"/>`;
  }
  return `<g>
    <path d="${body}" fill="${C.navy}"/>
    <path d="${inner}" fill="${C.teal}"/>
    <path d="${core}" fill="${C.aqua}"/>
    <path d="${crest}" fill="none" stroke="${C.cream}" stroke-width="${14 * s}" stroke-linecap="round"/>
    ${claws}${spray}
    <path d="M ${P(470, -120)} C ${P(470, -220)}, ${P(510, -300)}, ${P(570, -330)}" fill="none" stroke="${C.cream}" stroke-width="${6 * s}" stroke-linecap="round" opacity=".8"/>
  </g>`;
}

function sun(cx, cy, r) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.coral}"/>`;
}

function cloud(x, y, w, h = 26, fill = C.bg) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}"/>`;
}

function palm(x, y, h, lean = 1, col = C.pine) {
  const tx = x + lean * h * 0.25, ty = y - h;
  let f = `<path d="M ${x} ${y} Q ${x + lean * h * 0.05} ${y - h * 0.6}, ${tx} ${ty}" fill="none" stroke="#7A5A3E" stroke-width="${h * 0.07}" stroke-linecap="round"/>`;
  const angs = [-160, -125, -90, -55, -20, 15, 200];
  for (const a of angs) {
    const rad = a * Math.PI / 180, L = h * 0.48;
    const ex = tx + Math.cos(rad) * L, ey = ty + Math.sin(rad) * L * 0.75 + L * 0.25;
    const mx = tx + Math.cos(rad) * L * 0.5, my = ty + Math.sin(rad) * L * 0.5 - L * 0.12;
    f += `<path d="M ${tx} ${ty} Q ${mx} ${my - L * 0.12}, ${ex} ${ey} Q ${mx} ${my + L * 0.1}, ${tx} ${ty} Z" fill="${col}"/>`;
  }
  return f;
}

function pine(x, y, s = 1) {
  const P = (a, b) => `${x + a * s} ${y + b * s}`;
  return `<path d="M ${P(0, 0)} C ${P(-10, -80)}, ${P(30, -140)}, ${P(-20, -220)} M ${P(5, -110)} Q ${P(60, -140)}, ${P(110, -150)} M ${P(-15, -170)} Q ${P(-70, -190)}, ${P(-120, -200)}" fill="none" stroke="#5C4632" stroke-width="${12 * s}" stroke-linecap="round"/>
    <ellipse cx="${x + 110 * s}" cy="${y - 165 * s}" rx="${85 * s}" ry="${30 * s}" fill="${C.pine}"/>
    <ellipse cx="${x - 120 * s}" cy="${y - 215 * s}" rx="${80 * s}" ry="${28 * s}" fill="${C.pine}"/>
    <ellipse cx="${x - 20 * s}" cy="${y - 245 * s}" rx="${100 * s}" ry="${34 * s}" fill="${C.pine}"/>
    <ellipse cx="${x - 10 * s}" cy="${y - 258 * s}" rx="${70 * s}" ry="${16 * s}" fill="${C.leaf}"/>
    <ellipse cx="${x + 120 * s}" cy="${y - 176 * s}" rx="${55 * s}" ry="${12 * s}" fill="${C.leaf}"/>
    <ellipse cx="${x - 112 * s}" cy="${y - 226 * s}" rx="${50 * s}" ry="${11 * s}" fill="${C.leaf}"/>`;
}

// Japandi house: plaster body, timber slats, big glass, low roof with deep eaves, timber deck.
function house(x, y, w, h, roof = 'gable') {
  const top = y - h;
  let r;
  if (roof === 'gable') {
    r = `<path d="M ${x - w * 0.16} ${top + 6} L ${x + w / 2} ${top - h * 0.42} L ${x + w * 1.16} ${top + 6} L ${x + w * 1.16} ${top + 20} L ${x + w / 2} ${top - h * 0.42 + 16} L ${x - w * 0.16} ${top + 20} Z" fill="${C.navy}"/>
         <path d="M ${x} ${top + 8} L ${x + w / 2} ${top - h * 0.42 + 18} L ${x + w} ${top + 8} Z" fill="${C.plaster}"/>`;
  } else {
    r = `<path d="M ${x - w * 0.14} ${top - h * 0.26} L ${x + w * 1.14} ${top + 4} L ${x + w * 1.14} ${top + 18} L ${x - w * 0.14} ${top - h * 0.26 + 14} Z" fill="${C.navy}"/>
         <path d="M ${x} ${top - h * 0.23 + 14} L ${x + w} ${top + 6} L ${x + w} ${top + 10} L ${x} ${top + 10} Z" fill="${C.plaster}"/>`;
  }
  const slatX = x + w * 0.64, slatW = w * 0.36;
  let slats = '';
  for (let i = 1; i < 7; i++) slats += `<line x1="${slatX + slatW * i / 7}" y1="${top + 10}" x2="${slatX + slatW * i / 7}" y2="${y}" stroke="#A8743F" stroke-width="2"/>`;
  return `<g>
    <rect x="${x}" y="${top + 8}" width="${w}" height="${h - 8}" fill="${C.plaster}"/>
    <rect x="${slatX}" y="${top + 10}" width="${slatW}" height="${h - 10}" fill="${C.wood}"/>${slats}
    <rect x="${x + w * 0.08}" y="${top + h * 0.28}" width="${w * 0.48}" height="${h * 0.72}" fill="${C.aqua}"/>
    <line x1="${x + w * 0.32}" y1="${top + h * 0.28}" x2="${x + w * 0.32}" y2="${y}" stroke="${C.navy}" stroke-width="3"/>
    <rect x="${x + w * 0.08}" y="${top + h * 0.28}" width="${w * 0.48}" height="${h * 0.72}" fill="none" stroke="${C.navy}" stroke-width="3"/>
    <circle cx="${x + w * 0.2}" cy="${top + h * 0.4}" r="${h * 0.05}" fill="#FFE7B0" opacity=".9"/>
    ${r}
    <rect x="${x - w * 0.12}" y="${y - 6}" width="${w * 1.24}" height="12" fill="#A8743F"/>
  </g>`;
}

function paper(w, h) {
  return `<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .35  0 0 0 0 .3  0 0 0 0 .25  0 0 0 .07 0"/></filter>
  <rect width="${w}" height="${h}" filter="url(#grain)"/>`;
}

module.exports = { C, rng, waveBand, greatWave, sun, cloud, palm, pine, house, paper };
