const { input } = require("./input");

let counter = 0;

for (let i = 0; i < input.length; i++) {
  let ranges = input[i].trim().split(",");
  let firstRange = ranges[0].split("-");
  let secondRange = ranges[1].split("-");

  if (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]) {
    counter++;
  } else if (
    secondRange[0] <= firstRange[0] &&
    secondRange[1] >= secondRange[1]
  ) {
    counter++;
  } else {
    continue;
  }
}

console.log(counter);
