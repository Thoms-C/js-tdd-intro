const assert = require("assert");
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('table'), 'Table')

assert.strictEqual(capitalizeFirstLetters('a'), 'A');

assert.strictEqual(capitalizeFirstLetters(''), '');