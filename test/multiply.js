
const { assert } = require('chai');
const multiply = require('../lib/multiply');

describe('multiply.js', () => {
  it('should return a number', () => {
    assert.isNumber(multiply());
  })
  it('should return the result of multiplying two numbers', () => {
    assert.equal(multiply(3, 4), 12);
  })
})
