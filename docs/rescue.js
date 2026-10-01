/* STEP final layer: grouped scroll reveals + motion pause. No scroll hijacking. */
(() => {
  const root = document.documentElement;
  const groups = [
    ['.section-head', 1], ['.service-list .service', 4], ['.projects .case-card', 2], ['.process-title', 1],
    ['.process-manifesto', 1], ['.steps .step', 4], ['.insight-grid article', 3], ['.performance-console', 1],
    ['.contact h2', 1], ['.contact-grid', 1]
  ];
  if (root.classList.contains('js')) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(({target, isIntersecting}) => {
        if (!isIntersecting) return;
        target.classList.add('is-in');
        reveal.unobserve(target);
        // Once played, drop the hook so hover transforms/transitions are not shadowed.
        setTimeout(() => { target.removeAttribute('data-reveal'); target.classList.remove('is-in'); target.style.removeProperty('--rd'); }, 1000);
      });
    }, {threshold: .12, rootMargin: '0px 0px -6%'});
    groups.forEach(([selector, columns]) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        el.dataset.reveal = '';
        el.style.setProperty('--rd', (index % columns) * 60 + 'ms');
        reveal.observe(el);
      });
    });
  }

  const pause = document.querySelector('[data-motion-toggle]');
  if (pause) {
    pause.addEventListener('click', () => {
      const paused = document.body.classList.toggle('motion-paused');
      pause.setAttribute('aria-pressed', String(paused));
      pause.textContent = paused ? 'Resume motion' : 'Pause motion';
      window.stepLocalize?.(pause);
    });
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) pause.hidden = true;
  }
})();
