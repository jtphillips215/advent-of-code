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
    // adding numbers to sum
    if (numList.length == 1) {
      let combinedNum = numList[0] + numList[numList.length - 1];
      sum += Number(combinedNum);
    } else if (numList.length > 1) {
      let combinedNum = numList[0] + numList[numList.length - 1];
      sum += Number(combinedNum);
    }
  }
  return sum;
};

console.log(getTotal(input));
