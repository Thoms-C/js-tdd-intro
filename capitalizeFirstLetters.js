const assert = require("assert");

function capitalizeFirstLetters(input){
    let words = input.toLowerCase().split(' ');

    let array = [];

    words.forEach(word=>{
        let firstLetter = word.chatAt(0).toUpperCase();

        let replacement = word.replace(word.chatAt(0), firstLetter);

        array.push(replacement);
    });
    console.log(array.join(' '));
}

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('table'), 'Table')

assert.strictEqual(capitalizeFirstLetters('a'), 'A');

assert.strictEqual(capitalizeFirstLetters(''), '');