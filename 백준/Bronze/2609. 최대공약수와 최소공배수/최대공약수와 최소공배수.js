const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b] = input[0].trim().split(' ');
let i = a;
let j = b;

while (i % j !== 0) {
    let r = i % j;
    if (r != 0) {
        i = j;
        j = r;
    }
}
console.log(j);
console.log((a * b) / j);