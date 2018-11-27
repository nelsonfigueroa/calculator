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


function input_number(num) {
  // Testing
  console.log("button clicked!");

  // Limit length of numbers user can input
  if (calculator_input.innerHTML.length < 7) {
    calculator_input.innerHTML += num;
    console.log(calculator_input.innerHTML.length);
  }
}

function input_operator(operator) {
  // Testing
  console.log("operator clicked!");
}

// Anonymous functions needed to pass in values using event listeners
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
