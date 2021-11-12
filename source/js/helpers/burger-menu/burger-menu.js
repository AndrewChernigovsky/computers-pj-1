const burger = document.querySelector('.menu__burger-btn');
const nav = document.querySelector('.menu__nav');
const jsOverlay = document.querySelector('.js-overlay-burger');

burger.addEventListener('click', () =>{
  if(nav.classList.contains('active') && burger.classList.contains('js-burger-menu')) {
    nav.classList.toggle('active');
    burger.classList.toggle('js-burger-menu');
    jsOverlay.style.display = "none";
  } else {
    nav.classList.toggle('active');
    burger.classList.toggle('js-burger-menu');
    jsOverlay.style.display = "block";
  }
});
