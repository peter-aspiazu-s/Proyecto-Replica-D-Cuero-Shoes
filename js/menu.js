const btnMenu = document.querySelector('#btnMenu');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar__menu')
})

const subMenu = document.querySelector('.header__container-submenu');
const subMenuUl = document.querySelector('.header__ul-submenu');

subMenu.addEventListener('click', function(){
    subMenuUl.classList.toggle('mostrar__submenu');
})


const subMenuNosotros = document.querySelector('.header__li');
const subMenuNosotrosUl = document.querySelector('.header__ul-nosotros');

subMenuNosotros.addEventListener('click', function(){
    subMenuNosotrosUl.classList.toggle('mostrar__submenuNosotros');
})