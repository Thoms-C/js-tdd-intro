function capitalizeFirstLetters(input) {
  let words = input.toLowerCase().split(" ");

  const array = [];

  words.forEach((word) => {
    let firstLetter = word.charAt(0).toUpperCase();

    let replacement = word.replace(word.charAt(0), firstLetter);

    array.push(replacement);
  });
  return array.join(" ");
}

module.exports = capitalizeFirstLetters;
