/*
 * NAMI — small enhancements shared by the site and its static preview:
 *  1. a full-screen photo viewer with swipe ([data-lightbox])
 *  2. the enquiry form ([data-enquiry])
 * Everything is progressive: without this file the pages still work.
 */
(function () {
  "use strict";

  var isEn = function () {
    return document.documentElement.getAttribute("data-lang") === "en";
  };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  /* ------------------------------------------------------ 1. photo viewer */

  var box = null;
  var boxItems = [];
  var boxIndex = 0;
  var boxReturn = null;

  function bigSrc(img) {
    var src = img.currentSrc || img.src;
    // next/image: ask for a large rendition
    return src.indexOf("/_next/image") !== -1 ? src.replace(/([?&])w=\d+/, "$1w=1920") : src;
  }

  function buildBox() {
    box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Photo viewer");
    box.innerHTML =
      '<img class="lightbox-img" alt="">' +
      '<p class="lightbox-count" aria-live="polite"></p>' +
      '<button type="button" class="lightbox-btn lightbox-close" aria-label="Close">×</button>' +
      '<button type="button" class="lightbox-btn lightbox-prev" aria-label="Previous photo">‹</button>' +
      '<button type="button" class="lightbox-btn lightbox-next" aria-label="Next photo">›</button>';
    document.body.appendChild(box);

    box.querySelector(".lightbox-close").addEventListener("click", closeBox);
    box.querySelector(".lightbox-prev").addEventListener("click", function () { step(-1); });
    box.querySelector(".lightbox-next").addEventListener("click", function () { step(1); });

    // Swipe left/right to move, swipe down or tap the dark area to close
    var sx = 0, sy = 0, down = false;
    box.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".lightbox-btn")) return;
      down = true; sx = e.clientX; sy = e.clientY;
    });
    box.addEventListener("pointerup", function (e) {
      if (!down) return;
      down = false;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
      else if (dy > 80) closeBox();
      else if (Math.abs(dx) < 8 && Math.abs(dy) < 8 && e.target === box) closeBox();
    });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") closeBox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  function render() {
    var img = box.querySelector(".lightbox-img");
    var item = boxItems[boxIndex];
    img.src = bigSrc(item);
    img.alt = item.alt || "";
    box.querySelector(".lightbox-count").textContent = boxIndex + 1 + " / " + boxItems.length;
    // preload the neighbour
    var next = boxItems[(boxIndex + 1) % boxItems.length];
    if (next) new Image().src = bigSrc(next);
  }
  function step(d) {
    boxIndex = (boxIndex + d + boxItems.length) % boxItems.length;
    render();
  }
  function openBox(items, i, from) {
    if (!box) buildBox();
    boxItems = items; boxIndex = i; boxReturn = from;
    render();
    box.classList.add("is-open");
    document.body.style.overflow = "hidden";
    box.querySelector(".lightbox-close").focus();
  }
  function closeBox() {
    box.classList.remove("is-open");
    document.body.style.overflow = "";
    if (boxReturn) boxReturn.focus();
  }

  function initLightboxes() {
    $$("[data-lightbox]:not([data-ready])").forEach(function (g) {
      g.setAttribute("data-ready", "");
      // Only the marked photos when some are marked, else every image in the group
      var marked = $$("[data-lightbox-item]", g);
      var imgs = marked.length ? marked.map(function (m) { return m.querySelector("img"); }) : $$("img", g);
      imgs.forEach(function (img, i) {
        var t = img.closest("[data-lightbox-item]") || img.parentElement;
        t.setAttribute("role", "button");
        t.setAttribute("tabindex", "0");
        t.setAttribute("aria-label", (isEn() ? "Open photo " : "写真を開く ") + (i + 1));
        t.style.cursor = "zoom-in";
        t.addEventListener("click", function () { openBox(imgs, i, t); });
        t.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openBox(imgs, i, t); }
        });
      });
    });
  }

  /* ---------------------------------------------------------- 2. enquiry */

  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setupEnquiry(form) {
    form.setAttribute("data-ready", "");
    var submit = form.querySelector("[data-submit]");
    var status = form.querySelector("[data-status]");
    var done = form.parentElement.querySelector("[data-enquiry-done]");
    var fields = ["name", "email", "message"];

    // Preset the service from ?service= (links from the Services page)
    var wanted = new URLSearchParams(location.search).get("service");
    if (wanted) {
      $$('input[name="projectType"]', form).forEach(function (r) {
        if (r.value.toLowerCase().replace(/\s+/g, "-") === wanted) r.checked = true;
      });
    }

    function errorKey(name) {
      var v = form.elements[name].value || "";
      switch (name) {
        case "name": return v.trim() ? null : "nameRequired";
        case "email": return !v.trim() ? "emailRequired" : EMAIL.test(v.trim()) ? null : "emailInvalid";
        case "message": return !v.trim() ? "messageRequired" : v.length > 5000 ? "messageTooLong" : null;
      }
      return null;
    }
    function showError(name, key) {
      $$('[data-error-for="' + name + '"]', form).forEach(function (p) {
        p.hidden = p.getAttribute("data-error") !== key;
      });
      var el = form.elements[name];
      if (el && el.setAttribute) el.setAttribute("aria-invalid", key ? "true" : "false");
    }
    function check(name) {
      var k = errorKey(name);
      showError(name, k);
      return !k;
    }
    form.addEventListener("input", function (e) {
      var n = e.target.name;
      if (n && form.querySelector('[data-error-for="' + n + '"]:not([hidden])')) check(n);
    });

    function finish() {
      form.hidden = true;
      done.hidden = false;
      window.scrollTo(0, done.getBoundingClientRect().top + window.scrollY - 110);
      done.querySelector("[data-done-title]").focus({ preventScroll: true });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var first = null;
      fields.forEach(function (n) { if (!check(n) && !first) first = n; });
      if (first) { form.elements[first].focus(); return; }
      status.hidden = true;
      submit.disabled = true;
      submit.setAttribute("aria-busy", "true");
      var request = form.hasAttribute("data-demo")
        ? new Promise(function (resolve) { setTimeout(function () { resolve({ ok: true }); }, 500); })
        : fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
            .then(function (res) { return res.json().catch(function () { return { ok: false }; }); });
      request
        .then(function (j) {
          if (j && j.ok) return finish();
          if (j && j.errors) {
            Object.keys(j.errors).forEach(function (n) { showError(n, j.errors[n]); });
            return;
          }
          status.hidden = false;
        })
        .catch(function () { status.hidden = false; })
        .then(function () {
          submit.disabled = false;
          submit.removeAttribute("aria-busy");
        });
    });
  }

  function initEnquiries() {
    $$("form[data-enquiry]:not([data-ready])").forEach(setupEnquiry);
  }

  /* --------------------------------------------------------------- init */

  function init() {
    initLightboxes();
    initEnquiries();
  }
  init();
  // The site swaps pages without a full reload: pick up new content as it arrives
  var pending = 0;
  new MutationObserver(function () {
    if (!pending) pending = window.requestAnimationFrame(function () { pending = 0; init(); });
  }).observe(document.body, { childList: true, subtree: true });
})();
