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

  // ────── Contact form ──────
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      var links = document.querySelector('.contacto-links');
      if (links) links.style.display = 'none';
      contactSuccess.removeAttribute('hidden');
      contactSuccess.classList.add('show');
    });
  }

  // ────── Newsletter (placeholder behavior) ──────
  const newsletter = document.querySelector('.newsletter');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletter.querySelector('input');
      input.value = '';
      input.placeholder = 'Gracias. Nos leemos.';
    });
  }
})();
