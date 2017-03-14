
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

module.exports = (args) => {
  const [num1, operation, num2] = args;
  switch (operation) {
    case '+':  return add(num1, num2);
    break;
    case '-':  return subtract(num1, num2);
    break;
    case 'x':  return multiply(num1, num2);
    break;
    case '/':  return divide(num1, num2);
    break;
  }
};
