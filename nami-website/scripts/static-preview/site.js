// Static preview behaviour: header on scroll, mobile menu, scroll reveal, project filter, form.
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

  var tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      tabs.forEach(function (o) { var on = o === t; o.setAttribute("aria-selected", on);
        ["border-navy","bg-navy","text-paper"].forEach(function (c) { o.classList.toggle(c, on); });
        ["border-navy/25","text-navy"].forEach(function (c) { o.classList.toggle(c, !on); }); });
      var key = t.textContent.trim().split(/\s|\d/)[0].toLowerCase();
      var panel = document.getElementById("projects-panel"); if (!panel) return;
      var grid = panel.querySelector(".grid"); var empty = panel.querySelector("[data-empty]");
      var show = key === "all" || key === "concept";
      if (grid) grid.hidden = !show;
      if (!empty) { empty = document.createElement("div"); empty.setAttribute("data-empty", "");
        empty.className = "border hairline bg-paper px-6 py-16 text-center";
        empty.innerHTML = '<p class="label text-deep">COMING SOON</p><p class="jp-body mt-4 text-[0.9375rem] text-navy/80">このカテゴリーのプロジェクトは準備中です。</p>';
        panel.appendChild(empty); }
      empty.hidden = show;
    });
  });

  var form = document.querySelector('form[aria-label="Enquiry form"]');
  form && form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.innerHTML = '<div class="py-16 text-center"><p class="font-display text-5xl text-navy">Thank you.</p><p class="mt-4 font-display text-2xl text-deep">We will be in touch soon.</p><p class="mt-8 text-xs text-vermilion">プレビュー版のため、このフォームは実際には送信されません。</p></div>';
  });
})();
