const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input = Number(input);
var fact = 0;
while (input >= 5) {
    fact += parseInt(input / 5);
    input = input / 5;
}
console.log(fact);
