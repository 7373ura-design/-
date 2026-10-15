// NAMI illustration edition: Canva-importable HTML (editable text). Artwork is inserted in Canva afterwards:
//  - covers: one 2:1 panorama, 3240x1620 at top -180, left -1080*i
//  - hero pages: one 3:2 image at 0,0 1080x720
const fs = require('fs');
const path = require('path');
const posts = JSON.parse(JSON.stringify(require('./slides2').posts));
const SHORT = {
  'Waves': 'Some days are calm, some are full. A home should hold you through every season of life — and still feel like yours.',
  'Side by Side': 'Japan and Australia. Old and new. Nature and architecture. We let each keep its character — and find the balance between them.',
  'A Name We<br>Carry With Care': 'A name that holds what we believe a home should be: calm yet changing, full of memories. A promise to design every space with care.',
  'Backed by 20+ Years<br>of Building Homes': 'NAMI grows from our connection with Japan Homes — over 20 years of building beautiful, practical homes across Australia and New Zealand.',
  'More Than a Style': 'Often described as Japanese meets Scandinavian. For NAMI, it means Japanese principles, reinterpreted for Australian life.',
  'What We Grew Up With': 'Emptiness as part of the design. Soft light through paper screens. Natural materials. Small spaces, used wisely.',
  'What We Found Here': 'Homes open to the garden. Sunlight in every room. Decks for long evenings. A way of living shaped by the land and climate.',
  'Learn From the Past,<br>Create What’s Next': 'Knowing both Japan and Australia, we don’t copy one into the other. We design a new way of living that belongs here.',
  'Our First 3 Homes': 'We’re looking for three Sydney homes to be our very first projects — designed together with the people who live in them.',
  'Listen. Learn.<br>Create. Grow.': 'NAMI is still growing. These first homes are how we listen, learn and grow — together with you.',
};
for (const list of Object.values(posts)) for (const p of list) if (SHORT[p.h]) p.body = SHORT[p.h];
const C = { bg: '#FBF6EC', navy: '#1D3F6E', red: '#E4552F', teal: '#2A8FB8', body: '#3C4B63', mute: '#7B8799', line: '#C9D3DF' };
const covers = {
  '01_what-is-nami': { n: '01', title: 'What is<br>NAMI?', sub: 'One name. Three meanings.' },
  '02_why-japandi': { n: '02', title: 'Why<br>Japandi?', sub: 'Japanese roots. Australian perspective.' },
  '03_founding-monitors': { n: '03', title: 'Founding<br>Monitors', sub: '3 homes. 3 stories.' },
};
const M = `font-family:'Shippori Mincho',Georgia,serif`, J = `font-family:'Jost',Helvetica,sans-serif`;
const abs = (t, l, w, extra) => `position:absolute;top:${t}px;left:${l}px;width:${w}px;margin:0;${extra}`;
const ICON = {
  wave: '<path d="M5 15c2.5-4 5.5-4 7 0s4.5 4 7 0"/><path d="M5 10c2.5-3 5.5-3 7 0s4.5 3 7 0"/>', pair: '<circle cx="9" cy="12" r="4"/><circle cx="15" cy="12" r="4"/>',
  house: '<path d="M4 11l8-6 8 6"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>', leaf: '<path d="M6 18C6 10 11 6 19 6c0 8-4 13-12 12z"/><path d="M6 18l7-7"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>',
  pin: '<path d="M12 21s6-6.5 6-11a6 6 0 10-12 0c0 4.5 6 11 6 11z"/><circle cx="12" cy="10" r="2"/>', people: '<circle cx="9" cy="9" r="3"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="10" r="2.4"/><path d="M15.5 14.5c3 0 5.5 1.6 5.5 4.5"/>',
  camera: '<rect x="3" y="7" width="18" height="12" rx="1"/><circle cx="12" cy="13" r="3.5"/><path d="M8 7l1.5-2h5L16 7"/>', chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  share: '<circle cx="6" cy="12" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><path d="M8 11l8-4M8 13l8 4"/>',
  link: '<path d="M10 14a4 4 0 006 0l3-3a4 4 0 00-6-6l-1 1"/><path d="M14 10a4 4 0 00-6 0l-3 3a4 4 0 006 6l1-1"/>', bookmark: '<path d="M7 4h10v16l-5-4-5 4z"/>',
  bell: '<path d="M6 17V11a6 6 0 0112 0v6l2 2H4z"/><path d="M10 21h4"/>', heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"/>',
  pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>', cal: '<rect x="4" y="6" width="16" height="14" rx="1"/><path d="M4 10h16M8 4v4M16 4v4"/>',
  hands: '<path d="M4 14c3 0 5 2 8 2s4-1 6-3"/><path d="M4 18c3 0 5 1.5 8 1.5S17 18 20 16"/><circle cx="12" cy="8" r="3"/>',
};
const icon = (n) => `<svg width="86" height="86" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="none" stroke="${C.navy}" stroke-width="1.5"/><g transform="translate(16 16) scale(1.333)" fill="none" stroke="${C.navy}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICON[n]}</g></svg>`;
const label = (t, y, x = 90, w = 900, align = 'center', num) => `<p style="${abs(y, x, w, `text-align:${align};${J};font-size:29px;letter-spacing:.28em;color:${C.navy}`)}">${num ? `<span style="color:${C.red}">${num}</span>&nbsp;&nbsp;` : ''}${t.toUpperCase()}</p>`;
const center = (t, txt, st) => `<p style="${abs(t, 90, 900, 'text-align:center;' + st)}">${txt}</p>`;
const sun = (t, l, r) => `<div style="${abs(t, l, r * 2, `height:${r * 2}px;border-radius:50%;background:${C.red}`)}"></div>`;

