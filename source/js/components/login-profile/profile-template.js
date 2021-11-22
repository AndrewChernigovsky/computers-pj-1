const buttonSign = document.getElementById('sign');
const signEntrance = document.getElementById('sign-entrance');
const signClose = document.getElementById('closeSign');

let signEntranceDiv = document.querySelector('profile');

let el = document.createElement('div');
el.classList.add('profile');
el.setAttribute('id','profile');

function buttonSignOpen() {
  el.append(signEntrance.content.cloneNode(true))
  document.body.append(el);

  if (el.children[1]) {
    el.children[1].remove();
  };

  function buttonSignClose() {
    console.log('1');
  };

  if(el){
    signClose.addEventListener("click", buttonSignClose);
  }
};



buttonSign.addEventListener("click", buttonSignOpen);

