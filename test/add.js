
const { assert } = require('chai');
const add = require('../lib/add');

describe('add.js', () => {
  it('should return a number', () => {
    assert.isNumber(add());
  })
  it('should return the sum of two numbers', () => {
    assert.equal(add(3, 5), 8);
  })
})
