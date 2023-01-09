// business interface logic
  function add(number1, number2) {
    const result = number1 + number2;
    const msg1 = "The sum of your numbers equals " + result + "."
    return result;
  }
  function subtract(number1, number2) {
    const result = number1 - number2;
    const msg2 = "The difference of your numbers equals " + result + "."
    return result;
  }
  
  function multiply(number1, number2) {
    const result = number1 * number2;
    const msg3 = "The product of your numbers equals " + result + "."
    return result;
  }

  function divide(number1, number2) {
    const result = number1 / number2;
    const msg4 = "The quotient of your numbers equals " + result + "."
    return result;
  }

// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(number1 + "+" + number2 + "=" + add(number1,number2) + "\n" + number1 + "-" + number2 + "=" +  subtract(number1, number2) + "\n" + number1 + "*" + number2 + "=" + multiply(number1,number2) + "\n" + number1 + "/" + number2 + "=" + divide(number1,number2));