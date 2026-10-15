// Washi edition inner slides (1080x1440). Layout language follows the reference carousels:
// heading + muted italic subheading + icon rows / short body, with a watercolour vignette on hero pages.
const fs = require('fs');
const path = require('path');
const A = require('./ink');
const { K } = A;
const { icon } = require('./icons');
const b64 = f => 'data:image/' + (f.endsWith('.jpg') ? 'jpeg' : 'png') + ';base64,' + fs.readFileSync(path.join(__dirname, '../assets', f)).toString('base64');

// ---------- vignettes (drawn in a 1080x700 box) ----------
const V = {
  waves: () => A.mountains(-40, 1120, 430, 50, 'url(#mtn)', 5) + A.sun(760, 270, 120) + A.kasumi(560, 300, 230, 22) + A.kasumi(760, 345, 250, 18) +
    A.waves({ x0: 0, x1: 1080, y: 470, amp: 40, wl: 220, fill: 'url(#bokashiMizu)', bottom: 760, phase: 20 }) +
    A.waves({ x0: 0, x1: 1080, y: 560, amp: 52, wl: 280, fill: 'url(#bokashiHana)', bottom: 760, phase: 90 }) +
    A.waves({ x0: 0, x1: 1080, y: 650, amp: 40, wl: 200, fill: 'url(#bokashiAi)', bottom: 760, phase: 0 }),
  side: () => A.mountains(-40, 1120, 470, 40, 'url(#mtn)', 9) + A.sun(540, 300, 70) +
    A.hill('M 60 520 C 160 450, 360 440, 470 520 Z', K.matsu, .5) + A.hill('M 610 520 C 700 455, 900 450, 1020 520 Z', K.gum, .6) +
    A.pine(270, 480, .95) + A.gum(820, 490, .78, 4) +
    A.W(`<rect x="0" y="515" width="1080" height="260" fill="url(#bokashiMizu)"/>`) +
    A.waves({ x0: 0, x1: 1080, y: 620, amp: 36, wl: 200, fill: 'url(#bokashiHana)', bottom: 760, phase: 60 }),
  nest: () => A.mountains(-40, 1120, 500, 40, 'url(#mtn)', 2) +
    A.hill('M -40 760 L -40 560 C 200 520, 600 515, 1120 570 L 1120 760 Z', K.matsu, .45) +
    A.house(360, 590, 360, 200, 'gable') + A.pine(170, 600, .9) + A.gum(880, 610, .8, 7) +
    A.hill('M -40 760 L -40 640 C 300 610, 700 615, 1120 650 L 1120 760 Z', K.matsu, .5),
  enso: () => A.enso(540, 330, 210) + A.seal(690, 470, 70, '波') +
    A.waves({ x0: 0, x1: 1080, y: 650, amp: 30, wl: 180, fill: 'url(#bokashiMizu)', bottom: 760, phase: 40 }),
  roots: () => A.mountains(-40, 1120, 470, 55, 'url(#mtn)', 12) +
    A.hill('M -40 760 L -40 520 C 160 480, 380 470, 560 505 C 720 480, 900 485, 1120 520 L 1120 760 Z', K.matsu, .45) +
    A.house(90, 560, 170, 96, 'gable') + A.house(420, 540, 190, 104, 'shed') + A.house(780, 565, 170, 92, 'gable') +
    A.gum(330, 570, .45, 2) + A.pine(690, 575, .5) + A.gum(1010, 590, .45, 9) +
    A.hill('M -40 760 L -40 610 C 300 590, 700 590, 1120 620 L 1120 760 Z', K.matsu, .5),
  japan: () => A.shoji(150, 70, 430, 560) + A.W(`<rect x="0" y="630" width="1080" height="140" fill="${K.sand}" opacity=".6"/>`) +
    A.I(`<path d="M 0 630 L 1080 630" stroke="${K.wood}" stroke-width="3"/>`) + A.pine(800, 640, 1.05),
  aus: () => A.sun(880, 230, 115) + A.gum(150, 640, 1.0, 3) +
    A.house(420, 560, 420, 200, 'shed', true) + A.W(`<rect x="300" y="556" width="660" height="22" fill="${K.wood}" opacity=".85"/>`) +
    A.hill('M -40 760 L -40 600 C 300 575, 800 580, 1120 600 L 1120 760 Z', K.gum, .5),
  onko: () => `<g filter="url(#wash)" style="mix-blend-mode:multiply"><text x="540" y="420" text-anchor="middle" font-family="Yuji Syuku, serif" font-size="210" fill="${K.sumi}" letter-spacing="10">温故知新</text></g>` +
    A.seal(890, 470, 66, '並') + A.waves({ x0: 0, x1: 1080, y: 650, amp: 30, wl: 180, fill: 'url(#bokashiMizu)', bottom: 760, phase: 10 }),
  fuji: () => A.sun(700, 250, 100) + A.kasumi(560, 318, 200, 18) + A.kasumi(700, 345, 220, 14) +
    A.W(`<path d="M 120 560 L 400 330 Q 440 300 480 330 L 760 560 Z" fill="url(#mtn2)"/>`) +
    A.I(`<path d="M 400 330 Q 440 300 480 330 L 520 362 L 495 356 L 470 376 L 445 354 L 420 372 L 380 356 Z" fill="${K.paper}" stroke="${K.ai}" stroke-width="1.6"/>`) +
    A.gum(900, 600, .7, 11) + A.W(`<rect x="0" y="555" width="1080" height="220" fill="url(#bokashiMizu)"/>`) +
    A.waves({ x0: 0, x1: 1080, y: 650, amp: 34, wl: 200, fill: 'url(#bokashiHana)', bottom: 760, phase: 30 }),
  plan: () => {
    const g = `M 220 150 L 860 150 L 860 600 L 220 600 Z M 520 150 L 520 380 M 220 380 L 680 380 M 680 380 L 680 600 M 520 380 L 520 470 M 860 300 L 940 300 L 940 470 L 860 470`;
    return A.W(`<rect x="225" y="155" width="290" height="220" fill="${K.sand}" opacity=".7"/><rect x="685" y="385" width="170" height="210" fill="${K.mizu}" opacity=".5"/><rect x="865" y="305" width="70" height="160" fill="${K.wood}" opacity=".5"/>`) +
      A.I(`<path d="${g}" fill="none" stroke="${K.sumi}" stroke-width="6" stroke-linejoin="round"/>
        <path d="M 220 640 L 860 640 M 220 630 L 220 650 M 860 630 L 860 650" stroke="${K.kin}" stroke-width="2"/>
        <path d="M 380 150 A 60 60 0 0 1 320 210" fill="none" stroke="${K.sumi}" stroke-width="2"/>`) +
      A.W(`<circle cx="760" cy="250" r="55" fill="${K.matsu}" opacity=".55"/><circle cx="300" cy="500" r="44" fill="${K.gum}" opacity=".6"/>`) +
      `<text x="540" y="690" text-anchor="middle" font-family="EB Garamond, serif" font-style="italic" font-size="30" fill="${K.kin}">a home, designed together</text>`;
  },
  homes3: () => A.mountains(-40, 1120, 470, 50, 'url(#mtn)', 6) + A.sun(880, 260, 80) +
    A.hill('M -40 760 L -40 520 C 200 470, 500 470, 700 500 C 860 480, 1000 490, 1120 520 L 1120 760 Z', K.matsu, .45) +
    A.house(110, 570, 200, 112, 'gable') + A.house(440, 545, 190, 108, 'shed') + A.house(780, 575, 170, 96, 'gable') +
    A.W(`<rect x="0" y="600" width="1080" height="170" fill="url(#bokashiMizu)"/>`) +
    A.waves({ x0: 0, x1: 1080, y: 670, amp: 32, wl: 190, fill: 'url(#bokashiHana)', bottom: 760, phase: 20 }),
};

