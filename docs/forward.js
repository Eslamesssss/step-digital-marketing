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
 // One shared pointer frame: ring position + subtle CTA pull are written together, only while the pointer moves.
 const ring=document.getElementById('cursorRing');let pointerFrame=0,px=0,py=0,magnet=null,magnetBounds=null,magnetX=0,magnetY=0;
 const writePointer=()=>{pointerFrame=0;ring.style.translate=`${px-27}px ${py-27}px`;if(magnet)magnet.style.translate=`${magnetX}px ${magnetY}px`;};
 const schedule=()=>{if(!pointerFrame)pointerFrame=requestAnimationFrame(writePointer);};
 const releaseMagnet=()=>{if(magnet)magnet.style.translate='';magnet=null;magnetBounds=null;};
 document.addEventListener('pointermove',e=>{
  if(!fine.matches||reduced.matches||e.pointerType==='touch')return;
  const project=e.target.closest('.case-cover'),link=e.target.closest('a,button,summary'),cta=e.target.closest('.text-link,.submit');
  ring.classList.toggle('active',!!(project||link));ring.classList.toggle('link-ring',!!link&&!project);
  const label=project?(document.documentElement.lang==='ar'?'عرض':'VIEW'):'';if(ring.textContent!==label)ring.textContent=label;
  if(cta!==magnet){releaseMagnet();if(cta){magnet=cta;magnetBounds=cta.getBoundingClientRect();}}
  if(magnet){magnetX=Math.max(-3,Math.min(3,(e.clientX-magnetBounds.left-magnetBounds.width/2)*.03));magnetY=Math.max(-3,Math.min(3,(e.clientY-magnetBounds.top-magnetBounds.height/2)*.05));}
  px=e.clientX;py=e.clientY;schedule();
 },{passive:true});
 document.addEventListener('pointerleave',()=>{ring.classList.remove('active','link-ring');releaseMagnet();});
 reduced.addEventListener('change',()=>{ring.classList.remove('active');releaseMagnet();cancelAnimationFrame(frame);frame=0;});
 document.getElementById('projectForm').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget),text=['Hello STEP, I would like to discuss a project.','','Name: '+data.get('name'),'Company: '+(data.get('company')||'Not specified'),'Service: '+data.get('service'),'Brief: '+data.get('message')].join('\n');window.open('https://wa.me/201044824418?text='+encodeURIComponent(text),'_blank','noopener');});
})();
