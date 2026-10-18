/*
 * NAMI — small enhancements shared by the site and its static preview:
 *  1. a full-screen photo viewer with swipe ([data-lightbox])
 *  2. the four-step booking request ([data-booking])
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

  /* ---------------------------------------------------------- 2. booking */

  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var iso = function (d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); };
  var both = function (ja, en) {
    return '<span lang="ja" class="lang-ja">' + ja + '</span><span lang="en-GB" class="lang-en">' + en + "</span>";
  };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  function dateParts(value) {
    var p = value.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function dateLabel(value) {
    var d = dateParts(value);
    var ja = d.toLocaleDateString("ja-JP", { month: "long", day: "numeric", weekday: "short" });
    var en = d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
    return both(ja, en);
  }

  function setupBooking(form) {
    form.setAttribute("data-ready", "");
    form.classList.add("is-enhanced");
    var steps = $$("[data-step]", form);
    var dots = $$("[data-progress] li", form);
    var barEl = form.querySelector("[data-bar]");
    var prev = form.querySelector("[data-prev]");
    var next = form.querySelector("[data-next]");
    var submit = form.querySelector("[data-submit]");
    var status = form.querySelector("[data-status]");
    var done = form.parentElement.querySelector("[data-booking-done]");
    var current = 0;

    // Preset the service from ?service= (links from the Services page)
    var wanted = new URLSearchParams(location.search).get("service");
    if (wanted) {
      $$('input[name="projectType"]', form).forEach(function (r) {
        if (r.value.toLowerCase().replace(/\s+/g, "-") === wanted) r.checked = true;
      });
    }

    // Date picker: the next three weeks, Sundays off, as a swipeable strip
    var strip = form.querySelector("[data-dates]");
    var dateInput = form.querySelector('input[name="preferredDate"]');
    var day = new Date();
    day.setHours(0, 0, 0, 0);
    for (var n = 0, made = 0; made < 18 && n < 40; n++) {
      day.setDate(day.getDate() + 1);
      if (day.getDay() === 0) continue;
      made++;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "date-chip";
      b.setAttribute("aria-pressed", "false");
      b.setAttribute("data-value", iso(day));
      b.innerHTML =
        '<span class="date-chip-wd">' + both(day.toLocaleDateString("ja-JP", { weekday: "short" }), day.toLocaleDateString("en-GB", { weekday: "short" })) + "</span>" +
        '<span class="date-chip-d">' + day.getDate() + "</span>" +
        '<span class="date-chip-m">' + both(day.getMonth() + 1 + "月", day.toLocaleDateString("en-GB", { month: "short" })) + "</span>";
      strip.appendChild(b);
    }
    strip.addEventListener("click", function (e) {
      var chip = e.target.closest(".date-chip");
      if (!chip) return;
      $$(".date-chip", strip).forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      dateInput.value = chip.getAttribute("data-value");
      check("preferredDate");
    });

    function value(name) {
      var el = form.elements[name];
      return el ? el.value || "" : "";
    }
    function errorKey(name) {
      var v = value(name);
      switch (name) {
        case "projectType": return v ? null : "projectTypeRequired";
        case "consultType": return v ? null : "consultTypeRequired";
        case "preferredDate": return v ? null : "dateRequired";
        case "preferredTime": return v ? null : "timeRequired";
        case "name": return v.trim() ? null : "nameRequired";
        case "email": return !v.trim() ? "emailRequired" : EMAIL.test(v.trim()) ? null : "emailInvalid";
        case "message": return v.length > 5000 ? "messageTooLong" : null;
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
    function focusField(name) {
      var el = form.elements[name];
      if (name === "preferredDate") el = strip.querySelector(".date-chip");
      else if (el && !el.focus && el.length) el = el[0];
      if (el && el.focus) el.focus();
    }
    function validStep(i) {
      var names = (steps[i].getAttribute("data-fields") || "").split(" ").filter(Boolean);
      var first = null;
      names.forEach(function (n) { if (!check(n) && !first) first = n; });
      if (first) focusField(first);
      return !first;
    }
    form.addEventListener("change", function (e) {
      var n = e.target.name;
      if (n && form.querySelector('[data-error-for="' + n + '"]:not([hidden])')) check(n);
    });
    form.addEventListener("input", function (e) {
      var n = e.target.name;
      if (n && form.querySelector('[data-error-for="' + n + '"]:not([hidden])')) check(n);
    });

    function fillSummary(root) {
      $$("[data-sum]", root).forEach(function (dd) {
        var name = dd.getAttribute("data-sum");
        var v = value(name);
        var html = "—";
        if (v) {
          var radio = form.querySelector('input[name="' + name + '"]:checked');
          var label = radio && radio.closest("label") && radio.closest("label").querySelector("[data-label]");
          if (name === "preferredDate") html = dateLabel(v);
          else if (label) html = label.innerHTML;
          else html = esc(v).replace(/\n/g, "<br>");
        }
        dd.innerHTML = html;
      });
    }

    function show(i, scroll) {
      current = i;
      steps.forEach(function (s, j) { s.classList.toggle("is-active", j === i); });
      dots.forEach(function (d, j) {
        d.classList.toggle("is-done", j < i);
        d.classList.toggle("is-current", j === i);
        if (j === i) d.setAttribute("aria-current", "step"); else d.removeAttribute("aria-current");
      });
      barEl.style.transform = "scaleX(" + (i + 1) / steps.length + ")";
      prev.style.visibility = i === 0 ? "hidden" : "visible";
      next.hidden = i === steps.length - 1;
      submit.hidden = i !== steps.length - 1;
      status.hidden = true;
      if (i === steps.length - 1) fillSummary(form);
      if (scroll) {
        var top = form.getBoundingClientRect().top + window.scrollY - 96;
        if (window.scrollY > top) window.scrollTo(0, top);
        var t = steps[i].querySelector("[data-step-title]");
        if (t) t.focus({ preventScroll: true });
      }
    }
    next.addEventListener("click", function () { if (validStep(current)) show(current + 1, true); });
    prev.addEventListener("click", function () { if (current > 0) show(current - 1, true); });
    // Tap a summary row's step number in the progress bar to go back and edit
    dots.forEach(function (d, j) {
      d.addEventListener("click", function () { if (j < current) show(j, true); });
    });

    function finish() {
      var now = new Date();
      var ref = "NAMI-" + String(now.getFullYear()).slice(2) + pad(now.getMonth() + 1) + pad(now.getDate()) + "-" +
        Math.random().toString(36).slice(2, 6).toUpperCase();
      done.querySelector("[data-ref]").textContent = ref;
      var sum = form.querySelector("[data-summary]").cloneNode(true);
      fillSummary(sum);
      var holder = done.querySelector("[data-done-summary]");
      holder.innerHTML = "";
      holder.appendChild(sum);

      done.querySelector("[data-ics]").onclick = function () {
        var d = value("preferredDate").replace(/-/g, "");
        var t = value("preferredTime").replace(":", "");
        var end = pad(Math.floor((+t.slice(0, 2) * 60 + +t.slice(2) + 60) / 60)) + pad((+t.slice(2) + 60) % 60);
        var ics = [
          "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//NAMI//Booking//EN", "BEGIN:VEVENT",
          "UID:" + ref + "@nami", "DTSTAMP:" + now.toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z",
          "DTSTART;TZID=Australia/Sydney:" + d + "T" + t + "00",
          "DTEND;TZID=Australia/Sydney:" + d + "T" + end + "00",
          "SUMMARY:NAMI consultation (requested)",
          "DESCRIPTION:" + value("projectType") + " — " + value("consultType") + ". Ref " + ref + ". Time to be confirmed by email.",
          "STATUS:TENTATIVE", "END:VEVENT", "END:VCALENDAR",
        ].join("\r\n");
        var a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
        a.download = "nami-consultation.ics";
        document.body.appendChild(a);
        a.click();
        a.remove();
      };

      form.hidden = true;
      done.hidden = false;
      var top = done.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo(0, top);
      done.querySelector("[data-done-title]").focus({ preventScroll: true });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      for (var i = 0; i < steps.length; i++) {
        if (!validStep(i)) { show(i, true); return; }
      }
      submit.disabled = true;
      submit.setAttribute("aria-busy", "true");
      var demo = form.hasAttribute("data-demo");
      var request = demo
        ? new Promise(function (resolve) { setTimeout(function () { resolve({ ok: true }); }, 700); })
        : fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
            .then(function (res) { return res.json().catch(function () { return { ok: false }; }); });
      request
        .then(function (j) {
          if (j && j.ok) return finish();
          if (j && j.errors) {
            var firstStep = steps.length;
            Object.keys(j.errors).forEach(function (n) {
              showError(n, j.errors[n]);
              steps.forEach(function (s, k) {
                if ((" " + s.getAttribute("data-fields") + " ").indexOf(" " + n + " ") !== -1) firstStep = Math.min(firstStep, k);
              });
            });
            if (firstStep < steps.length) return show(firstStep, true);
          }
          status.hidden = false;
        })
        .catch(function () { status.hidden = false; })
        .then(function () {
          submit.disabled = false;
          submit.removeAttribute("aria-busy");
        });
    });

    show(0, false);
  }

  function initBookings() {
    $$("form[data-booking]:not([data-ready])").forEach(setupBooking);
  }

  /* --------------------------------------------------------------- init */

  function init() {
    initLightboxes();
    initBookings();
  }
  init();
  // The site swaps pages without a full reload: pick up new content as it arrives
  var pending = 0;
  new MutationObserver(function () {
    if (!pending) pending = window.requestAnimationFrame(function () { pending = 0; init(); });
  }).observe(document.body, { childList: true, subtree: true });
})();
