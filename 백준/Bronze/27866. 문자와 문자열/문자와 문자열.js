const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let str = String(input[0]);
let num = Number(input[1]);

let result = str[num-1];
console.log(result);
