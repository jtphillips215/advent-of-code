const { input } = require("./input");

// Part 1
getTotal = (input) => {
  // defining sum to return
  let sum = 0;

  // iterating over input to search for numbers line by line
  for (let i = 0; i < input.length; i++) {
    let line = input[i];
    let numList = [];

    // iterating over line to find numbers
    for (let j = 0; j < line.length; j++) {
      if (!isNaN(line[j])) {
        // isNaN returning \r as number
        if (line[j] == "\r") {
          continue;
        } else {
          numList.push(line[j]);
        }
      }
    }
    console.log(numList);
  }
  return sum;
};

console.log(getTotal(input));
