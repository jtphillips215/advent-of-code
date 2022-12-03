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

// Part 2

// array to track our top 3 calorie counts and variable to track current elf's total
let topCaloriesList = [0, 0, 0];
currentCalories = 0; // resetting current calories to 0 as it was used in top block

// This block adds functionality to part 1
// It operates on the same idea except we have an array and are testing the current calories
// against the smallest value in the array, replacing it, and sorting the array
for (let i = 0; i < input.length; i++) {
  if (isNaN(input[i])) {
    if (currentCalories > topCaloriesList[0]) {
      topCaloriesList.shift();
      topCaloriesList.unshift(currentCalories);
      topCaloriesList.sort(function (a, b) {
        return a - b;
      });
    }
    currentCalories = 0;
  } else {
    currentCalories += input[i];
  }
}

console.log(topCaloriesList[0] + topCaloriesList[1] + topCaloriesList[2]);
