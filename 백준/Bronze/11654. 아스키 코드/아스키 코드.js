const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let str = input.toString();
result = str.charCodeAt(0);

console.log(result);