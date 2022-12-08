const { input } = require("./input");

for (let i = 0; i < input.length; i++) {
  let ranges = input[i].trim().split(",");
  let firstRange = ranges[0].split("-");
  let secondRange = ranges[1].split("-");

  console.log(firstRange, secondRange);
}
