const assert = require("assert");

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('table'), 'Table')

assert.strictEqual(capitalizeFirstLetters('a'), 'A');

assert.strictEqual(capitalizeFirstLetters(''), '');