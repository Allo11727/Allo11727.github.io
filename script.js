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
