/*
 * NAMI — small enhancements shared by the site and its static preview:
 *  a full-screen photo viewer with swipe ([data-lightbox]),
 *  and copy-to-clipboard buttons ([data-copy])
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

  /* ------------------------------------------------------- photo viewer */

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

  /* ---------------------------------------------------------------- copy */

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]");
    if (b) {
      var done = function () {
        b.querySelector("[data-copy-label]").hidden = true;
        b.querySelector("[data-copy-done]").hidden = false;
      };
      if (navigator.clipboard) navigator.clipboard.writeText(b.getAttribute("data-copy")).then(done, function () {});
      return;
    }
    // Close an open email card when tapping elsewhere
    $$("details.mail-pop[open]").forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute("open");
    });
  });

  /* --------------------------------------------------------------- init */

  function init() {
    initLightboxes();
  }
  init();
  // The site swaps pages without a full reload: pick up new content as it arrives
  var pending = 0;
  new MutationObserver(function () {
    if (!pending) pending = window.requestAnimationFrame(function () { pending = 0; init(); });
  }).observe(document.body, { childList: true, subtree: true });
})();
