(function () {
  if (!window.matchMedia("(max-width: 1024px)").matches) return;

  var container = document.getElementById("pdf-container");
  var loadingEl = document.getElementById("loading");
  var mobileView = document.querySelector(".mobile-view");
  if (!container || !loadingEl) return;
  mobileView.setAttribute("aria-hidden", "false");

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function getViewportWidth() {
    var v = window.visualViewport;
    if (v && typeof v.width === "number" && v.width > 0) return v.width;
    return document.documentElement.clientWidth || window.innerWidth || 320;
  }

  function renderPage(pdf, pageNum) {
    return pdf.getPage(pageNum).then(function (page) {
      var w = container.clientWidth || getViewportWidth();
      if (w < 1) w = getViewportWidth();
      var viewport = page.getViewport({ scale: 1 });
      var scale = w / viewport.width;
      var scaledViewport = page.getViewport({ scale: scale });
      var pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = Math.floor(scaledViewport.width * pixelRatio);
      canvas.height = Math.floor(scaledViewport.height * pixelRatio);
      canvas.style.width = scaledViewport.width + "px";
      canvas.style.height = scaledViewport.height + "px";
      canvas.setAttribute("role", "img");
      canvas.setAttribute("aria-label", "Page " + pageNum);
      var renderContext = {
        canvasContext: ctx,
        viewport: scaledViewport,
        enableWebGL: false,
        renderInteractiveForms: false,
      };
      ctx.scale(pixelRatio, pixelRatio);
      return page.render(renderContext).promise.then(function () {
        return canvas;
      });
    });
  }

  function loadPdf() {
    function runRender(pdf) {
      loadingEl.classList.add("loaded");
      var chain = Promise.resolve();
      for (var i = 1; i <= pdf.numPages; i++) {
        (function (n) {
          chain = chain
            .then(function () {
              return renderPage(pdf, n);
            })
            .then(function (c) {
              container.appendChild(c);
            });
        })(i);
      return chain;
    }

    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
    )
      .then(function () {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        return window.pdfjsLib.getDocument("portfolio26-27.pdf").promise;
      })
      .then(function (pdf) {
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            runRender(pdf).catch(function () {
              loadingEl.innerHTML =
                'Unable to load PDF. <a href="portfolio26-27.pdf" target="_blank" rel="noopener">Open PDF</a>';
              loadingEl.classList.add("loaded");
            });
          });
        });
      })
      .catch(function () {
        loadingEl.innerHTML =
          'Unable to load PDF. <a href="portfolio26-27.pdf" target="_blank" rel="noopener">Open PDF</a>';
        loadingEl.classList.add("loaded");
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadPdf);
  } else {
    loadPdf();
  }
})();
