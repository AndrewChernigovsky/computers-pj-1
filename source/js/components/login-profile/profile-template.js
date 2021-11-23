const buttonSign = document.getElementById('sign');
const signEntrance = document.getElementById('sign-entrance');

let el = document.createElement('div');
el.setAttribute('id','signIntro');


function buttonSignOpen() {
  el.append(signEntrance.content.cloneNode(true))
  document.body.appendChild(el);
};

function buttonSignClose() {
  el.remove();
};

buttonSign.addEventListener("click", buttonSignOpen)
el.addEventListener("click", buttonSignClose);
