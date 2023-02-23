let currentNumber = "";
let operator = "";
let result = document.getElementById("result");

function addDigit(digit) {
  currentNumber += digit;
  result.value = currentNumber;
}

function clear() {
  result.value= ""
}