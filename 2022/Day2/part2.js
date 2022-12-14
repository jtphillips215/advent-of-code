const { input } = require("./input");

// outcomes: x lose, y draw, z win

// values for choices and initial value for total score
const rock = 1,
  paper = 2,
  scissors = 3;
let totalScore = 0;
let elfChoice;

for (let i = 0; i < input.length; i++) {
  // splitting input into round with an elf and player choice
  let round = input[i].split(" ");
  round[1] = round[1].trim();

  // assigning the elf choice a score based on Rock, Paper, Scissors
  if (round[0] == "A") {
    elfChoice = rock;
  } else if (round[0] == "B") {
    elfChoice = paper;
  } else {
    elfChoice = scissors;
  }

  // using desired outcome to score round
  if (round[1] == "Y") {
    totalScore += elfChoice + 3;
  } else if (round[1] == "X") {
    if (elfChoice == rock) {
      totalScore += scissors;
    } else if (elfChoice == paper) {
      totalScore += rock;
    } else {
      totalScore += paper;
    }
  } else {
    if (elfChoice == rock) {
      totalScore += paper + 6;
    } else if (elfChoice == paper) {
      totalScore += scissors + 6;
    } else {
      totalScore += rock + 6;
    }
  }
}

console.log(totalScore);
