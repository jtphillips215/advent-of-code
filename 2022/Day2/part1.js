const { input } = require("./input");

// values for choices
const rock = 1,
  paper = 2,
  scissors = 3;

// outcomes: loss = 0, draw = 3, win = 6

// variable to track score
let totalScore = 0;

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
