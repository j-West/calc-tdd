
const { assert } = require('chai');
const calculator = require('../lib/calculator');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require('../lib/multiply');
const divide = require('../lib/divide');

describe('calculator.js', () => {
  describe('add', () => {
    it('should call add()', () => {
      assert.equal(calculator([4, '+', 2]), 6);
    })
  });
  describe('subtract', () => {
    it('should call subtract()', () => {
      assert.equal(calculator([6, '-', 2]), 4);
    })
  })
  describe('multiply', () => {
    it('should call multiply()', () => {
      assert.equal(calculator([3, 'x', 5]), 15);
    })
  })
  describe('divide', () => {
    it('should call divide()', () => {
      assert.equal(calculator([10, '/', 2]), 5);
    })
  })
})
