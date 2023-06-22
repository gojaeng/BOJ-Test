let fs = require("fs");
let inputData = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

let count = 0;

for (let i = 0; i < inputData.length; i++) {
  if (inputData[i] !== "") count++;
}

console.log(count);