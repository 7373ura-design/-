// Static preview behaviour: page top and mobile menu.
// Photo viewer and booking come from public/js/nami.js, as on the site.
(function () {
  // Open every page at its top. In a framed preview the viewer keeps its own
  // scroll position across pages, so ask it to bring this page's top (or the
  // linked section) into view. The viewer can resize or restore its scroll
  // after the page has loaded, so repeat a few times until the reader scrolls.
  try { history.scrollRestoration = "manual"; } catch (e) {}
  var framed = window.top !== window;
  var moved = false;
  function toTop() {
    if (moved) return;
    var target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body && (document.body.scrollTop = 0);
    }
    if (framed || target) {
      try { (target || document.documentElement).scrollIntoView({ block: "start", behavior: "instant" }); }
      catch (e) { (target || document.documentElement).scrollIntoView(true); }
    }
  }
  ["wheel", "touchmove", "keydown"].forEach(function (t) {
    window.addEventListener(t, function () { moved = true; }, { once: true, passive: true });
  });
  toTop();
  document.addEventListener("DOMContentLoaded", toTop);
  window.addEventListener("load", toTop);
  window.addEventListener("pageshow", toTop);
  [100, 300, 700, 1200].forEach(function (ms) { setTimeout(toTop, ms); });

  var menu = document.getElementById("mobile-menu");
  var openBtn = document.querySelector('[aria-controls="mobile-menu"]');
  var closeBtn = menu && menu.querySelector('[aria-label="Close menu"]');
  function setMenu(o) { if (!menu) return; menu.hidden = !o; openBtn && openBtn.setAttribute("aria-expanded", o); document.body.style.overflow = o ? "hidden" : ""; }
  openBtn && openBtn.addEventListener("click", function () { setMenu(true); });
  closeBtn && closeBtn.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

})();
