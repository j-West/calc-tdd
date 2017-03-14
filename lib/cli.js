const calculator = require('./calculator');

const prompt = require('prompt');


prompt.start();

prompt.get(['num1', 'Operation', 'num2'], function(err, result) {

  result.num1 = parseInt(result.num1);
  result.num2 = parseInt(result.num2);

  const final = calculator(result);

  console.log(` Result: ${final}`);
});
