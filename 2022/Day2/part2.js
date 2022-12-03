const { input } = require("./input");

for (let i = 0; i < input.length; i++) {
  // splitting input into round with an elf and player choice
  let round = input[i].split(" ");
  round[1] = round[1].trim();
}
