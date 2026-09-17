const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
const navLinks=document.querySelectorAll('.nav-link');

if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    document.body.classList.toggle('menu-open',open);
    menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  });
  navLinks.forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Abrir menú');
  }));
}

/* Iconografía GOC: sustituye símbolos genéricos por un sistema SVG lineal y coherente. */
const categoryIcons={
  'category-clothing':'<svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 10l-13 8 7 12 7-4v28h20V26l7 4 7-12-13-8c-2 5-5 8-11 8s-9-3-11-8z"/></svg>',
  'category-home':'<svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 29L32 9l24 20v26H8z"/><path d="M25 55V39h14v16"/><path d="M24 26h.01M40 26h.01"/></svg>',
  'category-hygiene':'<svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M32 55S14 43 14 26c0-7 5-12 11-12 4 0 6 2 7 5 1-3 3-5 7-5 6 0 11 5 11 12 0 17-18 29-18 29z"/><path d="M20 35c5 1 8 4 10 9M39 27c-4 2-6 5-7 9"/></svg>',
  'category-professional':'<svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 55V24l23-13 23 13v31H9z"/><path d="M18 55V35h28v20"/><path d="M25 22h.01M39 22h.01M25 29h.01M39 29h.01"/></svg>',
  'category-automotive':'<svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 43l4-15 6-10h18l6 10 4 15v8H13z"/><path d="M18 28h28M13 43h38"/><circle cx="21" cy="49" r="2"/><circle cx="43" cy="49" r="2"/></svg>'
};

document.querySelectorAll('.category-icon').forEach(icon=>{
  const card=icon.closest('.category-card');
  const key=card&&Object.keys(categoryIcons).find(name=>card.classList.contains(name));
  if(key){
    icon.innerHTML=categoryIcons[key];
    icon.style.display='grid';
    icon.style.placeItems='center';
    icon.style.width='44px';
    icon.style.height='44px';
  }
});
