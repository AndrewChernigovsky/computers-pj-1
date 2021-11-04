const input = document.querySelector('.input');
const UnCalc = document.querySelector('.upstandart-calc');
const openCalc = document.querySelector('.open');

let power = "";

const type = document.querySelector('.type');


openCalc.addEventListener('click' , function(){
  UnCalc.classList.toggle("js-upcalc-active");
})

function insert(num) {
  if(input.textContent == 0) {
    input.textContent = "";
    input.textContent += num;
  } else
      input.textContent += num;
}

function clean() {
  input.textContent = "0";
  power = ""
}

function back() {
  let exp = input.textContent;
  input.textContent = exp.substring(0, exp.length - 1);
  if(input.textContent == 0) {
    input.textContent = "0";
  }
}

function equal() {
  let exp = input.textContent;
  if (input.textContent.includes('^')) {
    let tmp = input.textContent.split('^');
    let num = eval(power);
    let pow = +tmp[1];
    input.textContent = Math.pow(num,pow);
    power = "";
    return;
  }

  if (exp) {
    input.textContent = eval(exp);
  }
}

function percent() {
  input.textContent = eval(input.textContent)/100;
}

function constant(name) {
  if(input.textContent == 0) {
    input.textContent = "0";
  }

  if(name == "pi") {
    input.textContent +=  Math.PI.toFixed(8);
  }

  if(name == "e") {
    input.textContent += Math.E.toFixed(8);
  }
 }

 function operation(name) {
  if(name == "sqrt"){
    input.textContent = Math.sqrt(eval(input.textContent));
  }

  if(name == "pow-2"){
    input.textContent = Math.pow(eval(input.textContent), 2);
  }

  if(name == "pow-1"){
    input.textContent = Math.pow(eval(input.textContent), -1);
  }

  if(name == "^") {
    power = input.textContent;
    input.textContent += "^";
  }
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}


function fact() {
  input.textContent = factorial(+eval(input.textContent));
}

function log(name) {
  if(name == "lg") {
    input.textContent =  Math.log10(eval(input.textContent)).toFixed(8);
  }

  if(name == "ln") {
    input.textContent =  Math.log(eval(input.textContent)).toFixed(8);
  }
}

type.addEventListener('click', function() {
  if (type.textContent == "deg") {
    this.textContent = "rad";
  } else if (type.textContent == "rad") {
    this.textContent = "deg";
  }
})

function f(name) {
  if(name == 'sin'){
    if(type.textContent == "deg") {
      input.textContent =  parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
    }
  }

  if(name == 'cos') {
    if(type.textContent == "deg") {
      input.textContent =  parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
    }
  }

  if(name == 'tan') {
    if(type.textContent == "deg") {
      input.textContent =  parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
    }
  }
  if(name == 'ctg') {
    if(type.textContent == "deg") {
      input.textContent =  parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString());
    }
  }
}
