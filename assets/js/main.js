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

  // ────── Audit form modal ──────
  const modal = document.getElementById('formModal');
  const modalClose = document.getElementById('modalClose');
  const auditForm = document.getElementById('auditForm');
  const formSuccess = document.getElementById('formSuccess');

  if (modal) {
    document.querySelectorAll('[data-open-form]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      auditForm.style.display = 'none';
      formSuccess.classList.add('show');
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