const bottomWaves = () => A.waves({ x0: 0, x1: 1080, y: 1365, amp: 22, wl: 150, fill: 'url(#bokashiMizu)', bottom: 1500, phase: 30 }) +
  A.waves({ x0: 0, x1: 1080, y: 1410, amp: 20, wl: 120, fill: 'url(#bokashiHana)', bottom: 1500, phase: 80 });

// ---------- posts ----------
const posts = {
  '01_what-is-nami': [
    { t: 'contents', h: 'One Name,<br>Three Meanings', sub: 'The story behind NAMI', rows: [['01', '波 Waves', 'Homes that move with life'], ['02', '並 Side by Side', 'Different things, in balance'], ['03', 'N.A.M.I', 'Nest And Memories Inside']], foot: 'Swipe to explore →' },
    { t: 'hero', v: 'waves', eb: '01 — 波', h: 'Waves', sub: 'Life moves in waves.', body: 'Some mornings are slow, some evenings are full. Seasons change, families grow, plans shift. A home should hold you through all of it — and still feel like yours.' },
    { t: 'hero', v: 'side', eb: '02 — 並', h: 'Side by Side', sub: 'Different, together.', body: 'Japan and Australia. Old and new. Nature and architecture. Light and shadow. We don’t blend them into one — we let each keep its character, and find the balance between them.' },
    { t: 'list', eb: '03 — N.A.M.I', h: 'Nest And<br>Memories Inside', sub: 'Four letters, one idea', letters: true, rows: [['N', 'Nest', 'A place you want to come home to'], ['A', 'And', 'Connecting people, space and nature'], ['M', 'Memories', 'Time spent here becomes memory'], ['I', 'Inside', 'The feelings that stay, not just the things']] },
    { t: 'glance', h: 'NAMI at a Glance', sub: 'Three meanings. One name.', rows: [['波 Waves', 'Homes that move with life'], ['並 Side by Side', 'Balance, not sameness'], ['N.A.M.I', 'Nest And Memories Inside']], foot: 'Together, they describe the homes we want to create.' },
    { t: 'hero', v: 'enso', eb: 'Why this name', h: 'A Name We<br>Carry With Care', sub: 'And a promise behind it', body: 'We wanted a name that holds everything we believe a home should be — calm yet changing, different yet balanced, full of memories. Putting NAMI on every space is our promise: to design with care, and take responsibility for every home we touch.' },
    { t: 'hero', v: 'roots', eb: 'Our roots', h: 'Backed by 20+ Years<br>of Building Homes', sub: 'Together with Japan Homes', body: 'NAMI grows from our connection with Japan Homes, who have built homes across Australia and New Zealand for over 20 years. We carry forward their belief in homes that are both beautiful and practical — and in better ways of living.' },
    { t: 'list', eb: 'What we believe', h: 'Our Promise<br>to Every Home', sub: 'What guides our design', rows: [['house', 'Homes that grow with you', 'Designed for the life you’ll live, not just today'], ['pair', 'Balance, not sameness', 'Every element keeps its own character'], ['heart', 'Spaces that hold memories', 'A home is finished when it holds your story']] },
    { t: 'next', h: 'Get to Know NAMI', sub: 'This is just the beginning', rows: [['link', 'Visit our website', 'Link in bio'], ['wave', 'Read Part 2', 'Why Japandi?'], ['bookmark', 'Save this post', 'For your next home idea']] },
  ],
  '02_why-japandi': [
    { t: 'hero', v: 'fuji', eb: 'Japandi', h: 'More Than a Style', sub: 'What Japandi means to us', body: 'Japandi is often described as Japanese meets Scandinavian. For NAMI, it means something closer to home — Japanese principles, reinterpreted for the way Australians live.' },
    { t: 'hero', v: 'japan', eb: '01 — From Japan', h: 'What We Grew Up With', sub: 'Quiet ideas, passed down', body: 'Rooms where emptiness is part of the design. Soft light through paper screens. Timber, stone and clay that age gracefully. Small spaces, used with quiet intelligence.' },
    { t: 'hero', v: 'aus', eb: '02 — From Australia', h: 'What We Found Here', sub: 'A different kind of home', body: 'Homes that open to the garden. Sunlight that fills every room. Decks made for long evenings outdoors. A way of living shaped by the land and the climate.' },
    { t: 'list', eb: '03 — In between', h: 'Japanese Principles<br>× Australian Living', sub: 'Not copying Japan. Reinterpreting it.', rows: [['leaf', 'Ma × Openness', 'Calm space that still flows outside'], ['sun', 'Soft light × Big sky', 'Filtered light for bright Australian days'], ['house', 'Natural materials × Local climate', 'Timber, stone and clay, chosen for life here']] },
    { t: 'hero', v: 'onko', eb: 'On-ko-chi-shin', h: 'Learn From the Past,<br>Create What’s Next', sub: 'An old Japanese saying', body: 'Because we know both Japan and Australia, we don’t recreate one inside the other. We design a new way of living — one that truly belongs here.' },
    { t: 'list', eb: 'Why NAMI', h: 'Why We Can<br>Do This', sub: 'Two cultures, one perspective', rows: [['leaf', 'Raised in Japan', 'We know these principles from the inside'], ['pin', 'Living in Sydney', 'We understand Australian homes and lifestyles'], ['house', 'Backed by Japan Homes', '20+ years of building across Australia & NZ']] },
    { t: 'glance', h: 'Japandi, the NAMI Way', sub: 'At a glance', rows: [['From Japan', 'Ma, soft light, natural materials'], ['From Australia', 'Openness, sunlight, outdoor living'], ['In between', 'Japanese principles × Australian living']], foot: 'We bring a Japanese perspective to Australian living.' },
    { t: 'next', h: 'See Our Approach', sub: 'Japanese roots, made for here', rows: [['link', 'Visit our website', 'Link in bio'], ['house', 'Read Part 3', 'Our first 3 homes'], ['bell', 'Follow NAMI', 'Ideas from Japan, made for Australian living']] },
  ],
  '03_founding-monitors': [
    { t: 'hero', v: 'homes3', eb: 'Founding Monitors', h: 'Our First 3 Homes', sub: 'Three homes, three stories', body: 'NAMI is looking for three Sydney homes to be our very first projects — designed together with the people who live in them.' },
    { t: 'list', eb: 'What you receive', h: 'Free of<br>Design Fees', sub: 'Our design, on us', rows: [['pen', 'Interior design by NAMI', 'Your design fee is completely free'], ['people', 'Made for your life', 'One-on-one, from first idea to final plan'], ['leaf', 'Japandi, your way', 'Calm, natural and practical']], foot: 'Furniture, materials and construction costs are not included.' },
    { t: 'list', eb: 'Who we’re looking for', h: 'Is This You?', sub: 'We’d love to hear from', rows: [['pin', 'Sydney-based', 'Homeowners or renters'], ['leaf', 'Love natural design', 'Japanese / Japandi style, natural materials'], ['house', 'Want more from your home', 'Better use of the space you already have'], ['hands', 'Open to creating together', 'Your home, our ideas']] },
    { t: 'list', eb: 'What we ask', h: 'A Few Simple<br>Conditions', sub: 'In return for free design', rows: [['camera', 'Before & after photos', 'Of your space, for our portfolio'], ['share', 'Permission to share', 'Your project on our website & Instagram'], ['chat', 'Your honest feedback', 'A short review and a quick chat'], ['cal', 'Time to create together', 'A few meetings during the project']], foot: 'Full conditions will be announced on 5 November.' },
    { t: 'hero', v: 'plan', eb: 'Why monitors', h: 'Listen. Learn.<br>Create. Grow.', sub: 'Building NAMI, together', body: 'NAMI is still growing. These first homes are how we listen, learn and grow — with you. Your home becomes part of NAMI’s very first story.' },
    { t: 'glance', h: 'At a Glance', sub: 'Founding Monitors', rows: [['Places', '3 homes only'], ['Location', 'Sydney'], ['Design fee', 'Free'], ['Applications', 'Open 05.11.2026']], foot: 'Full details will be shared on 5 November.' },
    { t: 'next', h: 'Want to Be One<br>of Our First 3?', sub: 'Applications open 05.11.2026', rows: [['chat', 'Comment “NAMI”', 'We’ll send you the details first'], ['bell', 'Turn on notifications', 'Don’t miss 5 November'], ['link', 'Visit our website', 'Link in bio']] },
  ],
};

