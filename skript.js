let operation = '';
let firstNumber = '';
let secondNumber = '';
let isSecondNumber = false;

function appendNumber(number) {
  if (!isSecondNumber) {
    firstNumber += number;
    document.getElementById('output').value = firstNumber;
  } else {
    secondNumber += number;
    document.getElementById('output').value = firstNumber + ' ' + operation + ' ' + secondNumber;
  }
}

function setOperation(op) {
  if (firstNumber && !secondNumber) {
    operation = op;
    isSecondNumber = true;
    document.getElementById('output').value = firstNumber + ' ' + operation;
  }
}

function calculate() {
  if (firstNumber && secondNumber && operation) {
    let result;
    switch(operation) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case '*':
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case '/':
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }
    document.getElementById('output').value = result;
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
    isSecondNumber = false;
  }
}

function clearOutput() {
  firstNumber = '';
  secondNumber = '';
  operation = '';
  isSecondNumber = false;
  document.getElementById('output').value = '';
}