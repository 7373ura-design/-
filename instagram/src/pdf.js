// One multi-page PDF per post (1080x1440 pages): cover = 1/3 of the panorama, then inner slides.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const pano = require('./panorama');
const slides = require('./slides');
const OUT = path.join(__dirname, '..', 'canva');
const COVER = { '03_founding-monitors': 0, '02_why-japandi': 1, '01_what-is-nami': 2 };
const mark = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, '../assets/mark.png')).toString('base64');
const body = h => h.split('<body>')[1].split('</body>')[0];
const head = h => h.split('<body>')[0];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
  const page = await browser.newPage();
  for (const [dir, list] of Object.entries(slides.posts)) {
    const pages = [`<section style="position:relative;width:1080px;height:1440px;overflow:hidden"><div style="position:absolute;left:${-COVER[dir] * 1080}px;top:0;width:3240px;height:1440px">${body(pano.html)}</div></section>`];
    const sHtml = list.map((s, i) => slides.page(s, i + 2, list.length + 1, mark));
    for (const h of sHtml) pages.push(`<section style="position:relative;width:1080px;height:1440px;overflow:hidden">${body(h)}</section>`);
    // each slide page has its own <style>; scope by rendering each page separately then merging is complex,
    // so print each page to its own PDF and merge with pdf-lib-free approach: one PDF per page, combined below.
    const parts = [];
    const heads = [head(pano.html), ...sHtml.map(head)];
    for (let i = 0; i < pages.length; i++) {
      const css = i === 0 ? '<style>body{width:1080px!important;height:1440px!important}</style>' : '';
      await page.setContent(`${heads[i]}${css}<body style="margin:0">${pages[i]}</body></html>`.replace(/<rect width="\d+" height="\d+" filter="url\(#grain\)"\/>/g, ''), { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const f = path.join(OUT, `${dir}_${i}.pdf`);
      await page.pdf({ path: f, width: '1080px', height: '1440px', printBackground: true, pageRanges: '1' });
      parts.push(f);
    }
    fs.writeFileSync(path.join(OUT, `${dir}.parts`), parts.join('\n'));
  }
  await browser.close();
})();
