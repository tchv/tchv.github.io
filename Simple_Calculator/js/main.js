function displayFocus() {
  document.getElementById("focus").focus();
}

function seven() {
  calc.input.value += '7';
}

function eight() {
  calc.input.value += '8';
}

function nine() {
  calc.input.value += '9';
}

function divide() {
  calc.input.value += '/';
}

function four() {
  calc.input.value += '4';
}

function five() {
  calc.input.value += '5';
}

function six() {
  calc.input.value += '6';
}

function multiply() {
  calc.input.value += '*';
}

function one() {
  calc.input.value += '1';
}

function two() {
  calc.input.value += '2';
}

function three() {
  calc.input.value += '3';
}

function subtract() {
  calc.input.value += '-';
}

function dot() {
  calc.input.value += '.';
}

function zero() {
  calc.input.value += '0';
}

function clean() {
  calc.input.value = '';
}

function add() {
  calc.input.value += '+';
}

function sum() {
  calc.input.value = eval(calc.input.value);
}
