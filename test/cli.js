
const exec = require('child_process').exec;
const { assert } = require('chai');


describe('cli.js', function() {
    it('should return 8', function() {
      exec("node bin/calc 3 + 5", (err, stdout, stderr) => {
        if (err) {
          console.log('Error', err);
          return;
        }
        assert.equal(stdout, 8);
      })
    });
    it('should return 3', function() {
      exec("node bin/calc 10 - 7", (err, stdout, stderr) => {
        if (err) {
          console.log('Error', err);
          return;
        }
        assert.equal(stdout, 3);
      })
    });
    it('should return 5', function() {
      exec("node bin/calc 10 / 2", (err, stdout, stderr) => {
        if (err) {
          console.log('Error', err);
          return;
        }
        assert.equal(stdout, 5);
      })
    });
    it('should return 12', function() {
      exec("node bin/calc 3 x 4", (err, stdout, stderr) => {
        if (err) {
          console.log('Error', err);
          return;
        }
        assert.equal(stdout, 12);
      })
    });
});
