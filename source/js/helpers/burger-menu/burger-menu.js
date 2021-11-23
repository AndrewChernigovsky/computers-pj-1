const burger = document.querySelector('.menu__burger-btn');
const nav = document.querySelector('.menu__nav');
const jsOverlay = document.querySelector('.js-overlay-bg');
const btnSign = document.querySelector('.burger-sign');
const logo = document.querySelector('.logo-m');


burger.addEventListener('click', () =>{
  if(nav.classList.contains('nav-active') && burger.classList.contains('js-burger-menu')) {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('js-burger-menu');
    jsOverlay.style.display = "none";
    btnSign.style.display = "none";
    logo.style.display = "none";
  } else {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('js-burger-menu');
    jsOverlay.style.display = "block";
    btnSign.style.display = "block";
    logo.style.display = "block";
  }
});