// ---------- page rendering ----------
const css = `
*{margin:0;padding:0;box-sizing:border-box}
body{width:1080px;height:1440px;position:relative;overflow:hidden;background:url(${b64('washi.jpg')});color:#3B322B}
svg.art{position:absolute;left:0;top:0}
.c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;text-align:center}
.c.mid{justify-content:center;padding-bottom:170px}
.eb{font-family:'Alegreya Sans',sans-serif;font-weight:500;font-size:24px;letter-spacing:.32em;text-transform:uppercase;color:${K.kin}}
h1{font-family:'EB Garamond',serif;font-weight:600;font-size:92px;line-height:1.04;letter-spacing:-.005em;color:#3B322B}
.sub{font-family:'EB Garamond',serif;font-style:italic;font-size:40px;color:${K.mute}}
.body{font-family:'Alegreya Sans',sans-serif;font-size:33px;line-height:1.66;color:${K.body};max-width:860px}
.rows{width:860px;text-align:left;margin-top:10px}
.row{display:flex;gap:32px;align-items:center;padding:28px 0;border-bottom:1px solid rgba(162,123,79,.28)}
.row:last-child{border-bottom:none}
.row b{display:block;font-family:'Alegreya Sans',sans-serif;font-weight:500;font-size:40px;color:#3B322B;line-height:1.25}
.row span{font-family:'Alegreya Sans',sans-serif;font-size:32px;color:${K.body};line-height:1.35}
.num{font-family:'EB Garamond',serif;font-size:46px;color:${K.kin};width:70px;flex:none}
.letter{font-family:'EB Garamond',serif;font-weight:500;font-size:70px;color:${K.ai};width:70px;text-align:center;flex:none;line-height:1}
.g{display:flex;justify-content:space-between;align-items:baseline;padding:28px 0;border-bottom:1px solid rgba(162,123,79,.28);gap:30px}
.g:last-child{border-bottom:none}
.g .k{font-family:'EB Garamond',serif;font-weight:500;font-size:42px;color:#3B322B;white-space:nowrap}
.g .v{font-family:'Alegreya Sans',sans-serif;font-weight:500;font-size:32px;color:${K.body};text-align:right}
.foot{font-family:'EB Garamond',serif;font-style:italic;font-size:34px;color:${K.mute};max-width:860px}
.pg{position:absolute;left:0;right:0;bottom:var(--pgb,118px);display:flex;justify-content:center;align-items:center;gap:20px;font-family:'Alegreya Sans',sans-serif;font-size:22px;letter-spacing:.3em;color:${K.mute}}
.pg i{display:block;width:60px;height:1px;background:${K.kin};opacity:.6}
.wm{width:300px;opacity:.9}
.card{background:rgba(255,252,245,.55);border:1px solid rgba(162,123,79,.35);border-radius:6px;padding:20px 50px;width:940px}
`;

