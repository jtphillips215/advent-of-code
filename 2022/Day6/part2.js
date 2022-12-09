const { input } = require("./input");

// converting our input into a string
characters = String(input);

// testing our characters, starting at i = 3 since we can ignore our first characters
function findMessage(characters) {
  for (let i = 13; i < characters.length - 1; i++) {
    let message = characters.substring(i - 14, i);
    let messageUniqueCount = String.prototype.concat(
      ...new Set(message)
    ).length;

    if (messageUniqueCount > 13) {
      return i;
    } else {
      continue;
    }
  }
}
// testing our characters, starting at i = 3 since we can ignore our first characters

// calling function and printing output
let output = findMessage(characters);

console.log(output);
