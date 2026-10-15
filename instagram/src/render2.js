// Renders the washi edition: covers from the panorama + inner slides → washi/<post>/NN.png
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const pano = require('./pano2');
const slides = require('./slides2');
const OUT = path.join(__dirname, '..', 'washi');
const COVER = { '03_founding-monitors': 0, '02_why-japandi': 1, '01_what-is-nami': 2 };
const only = process.argv[2];

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width: pano.W, height: pano.H } });
  await page.setContent(pano.html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  fs.mkdirSync(OUT, { recursive: true });
  await page.screenshot({ path: path.join(OUT, 'panorama_full.png') });
  for (const [dir, i] of Object.entries(COVER)) {
    fs.mkdirSync(path.join(OUT, dir), { recursive: true });
    await page.screenshot({ path: path.join(OUT, dir, '01.png'), clip: { x: i * 1080, y: 0, width: 1080, height: pano.H } });
  }
  await page.setViewportSize({ width: 1080, height: 1440 });
  for (const [dir, list] of Object.entries(slides.posts)) {
    if (only && !dir.startsWith(only)) continue;
    for (const f of fs.readdirSync(path.join(OUT, dir))) if (f !== '01.png') fs.unlinkSync(path.join(OUT, dir, f));
    for (let i = 0; i < list.length; i++) {
      await page.setContent(slides.page(list[i], i + 2, list.length + 1), { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(OUT, dir, String(i + 2).padStart(2, '0') + '.png') });
    }
  }
  await browser.close();
})();