function rowsHtml(s) {
  return `<div class="rows">${s.rows.map(([a, t, d]) => `<div class="row">${s.t === 'contents' ? `<div class="num">${a}</div>` : s.letters ? `<div class="letter">${a}</div>` : icon(a, 84)}<div><b>${t}</b><span>${d}</span></div></div>`).join('')}</div>`;
}

function page(s, n, total) {
  let art = '', inner = '';
  if (s.t === 'hero') {
    art = `<svg class="art" width="1080" height="700" viewBox="0 50 1080 700"><defs>${A.defs}
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset=".78" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient>
      <mask id="m"><rect width="1080" height="760" fill="url(#fade)"/></mask></defs><g mask="url(#m)">${V[s.v]()}</g></svg>
      <svg class="art" width="1080" height="1440" viewBox="0 0 1080 1440"><defs>${A.defs}</defs>${bottomWaves()}</svg>`;
    inner = `<div style="height:700px"></div><div class="eb">${s.eb}</div><h1 style="margin:18px 0 12px;font-size:84px">${s.h}</h1><div class="sub">${s.sub}</div><div class="body" style="margin-top:24px">${s.body}</div>`;
  } else {
    art = `<svg class="art" width="1080" height="1440" viewBox="0 0 1080 1440"><defs>${A.defs}</defs>${bottomWaves()}</svg>`;
    inner = (s.eb ? `<div class="eb">${s.eb}</div>` : '') +
      `<h1 style="margin:${s.eb ? 22 : 0}px 0 14px">${s.h}</h1><div class="sub" style="margin-bottom:34px">${s.sub}</div>`;
    if (s.t === 'glance') inner += `<div class="rows card">${s.rows.map(([k, v]) => `<div class="g"><span class="k">${k}</span><span class="v">${v}</span></div>`).join('')}</div>`;
    else if (s.t === 'next') inner += `<div class="card">${rowsHtml(s)}</div><img class="wm" style="margin-top:56px" src="${b64('wordmark.png')}">`;
    else inner += rowsHtml(s);
    if (s.foot) inner += `<div class="foot" style="margin-top:34px">${s.foot}</div>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;1,400&family=Alegreya+Sans:wght@400;500&family=Yuji+Syuku&display=swap" rel="stylesheet">
<style>${css}</style></head><body style="--pgb:118px">${art}<div class="c${s.t === 'hero' ? '' : ' mid'}">${inner}</div>
<div class="pg">NAMI<i></i>${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div></body></html>`;
}

module.exports = { posts, page };
