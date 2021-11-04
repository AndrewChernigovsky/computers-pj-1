function plus() {
  let num1, num2;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  let result = num1 + num2;

  document.getElementById('out').innerHTML = result;
}

function substract() {
  let num1, num2;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  let result = num1 - num2;

  document.getElementById('out').innerHTML = result;
}


function multiply() {
  let num1, num2;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  let result = num1 * num2;

  document.getElementById('out').innerHTML = result;
}

function division() {
  let num1, num2;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  let result = num1 / num2;

  document.getElementById('out').innerHTML = result;
}
