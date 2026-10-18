// Static preview behaviour: page top and mobile menu.
// Photo viewer and booking come from public/js/nami.js, as on the site.
(function () {
  // Open every page at its top. In a framed preview the viewer keeps its own
  // scroll position across pages, so ask it to bring this page's top (or the linked section) into view.
  var target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!target) window.scrollTo(0, 0);
  if (window.top !== window) (target || document.documentElement).scrollIntoView({ block: "start" });

  var menu = document.getElementById("mobile-menu");
  var openBtn = document.querySelector('[aria-controls="mobile-menu"]');
  var closeBtn = menu && menu.querySelector('[aria-label="Close menu"]');
  function setMenu(o) { if (!menu) return; menu.hidden = !o; openBtn && openBtn.setAttribute("aria-expanded", o); document.body.style.overflow = o ? "hidden" : ""; }
  openBtn && openBtn.addEventListener("click", function () { setMenu(true); });
  closeBtn && closeBtn.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

})();
