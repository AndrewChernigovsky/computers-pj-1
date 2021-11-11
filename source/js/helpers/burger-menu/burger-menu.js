const menu = document.getElementById('menu');
const burger = document.querySelector('.menu__burger-btn');
const nav = document.querySelector('.menu__nav')

burger.addEventListener('click', () =>{
  nav.classList.toggle('active');
  console.log('2');
});
