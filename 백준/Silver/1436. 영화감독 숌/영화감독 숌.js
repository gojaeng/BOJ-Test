const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = 666;
let count = 1;
while (count != input) {
    num++;
    if (String(num).includes('666')) count++;
}
console.log(num);