const { input } = require("./input");

// values for choices
const rock = 1,
  paper = 2,
  scissors = 3;

// outcomes: loss = 0, draw = 3, win = 6

// variable to track score
let totalScore = 0;

//variables to trach elf and player choice;
let elfChoice, playerChoice;

for (let i = 0; i < input.length; i++) {
  // splitting input into round with an elf and player choice
  let round = input[i].split(" ");

  // assigning the elf choice a score based on Rock, Paper, Scissors
  if (round[0] == "A") {
    elfChoice = rock;
  } else if (round[0] == "B") {
    elfChoice = paper;
  } else {
    elfChoice = scissors;
  }

  // assigning player choice a score based on Rock, Paper, Scissors
  if (round[1] == "X") {
    playerChoice = rock;
  } else if (round[1] == "Y") {
    playerChoice = paper;
  } else {
    playerChoice = scissors;
  }
}
