const { input } = require("./input");

let counter = 0;

for (let i = 0; i < input.length; i++) {
  let ranges = input[i].trim().split(",");
  let firstRange = ranges[0].split("-");
  let secondRange = ranges[1].split("-");

  if (
    parseInt(firstRange[0]) <= parseInt(secondRange[0]) &&
    parseInt(firstRange[1]) >= parseInt(secondRange[0])
  ) {
    counter++;
  } else if (
    parseInt(secondRange[0]) <= parseInt(firstRange[0]) &&
    parseInt(secondRange[1]) >= parseInt(firstRange[0])
  ) {
    counter++;
  }
}

console.log(counter);
