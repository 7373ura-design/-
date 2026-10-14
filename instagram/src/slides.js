// Inner carousel slides (1080x1440), same illustration language as the panorama covers.
const A = require('./art');
const { C } = A;
const W = 1080, H = 1440;

function deco(theme, kind) {
  const dark = theme === 'navy';
  let s = `<rect width="${W}" height="${H}" fill="${dark ? C.navy : C.bg}"/>`;
  if (kind === 'sun') s += A.sun(860, 1200, 150) + A.cloud(640, 1150, 230, 22, dark ? C.navy : C.bg) + A.cloud(820, 1215, 300, 22, dark ? C.navy : C.bg);
  if (kind === 'sunlow') s += A.sun(540, 1250, 300);
  if (kind === 'homes') {
    s += `<path d="M -40 1290 C 200 1150, 500 1140, 760 1180 C 900 1200, 1000 1240, 1120 1290 Z" fill="${C.leaf}"/>`;
    s += A.house(230, 1205, 170, 96, 'gable') + A.house(470, 1180, 150, 88, 'shed') + A.house(700, 1215, 140, 80, 'gable');
    s += A.palm(430, 1210, 130, -1) + A.palm(890, 1250, 150, 1);
  }
  if (kind === 'pine') s += `<path d="M -40 1310 C 60 1240, 220 1230, 330 1310 Z" fill="${C.pine}"/>` + A.pine(140, 1265, 0.8);
  if (kind === 'palm') s += `<path d="M 780 1310 C 860 1230, 1020 1225, 1120 1300 Z" fill="${C.pine}"/>` + A.palm(930, 1265, 230, -1) + A.palm(1010, 1275, 170, 1);
  const top = kind === 'sunlow' ? 1300 : 1290;
  s += A.waveBand({ x0: 0, x1: W, y: top, amp: 34, wl: 180, fill: dark ? C.teal : C.aqua, bottom: H, phase: 30, foamW: 4 });
  s += A.waveBand({ x0: 0, x1: W, y: 1370, amp: 34, wl: 220, fill: dark ? C.deep : C.navy, bottom: H, phase: 90, foamW: 4 });
  s += A.paper(W, H);
  return s;
}

const posts = {
  '01_what-is-nami': [
    { kind: 'sun', html: `<div class="eb"><b>01</b> 波 — NAMI</div><div class="kanji">波</div><div class="h">暮らしには、<br>波がある。</div><div class="rule"></div><div class="p">変化する毎日に寄り添い、<br>その時々の暮らしを受け止める空間を。</div>` },
    { kind: 'pine', html: `<div class="eb"><b>02</b> 並 — NAMI</div><div class="kanji">並</div><div class="h">異なるものが、<br>並んで存在する。</div>
      <div class="pairs"><span>JAPAN</span><i>×</i><span>AUSTRALIA</span><span>OLD</span><i>×</i><span>NEW</span><span>NATURE</span><i>×</i><span>ARCHITECTURE</span><span>LIGHT</span><i>×</i><span>SHADOW</span></div>
      <div class="p">違うものを混ぜて同じにするのではなく、<br>それぞれの良さを活かしながら共存させる。</div>` },
    { theme: 'navy', kind: 'sun', html: `<div class="eb"><b>03</b> N — A — M — I</div>
      <div class="acro"><b>N</b><div><em>Nest</em><p>帰りたくなる場所。</p></div></div>
      <div class="acro"><b>A</b><div><em>And</em><p>人と空間、自然と建築をつなぐ。</p></div></div>
      <div class="acro"><b>M</b><div><em>Memories</em><p>そこで過ごした時間が、記憶になる。</p></div></div>
      <div class="acro"><b>I</b><div><em>Inside</em><p>物だけではなく、そこに残る感情や思い出。</p></div></div>
      <div class="sub">NEST AND MEMORIES INSIDE.</div>` },
  ],
  '02_why-japandi': [
    { kind: 'pine', html: `<div class="eb"><b>01</b> FROM JAPAN</div><div class="h">日本から</div><div class="rule"></div><div class="p">日本の暮らしには、長い時間をかけて<br>培われてきた考え方がある。</div>
      <div class="tags"><span>余白</span><span>自然とのつながり</span><span>素材</span><span>光</span><span>限られた空間の使い方</span></div>` },
    { kind: 'palm', html: `<div class="eb"><b>02</b> FROM AUSTRALIA</div><div class="h">オーストラリアから</div><div class="rule"></div><div class="p">一方、オーストラリアには、<br>土地に根ざした暮らしがある。</div>
      <div class="tags"><span>Indoor × Outdoor</span><span>自然光</span><span>庭やデッキ</span><span>開放感</span><span>土地や気候に合わせた暮らし</span></div>` },
    { kind: 'sun', html: `<div class="eb"><b>03</b> IN BETWEEN</div><div class="h">そして、その間に<br>Japandiがある。</div><div class="en">Japanese principles<br>× Australian living</div><div class="rule"></div><div class="p">日本の住宅をそのまま持ってくるのではなく、<br>オーストラリアの暮らしに合わせて再解釈する。</div>` },
    { theme: 'navy', kind: 'sun', html: `<div class="eb"><b>04</b> 温故知新</div><div class="kanji sm">温故知新</div><div class="en">Learn from what came before.<br>Create what comes next.</div><div class="rule"></div>
      <div class="p">日本で育ったからこそ分かる日本の良さ。<br>オーストラリアで暮らしたからこそ見えてきた違い。<br>その2つを知っているからこそ、<br>ただ日本を再現するのではなく、<br>新しい暮らし方を考えられる。</div>` },
    { kind: 'sunlow', html: `<div class="center"><img class="mark" src="MARK"><div class="en big">We bring a Japanese perspective<br>to Australian living.</div></div>` },
  ],
  '03_founding-monitors': [
    { kind: 'homes', html: `<div class="eb"><b>01</b> WHAT’S COMING?</div><div class="h en-h">NAMI is looking for its first <span class="acc">3</span> residential projects.</div><div class="rule"></div><div class="en">We’re looking for people who want<br>to rethink their space with us.</div>` },
    { kind: 'palm', html: `<div class="eb"><b>02</b> WHO ARE WE LOOKING FOR?</div><div class="h en-h">Sydney-based<br>homeowners / renters</div><div class="rule"></div><div class="sub">INTERESTED IN</div>
      <ul><li>Japanese / Japandi design</li><li>Natural materials</li><li>Thoughtful spaces</li><li>Better use of your existing home</li></ul>
      <div class="en">We’re looking for people who are<br>willing to create with us.</div>` },
    { kind: 'sun', html: `<div class="eb"><b>03</b> FOUNDING MONITOR</div><div class="en">NAMI is still growing.<br>So these first projects will be<br>an opportunity for us to:</div><div class="rule"></div><div class="h en-h xl">Listen.<br>Learn.<br>Create.<br>Grow.</div>` },
    { theme: 'navy', kind: 'sun', html: `<div class="eb"><b>04</b> PRICE</div><div class="sub big">FOUNDING MONITOR<br>SPECIAL PRICE</div><div class="rule"></div><div class="en">Details coming soon.</div><div class="h en-h">Only <span class="acc">3</span> projects.</div>` },
    { kind: 'homes', html: `<div class="eb"><b>05</b> INTERESTED?</div><div class="en">Want to be one of our first 3 projects?</div><div class="h en-h xl">Comment<br><span class="acc">“NAMI”</span><br>below.</div><div class="p">We’ll send you the details from 5 November onwards.</div><div class="badge">Applications open <b>05.11.2026</b></div>` },
  ],
};

