const calculator = require('./calculator');


const result = calculator(require('./parse-args')(process.argv.splice(2)));

console.log(`Result: ${result}`);
