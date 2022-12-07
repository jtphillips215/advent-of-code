const { input } = require("./input");

function substringTest(firstHalf, lastHalf) {
  // vector for testing upper and lower matches
  const MAX_CHAR = 52;
  let vector = Array(MAX_CHAR).fill(0);
  let priority = 0;

  // increment vector index for every character in the first half
  for (let i = 0; i < firstHalf.length; i++) {
    vector[firstHalf[i] - "a"] = true;
  }

  // checking common substring of the last half in the first half
  for (let i = 0; i < lastHalf.length; i++) {
    if (vector[lastHalf[i] - "a"]) {
      return true;
    }
  }
  return false;
}

const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let commonChars = "";
let totalPriority = 0;

for (let i = 0; i < input.length; i++) {
  input[i].trim();

  // getting middle index and creating substrings to test for commonalities
  let middleIndex = input[i].length / 2;
  let firstHalf = input[i].substring(0, middleIndex);
  let lastHalf = input[i].substring(middleIndex, input[i].length);

  // collecting common characters and reducing them to unique characters
  if (substringTest(firstHalf, lastHalf)) {
    for (let i = 0; i < firstHalf.length; i++) {
      for (let j = 0; j < firstHalf.length; j++) {
        if (firstHalf[i] == lastHalf[j]) {
          commonChars += firstHalf[i];
        }
      }
    }
    commonChars = String.prototype.concat(...new Set(commonChars));
  }
}

// if common characters is not empty, adding up priority for items
if (commonChars != "") {
  for (let i = 0; i < ALPHABET.length; i++) {
    for (let j = 0; j < commonChars.length; j++) {
      if (ALPHABET[i] == commonChars[j]) {
        totalPriority += i + 1;
      }
    }
  }
}

console.log(totalPriority);
