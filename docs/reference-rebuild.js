(() => {
 const icons=['<path d="M3 27h5V17H3zM13 27h5V10h-5zM23 27h5V3h-5z"/>','<rect x="2" y="5" width="28" height="22" rx="2"/><path d="m13 11 8 5-8 5z"/>','<path d="m5 2 21 17-11 1-5 10zM16 20l6 10"/>','<rect x="3" y="11" width="17" height="18" rx="1"/><rect x="14" y="3" width="15" height="17" rx="1"/>'];
 document.querySelectorAll('.service').forEach((card,i)=>{
  const num=card.querySelector('.num');num.innerHTML=`<svg viewBox="0 0 32 32" aria-hidden="true">${icons[i]}</svg>`;
  const link=document.createElement('a');link.href='#contact';link.className=card.className;link.innerHTML=card.innerHTML;card.replaceWith(link);
  link.addEventListener('click',()=>{const select=document.getElementById('service');select.selectedIndex=i+1;});
 });
 // Restore the detailed summary within the case dialog; cards remain compact.
 const home=document.querySelector('.hero h1');home.setAttribute('aria-label',document.documentElement.lang==='ar'?'علامات تتحرك نحو المستقبل.':'Brands That Move Forward.');
 document.getElementById('languageToggle').addEventListener('click',()=>home.setAttribute('aria-label',document.documentElement.lang==='ar'?'علامات تتحرك نحو المستقبل.':'Brands That Move Forward.'));
 window.stepLocalize?.();
})();
