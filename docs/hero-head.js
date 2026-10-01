/* STEP hero: only the astronaut's head follows the pointer.
   Outer .hero-character keeps the entrance animation; this script writes transform on the inner head layer only. */
(() => {
  const head = document.querySelector('.hero-character-head');
  const figure = head && head.parentElement;
  if (!head) return;
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const MAX = {rotY: 4, rotX: 2.5, rotZ: .8, x: 3, y: 2};   // restrained: perceived more than noticed
  const EASE = .075, EPS = .002;
  // head centre inside the 900x1125 artwork
  const CX = 458 / 900, CY = 172 / 1125;

  let active = false, visible = true, frame = 0, last = 0;
  let tx = 0, ty = 0, cx = 0, cy = 0;          // target / current, normalised -1..1
  let px = 0, py = 0, havePointer = false;     // last pointer position
  let cxScreen = 0, cyScreen = 0, scale = 1;   // cached geometry
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  const measure = () => {
    const r = figure.getBoundingClientRect();
    if (!r.width) return;
    cxScreen = r.left + r.width * CX;
    cyScreen = r.top + r.height * CY;
    scale = r.width / 720;
  };
  const retarget = () => {
    if (!havePointer) return;
    tx = clamp((px - cxScreen) / (innerWidth * .5), -1, 1);
    ty = clamp((py - cyScreen) / (innerHeight * .5), -1, 1);
    kick();
  };
  const render = () => {
    if (Math.abs(cx) < EPS && Math.abs(cy) < EPS) { head.style.transform = ''; return; }
    const s = Math.max(.6, scale);
    head.style.transform =
      `perspective(1200px) translate3d(${(cx * MAX.x * s).toFixed(2)}px,${(cy * MAX.y * s).toFixed(2)}px,0) ` +
      `rotateX(${(-cy * MAX.rotX).toFixed(3)}deg) rotateY(${(cx * MAX.rotY).toFixed(3)}deg) rotateZ(${(cx * MAX.rotZ).toFixed(3)}deg)`;
  };
  const tick = (now) => {
    frame = 0;
    // frame-rate independent smoothing: ~7.5% per 60Hz frame, no overshoot
    const k = 1 - Math.pow(1 - EASE, Math.min(4, (now - (last || now - 16.7)) / 16.7));
    last = now;
    cx += (tx - cx) * k; cy += (ty - cy) * k;
    if (Math.abs(tx - cx) < EPS && Math.abs(ty - cy) < EPS) { cx = tx; cy = ty; render(); last = 0; head.classList.toggle('is-tracking', tx !== 0 || ty !== 0); return; }
    render();
    frame = requestAnimationFrame(tick);
  };
  function kick() {
    if (!active || !visible || frame) return;
    head.classList.add('is-tracking');
    frame = requestAnimationFrame(tick);
  }
  const onMove = (e) => {
    if (e.pointerType === 'touch') return;
    px = e.clientX; py = e.clientY; havePointer = true;
    retarget();
  };
  const toNeutral = () => { havePointer = false; tx = 0; ty = 0; kick(); };
  let geomFrame = 0;
  const onGeometry = () => { if (geomFrame) return; geomFrame = requestAnimationFrame(() => { geomFrame = 0; measure(); retarget(); }); };

  const io = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) { measure(); retarget(); } else if (frame) { cancelAnimationFrame(frame); frame = 0; last = 0; }
  }) : null;

  const enable = () => {
    if (active) return;
    active = true; measure();
    addEventListener('pointermove', onMove, {passive: true});
    document.documentElement.addEventListener('mouseleave', toNeutral);
    addEventListener('blur', toNeutral);
    addEventListener('scroll', onGeometry, {passive: true});
    addEventListener('resize', onGeometry, {passive: true});
    figure.addEventListener('animationend', onGeometry);
    io && io.observe(figure);
  };
  const disable = () => {
    if (!active) return;
    active = false;
    removeEventListener('pointermove', onMove);
    document.documentElement.removeEventListener('mouseleave', toNeutral);
    removeEventListener('blur', toNeutral);
    removeEventListener('scroll', onGeometry);
    removeEventListener('resize', onGeometry);
    figure.removeEventListener('animationend', onGeometry);
    io && io.unobserve(figure);
    cancelAnimationFrame(frame); cancelAnimationFrame(geomFrame); frame = geomFrame = 0; last = 0;
    tx = ty = cx = cy = 0; havePointer = false;
    head.style.transform = ''; head.classList.remove('is-tracking');
  };
  const sync = () => (fine.matches && !reduced.matches ? enable() : disable());
  fine.addEventListener('change', sync);
  reduced.addEventListener('change', sync);
  sync();
})();
