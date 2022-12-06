const { input } = require("./input");

function substringTest(firstHalf, lastHalf) {
  // vector for testing upper and lower matches
  const MAX_CHAR = 52;
  let vector = Array(MAX_CHAR).fill(0);

  // increment vector index for every character in the first half
  for (let i = 0; i < firstHalf.length; i++) {
    vector[firstHalf[i] - "a"] = true;
  }

  // checking common substring of the last half in the first half
  for (let i = 0; i < lastHalf.length; i++) {
    if (vector[lastHalf[i] - "a"]) return true;
  }
  return false;
}

for (let i = 0; i < input.length; i++) {
  input[i].trim();

  // getting middle index and creating substrings to test for commonalities
  let middleIndex = input[i].length / 2;
  let firstHalf = input[i].substring(0, middleIndex);
  let lastHalf = input[i].substring(middleIndex, input[i].length);
}

console.log();
