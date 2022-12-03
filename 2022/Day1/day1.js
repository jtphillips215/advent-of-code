const { input } = require("./input");

// Part 1

// setting values to track the highest number of calories for a single elf
// and to track the current elves calorie load
let maxCalories = 0;
let currentCalories = 0;

// testing to see if the current line of the input is a number or not and either
// adding it to the current calories or testing if the current elf's calories
// exceed the previously determined maxumum
for (let i = 0; i < input.length; i++) {
  if (isNaN(input[i])) {
    if (currentCalories > maxCalories) {
      maxCalories = currentCalories;
    }
    currentCalories = 0;
  } else {
    currentCalories += input[i];
  }
}

console.log(maxCalories);
