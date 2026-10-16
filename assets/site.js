(function () {
  "use strict";

  /* Terrain contour lines for the HG-12 viewfinder */
  var contours = document.getElementById("contours");
  if (contours) {
    var NS = "http://www.w3.org/2000/svg";
    var blob = function (cx, cy, r, s) {
      var n = 14, p = [], i, a, k;
      for (i = 0; i < n; i++) {
        a = (i / n) * Math.PI * 2;
        k = 1 + 0.16 * Math.sin(3 * a + s) + 0.09 * Math.sin(5 * a + 2 * s);
        p.push([cx + Math.cos(a) * r * k * 1.25, cy + Math.sin(a) * r * k * 0.9]);
      }
      var d = "M" + p[0][0].toFixed(1) + "," + p[0][1].toFixed(1);
      for (i = 0; i < n; i++) {
        var p0 = p[(i - 1 + n) % n], p1 = p[i], p2 = p[(i + 1) % n], p3 = p[(i + 2) % n];
        d += " C" + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + "," + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) +
          " " + (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + "," + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) +
          " " + p2[0].toFixed(1) + "," + p2[1].toFixed(1);
      }
      return d + "Z";
    };
    var r, el;
    for (r = 34; r <= 260; r += 27) {
      el = document.createElementNS(NS, "path");
      el.setAttribute("d", blob(290, 270, r, 1));
      contours.appendChild(el);
    }
    for (r = 18; r <= 96; r += 19) {
      el = document.createElementNS(NS, "path");
      el.setAttribute("d", blob(450, 140, r, 2.8));
      contours.appendChild(el);
    }
  }

  /* Pause the HG-12 flight loop for people who prefer less motion */
  var finder = document.getElementById("finder");
  if (finder && window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches && finder.pauseAnimations) {
    finder.pauseAnimations();
  }

  /* Daylight / thermal toggle on the HG-12 page */
  var scene = document.getElementById("scene");
  var caption = document.getElementById("caption");
  if (scene && caption) {
    var text = {
      day: "The daylight camera records visible detail, so staff can document infrastructure conditions and changes across a monitored area.",
      thermal: "Thermal imaging shows differences in surface temperature, which helps in darkness or low light. It can't see through walls or dense obstacles, and weather and sensor quality limit what it shows."
    };
    var buttons = document.querySelectorAll(".toggle button");
    var setMode = function (m) {
      scene.setAttribute("data-mode", m);
      caption.textContent = text[m];
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.mode === m)); });
    };
    buttons.forEach(function (b) {
      b.addEventListener("click", function () { setMode(b.dataset.mode); });
    });
    setMode("day");
  }
})();
