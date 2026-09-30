/* STEP rescue layer: meaningful motion, no scroll hijacking. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach(({target,isIntersecting}) => {
      if (!isIntersecting) return;
      target.classList.add('step-in');
      reveal.unobserve(target);
    });
  }, {threshold:.12, rootMargin:'0px 0px -8%'});
  document.querySelectorAll('.section-head,.service,.case-card,.process-title,.process-manifesto,.step,.insight-grid article,.performance-console,.contact h2,.contact-grid').forEach(el => reveal.observe(el));

  const pause = document.querySelector('[data-motion-toggle]');
  if (pause) {
    pause.addEventListener('click', () => {
      const paused = document.body.classList.toggle('motion-paused');
      pause.setAttribute('aria-pressed', String(paused));
      pause.textContent = paused ? 'Resume motion' : 'Pause motion';
      window.stepLocalize?.(pause);
    });
    if (reduced.matches) pause.hidden = true;
  }

})();
