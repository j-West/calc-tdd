
const { assert } = require('chai');
const parseArgs = require('../lib/parse-args');
const calculator = require('../lib/calculator');

  let result;

before(function() {
  let args = ['1', '+', '7'];
  result = parseArgs(args);
});

describe('parse-args.js', () => {
  it('should return an array', () => {
    assert.isArray(parseArgs([3, '+', 5]));
  });
  it('should change a string into a number', () => {
    assert.isNumber(result[0]);
  });
  it('should change a string into a number', () => {
    assert.isNumber(result[2]);
  });
});
