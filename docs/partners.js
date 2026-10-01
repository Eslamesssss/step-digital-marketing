(() => {
  const clients = [
    ['insam','Ansaam Incense Kuwait','#090909'],['auto-vision','Auto Vision','#06152b'],
    ['auto-link','Auto Link','#fff'],['creative-kitchen','Creative Kitchen','#fff'],
    ['deer','DEER','#eee9e1'],['fasla','FASLA Wellness','#fafafa'],
    ['hanker','Hanker Burger','#241b15'],['boubyan','Boubyan Farm','#fff'],
    ['oil-zone','Oil Zone','#fff'],['siwa','Siwa Bus','#fff'],
    ['jolly','Jolly International Services','#111'],['hermes','Hermes International','#fafafa'],
    ['artemis','Artemis','#fafafa'],['djaghoubi','Djaghoubi Global','#eee'],
    ['turk-united','Türk United Service Group','#e4e9ed'],['golden-aegis','Golden Aegis','#282828'],
    ['robust','Robust Company','#252525'],['guide','Guide','#fff'],
    ['enzo','Enzo Café','#151211'],['atgroup','ATgroup','#fff']
  ];
  const logoCard = ([id,name,bg],index,featured=false,hidden=false) => `<figure${hidden?' aria-hidden="true"':''} class="client-card${featured?' client-card--featured':''}" style="--logo-bg:${bg};--i:${index}" title="${name}"><span class="client-logo"><img src="assets/partners/${id}.png" alt="${name}" width="150" height="78" loading="lazy"></span><figcaption>${name}</figcaption></figure>`;

  const featured = [clients[6],clients[1],clients[4],clients[5],clients[0]];
  const stage = document.createElement('section');
  stage.className = 'hero-client-strip client-world';
  stage.setAttribute('aria-labelledby','client-world-title');
  stage.innerHTML = `<div class="container client-world-grid"><div class="client-world-copy"><span class="index">02 / IN GOOD COMPANY</span><h2 id="client-world-title">OUR CLIENTS.<br><em>OUR STORY.</em></h2><p>Different industries. Distinct identities. One shared ambition: work that moves people.</p><a href="#partners">Meet our partners <span aria-hidden="true">↘</span></a></div><div class="client-cluster" aria-label="Featured clients"><span class="cluster-shift" aria-hidden="true"></span>${featured.map((item,index)=>logoCard(item,index,true)).join('')}<svg class="cluster-arrow" viewBox="0 0 150 90" aria-hidden="true"><path d="M8 22c29 3 55 16 76 38m-4-24 6 27 25-10"/></svg></div></div>`;
  document.getElementById('home').after(stage);

  const section = document.createElement('section');
  section.id = 'partners';
  section.className = 'section partners';
  section.setAttribute('aria-labelledby','partners-title');
  const rowA = clients.slice(0,10), rowB = clients.slice(10).reverse();
  section.innerHTML = `<div class="container partners-intro"><span class="index">03 / THE NETWORK</span><h2 id="partners-title">BUILT ON TRUST.<br><em>MADE TO LAST.</em></h2><p>Twenty brands. Different worlds. A growing network shaped by honest collaboration and ambitious work.</p></div><div class="partner-ribbon partner-ribbon--a"><div class="partner-ribbon-track">${[...rowA,...rowA].map((item,index)=>logoCard(item,index,false,index>=rowA.length)).join('')}</div></div><div class="partner-ribbon partner-ribbon--b"><div class="partner-ribbon-track">${[...rowB,...rowB].map((item,index)=>logoCard(item,index,false,index>=rowB.length)).join('')}</div></div><div class="container partners-controls"><a href="#contact">Your next chapter starts here <span aria-hidden="true">↗</span></a><button type="button" data-motion-toggle aria-pressed="false">Pause motion</button></div>`;
  stage.after(section);

  document.querySelectorAll('.service').forEach(item => item.tabIndex = 0);
  document.querySelector('.contact-intro')?.insertAdjacentHTML('afterend','<span class="next-note">Your Next Step.</span>');
  document.querySelector('.footer-main')?.insertAdjacentHTML('afterend','<div class="footer-signoff" aria-label="STEP"><span aria-hidden="true">STEP</span><i class="final-dot" aria-hidden="true"></i></div>');
})();
