/* ============================================================
   NYX — Soluciones Digitales
   main.js
   Nav scroll state · scroll reveals · cursor follow
   ============================================================ */

(() => {
  'use strict';

  // ────── Nav scroll state ──────
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ────── Reveal on scroll ──────
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // ────── Cursor follow (desktop only) ──────
  const cursor = document.getElementById('cursor');
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (cursor && isFinePointer) {
    let cx = 0, cy = 0, tx = 0, ty = 0;
    window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });

    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();

    document.querySelectorAll('a, button, .servicio, .miembro, .articulo, .audiencia, .caso')
      .forEach((el) => {
        el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
      });
  }

  // ────── Hero video smooth loop ──────
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('timeupdate', () => {
      const remaining = heroVideo.duration - heroVideo.currentTime;
      if (remaining < 0.8) {
        heroVideo.style.opacity = Math.max(0, remaining / 0.8);
      } else if (heroVideo.currentTime < 0.8) {
        heroVideo.style.opacity = Math.min(1, heroVideo.currentTime / 0.8);
      } else {
        heroVideo.style.opacity = 1;
      }
    });
  }

  // ────── Google Sheets webhook ──────
  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwWRXeiI_r7EMBxe6uaut4gjw5AhWJbJx4NiU702rztrM52WWQk2lF1PPz49vmPF7G-6g/exec';

  function sendToSheet(data) {
    var params = new URLSearchParams(data);
    return fetch(SHEET_URL + '?' + params.toString(), { method: 'GET', mode: 'no-cors' });
  }

  // ────── Contact form ──────
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;

      sendToSheet({
        type: 'contact',
        name: contactForm.querySelector('[name="name"]').value,
        email: contactForm.querySelector('[name="email"]').value,
        industry: contactForm.querySelector('[name="industry"]').value,
        website: contactForm.querySelector('[name="website"]').value,
        whatsapp: contactForm.querySelector('[name="whatsapp"]').value
      }).finally(function() {
        contactForm.style.display = 'none';
        var links = document.querySelector('.contacto-links');
        if (links) links.style.display = 'none';
        contactSuccess.removeAttribute('hidden');
        contactSuccess.classList.add('show');
      });
    });
  }

  // ────── Newsletter ──────
  var newsletters = document.querySelectorAll('.newsletter');
  newsletters.forEach(function(newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletter.querySelector('input');

      sendToSheet({ type: 'newsletter', email: input.value }).finally(function() {
        input.value = '';
        input.placeholder = document.documentElement.lang === 'en' ? 'Thanks. See you soon.' : 'Gracias. Nos leemos.';
      });
    });
  });
})();
