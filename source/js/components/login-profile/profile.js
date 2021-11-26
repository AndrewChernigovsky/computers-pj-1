const buttonSign = document.getElementById('sign');
const buttonSignBurger = document.getElementById('sign-burger');
const signEntrance = document.getElementById('sign-entrance');
const signExit = document.getElementById('signExit');

const buttonSignIn = document.getElementById('signIn');
const signInPopup = document.getElementById('login');

const signBack = document.getElementById('signBack');

function buttonSignOpen() {
  signEntrance.style.display = "block"
  signEntrance.children[0].style.display = "block";
};

function buttonSignClose() {
  signEntrance.style.display = "none"
  signEntrance.children[0].style.display = "none";
};

function buttonSignInOpen() {
  signEntrance.style.display = "none"
  signEntrance.children[0].style.display = "none";
  signInPopup.style.display = "none";
};

function signInPopupOpen() {
  signInPopup.style.display = "block";
}

function signInPopupClose() {
  signInPopup.style.display = "none";
}

buttonSign.addEventListener("click", buttonSignOpen);
buttonSignBurger.addEventListener("click", buttonSignOpen);
buttonSignIn.addEventListener("click", signInPopupOpen);

signExit.addEventListener("click", buttonSignClose);
signBack.addEventListener("click", signInPopupClose);

// login

const password = document.getElementById('password');
const btnPassword = document.getElementById('viewPassword');
const btnPasswordOpen = document.getElementById('showPassword');
const btnPasswordClosed = document.getElementById('closePassword');

const showPassword = () => {
  if(password.type === "password"){
      password.type="text"
      btnPasswordOpen.style.display="none";
      btnPasswordClosed.style.display="block";
  } else if (password.type === "text"){
      password.type="password"
      btnPasswordOpen.style.display="block";
      btnPasswordClosed.style.display="none";
  };
}

btnPassword.addEventListener('click', showPassword);
