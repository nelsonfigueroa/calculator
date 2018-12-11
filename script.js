/*

  When adding decimal in the middle of operation, doesn't keep it
  When adding a negative in the middle of operation, it doesn't take it into account when pressing '=' again
  Percentages in the middle of operations arent accounted for as well
  Issues seem to occur when in the middle of operations

*/


// Numbers
const button_1 = document.querySelector("#button_1");
const button_2 = document.querySelector("#button_2");
const button_3 = document.querySelector("#button_3");
const button_4 = document.querySelector("#button_4");
const button_5 = document.querySelector("#button_5");
const button_6 = document.querySelector("#button_6");
const button_7 = document.querySelector("#button_7");
const button_8 = document.querySelector("#button_8");
const button_9 = document.querySelector("#button_9");
const button_0 = document.querySelector("#button_0");

// Operators
const button_divide = document.querySelector("#divide");
const button_multiply = document.querySelector("#multiply");
const button_subtract = document.querySelector("#subtract");
const button_add = document.querySelector("#add");
const button_equals = document.querySelector("#equals");

// Other
const button_clear = document.querySelector("#clear");
const button_plus_minus = document.querySelector("#plus_minus");
const button_percent = document.querySelector("#percent");
const button_decimal = document.querySelector("#decimal");

// Calculator screen
const calculator_input = document.querySelector("#calculator-input");

// Global variables to store numbers to be processed, including operator
let num_1 = null;
let num_2 = null;
let operator = null;

// Function that allows for user input
function input_number(num) {
  // Limit length of numbers user can input, regex checks for only digits (excluding minus sign)
  if (calculator_input.innerHTML.replace(/[^0-9]/g,"").length < 7) {
    // If current number is 0, replace with what user types.
    if (calculator_input.innerHTML == '0') {
      calculator_input.innerHTML = num;
    }
    else {
      calculator_input.innerHTML += num;
    }
  }
}

// Function to clear calculator screen
function clear_screen() {
  calculator_input.innerHTML = 0;
  // Clear global variables as well
  num_1 = null;
  num_2 = null;
  operator = null;
}

// Function to append or remove negative sign
function plus_minus() {

  // get current value, and multiply by -1
  let current = calculator_input.innerHTML;
  current *= -1;
  calculator_input.innerHTML = current;
}

// Function to generate percentages
// Limitation: due to 7 digit limit, percentages will be inaccurate if used on really long numbers
function percentage() {
  num = parseFloat(calculator_input.innerHTML);
  num = num / 100;
  num = num.toString();

  // check for length
  if (num.replace(/[^0-9]/g,"").length < 7) {
    calculator_input.innerHTML = num;
  }
  else {
    num = parseFloat(num)
    calculator_input.innerHTML = num.toFixed(6).toString(); // up to 6 decimal places to take into account extra 0
  }
}

// Function to add a decimal
function decimal() {
  // If a decimal point is found anywhere in the string, don't add it.
  if (calculator_input.innerHTML.match(/\./)) {
    return
  }
  // Else, append it.
  else {
    // Append
    calculator_input.innerHTML += '.';
  }
}