function pageHtml(s, n, total) {
  let h = '', y;
  if (s.cover) {
    h += label(`NAMI  ·  Part ${s.cover.n} / 03`, 80, 90, 800, 'left');
    h += `<p style="${abs(128, 90, 940, `${M};font-weight:500;font-size:128px;line-height:1.05;letter-spacing:.02em;color:${C.navy}`)}">${s.cover.title}</p>`;
    h += `<p style="${abs(410, 92, 940, `${J};font-size:34px;letter-spacing:.16em;color:${C.teal}`)}">${s.cover.sub.toUpperCase()}</p>`;
  } else if (s.t === 'hero') {
    y = 668;
    const [num, ...rest] = s.eb.split(' — ');
    h += label(rest.length ? rest.join(' — ') : num, y, 90, 900, 'center', rest.length ? num + '.' : null);
    const lines = s.h.split('<br>').length;
    h += center(y + 56, s.h, `${M};font-weight:500;font-size:84px;line-height:1.2;letter-spacing:.02em;color:${C.navy}`);
    y += 56 + lines * 101 + 16;
    h += center(y, s.sub, `${J};font-size:34px;letter-spacing:.12em;color:${C.teal}`);
    h += `<div style="${abs(y + 66, 510, 60, `height:2px;background:${C.red}`)}"></div>`;
    h += center(y + 96, s.body, `${M};font-size:34px;line-height:1.62;letter-spacing:.02em;color:${C.body}`);
  } else {
    const lines = s.h.split('<br>').length;
    const rowH = s.t === 'glance' ? 118 : 146;
    const block = (s.eb ? 62 : 0) + lines * 104 + 140 + s.rows.length * rowH + (s.foot ? 90 : 0);
    y = Math.max(110, Math.round((1260 - block) / 2));
    if (s.eb) { const [num, ...rest] = s.eb.split(' — '); h += label(rest.length ? rest.join(' — ') : num, y, 90, 900, 'center', rest.length ? num + '.' : null); y += 62; }
    h += center(y, s.h, `${M};font-weight:500;font-size:86px;line-height:1.18;letter-spacing:.01em;color:${C.navy}`); y += lines * 102 + 20;
    h += center(y, s.sub.toUpperCase(), `${J};font-size:30px;letter-spacing:.16em;color:${C.teal}`);
    h += `<div style="${abs(y + 62, 510, 60, `height:2px;background:${C.red}`)}"></div>`; y += 118;
    for (const r of s.rows) {
      if (s.t === 'glance') {
        h += `<p style="${abs(y, 130, 420, `${M};font-weight:500;font-size:44px;color:${C.navy}`)}">${r[0]}</p>`;
        h += `<p style="${abs(y + 8, 470, 480, `text-align:right;${J};font-size:34px;color:${C.body}`)}">${r[1]}</p>`;
        h += `<div style="${abs(y + 90, 130, 820, `height:1px;background:${C.line}`)}"></div>`;
      } else {
        const [a, t, d] = r;
        h += s.t === 'contents' ? `<p style="${abs(y + 4, 120, 100, `${J};font-size:46px;letter-spacing:.04em;color:${C.red}`)}">${a}.</p>`
          : s.letters ? `<p style="${abs(y - 6, 120, 90, `text-align:center;${M};font-weight:500;font-size:88px;color:${C.red}`)}">${a}</p>`
          : `<div style="${abs(y, 120, 80, '')}">${icon(a)}</div>`;
        h += `<p style="${abs(y - 4, 230, 760, `${M};font-weight:500;font-size:44px;color:${C.navy}`)}">${t}</p>`;
        h += `<p style="${abs(y + 58, 230, 760, `${J};font-size:33px;color:${C.body}`)}">${d}</p>`;
        h += `<div style="${abs(y + rowH - 18, 120, 840, `height:1px;background:${C.line}`)}"></div>`;
      }
      y += rowH;
    }
    if (s.foot) h += center(y + 18, s.foot, `${M};font-size:33px;line-height:1.5;color:${C.mute}`);
  }
  if (!s.cover && s.t !== 'hero') h += sun(64, 940, 28);
  h += `<p style="${abs(1278, 90, 900, `text-align:center;${J};font-size:24px;letter-spacing:.3em;color:${C.mute}`)}">NAMI  —  ${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}</p>`;
  return `<section data-document-role="page" data-label="${n}" style="position:relative;width:1080px;height:1350px;overflow:hidden;background:${C.bg}">${h}</section>`;
}

const out = path.join(__dirname, '../canva5');
fs.mkdirSync(out, { recursive: true });
for (const [dir, list] of Object.entries(posts)) {
  const all = [{ cover: covers[dir] }, ...list];
  fs.writeFileSync(path.join(out, dir + '.html'), `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500&family=Jost:wght@400&display=swap" rel="stylesheet">
<style>body{margin:0}</style></head><body>${all.map((s, i) => pageHtml(s, i + 1, all.length)).join('\n')}</body></html>`);
}
