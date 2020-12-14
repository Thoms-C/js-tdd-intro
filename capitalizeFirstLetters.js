const assert = require("assert");

function capitalizeFirstLetters(input) {
    let output = '';
    for (let i = 0 ; i < input.length ; i++) {
      if (i === 0) {
        output += input[0].toUpperCase();
      } else {
        output += input[i];
      }
    }
    return output;
  }

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('table'), 'Table')

assert.strictEqual(capitalizeFirstLetters('a'), 'A');

assert.strictEqual(capitalizeFirstLetters(''), '');