function equals() {
  // Get current value and save it to second number global variable
  if (num_2 == null) {
    num_2 = calculator_input.innerHTML;
  }

  console.log("===== Before Operation =====")
  console.log("num_1 = " + parseFloat(num_1));
  console.log("operator: " + operator);
  console.log("num_2 = " + parseFloat(num_2));

  // If any variables are null, do nothing
  if (num_1 == null || num_2 == null || operator == null ) {
    return
  }
  else {
    // Initialize result
    let result = 0;

    // Do the operation
    switch(operator) {
      // Divide
      case '/':
          result = parseFloat(num_1) / parseFloat(num_2);
          num_1 = result; // keep result in global variable incase user presses '=' again
          console.log("===== After Operation =====")
          console.log("num_1 = " + parseFloat(num_1));
          console.log("operator: " + operator);
          console.log("num_2 = " + parseFloat(num_2));
          break;
      // Multiply
      case '*':
          result = parseFloat(num_1) * parseFloat(num_2);
          num_1 = result; // keep result in global variable incase user presses '=' again
          console.log("===== After Operation =====")
          console.log("num_1 = " + parseFloat(num_1));
          console.log("operator: " + operator);
          console.log("num_2 = " + parseFloat(num_2));
          break;
      // Subtract
      case '-':
          result = parseFloat(num_1) - parseFloat(num_2);
          num_1 = result; // keep result in global variable incase user presses '=' again
          console.log("===== After Operation =====")
          console.log("num_1 = " + parseFloat(num_1));
          console.log("operator: " + operator);
          console.log("num_2 = " + parseFloat(num_2));
          break;
      // Add
      case '+':
          result = parseFloat(num_1) + parseFloat(num_2);
          num_1 = result; // keep result in global variable incase user presses '=' again
          console.log("===== After Operation =====")
          console.log("num_1 = " + parseFloat(num_1));
          console.log("operator: " + operator);
          console.log("num_2 = " + parseFloat(num_2));
          console.log("==========")
          break;
      default:
          return;
    }

    result = result.toString(); 
    if (result.replace(/[^0-9]/g,"").length < 8) {
      // Output result to calculator screen
      calculator_input.innerHTML = result;
    }
    else {
      calculator_input.innerHTML = "(Too Long)";
    }

  }
}

function divide() {
  // Get current value and save it to global variable
  if (num_1 == null) {
    num_1 = calculator_input.innerHTML;
  }
  // Set operator to divide
  operator = '/';
  // Reset num_2
  num_2 = null;
  // Reset screen
  calculator_input.innerHTML = '0';
}

function multiply() {
  // Get current value and save it to global variable
  if (num_1 == null) {
    num_1 = calculator_input.innerHTML;
  }
  // Set operator to multiply
  operator = '*';
  // Reset num_2
  num_2 = null;
  // Reset screen
  calculator_input.innerHTML = '0';
}

function subtract() {
  // Get current value and save it to global variable
  if (num_1 == null) {
    num_1 = calculator_input.innerHTML;
  }
  // Set operator to subtract
  operator = '-';
  // Reset num_2
  num_2 = null;
  // Reset screen
  calculator_input.innerHTML = '0';
}

function add() {
  // Get current value and save it to global variable
  if (num_1 == null) {
    num_1 = calculator_input.innerHTML;
  }
  // Set operator to add
  operator = '+';
  // Reset num_2
  num_2 = null;
  // Reset screen
  calculator_input.innerHTML = '0';
}

// Anonymous functions needed to pass in values using event listeners

// Number buttons
button_1.addEventListener("click", function() { input_number(button_1.innerHTML) }, false);
button_2.addEventListener("click", function() { input_number(button_2.innerHTML) }, false);
button_3.addEventListener("click", function() { input_number(button_3.innerHTML) }, false);
button_4.addEventListener("click", function() { input_number(button_4.innerHTML) }, false);
button_5.addEventListener("click", function() { input_number(button_5.innerHTML) }, false);
button_6.addEventListener("click", function() { input_number(button_6.innerHTML) }, false);
button_7.addEventListener("click", function() { input_number(button_7.innerHTML) }, false);
button_8.addEventListener("click", function() { input_number(button_8.innerHTML) }, false);
button_9.addEventListener("click", function() { input_number(button_9.innerHTML) }, false);
button_0.addEventListener("click", function() { input_number(button_0.innerHTML) }, false);

// Clear button
button_clear.addEventListener("click", clear_screen, false);

// Plus/Minus button
button_plus_minus.addEventListener("click", plus_minus, false);

// Percent button
button_percent.addEventListener("click", percentage, false);

// Decimal button
button_decimal.addEventListener("click", decimal, false);

// Divide button
button_divide.addEventListener("click", divide, false);

// Multiply button
button_multiply.addEventListener("click", multiply, false);

// Subtract button
button_subtract.addEventListener("click", subtract, false);

// Add button
button_add.addEventListener("click", add, false);

// Equals button
button_equals.addEventListener("click", equals, false);
