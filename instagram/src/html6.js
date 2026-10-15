// Uniform layout: every inner page = illustration band (0..560) + text block below. No red dot. 10 monitors.
const fs = require('fs'), path = require('path');
const C = { bg: '#FBF6EC', navy: '#1D3F6E', red: '#E4552F', teal: '#2A8FB8', body: '#3C4B63', mute: '#7B8799', line: '#C9D3DF' };
const M = `font-family:'Shippori Mincho',Georgia,serif`, J = `font-family:'Jost',Helvetica,sans-serif`;
const abs = (t, l, w, x) => `position:absolute;top:${t}px;left:${l}px;width:${w}px;margin:0;${x}`;
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
const icon = n => `<svg width="70" height="70" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="none" stroke="${C.navy}" stroke-width="1.5"/><g transform="translate(16 16) scale(1.333)" fill="none" stroke="${C.navy}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICON[n]}</g></svg>`;
const P = (t, x, w, st, txt, al = 'center') => `<p style="${abs(t, x, w, `text-align:${al};${st}`)}">${txt}</p>`;
const label = (y, eb) => { const [n, ...r] = eb.split(' — '); return P(y, 90, 900, `${J};font-size:28px;letter-spacing:.26em;color:${C.navy}`, r.length ? `<span style="color:${C.red}">${n}.</span>&nbsp;&nbsp;${r.join(' — ').toUpperCase()}` : n.toUpperCase()); };

function page(s, n, total) {
  let h = '';
  if (s.cover) {
    h += P(80, 90, 800, `${J};font-size:29px;letter-spacing:.28em;color:${C.navy}`, `NAMI&nbsp;&nbsp;·&nbsp;&nbsp;PART ${s.cover.n} / 03`, 'left');
    h += P(128, 90, 940, `${M};font-weight:500;font-size:128px;line-height:1.05;color:${C.navy}`, s.cover.title, 'left');
    h += P(410, 92, 940, `${J};font-size:31px;letter-spacing:.16em;color:${C.teal}`, s.cover.sub.toUpperCase(), 'left');
  } else {
    let y = 600;
    if (s.eb) { h += label(y, s.eb); y += 52; }
    h += P(y, 70, 940, `${M};font-weight:500;font-size:${s.hs || 76}px;line-height:1.15;color:${C.navy}`, s.h); y += (s.hs || 76) * 1.15 + 10;
    if (s.sub) { h += P(y, 90, 900, `${J};font-size:30px;letter-spacing:.14em;color:${C.teal}`, s.sub.toUpperCase()); y += 48; }
    h += `<div style="${abs(y + 6, 510, 60, `height:2px;background:${C.red}`)}"></div>`; y += 34;
    if (s.body) h += P(y, 90, 900, `${M};font-size:34px;line-height:1.6;color:${C.body}`, s.body);
    if (s.rows) {
      const rh = s.rh || (s.rows.length > 3 ? 112 : 124);
      for (const r of s.rows) {
        if (s.glance) {
          h += P(y + 8, 130, 440, `${M};font-weight:500;font-size:40px;color:${C.navy}`, r[0], 'left');
          h += P(y + 14, 480, 470, `${J};font-size:31px;color:${C.body}`, r[1], 'right');
          h += `<div style="${abs(y + rh - 10, 130, 820, `height:1px;background:${C.line}`)}"></div>`;
        } else {
          const [a, t, d] = r;
          h += s.num ? P(y + 4, 110, 100, `${J};font-size:44px;color:${C.red}`, a + '.', 'left')
            : s.letters ? P(y - 8, 110, 90, `${M};font-weight:500;font-size:80px;color:${C.red}`, a)
            : `<div style="${abs(y + 4, 120, 70, '')}">${icon(a)}</div>`;
          h += P(y, 226, 780, `${M};font-weight:500;font-size:40px;color:${C.navy}`, t, 'left');
          h += P(y + 54, 226, 780, `${J};font-size:30px;color:${C.body}`, d, 'left');
        }
        y += rh;
      }
    }
    if (s.foot) h += P(1238, 90, 900, `${M};font-size:28px;color:${C.mute}`, s.foot);
  }
  if (!s.cover) h += P(1296, 90, 900, `${J};font-size:22px;letter-spacing:.3em;color:${C.mute}`, `NAMI&nbsp;&nbsp;—&nbsp;&nbsp;${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}`);
  return `<section data-document-role="page" data-label="${n}" style="position:relative;width:1080px;height:1350px;overflow:hidden;background:${C.bg}">${h}</section>`;
}

