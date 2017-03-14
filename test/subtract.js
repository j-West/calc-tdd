
const { assert } = require('chai');
const subtract = require('../lib/subtract');

describe('subtract.js', () => {
  it('should return a number', () => {
    assert.isNumber(subtract());
  })
  it('should return the difference of two numbers', () => {
    assert.equal(subtract(12, 7), 5);
  })
})
