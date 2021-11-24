const buttonSign = document.getElementById('sign');
const buttonSignBurger = document.getElementById('sign-burger');
const signEntrance = document.getElementById('sign-entrance');
const jsOverlay = document.querySelector('.js-overlay-bg');

let el = document.createElement('div');
el.setAttribute('id','signIntro');


function buttonSignOpen() {
  el.append(signEntrance.content.cloneNode(true))
  document.body.appendChild(el);
  el.children[0].style.display = "block";
};

function buttonSignClose() {
  el.remove()
    while (this.firstChild) {this.removeChild(this.firstChild);}
    return this;

    el.children[0].style.display = "none";
};

buttonSign.addEventListener("click", buttonSignOpen)
buttonSignBurger.addEventListener("click", buttonSignOpen)

el.addEventListener("click", buttonSignClose);
