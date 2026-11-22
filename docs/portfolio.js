(() => {
  const portfolioBase = 'assets/portfolio/';
  const cases = [
    {id:'hanker',name:'HANKER BURGER',display:'HANKER',category:'Branding',scope:'Full-service brand partner',format:'full',cover:'hanker-cover-final.jpeg',logo:'assets/logos/hanker.webp',palette:['#f25712','#15100d','#fff0d7'],description:'An end-to-end food brand partnership spanning identity, physical experience, content, campaigns and performance marketing.',tags:['Visual identity','Physical rollout','Social launch'],journey:[['01 / Brand foundation','Build a bold, scalable identity system with a distinctive urban food personality.'],['02 / Brand in motion','Translate the identity into campaign worlds and an always-on social content system.'],['03 / Brand experience','Carry the same visual confidence into the physical space and future expansion.']],images:[['hanker-detail-01.png','01 / BRAND FOUNDATION · Identity system, visual language and applications'],['hanker-detail-02.png','02 / CAMPAIGN WORLD · A cinematic launch system built for appetite and impact'],['hanker-detail-03.png','03 / SOCIAL CONTENT · A high-energy visual system for product and lifestyle stories'],['hanker-detail-04.png','04 / ALWAYS-ON CAMPAIGNS · Flexible creative formats across Arabic and English'],['hanker-detail-06.png','05 / PHYSICAL EXPERIENCE · Storefront, menu and interior brand implementation'],['hanker-detail-05.png','06 / BUILT TO SCALE · A consistent system designed for growth and expansion']],url:'https://www.facebook.com/profile.php?id=61589370899032'},
    {id:'vision',name:'AUTO VISION',display:'VISION',category:'Branding',scope:'Full-service brand partner',format:'full',cover:'vision-cover-final.jpeg',palette:['#06142a','#0b4ea2','#e6f2ff'],description:'An end-to-end automotive brand partnership covering identity, digital presence, content, campaigns and performance marketing.',tags:['Visual identity','Digital design','Social system'],journey:[['01 / Visual identity','Engineer a premium automotive identity around a distinctive eye-and-wing emblem.'],['02 / Campaign system','Turn product choice, pricing and finance messages into one coherent content language.'],['03 / Customer action','Structure every offer around clearer decisions, qualified enquiries and faster conversion.']],images:[['vision-detail-01.jpeg','01 / VISUAL IDENTITY · Logo construction, color system and automotive brand assets'],[['vision-detail-02.jpeg','vision-detail-03.jpeg','vision-detail-04.jpeg','vision-detail-05.jpeg'],'02 / CAMPAIGN GRID I · Brand introduction, product choice, value and finance'],[['vision-detail-06.jpeg','vision-detail-07.jpeg','vision-detail-08.jpeg','vision-detail-09.jpeg'],'03 / CAMPAIGN GRID II · Down payment, cashback, zero fees and immediate delivery']]},
    {id:'link',name:'AUTO LINK',display:'AUTO LINK',category:'Branding',scope:'Full-service brand partner',format:'full',cover:'link-cover-final.jpeg',logo:'assets/logos/auto-link.webp',palette:['#f2f2f0','#d71920','#141414'],description:'An end-to-end automotive brand built by STEP—from strategy and identity to a scalable digital system, campaign content and performance marketing.',tags:['Brand identity','Digital design system','Campaign rollout'],journey:[['01 / Brand foundation','Position Auto Link as a clear, trusted bridge between customers, vehicles, dealers and finance partners.'],['02 / Digital system','Translate the identity into a precise bilingual interface language for every digital touchpoint.'],['03 / Campaign rollout','Build a flexible content system that turns customer questions into confident, qualified enquiries.']],images:[['link-detail-01.jpeg','01 / BRAND IDENTITY · Strategy, logo system, typography, color palette and core applications'],['link-detail-02.jpeg','02 / DIGITAL DESIGN SYSTEM · Bilingual UI principles, components, iconography and campaign framework'],[['link-detail-03.jpeg','link-detail-04.jpeg','link-detail-05.jpeg','link-detail-06.jpeg'],'03 / CAMPAIGN GRID I · Vehicle discovery, decision-making and customer-fit messaging'],[['link-detail-07.jpeg','link-detail-08.jpeg','link-detail-09.jpeg','link-detail-10.jpeg'],'04 / CAMPAIGN GRID II · Brokerage support, finance steps, program comparison and budget guidance']]},
    {id:'deer',name:'DEER',display:'DEER',category:'Branding',scope:'Full-service brand partner',format:'full',cover:'deer-cover-final.jpeg',palette:['#ece6dc','#6f8ca8','#17334c'],description:'A complete fashion brand partnership spanning identity, art direction, content, campaigns and performance marketing.',tags:['Brand identity','Art direction','Applications'],images:[['deer-cover.jpeg','Campaign hero artwork'],['deer.webp','Visual identity and brand applications']]},
    {id:'enzo',name:'ENZO CAFÉ',display:'ENZO',category:'Branding',scope:'Full-service brand partner',format:'full',cover:'enzo-cover-final.jpeg',palette:['#11100f','#b4773f','#f0e6d8'],description:'An end-to-end café brand built through identity, physical applications, content, campaigns and performance marketing.',tags:['Brand identity','Packaging','Applications'],images:[['enzo.webp','Brand identity and applications']]},
    {id:'kitchen',name:'CREATIVE KITCHEN',display:'KITCHEN',category:'Campaigns',scope:'Full-service brand partner',format:'full',cover:'kitchen-cover-final.jpeg',palette:['#35261d','#9f2d20','#ead9c5'],description:'A complete interior brand partnership covering identity, content direction, campaigns and performance marketing.',tags:['Campaign creative','Social design'],images:[['kitchen-cover.jpeg','Kitchen campaign artwork']]},
    {id:'fasla',name:'FASLA',display:'FASLA',category:'Campaigns',scope:'Full-service brand partner',format:'full',cover:'fasla-cover-final.jpeg',logo:'assets/logos/fasla.webp',palette:['#171528','#664884','#b8f1e5'],description:'A complete wellness brand partnership developed from identity through sensitive content, campaigns and performance marketing.',tags:['Creative direction','Social design'],images:[['fasla-cover.jpeg','Day program campaign'],['fasla-retreat.jpeg','Women’s retreat campaign']]},
    {id:'siwa',name:'SIWA BUS',display:'SIWA',category:'Campaigns',scope:'Full-service brand partner',format:'full',cover:'siwa-cover-final.jpeg',palette:['#d9c598','#627332','#14210d'],description:'An end-to-end travel brand partnership covering identity, content, campaigns, booking communication and performance marketing.',tags:['Campaign creative','Social design'],images:[['siwa-cover.jpeg','Travel campaign artwork']]},
    {id:'boubyan',name:'BOUBAYAN FARM',display:'BOUBAYAN',category:'Campaigns',scope:'Full-service brand partner',format:'full',cover:'boubyan-cover-final.jpeg',logo:'assets/logos/boubayan.webp',palette:['#173f2d','#98ad73','#f0eadb'],description:'A complete agricultural brand partnership spanning identity, educational content, campaigns and performance marketing.',tags:['Content direction','Social design'],images:[['boubyan-cover.jpeg','Palm care social artwork']]},
    {id:'assam',name:'Ansaam Incense Kuwait',display:'ANSAAM',category:'Branding',scope:'Full-service brand partner',format:'full',cover:'ansaam-cover-final.jpeg',palette:['#17120c','#b8863b','#f5e7cc'],description:'An end-to-end incense brand partnership covering identity, packaging, content, campaigns and performance marketing.',tags:['Brand identity','Packaging','Art direction'],images:[['../case-bukhoor-assam.webp','Identity and packaging direction']]}
  ];

  const projects = document.querySelector('.projects');
  projects.innerHTML = '';
  const hexToRgb = hex => hex.match(/\w\w/g).map(x => parseInt(x,16)).join(',');
  cases.forEach((item,index) => {
    const [background,accent,ink] = item.palette;
    const article = document.createElement('article');
    article.className = 'case-card reveal';
    article.dataset.category = item.category;
    article.style.cssText = `--case-bg:${background};--case-accent:${accent};--case-ink:${ink};--case-rgb:${hexToRgb(accent)}`;
    article.innerHTML = `
      <button class="case-cover case-cover--${item.format} case-open" data-case="${item.id}" type="button" aria-label="Open ${item.name} case study">
        <span class="case-sequence">${String(index+1).padStart(2,'0')} / ${String(cases.length).padStart(2,'0')}</span>
        <span class="case-word" aria-hidden="true">${item.display}</span>
        <span class="case-orbit" aria-hidden="true"></span>
        <span class="case-art case-art--${item.format}"><img src="${portfolioBase+item.cover.replace(/\.[^.]+$/,'-1280.webp')}" srcset="${portfolioBase+item.cover.replace(/\.[^.]+$/,'-640.webp')} 640w, ${portfolioBase+item.cover.replace(/\.[^.]+$/,'-1280.webp')} 1280w" sizes="(max-width:600px) 84vw, 70vw" alt="" loading="lazy" decoding="async"></span>
        ${item.logo ? `<span class="case-logo"><img src="${item.logo}" alt=""></span>` : `<span class="case-monogram">${item.name}</span>`}
        <span class="case-type">${item.scope || item.category} · STEP</span>
        <span class="case-view">View case <b>↗</b></span>
      </button>
      <div class="case-summary"><div><span>${item.scope || item.category}</span><h3>${item.name}</h3></div><p>${item.description}</p></div>`;
    projects.append(article);
  });

  const filters = document.createElement('div');
  filters.className = 'work-filters';
  filters.setAttribute('role','group');
  filters.setAttribute('aria-label','Filter selected work');
  ['All work','Branding','Campaigns'].forEach((name,index) => {
    const button = document.createElement('button');
    button.textContent = name;
    button.setAttribute('aria-pressed',String(index===0));
    button.addEventListener('click',() => {
      filters.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed',String(x===button)));
      [...projects.children].forEach(el => el.hidden = index!==0 && el.dataset.category!==name);
    });
    filters.append(button);
  });
  projects.before(filters);

  const dialog = document.createElement('dialog');
  dialog.className = 'case-dialog';
  dialog.setAttribute('aria-labelledby','case-title');
  dialog.innerHTML = '<div class="case-bar"><span>STEP / PROJECT STORY</span><button class="case-close" autofocus aria-label="Close project">Close ×</button></div><div class="case-body"></div>';
  document.body.append(dialog);
  let opener = null;
  const close = () => window.stepProjectTransition ? window.stepProjectTransition({dialog,opener,open:false,change:()=>dialog.close()}) : dialog.close();
  dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
  dialog.querySelector('.case-close').addEventListener('click',close);
  dialog.addEventListener('close',() => {document.body.classList.remove('no-scroll');opener?.focus();});
  dialog.addEventListener('click',event => {
    if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();}
  });
  document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click',() => {
    opener=button;
    const item=cases.find(c=>c.id===button.dataset.case);
    dialog.querySelector('.case-body').innerHTML = `<figure class="case-hero"><img src="${portfolioBase+item.cover.replace(/\.[^.]+$/,'-1280.webp')}" alt="${item.name}" width="1280" height="900" decoding="async"></figure><span class="index">CREATED BY STEP</span><h2 id="case-title">${item.name}</h2><p>${item.description}</p>${item.journey?`<div class="case-journey">${item.journey.map(([heading,body])=>`<article><h3>${heading}</h3><p>${body}</p></article>`).join('')}</div>`:''}<div class="case-images">${item.images.map(([file,caption],i)=>{const [title,...detail]=caption.split(' · '),media=Array.isArray(file)?`<div class="case-image-grid">${file.map((source,j)=>`<img src="${portfolioBase+source}" alt="${item.name} — ${caption} ${j+1}" loading="lazy">`).join('')}</div>`:`<img src="${portfolioBase+file}" alt="${item.name} — ${caption}" loading="${i?'lazy':'eager'}">`;return `<figure>${media}<figcaption>${detail.length?`<strong>${title}</strong><span>${detail.join(' · ')}</span>`:caption}</figcaption></figure>`}).join('')}</div>${item.url?`<a class="case-outbound" href="${item.url}" target="_blank" rel="noopener noreferrer">Visit the brand on Facebook ↗</a>`:''}`;
    const open=()=>{dialog.showModal();dialog.scrollTop=0;document.body.classList.add('no-scroll');};
    if(window.stepProjectTransition)window.stepProjectTransition({dialog,opener,open:true,change:open});else open();
  }));

  const evidence=document.createElement('section');
  evidence.className='evidence';evidence.id='results';evidence.setAttribute('aria-labelledby','results-title');
  const kpis=[{value:8697,label:'Views',change:152},{value:430,label:'Engagements',change:75},{value:114,label:'Net followers',change:171}];
  evidence.innerHTML=`<div class="container"><div class="section-head reveal"><div><span class="index">PERFORMANCE / ANONYMOUS SNAPSHOT</span><h2 id="results-title">THE FIRST<br>28 DAYS.</h2></div></div><div class="performance-console"><div class="console-toolbar"><span class="console-label"><i aria-hidden="true"></i><span>Performance overview</span></span><span class="console-period">28 DAYS.</span></div><div class="console-grid">${kpis.map((k,i)=>`<article class="console-kpi" aria-labelledby="kpi-label-${i}"><div class="kpi-heading"><h3 id="kpi-label-${i}">${k.label}</h3><span class="kpi-sequence" aria-hidden="true">0${i+1}</span></div><div class="kpi-readout"><strong class="kpi-number" data-value="${k.value}" aria-hidden="true">${k.value.toLocaleString('en-US')}</strong><span class="kpi-accessible">${k.value.toLocaleString('en-US')}</span></div><div class="kpi-meter" aria-hidden="true"><span></span></div><div class="kpi-change"><b dir="ltr">↑ ${k.change}%</b><span>Dashboard-reported change</span></div></article>`).join('')}</div></div><p class="evidence-note">Source: client-provided platform dashboard. Percentage changes are shown as reported; comparison dates and paid/organic split are not available.</p></div>`;
  document.getElementById('contact').before(evidence);
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const readouts=[...evidence.querySelectorAll('.kpi-number')];
  let frame=0,started=false;
  const finish=()=>{cancelAnimationFrame(frame);readouts.forEach(el=>el.textContent=Number(el.dataset.value).toLocaleString('en-US'));evidence.classList.add('console-ready');};
  const animate=()=>{
    if(started)return;started=true;
    if(reducedMotion.matches){finish();return;}
    const start=performance.now();
    evidence.classList.add('console-enter');
    const tick=now=>{
      const progress=Math.min(1,(now-start)/800),eased=1-Math.pow(1-progress,3);
      readouts.forEach(el=>el.textContent=Math.round(Number(el.dataset.value)*eased).toLocaleString('en-US'));
      if(progress<1)frame=requestAnimationFrame(tick);else finish();
    };
    frame=requestAnimationFrame(tick);
  };
  if('IntersectionObserver' in window){
    const consoleObserver=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){animate();consoleObserver.disconnect();}},{threshold:.2});
    consoleObserver.observe(evidence.querySelector('.performance-console'));
  }else finish();
  reducedMotion.addEventListener('change',event=>{if(event.matches)finish();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&started)finish();});
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
})();
