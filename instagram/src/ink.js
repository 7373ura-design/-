// Watercolour / sumi-ink illustration helpers for the washi edition.
const K = {
  paper: '#F4EEE3', sumi: '#2E2A26', ai: '#2C4A6B', hanada: '#4F7FA0', mizu: '#9FBFCC',
  shu: '#C25B43', kin: '#A27B4F', matsu: '#4E6B55', gum: '#8A9C82', wood: '#B98D62', sand: '#E3D3B8',
  body: '#5E544B', mute: '#A08A70',
};

const defs = `
<filter id="wash" x="-10%" y="-10%" width="120%" height="120%">
  <feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="3" seed="4" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G" result="d"/>
  <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="9" result="g"/>
  <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.1 1.35" result="ga"/>
  <feComposite in="d" in2="ga" operator="in" result="t"/>
  <feGaussianBlur in="t" stdDeviation=".6"/>
</filter>
<filter id="ink" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="2" seed="2" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="3.5" xChannelSelector="R" yChannelSelector="G"/>
</filter>
<filter id="soft"><feGaussianBlur stdDeviation="18"/></filter>
<linearGradient id="bokashiAi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${K.ai}" stop-opacity=".95"/><stop offset="1" stop-color="${K.ai}" stop-opacity=".55"/></linearGradient>
<linearGradient id="bokashiHana" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${K.hanada}" stop-opacity=".9"/><stop offset="1" stop-color="${K.hanada}" stop-opacity=".45"/></linearGradient>
<linearGradient id="bokashiMizu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${K.mizu}" stop-opacity=".85"/><stop offset="1" stop-color="${K.mizu}" stop-opacity=".35"/></linearGradient>
<linearGradient id="mtn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${K.hanada}" stop-opacity=".55"/><stop offset="1" stop-color="${K.hanada}" stop-opacity="0"/></linearGradient>
<linearGradient id="mtn2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${K.ai}" stop-opacity=".6"/><stop offset="1" stop-color="${K.ai}" stop-opacity=".05"/></linearGradient>
<radialGradient id="sun" cx=".42" cy=".4" r=".7"><stop offset="0" stop-color="${K.shu}" stop-opacity=".8"/><stop offset=".85" stop-color="${K.shu}" stop-opacity=".95"/><stop offset="1" stop-color="${K.shu}" stop-opacity=".7"/></radialGradient>
<radialGradient id="glow"><stop offset="0" stop-color="#F6D9A6" stop-opacity=".9"/><stop offset="1" stop-color="#F6D9A6" stop-opacity="0"/></radialGradient>
`;

function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

const W = (inner, extra = '') => `<g filter="url(#wash)" style="mix-blend-mode:multiply" ${extra}>${inner}</g>`;
const I = inner => `<g filter="url(#ink)">${inner}</g>`;

