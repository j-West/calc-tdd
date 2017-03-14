
const { assert } = require('chai');
const divide = require('../lib/divide');

describe('divide.js', () => {
  it('should return a number', () => {
    assert.isNumber(divide());
  })
  it('should return the result of dividing two numbers', () => {
    assert.equal(divide(8, 2), 4);
  })
  // it('should exit if num2 is zero', () => {
  //   assert.equal(divide(8, 0), );
  // })
})
