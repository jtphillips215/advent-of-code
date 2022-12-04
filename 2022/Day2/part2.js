const { input } = require("./input");

// outcomes: x lose, y draw, z win

// values for choices and initial value for total score
const rock = 1,
  paper = 2,
  scissors = 3;
let totalScore = 0;

for (let i = 0; i < input.length; i++) {
  // splitting input into round with an elf and player choice
  let round = input[i].split(" ");
  round[1] = round[1].trim();
}