function sun(cx, cy, r) { return W(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#sun)"/>`); }

// kasumi: horizontal mist bands drawn in paper colour over things
function kasumi(x, y, w, h = 34, op = .92) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${K.paper}" opacity="${op}"/>`;
}

function mountains(x0, x1, y, h, fill = 'url(#mtn)', seed = 1) {
  const r = rng(seed); let d = `M ${x0} ${y}`; let x = x0;
  while (x < x1) { const w = 140 + r() * 260; const pk = h * (.4 + r() * .6); d += ` Q ${x + w * .5} ${y - pk * 2}, ${x + w} ${y - r() * h * .15}`; x += w; }
  d += ` L ${x1} ${y + 40} L ${x0} ${y + 40} Z`;
  return W(`<path d="${d}" fill="${fill}"/>`);
}

// woodblock-style breaking waves band: wash fill + fine ink outline + foam hooks
function waves({ x0, x1, y, amp, wl, fill, line = K.ai, bottom, phase = 0, foam = true }) {
  let d = `M ${x0 - wl} ${bottom} L ${x0 - wl} ${y}`, out = '', fd = '';
  for (let x = x0 - wl + phase; x < x1 + wl; x += wl) {
    const a = amp;
    const seg = ` C ${x + wl * .28} ${y - a * .9}, ${x + wl * .55} ${y - a * 1.25}, ${x + wl * .74} ${y - a * .85} Q ${x + wl * .79} ${y - a * .45}, ${x + wl * .69} ${y - a * .38} Q ${x + wl * .86} ${y - a * .05}, ${x + wl} ${y}`;
    d += seg;
    out += `M ${x} ${y}` + seg + ' ';
    fd += `M ${x + wl * .2} ${y - a * .55} C ${x + wl * .36} ${y - a * .95}, ${x + wl * .58} ${y - a * 1.02}, ${x + wl * .68} ${y - a * .7} `;
    fd += `M ${x + wl * .3} ${y - a * .3} C ${x + wl * .42} ${y - a * .6}, ${x + wl * .55} ${y - a * .62}, ${x + wl * .62} ${y - a * .45} `;
  }
  d += ` L ${x1 + wl} ${bottom} Z`;
  return `<path d="${d}" fill="${K.paper}"/>` + W(`<path d="${d}" fill="${fill}"/>`) +
    I(`<path d="${out}" fill="none" stroke="${line}" stroke-width="2.2" stroke-linecap="round" opacity=".85"/>` +
      (foam ? `<path d="${fd}" fill="none" stroke="${K.paper}" stroke-width="3" stroke-linecap="round" opacity=".9"/>` : ''));
}

function greatWave(ox, oy, s = 1, seed = 11) {
  const P = (x, y) => `${ox + x * s} ${oy + y * s}`;
  const body = `M ${P(0, 0)} C ${P(150, -20)}, ${P(250, -200)}, ${P(330, -360)} C ${P(390, -470)}, ${P(520, -540)}, ${P(640, -500)} C ${P(730, -470)}, ${P(760, -380)}, ${P(700, -330)} C ${P(670, -305)}, ${P(630, -320)}, ${P(640, -350)} C ${P(600, -380)}, ${P(520, -360)}, ${P(490, -280)} C ${P(450, -170)}, ${P(520, -60)}, ${P(700, 0)} Z`;
  const inner = `M ${P(120, 0)} C ${P(230, -40)}, ${P(300, -200)}, ${P(370, -330)} C ${P(420, -420)}, ${P(510, -470)}, ${P(600, -455)} C ${P(520, -430)}, ${P(450, -370)}, ${P(420, -280)} C ${P(390, -170)}, ${P(430, -70)}, ${P(560, 0)} Z`;
  const r = rng(seed); let spray = '';
  for (let i = 0; i < 30; i++) { const t = r(); spray += `<circle cx="${ox + (590 + t * 220 + r() * 40) * s}" cy="${oy + (-530 + t * 230 - r() * 50) * s}" r="${(3 + r() * 9) * s}" fill="${K.paper}" stroke="${K.ai}" stroke-width="1.2"/>`; }
  let claws = '';
  for (const [x, y, x2, y2] of [[640, -500, 700, -440], [600, -515, 650, -470], [545, -522, 592, -488], [700, -470, 735, -400]])
    claws += `<path d="M ${P(x - 40, y + 30)} Q ${P(x, y - 20)}, ${P(x2, y2)} Q ${P(x + 5, y + 5)}, ${P(x - 40, y + 30)} Z" fill="${K.paper}" stroke="${K.ai}" stroke-width="1.6"/>`;
  let lines = '';
  for (let i = 0; i < 6; i++) lines += `<path d="M ${P(180 + i * 40, -10)} C ${P(250 + i * 35, -120 - i * 20)}, ${P(330 + i * 30, -260 - i * 25)}, ${P(420 + i * 30, -360 - i * 18)}" fill="none" stroke="${K.paper}" stroke-width="${2 * s}" opacity=".6"/>`;
  return `<path d="${body}" fill="${K.paper}"/>` + W(`<path d="${body}" fill="url(#bokashiAi)"/><path d="${inner}" fill="url(#bokashiHana)"/>`) +
    I(`<path d="${body}" fill="none" stroke="${K.ai}" stroke-width="2.4"/>${lines}
       <path d="M ${P(300, -330)} C ${P(370, -470)}, ${P(500, -545)}, ${P(640, -505)} C ${P(720, -480)}, ${P(750, -400)}, ${P(705, -340)}" fill="none" stroke="${K.paper}" stroke-width="${11 * s}" stroke-linecap="round"/>
       ${claws}${spray}`);
}

// Japandi house in fine ink line + light washes
function house(x, y, w, h, roof = 'gable', glow = true) {
  const top = y - h; const lw = 2.4;
  let rf;
  if (roof === 'gable') rf = `M ${x - w * .16} ${top + 8} L ${x + w / 2} ${top - h * .42} L ${x + w * 1.16} ${top + 8}`;
  else rf = `M ${x - w * .14} ${top - h * .22} L ${x + w * 1.14} ${top + 8}`;
  const rfFill = roof === 'gable'
    ? `M ${x - w * .16} ${top + 8} L ${x + w / 2} ${top - h * .42} L ${x + w * 1.16} ${top + 8} L ${x + w * 1.16} ${top + 22} L ${x + w / 2} ${top - h * .42 + 14} L ${x - w * .16} ${top + 22} Z`
    : `M ${x - w * .14} ${top - h * .22} L ${x + w * 1.14} ${top + 8} L ${x + w * 1.14} ${top + 22} L ${x - w * .14} ${top - h * .22 + 14} Z`;
  const sx = x + w * .64, sw = w * .36;
  let slats = ''; for (let i = 1; i < 8; i++) slats += `M ${sx + sw * i / 8} ${top + 14} L ${sx + sw * i / 8} ${y} `;
  const gx = x + w * .08, gy = top + h * .3, gw = w * .48, gh = h * .7;
  return (glow ? `<ellipse cx="${gx + gw / 2}" cy="${gy + gh / 2}" rx="${gw}" ry="${gh}" fill="url(#glow)"/>` : '') +
    W(`<rect x="${sx}" y="${top + 12}" width="${sw}" height="${h - 12}" fill="${K.wood}" opacity=".7"/>
       <rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" fill="${glow ? '#F2D7A4' : K.mizu}" opacity=".75"/>
       <path d="${rfFill}" fill="${K.ai}" opacity=".9"/>
       <rect x="${x - w * .12}" y="${y - 4}" width="${w * 1.24}" height="10" fill="${K.wood}" opacity=".8"/>`) +
    I(`<path d="M ${x} ${top + 12} L ${x} ${y} L ${x + w} ${y} L ${x + w} ${top + 12}" fill="none" stroke="${K.sumi}" stroke-width="${lw}"/>
       <path d="${rf}" fill="none" stroke="${K.sumi}" stroke-width="${lw}"/>
       <rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" fill="none" stroke="${K.sumi}" stroke-width="${lw * .8}"/>
       <path d="M ${gx + gw / 2} ${gy} L ${gx + gw / 2} ${y} ${slats}" stroke="${K.sumi}" stroke-width="1.2" opacity=".7"/>`);
}

function pine(x, y, s = 1) {
  const P = (a, b) => `${x + a * s} ${y + b * s}`;
  const pads = [[110, -165, 85, 28], [-120, -215, 80, 26], [-20, -248, 100, 32], [60, -100, 60, 20]];
  return I(`<path d="M ${P(0, 0)} C ${P(-14, -80)}, ${P(34, -140)}, ${P(-20, -220)} M ${P(5, -110)} Q ${P(60, -140)}, ${P(110, -150)} M ${P(-15, -170)} Q ${P(-70, -190)}, ${P(-120, -200)} M ${P(10, -70)} Q ${P(40, -90)}, ${P(60, -95)}" fill="none" stroke="${K.sumi}" stroke-width="${9 * s}" stroke-linecap="round"/>`) +
    W(pads.map(([a, b, rx, ry]) => `<ellipse cx="${x + a * s}" cy="${y + b * s}" rx="${rx * s}" ry="${ry * s}" fill="${K.matsu}" opacity=".85"/>`).join(''));
}

// eucalyptus / gum tree: pale trunk, loose canopy
function gum(x, y, s = 1, seed = 5) {
  const r = rng(seed); const P = (a, b) => `${x + a * s} ${y + b * s}`;
  let can = '';
  for (let i = 0; i < 16; i++) can += `<ellipse cx="${x + (r() - .5) * 220 * s}" cy="${y + (-300 - r() * 160) * s}" rx="${(40 + r() * 50) * s}" ry="${(22 + r() * 22) * s}" fill="${K.gum}" opacity="${.45 + r() * .3}"/>`;
  return W(can) + I(`<path d="M ${P(0, 0)} C ${P(-6, -120)}, ${P(14, -220)}, ${P(-10, -330)} M ${P(2, -200)} C ${P(40, -260)}, ${P(70, -300)}, ${P(90, -360)} M ${P(-6, -260)} C ${P(-50, -300)}, ${P(-70, -330)}, ${P(-90, -380)}" fill="none" stroke="#8C7B68" stroke-width="${7 * s}" stroke-linecap="round"/>`);
}

function hill(d, fill = K.matsu, op = .55) { return W(`<path d="${d}" fill="${fill}" opacity="${op}"/>`); }

function seal(x, y, size = 64, ch = '波') {
  return W(`<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="6" fill="${K.shu}"/>`) +
    `<text x="${x + size / 2}" y="${y + size * .74}" text-anchor="middle" font-family="Yuji Syuku, serif" font-size="${size * .66}" fill="${K.paper}">${ch}</text>`;
}

function enso(cx, cy, r) {
  return W(`<path d="M ${cx + r * .2} ${cy - r} A ${r} ${r} 0 1 1 ${cx - r * .55} ${cy - r * .83}" fill="none" stroke="${K.sumi}" stroke-width="${r * .16}" stroke-linecap="round" opacity=".88"/>`);
}

function shoji(x, y, w, h) {
  let g = '';
  for (let i = 1; i < 4; i++) g += `M ${x + w * i / 4} ${y} L ${x + w * i / 4} ${y + h} `;
  for (let j = 1; j < 6; j++) g += `M ${x} ${y + h * j / 6} L ${x + w} ${y + h * j / 6} `;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#FBF6EA"/>` + W(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#F6E6C4" opacity=".55"/>`) +
    I(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${K.wood}" stroke-width="10"/><path d="${g}" stroke="${K.wood}" stroke-width="4"/>`);
}

module.exports = { K, defs, rng, W, I, sun, kasumi, mountains, waves, greatWave, house, pine, gum, hill, seal, enso, shoji };
