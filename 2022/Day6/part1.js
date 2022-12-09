const { input } = require("./input");

// converting our input into a string
characters = String(input);

// testing our characters, starting at i = 3 since we can ignore our first characters
function findPacketStart(characters) {
  for (let i = 3; i < characters.length - 1; i++) {
    let packetCode = characters.substring(i - 4, i);
    let packetUniqueCount = String.prototype.concat(
      ...new Set(packetCode)
    ).length;

    if (packetUniqueCount > 3) {
      return i;
    } else {
      continue;
    }
  }
}
// testing our characters, starting at i = 3 since we can ignore our first characters

// calling function and printing output
let output = findPacketStart(characters);

console.log(output);
