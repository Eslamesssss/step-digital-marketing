/* STEP / FORWARD MOTION: native scrolling, progressive enhancement, no idle animation loop. */
(() => {
 const root=document.documentElement, $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
 const reduce=matchMedia('(prefers-reduced-motion: reduce)'), fine=matchMedia('(hover: hover) and (pointer: fine)'), wide=matchMedia('(min-width:1100px) and (min-height:760px)');
 const lifetime=new AbortController(), animations=new Set(), ease='cubic-bezier(.16,1,.3,1)', clamp=x=>Math.min(1,Math.max(0,x));
 const on=(el,event,fn,options={})=>el?.addEventListener(event,fn,{...options,signal:lifetime.signal});
 const motion=(el,frames,options={})=>{
  if(!el||reduce.matches||!el.animate)return null;
  const a=el.animate(frames,{duration:450,easing:ease,...options});animations.add(a);
  a.finished.catch(()=>{}).finally(()=>animations.delete(a));return a;
 };
 const aboutImage=$('.about-photo img');let aboutTop=0;
 const fragments=[];
 ['services','work','process','insights','results','contact'].forEach((id,i)=>{
  const section=$('#'+id);if(!section)return;
  const accent=document.createElement('span');accent.className='lime-fragment fragment-'+i;accent.setAttribute('aria-hidden','true');
  ($('.section-head,.process-title',section)||$('.container',section)).append(accent);fragments.push({section,accent});
 });
 const footer=$('footer'),brand=$('.brand',footer),finale=document.createElement('span');
 finale.className='lime-finale';finale.setAttribute('aria-hidden','true');finale.innerHTML='<i></i><b></b>';brand.append(finale);
 const surface=document.createElement('span');surface.className='cta-surface';surface.setAttribute('aria-hidden','true');$('#contact').prepend(surface);
 const seen=new WeakSet();
 const reveal=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
  if(!isIntersecting)return;target.classList.add('motion-entered');reveal.unobserve(target);
  if(target===footer){target.classList.add('finale-arrived');return;}
  const heading=$('h2',target);
  if(target.id==='contact')motion(heading,[{clipPath:'inset(0 100% 0 0)',transform:'translateX(16px)'},{clipPath:'inset(0 0 0 0)',transform:'translateX(0)'}],{duration:650});
  else if(target.id!=='process')motion(heading,[{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0 0)'}],{duration:450});
  if(target.id==='services')$$('.service',target).forEach((el,i)=>motion(el,[{clipPath:'inset(0 100% 0 0)',transform:'translateX(-8px)'},{clipPath:'inset(0 0 0 0)',transform:'translateX(0)'}],{delay:i*45,duration:400}));
  if(target.id==='insights')$$('.insight-grid img',target).forEach((el,i)=>motion(el,[{clipPath:'polygon(0 0,0 0,15% 100%,0 100%)'},{clipPath:'polygon(0 0,100% 0,100% 100%,0 100%)'}],{delay:i*45}));
 }),{threshold:.12});
 $$('main>section,footer').forEach(s=>reveal.observe(s));
 const track=$('.projects'),work=$('#work'),deck=$('.container',work);
 const controls=document.createElement('div');controls.className='runway-controls';controls.innerHTML='<span class="runway-count" aria-hidden="true">01 / 10</span><span class="runway-meter" aria-hidden="true"><i></i></span><button type="button" aria-label="Previous project">←</button><button type="button" aria-label="Next project">→</button>';
 track.after(controls);track.tabIndex=0;track.setAttribute('aria-label','Featured projects');
 const visible=()=>$$('.case-card:not([hidden])',track),meter=$('.runway-meter i',controls),count=$('.runway-count',controls);
 let pinned=false,range=0,span=0,start=0,active=-1,raf=0,measureFrame=0,geometry=[];
 const rtl=()=>root.dir==='rtl'?-1:1;
 const focusCard=index=>{
  const cards=visible();index=Math.min(cards.length-1,Math.max(0,index));if(active===index)return;active=index;
  cards.forEach((c,i)=>c.classList.toggle('project-active',i===index));count.textContent=String(index+1).padStart(2,'0')+' / '+String(cards.length).padStart(2,'0');
  const card=cards[index];if(card&&!seen.has(card)){seen.add(card);motion($('.case-summary',card),[{transform:'translateX(12px)'},{transform:'translateX(0)'}],{duration:350});}
 };
 const paint=()=>{
  raf=0;
  if(pinned){const progress=clamp((scrollY-start)/Math.max(1,span));track.style.transform=`translate3d(${-rtl()*progress*range}px,0,0)`;meter.style.transform=`scaleX(${progress})`;focusCard(Math.round(progress*(visible().length-1)));}
  if(!reduce.matches&&fine.matches&&wide.matches){if(aboutImage)aboutImage.style.translate='0 '+Math.max(-10,Math.min(10,(scrollY+innerHeight/2-aboutTop)*.025))+'px';geometry.forEach(({accent,top,height})=>accent.style.setProperty('--journey',Math.max(-8,Math.min(8,((scrollY+innerHeight/2-top)/height-.5)*16))+'px'));}
 };
 const schedule=()=>{if(!raf)raf=requestAnimationFrame(paint);};
 const measure=()=>{
  measureFrame=0;const previous=pinned;
  // Do not pin if the complete deck cannot fit the viewport, including enlarged text.
  work.classList.remove('runway-enabled');work.style.height='';track.style.transform='';track.scrollLeft=0;
  const top=$('header').offsetHeight+12;work.style.setProperty('--pin-top',top+'px');
  pinned=wide.matches&&fine.matches&&!reduce.matches;
  if(pinned){work.classList.add('runway-enabled');if(deck.offsetHeight>innerHeight-top-8){pinned=false;work.classList.remove('runway-enabled');}}
  range=Math.max(0,track.scrollWidth-track.clientWidth);span=Math.min(range,innerHeight*2.6);
  if(pinned&&range>0)work.style.height=deck.offsetHeight+span+'px';else {pinned=false;work.classList.remove('runway-enabled');}
  start=work.getBoundingClientRect().top+scrollY-top;
  aboutTop=$('#process').getBoundingClientRect().top+scrollY;
  if(!pinned&&aboutImage)aboutImage.style.translate='';
  geometry=fragments.map(({section,accent})=>({accent,top:section.getBoundingClientRect().top+scrollY,height:section.offsetHeight}));
  active=-1;focusCard(0);paint();if(previous&&!pinned)track.style.transform='';
 };
 const scheduleMeasure=()=>{if(!measureFrame)measureFrame=requestAnimationFrame(measure);};
 const move=direction=>{
  if(pinned){const next=Math.max(0,Math.min(visible().length-1,active+direction));scrollTo({top:start+next/Math.max(1,visible().length-1)*span,behavior:'smooth'});}
  else {const card=visible()[0];if(card)track.scrollBy({left:direction*rtl()*(card.offsetWidth+parseFloat(getComputedStyle(track).gap)),behavior:reduce.matches?'instant':'smooth'});}
 };
 on(controls.children[2],'click',()=>move(-1));on(controls.children[3],'click',()=>move(1));
 on(track,'scroll',()=>{if(pinned)return;const p=clamp(Math.abs(track.scrollLeft)/Math.max(1,range));meter.style.transform=`scaleX(${p})`;focusCard(Math.round(p*(visible().length-1)));},{passive:true});
 on(track,'keydown',e=>{if(e.target!==track)return;if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();move((e.key==='ArrowRight'?1:-1)*rtl());}});
 on(track,'focusin',e=>{if(!pinned)return;const card=e.target.closest('.case-card');if(!card)return;const r=card.getBoundingClientRect(),d=deck.getBoundingClientRect();if(r.left>=d.left&&r.right<=d.right)return;const index=visible().indexOf(card);scrollTo({top:start+index/Math.max(1,visible().length-1)*span,behavior:'instant'});});
 on($('.work-filters'),'click',()=>{if(pinned&&scrollY>start&&scrollY<start+span)scrollTo({top:start,behavior:'instant'});measure();visible().forEach((c,i)=>motion(c,[{clipPath:'inset(0 100% 0 0)',transform:'translateX(12px)'},{clipPath:'inset(0 0 0 0)',transform:'translateX(0)'}],{duration:350,delay:Math.min(i,3)*40}));});
 on(window,'scroll',schedule,{passive:true});
 const resize=new ResizeObserver(scheduleMeasure);resize.observe(deck);resize.observe($('header'));
 const locale=new MutationObserver(scheduleMeasure);locale.observe(root,{attributes:true,attributeFilter:['dir','lang']});
 [wide,fine,reduce].forEach(q=>on(q,'change',()=>{if(reduce.matches){animations.forEach(a=>a.cancel());fragments.forEach(({accent})=>accent.style.removeProperty('--journey'));}measure();}));
 on(window,'resize',scheduleMeasure,{passive:true});
 // The sweep accompanies navigation; it never postpones it or captures input.
 const sweep=document.createElement('div');sweep.className='step-page-shift';sweep.setAttribute('aria-hidden','true');document.body.append(sweep);
 on(document,'click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||reduce.matches||e.ctrlKey||e.metaKey)return;motion(sweep,[{transform:'translateX(-240%) skewX(-22deg)'},{transform:'translateX(260%) skewX(-22deg)'}],{duration:700});});
 let busy=false;
 window.stepProjectTransition=async({dialog,opener,open,change})=>{
  if(busy){change();return;}busy=true;let applied=false,clone,source,target;
  const apply=()=>{if(!applied){applied=true;change();}};
  try{
   source=open?$('img',opener):$('.case-hero img',dialog);target=open?$('.case-hero img',dialog):$('img',opener);
   if(reduce.matches||!source||!target){apply();return;}
   const from=source.getBoundingClientRect();if(!from.width||!from.height){apply();return;}
   await Promise.race([target.decode?.().catch(()=>{}),new Promise(resolve=>setTimeout(resolve,120))]);
   if(document.startViewTransition){source.style.viewTransitionName='step-project-cover';const t=document.startViewTransition(()=>{source.style.viewTransitionName='';apply();target.style.viewTransitionName='step-project-cover';});await t.finished.catch(()=>{});}
   else {
    const src=source.currentSrc||source.src;apply();const to=target.getBoundingClientRect();if(!to.width||!to.height)return;
    clone=document.createElement('img');clone.src=src;clone.alt='';clone.className='project-flight';clone.style.cssText=`left:${to.left}px;top:${to.top}px;width:${to.width}px;height:${to.height}px`;target.style.visibility='hidden';
    (open?dialog:document.body).append(clone);
    const flight=motion(clone,[{transform:`translate(${from.left-to.left}px,${from.top-to.top}px) scale(${from.width/to.width},${from.height/to.height})`},{transform:'translate(0,0) scale(1,1)'}],{duration:620});await flight?.finished.catch(()=>{});
   }
  }catch{apply();}finally{apply();clone?.remove();if(source)source.style.viewTransitionName='';if(target){target.style.viewTransitionName='';target.style.visibility='';}busy=false;}
 };
 on(document,'visibilitychange',()=>{if(document.hidden)animations.forEach(a=>a.finish());});
 on(window,'pageshow',scheduleMeasure);
 on(window,'pagehide',e=>{if(e.persisted)return;lifetime.abort();resize.disconnect();locale.disconnect();reveal.disconnect();cancelAnimationFrame(raf);cancelAnimationFrame(measureFrame);animations.forEach(a=>a.cancel());});
 on($('#service'),'change',e=>motion(e.target,[{clipPath:'inset(0 100% 0 0)',transform:'translateX(8px)'},{clipPath:'inset(0 0 0 0)',transform:'translateX(0)'}],{duration:280}));
 window.stepLocalize?.(controls);root.classList.add('step-motion-ready');measure();
})();
