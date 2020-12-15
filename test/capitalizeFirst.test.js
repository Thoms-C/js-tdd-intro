const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {

  it("accepting one argument", () => {
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('is a function', ()=>{
      assert.strictEqual(typeof capitalizeFirstLetters, 'function')
  })

  it("works with a 1-character string", () => {
    assert.strictEqual(capitalizeFirstLetters('a'), 'A');
  });

  it("works with an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });

  it("transforms correctly a sentence", () => {
    assert.strictEqual(
      capitalizeFirstLetters('toto aime le code'),
      'Toto Aime Le Code'
    );
  });
});
