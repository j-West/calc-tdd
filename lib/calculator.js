
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

module.exports = (args) => {
  switch (args.Operation) {
    case '+':  return add(args.num1, args.num2);
    break;
    case '-':  return subtract(args.num1, args.num2);
    break;
    case 'x':  return multiply(args.num1, args.num2);
    break;
    case '/':  return divide(args.num1, args.num2);
    break;
  }
}
