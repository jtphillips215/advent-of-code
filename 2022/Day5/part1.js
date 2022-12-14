const { input } = require("./input");

/*
[B]                     [N]     [H]
[V]         [P] [T]     [V]     [P]
[W]     [C] [T] [S]     [H]     [N]
[T]     [J] [Z] [M] [N] [F]     [L]
[Q]     [W] [N] [J] [T] [Q] [R] [B]
[N] [B] [Q] [R] [V] [F] [D] [F] [M]
[H] [W] [S] [J] [P] [W] [L] [P] [S]
[D] [D] [T] [F] [G] [B] [B] [H] [Z]
 1   2   3   4   5   6   7   8   9 
*/

// setting up our stacks as arrays
let firstStack = ["B", "V", "W", "T", "Q", "N", "H", "D"];
let secondStack = ["B", "W", "D"];
let thirdStack = ["C", "J", "W", "Q", "S", "t"];
let fourthStack = ["P", "T", "Z", "N", "R", "J", "F"];
let fifthStack = ["T", "S", "M", "J", "V", "P", "G"];
let sixthStack = ["N", "T", "F", "W", "B"];
let seventhStack = ["N", "V", "H", "F", "Q", "D", "L", "B"];
let eighthStack = ["R", "F", "P", "H"];
let ninthStack = ["H", "P", "N", "L", "B", "M", "S", "Z"];

// adding stacks to map
let stackMap = new Map();
stackMap.set(1, firstStack);
stackMap.set(2, secondStack);
stackMap.set(3, thirdStack);
stackMap.set(4, fourthStack);
stackMap.set(5, fifthStack);
stackMap.set(6, sixthStack);
stackMap.set(7, seventhStack);
stackMap.set(8, eighthStack);
stackMap.set(9, ninthStack);

// getting input and formatting correctly
let directions = [];

for (let i = 0; i < input.length; i++) {
  let inputArray = input[i].trim().split(" ");
  directions.push([
    parseInt(inputArray[1]),
    parseInt(inputArray[3]),
    parseInt(inputArray[5]),
  ]);
}

// moving boxes from one stack to another
for (let i = 0; i < directions.length; i++) {
  let command = directions[i];
  for (let j = 0; j < command[0]; j++) {
    let box = stackMap.get(command[1]).shift();
    stackMap.get(command[2]).unshift(box);
  }
}

console.log(
  stackMap.get(1)[0],
  stackMap.get(2)[0],
  stackMap.get(3)[0],
  stackMap.get(4)[0],
  stackMap.get(5)[0],
  stackMap.get(6)[0],
  stackMap.get(7)[0],
  stackMap.get(8)[0],
  stackMap.get(9)[0]
);
