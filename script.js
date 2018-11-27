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
}

// Function to append or remove negative sign
function plus_minus() {
  // if minus already present, remove it.
  if (calculator_input.innerHTML.charAt(0) == '-') {
    calculator_input.innerHTML = calculator_input.innerHTML.slice(1);
  }
  // else if the only digit is 0, and length is 1, don't add minus
  else if (calculator_input.innerHTML.charAt(0) == '0' && calculator_input.innerHTML.replace(/[^0-9]/g,"").length == 1) {
    return
  }
  // else, input minus
  else {
    calculator_input.innerHTML = '-' + calculator_input.innerHTML;
  }
}

// Function to generate percentages
// Limitation: due to 7 digit limit, percentages will be inaccurate if used on really long numbers
function percentage() {
  // check for negative sign
  if (calculator_input.innerHTML.charAt(0) == '-') {
    num = calculator_input.innerHTML.slice(1);
    num = num / 100;
    num = '-' + num.toString();
  }
  else {
    num = calculator_input.innerHTML;
    num = num / 100;
    num = num.toString();
  }

  // check for negative sign
  if (calculator_input.innerHTML.charAt(0) == '-'){
    // check for length
    if (num.slice(1).replace(/[^0-9]/g,"").length < 7) {
      console.log(num.slice(1).replace(/[^0-9]/g,"").length);
      calculator_input.innerHTML = '-' + num.slice(1);
    }
    else {
      num = parseFloat(num.slice(1));
      calculator_input.innerHTML = '-' + num.toFixed(6).toString(); // up to 6 decimal places to take into account extra 0
    }
  }
  else {
    // check for length
    if (num.replace(/[^0-9]/g,"").length < 7) {
      console.log(num.replace(/[^0-9]/g,"").length)
      calculator_input.innerHTML = num;
    }
    else {
      num = parseFloat(num)
      calculator_input.innerHTML = num.toFixed(6).toString(); // up to 6 decimal places to take into account extra 0
    }
  }
}

// Function to add a decimal
function decimal() {
  console.log("Decimal clicked!");
  // If a decimal point is found anywhere in the string, don't add it.
  // Else, append it.
  // Take it into account when calculating stuff. If you add '5.' to '5' it equals 10. decimal ignored.
  // Take it into account with percentages.
  // shouldnt affect plus or minus sign
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
