/* Event-driven motion: no idle RAF, no scroll hijacking, native touch runway. */
(() => {
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'), fine=matchMedia('(hover: hover) and (pointer: fine)');
 const menu=document.getElementById('menuButton'), nav=document.getElementById('navLinks');
 const closeMenu=(restore=false)=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');document.body.classList.remove('no-scroll');if(restore)menu.focus();};
 menu.addEventListener('click',()=>{if(nav.classList.contains('open')){closeMenu(true);return;}nav.classList.add('open');menu.setAttribute('aria-expanded','true');menu.setAttribute('aria-label','Close menu');document.body.classList.add('no-scroll');nav.querySelector('a').focus();});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
 document.addEventListener('keydown',e=>{if(!nav.classList.contains('open'))return;if(e.key==='Escape'){closeMenu(true);return;}if(e.key==='Tab'){const controls=[...nav.querySelectorAll('a'),menu],first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
 matchMedia('(min-width:851px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
 const progress=document.getElementById('progress');let frame=0,max=1;
 const measure=()=>{max=Math.max(1,document.documentElement.scrollHeight-innerHeight);};
 const paint=()=>{progress.style.transform=`scaleX(${Math.min(1,scrollY/max)})`;frame=0;};
 addEventListener('scroll',()=>{if(!reduced.matches&&!frame)frame=requestAnimationFrame(paint);},{passive:true});
 new ResizeObserver(()=>{measure();if(!reduced.matches)paint();}).observe(document.body);measure();paint();
 const journey=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{if(isIntersecting){target.classList.add('journey-in');journey.unobserve(target);}}),{threshold:.12});
 document.querySelectorAll('main>section,footer').forEach(section=>{section.querySelector('h2')?.classList.add('journey-heading');journey.observe(section);});
 const sections=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){nav.querySelectorAll('a').forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}),{rootMargin:'-15% 0px -55% 0px'});
 document.querySelectorAll('main>section[id]').forEach(s=>sections.observe(s));
 const ring=document.getElementById('cursorRing');let cursorFrame=0,x=0,y=0;
 document.addEventListener('pointermove',e=>{if(!fine.matches||reduced.matches||e.pointerType==='touch')return;const project=e.target.closest('.case-cover'),gallery=e.target.closest('.projects'),link=e.target.closest('a,button,summary');ring.classList.toggle('active',!!(project||gallery||link));ring.classList.toggle('link-ring',!!link&&!project);ring.textContent=project?'VIEW':gallery?'DRAG →':'';x=e.clientX;y=e.clientY;if(!cursorFrame)cursorFrame=requestAnimationFrame(()=>{ring.style.transform=`translate(${x-27}px,${y-27}px)`;cursorFrame=0;});},{passive:true});
 document.addEventListener('pointerleave',()=>ring.classList.remove('active'));
 reduced.addEventListener('change',()=>{ring.classList.remove('active');cancelAnimationFrame(frame);frame=0;});
 document.querySelectorAll('.text-link,.submit').forEach(el=>{
  let bounds;el.addEventListener('pointerenter',()=>bounds=el.getBoundingClientRect());
  el.addEventListener('pointermove',e=>{if(!fine.matches||reduced.matches)return;const r=bounds||el.getBoundingClientRect();el.style.translate=`${Math.max(-4,Math.min(4,(e.clientX-r.left-r.width/2)*.03))}px ${Math.max(-4,Math.min(4,(e.clientY-r.top-r.height/2)*.06))}px`;},{passive:true});
  el.addEventListener('pointerleave',()=>el.style.translate='0 0');
 });
 document.getElementById('projectForm').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget),text=['Hello STEP, I would like to discuss a project.','','Name: '+data.get('name'),'Company: '+(data.get('company')||'Not specified'),'Service: '+data.get('service'),'Brief: '+data.get('message')].join('\n');window.open('https://wa.me/201044824418?text='+encodeURIComponent(text),'_blank','noopener');});
})();
