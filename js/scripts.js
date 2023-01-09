// business interface logic
  function add(number1, number2) {
    const result = number1 + number2;
    const msg1 = "The sum of your numbers equals " + result + "."
    return msg1;
  }
  function subtract(number1, number2) {
    const result = number1 - number2;
    const msg2 = "The difference of your numbers equals " + result + "."
    return msg2;
  }
  
  function multiply(number1, number2) {
    const result = number1 * number2;
    const msg3 = "The product of your numbers equals " + result + "."
    return msg3;
  }

  function divide(number1, number2) {
    const result = number1 / number2;
    const msg4 = "The quotient of your numbers equals " + result + "."
    return msg4;
  }

// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2) + "\n" + subtract(number1, number2) + "\n" + multiply(number1,number2) + "\n" + divide(number1,number2));