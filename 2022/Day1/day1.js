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

let topCaloriesList = [0, 0, 0];
currentCalories = 0;

// outer loop iterates through input file
for (let i = 0; i < input.length; i++) {
  // if the current index in the input isn't a number
  if (isNaN(input[i])) {
    // iterating through top calories array
    for (let j = 0; j < topCaloriesList.length; j++) {
      if (currentCalories > topCaloriesList[j]) {
        // if current calorie count is larger than an item in array
        // we are removing the smallest item, adding the new total, and sorting the array
        topCaloriesList.pop();
        topCaloriesList.push(currentCalories);
        topCaloriesList.sort((a, b) => b - a);
      }
    }
    currentCalories = 0;
  } else {
    currentCalories += input[i];
  }
}

console.log(topCaloriesList[0] + topCaloriesList[1] + topCaloriesList[2]);
