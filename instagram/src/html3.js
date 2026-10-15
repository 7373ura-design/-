// Canva-importable HTML (one <section data-document-role="page"> per slide), text only.
// Artwork (Canva-generated washi + sumi-e images) is placed into the design afterwards.
const fs = require('fs');
const path = require('path');
const { posts } = require('./slides2');
const { icon } = require('./icons');
const C = { ink: '#3B322B', body: '#5E544B', mute: '#A08A70', kin: '#A27B4F' };
const covers = {
  '01_what-is-nami': { n: '01', title: 'What is NAMI?', sub: 'One name. Three meanings.' },
  '02_why-japandi': { n: '02', title: 'Why Japandi?', sub: 'Japanese roots. Australian perspective.' },
  '03_founding-monitors': { n: '03', title: 'Founding Monitors', sub: '3 homes. 3 stories.' },
};
const F = `font-family:'EB Garamond',Georgia,serif`, S = `font-family:'Alegreya Sans',Helvetica,sans-serif`;
const abs = (t, l, w, extra) => `position:absolute;top:${t}px;left:${l}px;width:${w}px;${extra}`;

function pageHtml(s, n, total) {
  let h = '', y;
  const center = (t, txt, st) => `<p style="${abs(t, 90, 900, 'text-align:center;margin:0;' + st)}">${txt}</p>`;
  if (s.cover) {
    h += `<p style="${abs(110, 96, 700, `margin:0;${S};font-size:24px;letter-spacing:.3em;color:${C.kin}`)}">NAMI · ${s.cover.n} / 03</p>`;
    h += `<p style="${abs(160, 96, 900, `margin:0;${F};font-weight:600;font-size:120px;line-height:1.02;color:${C.ink}`)}">${s.cover.title.replace(' ', '<br>').replace('NAMI?', 'NAMI?')}</p>`;
    h += `<p style="${abs(430, 96, 900, `margin:0;${F};font-style:italic;font-size:44px;color:${C.body}`)}">${s.cover.sub}</p>`;
  } else if (s.t === 'hero') {
    y = 720;
    h += center(y, s.eb.toUpperCase(), `${S};font-size:24px;letter-spacing:.3em;color:${C.kin}`);
    const lines = s.h.split('<br>').length;
    h += center(y + 50, s.h, `${F};font-weight:600;font-size:80px;line-height:1.05;color:${C.ink}`);
    y += 50 + lines * 86 + 10;
    h += center(y, s.sub, `${F};font-style:italic;font-size:38px;color:${C.mute}`);
    h += center(y + 72, s.body, `${S};font-size:32px;line-height:1.6;color:${C.body}`);
  } else {
    const lines = s.h.split('<br>').length;
    const rowH = s.t === 'glance' ? 100 : 120;
    const block = (s.eb ? 50 : 0) + lines * 96 + 70 + s.rows.length * rowH + (s.foot ? 80 : 0) + (s.t === 'next' ? 140 : 0);
    y = Math.max(150, Math.round((1260 - block) / 2));
    if (s.eb) { h += center(y, s.eb.toUpperCase(), `${S};font-size:24px;letter-spacing:.3em;color:${C.kin}`); y += 50; }
    h += center(y, s.h, `${F};font-weight:600;font-size:88px;line-height:1.05;color:${C.ink}`); y += lines * 96;
    h += center(y, s.sub, `${F};font-style:italic;font-size:38px;color:${C.mute}`); y += 80;
    for (const r of s.rows) {
      if (s.t === 'glance') {
        h += `<p style="${abs(y, 130, 400, `margin:0;${F};font-weight:500;font-size:40px;color:${C.ink}`)}">${r[0]}</p>`;
        h += `<p style="${abs(y + 6, 500, 450, `margin:0;text-align:right;${S};font-size:31px;color:${C.body}`)}">${r[1]}</p>`;
        h += `<div style="${abs(y + 78, 130, 820, `height:1px;background:${C.kin};opacity:.35`)}"></div>`;
      } else {
        const [a, t, d] = r;
        const mark = s.t === 'contents' ? `<p style="${abs(y + 8, 120, 80, `margin:0;${F};font-size:46px;color:${C.kin}`)}">${a}</p>`
          : s.letters ? `<p style="${abs(y - 2, 120, 80, `margin:0;text-align:center;${F};font-weight:500;font-size:72px;color:#2C4A6B`)}">${a}</p>`
          : `<div style="${abs(y + 4, 120, 80, '')}">${icon(a, 80)}</div>`;
        h += mark;
        h += `<p style="${abs(y + 2, 230, 740, `margin:0;${S};font-weight:500;font-size:39px;color:${C.ink}`)}">${t}</p>`;
        h += `<p style="${abs(y + 52, 230, 740, `margin:0;${S};font-size:31px;color:${C.body}`)}">${d}</p>`;
        h += `<div style="${abs(y + rowH - 14, 120, 840, `height:1px;background:${C.kin};opacity:.3`)}"></div>`;
      }
      y += rowH;
    }
    if (s.foot) h += center(y + 20, s.foot, `${F};font-style:italic;font-size:34px;color:${C.mute}`);
  }
  h += `<p style="${abs(1330, 90, 900, `margin:0;text-align:center;${S};font-size:22px;letter-spacing:.3em;color:${C.mute}`)}">NAMI  —  ${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}</p>`;
  return `<section data-document-role="page" data-label="${n}" style="position:relative;width:1080px;height:1440px;overflow:hidden;background:#F3ECDD">${h}</section>`;
}

for (const [dir, list] of Object.entries(posts)) {
  const all = [{ cover: covers[dir] }, ...list];
  const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;1,400&family=Alegreya+Sans:wght@400;500&display=swap" rel="stylesheet">
<style>body{margin:0}</style></head><body>${all.map((s, i) => pageHtml(s, i + 1, all.length)).join('\n')}</body></html>`;
  fs.mkdirSync(path.join(__dirname, '../canva3'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, '../canva3', dir + '.html'), html);
}