const posts = {
  '01_what-is-nami': [
    { cover: { n: '01', title: 'What is<br>NAMI?', sub: 'One name. Three meanings.' } },
    { h: 'One Name, Three Meanings', hs: 66, sub: 'The story behind NAMI', num: 1, rows: [['01', '波 Waves', 'Homes that move with life'], ['02', '並 Side by Side', 'Different things, in balance'], ['03', 'N.A.M.I', 'Nest And Memories Inside']], foot: 'Swipe to explore →' },
    { eb: '01 — 波', h: 'Waves', sub: 'Life moves in waves.', body: 'Some days are calm, some are full. A home should hold you through every season of life — and still feel like yours.' },
    { eb: '02 — 並', h: 'Side by Side', sub: 'Different, together.', body: 'Japan and Australia. Old and new. Nature and architecture. We let each keep its character — and find the balance between them.' },
    { eb: '03 — N.A.M.I', h: 'Nest And Memories Inside', hs: 62, letters: 1, rh: 104, rows: [['N', 'Nest', 'A place you want to come home to'], ['A', 'And', 'Connecting people, space and nature'], ['M', 'Memories', 'Time spent here becomes memory'], ['I', 'Inside', 'The feelings that stay, not just the things']] },
    { h: 'NAMI at a Glance', sub: 'Three meanings. One name.', glance: 1, rh: 100, rows: [['波 Waves', 'Homes that move with life'], ['並 Side by Side', 'Balance, not sameness'], ['N.A.M.I', 'Nest And Memories Inside']], foot: 'Together, they describe the homes we want to create.' },
    { eb: 'Why this name', h: 'A Name We Carry With Care', hs: 64, sub: 'And a promise behind it', body: 'A name that holds what we believe a home should be: calm yet changing, full of memories. A promise to design every space with care.' },
    { eb: 'Our roots', h: 'Backed by 20+ Years', sub: 'Together with Japan Homes', body: 'NAMI grows from our connection with Japan Homes — over 20 years of building beautiful, practical homes across Australia and New Zealand.' },
    { eb: 'What we believe', h: 'Our Promise to Every Home', hs: 62, rows: [['house', 'Homes that grow with you', 'Designed for the life you’ll live'], ['pair', 'Balance, not sameness', 'Every element keeps its character'], ['heart', 'Spaces that hold memories', 'A home that holds your story']] },
    { h: 'Get to Know NAMI', sub: 'This is just the beginning', rows: [['link', 'Visit our website', 'Link in bio'], ['wave', 'Read Part 2', 'Why Japandi?'], ['bookmark', 'Save this post', 'For your next home idea']] },
  ],
  '02_why-japandi': [
    { cover: { n: '02', title: 'Why<br>Japandi?', sub: 'Japanese roots. Australian perspective.' } },
    { eb: 'Japandi', h: 'More Than a Style', sub: 'What Japandi means to us', body: 'Often described as Japanese meets Scandinavian. For NAMI, it means Japanese principles, reinterpreted for Australian life.' },
    { eb: '01 — From Japan', h: 'What We Grew Up With', hs: 70, sub: 'Quiet ideas, passed down', body: 'Emptiness as part of the design. Soft light through paper screens. Natural materials. Small spaces, used wisely.' },
    { eb: '02 — From Australia', h: 'What We Found Here', hs: 72, sub: 'A different kind of home', body: 'Homes open to the garden. Sunlight in every room. Decks for long evenings. A way of living shaped by the land.' },
    { eb: '03 — In between', h: 'Japan × Australia', sub: 'Not copying. Reinterpreting.', rows: [['leaf', 'Ma × Openness', 'Calm space that flows outside'], ['sun', 'Soft light × Big sky', 'Filtered light for bright days'], ['house', 'Natural materials × Climate', 'Chosen for life here']] },
    { eb: 'On-ko-chi-shin', h: 'Learn From the Past', sub: 'An old Japanese saying', body: 'Knowing both Japan and Australia, we don’t copy one into the other. We design a new way of living that belongs here.' },
    { eb: 'Why NAMI', h: 'Why We Can Do This', rows: [['leaf', 'Raised in Japan', 'We know these principles from within'], ['pin', 'Living in Sydney', 'We understand Australian homes'], ['house', 'Backed by Japan Homes', '20+ years building in AU & NZ']] },
    { h: 'Japandi, the NAMI Way', hs: 70, sub: 'At a glance', glance: 1, rh: 100, rows: [['From Japan', 'Ma, soft light, materials'], ['From Australia', 'Openness, sun, outdoors'], ['In between', 'Principles × living']], foot: 'We bring a Japanese perspective to Australian living.' },
    { h: 'See Our Approach', sub: 'Japanese roots, made for here', rows: [['link', 'Visit our website', 'Link in bio'], ['house', 'Read Part 3', 'Our first 10 homes'], ['bell', 'Follow NAMI', 'Ideas for Australian living']] },
  ],
  '03_founding-monitors': [
    { cover: { n: '03', title: 'Founding<br>Monitors', sub: '10 homes. 10 stories.' } },
    { eb: 'Founding monitors', h: 'Our First 10 Homes', sub: 'Ten homes, ten stories', body: 'We’re looking for ten Sydney homes to be our very first projects — designed together with the people who live in them.' },
    { eb: 'What you receive', h: 'Free of Design Fees', hs: 72, rows: [['pen', 'Interior design by NAMI', 'Your design fee is completely free'], ['people', 'Made for your life', 'One-on-one, idea to final plan'], ['leaf', 'Japandi, your way', 'Calm, natural and practical']], foot: 'Furniture, materials and construction costs are not included.' },
    { eb: 'Who we’re looking for', h: 'Is This You?', rh: 104, rows: [['pin', 'Sydney-based', 'Homeowners or renters'], ['leaf', 'Love natural design', 'Japandi style, natural materials'], ['house', 'Want more from your home', 'Better use of your space'], ['hands', 'Open to creating together', 'Your home, our ideas']] },
    { eb: 'What we ask', h: 'A Few Conditions', rh: 104, rows: [['camera', 'Before & after photos', 'Of your space, for our portfolio'], ['share', 'Permission to share', 'On our website & Instagram'], ['chat', 'Your honest feedback', 'A short review and a quick chat'], ['cal', 'Time to create together', 'A few meetings during the project']], foot: 'Full conditions will be announced on 5 November.' },
    { eb: 'Why monitors', h: 'Listen. Learn. Grow.', sub: 'Building NAMI, together', body: 'NAMI is still growing. These first homes are how we listen, learn and grow — together with you.' },
    { h: 'At a Glance', sub: 'Founding Monitors', glance: 1, rh: 92, rows: [['Places', '10 homes only'], ['Location', 'Sydney'], ['Design fee', 'Free'], ['Applications', 'Open 05.11.2026']], foot: 'Full details will be shared on 5 November.' },
    { h: 'Be One of Our First 10', hs: 66, sub: 'Applications open 05.11.2026', rows: [['chat', 'Comment “NAMI”', 'We’ll send you the details first'], ['bell', 'Turn on notifications', 'Don’t miss 5 November'], ['link', 'Visit our website', 'Link in bio']] },
  ],
};
const out = path.join(__dirname, '../canva6'); fs.mkdirSync(out, { recursive: true });
for (const [dir, list] of Object.entries(posts)) {
  const pages = list.map((s, i) => page(s, i + 1, list.length));
  const head = `<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500&family=Jost:wght@400&display=swap" rel="stylesheet"><style>body{margin:0}</style></head><body>`;
  fs.writeFileSync(path.join(out, dir + '.html'), head + pages.join('\n') + '</body></html>');
  // reversed copy: Canva inserts merged pages in reverse order
  fs.writeFileSync(path.join(out, dir + '_rev.html'), head + pages.slice().reverse().join('\n') + '</body></html>');
}
