(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    var links = navLinks.querySelectorAll('a');
    function closeMenu() {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    }
    function openMenu() {
      toggle.setAttribute('aria-expanded', 'true');
      navLinks.classList.add('is-open');
    }
    toggle.removeAttribute('hidden');
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.contains('is-open');
      if (open) closeMenu();
      else openMenu();
    });
    links.forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  // Smooth scroll for anchor links (respects scroll-margin for fixed header)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
