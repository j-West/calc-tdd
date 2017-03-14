
const { assert } = require('chai');
const calculator = require('../lib/calculator');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require('../lib/multiply');
const divide = require('../lib/divide');

describe('calculator.js', () => {
  describe('add', () => {
    it('should call add()', () => {
      assert.equal(calculator({num1: 4, Operation: '+', num2: 2}), 6);
    })
  });
  describe('subtract', () => {
    it('should call subtract()', () => {
      assert.equal(calculator({num1: 6, Operation: '-', num2: 2}), 4);
    })
  })
  describe('multiply', () => {
    it('should call multiply()', () => {
      assert.equal(calculator({num1: 3, Operation: 'x', num2: 5}), 15);
    })
  })
  describe('divide', () => {
    it('should call divide()', () => {
      assert.equal(calculator({num1: 10, Operation: '/', num2: 2}), 5);
    })
  })
})
