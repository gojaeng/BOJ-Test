const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

nums = input[0].split(' ');

num1 = parseInt(nums[0]);
num2 = parseInt(nums[1]);

function fact(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

let result  = fact(num1)/(fact(num2)*fact(num1-num2));
console.log(result);