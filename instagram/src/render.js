const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const pano = require('./panorama');

const OUT = path.join(__dirname, '..');
const COVERS = { 0: '03_founding-monitors', 1: '02_why-japandi', 2: '01_what-is-nami' };

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width: pano.W, height: pano.H } });
  await page.setContent(pano.html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(OUT, 'panorama_full.png') });
  for (const [i, dir] of Object.entries(COVERS)) {
    fs.mkdirSync(path.join(OUT, dir), { recursive: true });
    await page.screenshot({ path: path.join(OUT, dir, '01.png'), clip: { x: i * 1080, y: 0, width: 1080, height: pano.H } });
  }
  if (process.argv[2] !== 'covers') {
    const slides = require('./slides');
    await page.setViewportSize({ width: 1080, height: 1440 });
    for (const [dir, list] of Object.entries(slides.posts)) {
      for (let i = 0; i < list.length; i++) {
        await page.setContent(slides.page(list[i], i + 2, list.length + 1, 'data:image/png;base64,' + fs.readFileSync(path.join(OUT, 'assets/mark.png')).toString('base64')), { waitUntil: 'networkidle' });
        await page.evaluate(() => document.fonts.ready);
        await page.screenshot({ path: path.join(OUT, dir, String(i + 2).padStart(2, '0') + '.png') });
      }
    }
  }
  await browser.close();
})();
