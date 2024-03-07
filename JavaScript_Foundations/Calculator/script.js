const numberBtns = document.querySelectorAll(".numberBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");
const equalsBtn = document.getElementById("equalsBtn");
const decimalBtn = document.getElementById("decimalBtn");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const currentOperationScreen = document.getElementById("currentOperationScreen");

// The variables.
let firstNumber = "";
let secondNumber = "";
let operator = "";

/**
 * Updates the current operation displayed on the screen.
 *
 */
function updateCurrentOperationScreen() {
   currentOperationScreen.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}

/**
 * Appends a number to either the firstNumber or secondNumber depending on the operator. 
 * If there is no operator adds to firstNumber, if the operator is set adds to secondNumber.
 *
 * @param {string} number - The number to append.
 */
function appendNumber(number) {
   // If operator is not set, appends number to firstNumber.
  if (operator === "") {
    // Checks if firstNumber is currently "0".
    if (firstNumber === "0") {
      firstNumber = number; // Replaces "0" with the new number.
    } else {
      firstNumber += number; // Appends the new number.
    }
  } 
  // If operator is set, appends number to secondNumber.
  else {
    // Checks if secondNumber is currently "0".
    if (secondNumber === "0") {
      secondNumber = number; // Replaces "0" with the new number
    } else {
      secondNumber +=number; // Appends the new number
    }
  }
  updateCurrentOperationScreen();
}

/**
 * Sets the operator for the calculation.
 *
 * @param {string} newOperator - The new operator to set.
 */
function setOperation(newOperator) {
  // If all variables are unset, does nothing.
  if (firstNumber === "" && secondNumber === "" && operator === "") {
    return;
  }
  // If firstNumber is set and secondNumber is unset, sets the operator.
  if (firstNumber !== "" && secondNumber === "") {
    operator = newOperator;
    updateCurrentOperationScreen();
    return;
  }
  // If all variables are set, calculates into firstNumber, sets operator and clears secondNumber.
  if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
    firstNumber = "" + operate(operator, firstNumber, secondNumber).toFixed(5);
    operator = newOperator;
    secondNumber = "";
    updateCurrentOperationScreen();
    return;
  }
}

/**
 * Evaluates the expression and updates the result on the screen.
 * 
 */
function evaluate() {
  // If all variables are set, calculates result into firstNumber, clears operator and secondNumber.
  if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
    firstNumber = operate(operator, firstNumber, secondNumber);
    operator = "";
    secondNumber = "";
    updateCurrentOperationScreen();
  } else {}
}

/**
 * Clears all variables and resets the calculator.
 *
 */
function clear() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  updateCurrentOperationScreen();
}

/**
 * Deletes the last character from the current number.
 *
 */
function deleteNumber() { 
  // If firstNumber is set, secondNumber and operator are not set, deletes the last character from the firstNumber.
  if (firstNumber !== "" && secondNumber === "" && operator === "") {
    firstNumber = firstNumber.slice(0, -1);
    updateCurrentOperationScreen();
  }
  // If firstNumber and operator are set, secondNumber is not set, deletes the operator.
  if (firstNumber !== "" && secondNumber === "" && operator !== "") {
    operator = operator.slice(0, -1);
    updateCurrentOperationScreen();
  }
  // If all the variables are set, deletes the last character from the secondNumber.
  if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
    secondNumber = secondNumber.slice(0, -1);
    updateCurrentOperationScreen();
  } else {}
  
}

/**
 * Appends a decimal point to either the firstNumber or secondNumber.
 * If the number already contains a decimal point, does nothing.
 */
function appendDecimal() {
  // If operator is not set, appends decimal to firstNumber.
  if (operator === "") {
    // Checks if decimal point is already appended.
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
    }
  }
  // If operator is set, appends decimal to secondNumber.
  else {
    // Checks if decimal point is already appended.
    if (!secondNumber.includes(".")) {
      secondNumber += ".";
    }
  }
  updateCurrentOperationScreen();
}

/**
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} - The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}

/**
 *Subtracts one number from another.
 *
 * @param {number} a - The first number (minuend).
 * @param {number} b - The second number (subtrahend).
 * @return {number}  - The difference between the two numbers.
 */
function substract(a, b) {
  return a - b;
}
/**
 * Multiplies two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} - The product of the two numbers.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides one number by another.
 *
 * @param {number} a - The numerator (dividend).
 * @param {number} b - The denominator (divisor).
 * @return {number} - The result of the division.
 */
function divide(a, b) {
  return a / b;
}

/**
 * Performs the specified arithmetic operation on two numbers.
 *
 * @param {string} operator  - The arithmetic operator ('+', '-', '*', '/').
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} - The result of the operation.
 */
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  let result;
  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '−':
      result = substract(a, b);
      break;
    case '×':
      result = multiply(a, b);
      break;
    case '÷':
      if (b === 0) return null;
      else result = divide(a, b);
      break;
    default:
      return null;
  }
  return roundResult(result);
}

/**
 * Rounds the result to 5 decimal places.
 *
 * @param {number} number - The result of the operation.
 * @return {number} - The rounded result.
 */
function roundResult(number) {
  return Math.round(number * 100000) / 100000;
}

// Button bindings.
numberBtns.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)));
operatorBtns.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent)));
equalsBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNumber);
decimalBtn.addEventListener('click', appendDecimal);
