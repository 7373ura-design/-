// Static preview behaviour: page top, header on scroll, mobile menu, scroll reveal.
// Parallax, photo viewer and booking come from public/js/nami.js, as on the site.
(function () {
  // Open every page at its top. In a framed preview the viewer keeps its own
  // scroll position across pages, so ask it to bring this page's top (or the linked section) into view.
  var target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!target) window.scrollTo(0, 0);
  if (window.top !== window) (target || document.documentElement).scrollIntoView({ block: "start" });

  var header = document.querySelector("header");
  var onScroll = function () {
    if (!header) return;
    var s = window.scrollY > 24;
    header.classList.toggle("backdrop-blur-md", s);
    header.classList.toggle("hairline", s); header.classList.toggle("border-transparent", !s);
  };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  var menu = document.getElementById("mobile-menu");
  var openBtn = document.querySelector('[aria-controls="mobile-menu"]');
  var closeBtn = menu && menu.querySelector('[aria-label="Close menu"]');
  function setMenu(o) { if (!menu) return; menu.hidden = !o; openBtn && openBtn.setAttribute("aria-expanded", o); document.body.style.overflow = o ? "hidden" : ""; }
  openBtn && openBtn.addEventListener("click", function () { setMenu(true); });
  closeBtn && closeBtn.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  var els = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-visible"); }); }
  else {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
    // Never leave content hidden: reveal everything after a short grace period.
    setTimeout(function () { els.forEach(function (e) { e.classList.add("is-visible"); }); }, 2500);
  }

})();