const css = (dark) => `
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;position:relative;overflow:hidden;color:${dark ? C.cream : C.navy}}
svg{position:absolute;inset:0}
.c{position:absolute;inset:0;padding:130px 100px 0;display:flex;flex-direction:column;align-items:flex-start;gap:34px}
.eb{font-family:'Josefin Sans',sans-serif;font-size:26px;letter-spacing:.32em;margin-bottom:20px}
.eb b{color:${C.coral};font-weight:600;margin-right:18px}
.kanji{font-family:'Shippori Mincho',serif;font-size:220px;line-height:1;font-weight:500;color:${C.teal}}
.kanji.sm{font-size:150px;letter-spacing:.06em;color:${dark ? C.aqua : C.teal}}
.h{font-family:'Shippori Mincho',serif;font-size:76px;line-height:1.4;letter-spacing:.05em;font-weight:500}
.h.en-h{font-size:80px;line-height:1.2;letter-spacing:0}
.h.xl{font-size:110px;line-height:1.12}
.en{font-family:'Shippori Mincho',serif;font-size:42px;line-height:1.5}
.en.big{font-size:52px;text-align:center}
.p{font-family:'Shippori Mincho',serif;font-size:32px;line-height:2;letter-spacing:.05em}
.sub{font-family:'Josefin Sans',sans-serif;font-size:28px;letter-spacing:.3em;line-height:1.8}
.sub.big{font-size:44px}
.rule{width:90px;height:3px;background:${C.coral}}
.acc{color:${C.coral}}
.pairs{display:grid;grid-template-columns:auto 60px auto;gap:10px 0;font-family:'Josefin Sans',sans-serif;font-size:34px;letter-spacing:.2em}
.pairs i{color:${C.coral};font-style:normal;text-align:center}
.acro{display:flex;gap:40px;align-items:center}
.acro b{font-family:'Shippori Mincho',serif;font-size:120px;width:100px;line-height:1;text-align:center;color:${C.aqua};font-weight:500}
.acro em{font-family:'Shippori Mincho',serif;font-size:50px;font-style:normal}
.acro p{font-family:'Shippori Mincho',serif;font-size:28px;opacity:.9;margin-top:4px}
.tags{display:flex;flex-wrap:wrap;gap:16px;max-width:860px;margin-top:10px}
.tags span{font-family:'Shippori Mincho',serif;font-size:32px;border:2px solid currentColor;border-radius:999px;padding:12px 30px}
ul{list-style:none;font-family:'Shippori Mincho',serif;font-size:44px;line-height:1.7}
ul li:before{content:'';display:inline-block;width:14px;height:14px;border-radius:50%;background:${C.coral};margin:0 24px 8px 0}
.badge{font-family:'Josefin Sans',sans-serif;font-size:28px;letter-spacing:.16em;border:2px solid currentColor;border-radius:999px;padding:18px 36px 14px}
.badge b{color:${C.coral};font-weight:600}
.center{margin:auto 0;align-self:center;display:flex;flex-direction:column;align-items:center;gap:60px;margin-top:220px}
.mark{width:360px}
.pg{position:absolute;top:130px;right:100px;font-family:'Josefin Sans',sans-serif;font-size:24px;letter-spacing:.2em;opacity:.7}
`;

function page(slide, n, total, markSrc) {
  const dark = slide.theme === 'navy';
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&family=Shippori+Mincho:wght@500;600&display=swap" rel="stylesheet">
<style>${css(dark)}</style></head><body>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${deco(slide.theme, slide.kind)}</svg>
<div class="c">${slide.html.replace('MARK', markSrc || '')}</div>
<div class="pg">${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
</body></html>`;
}

module.exports = { posts, page };
