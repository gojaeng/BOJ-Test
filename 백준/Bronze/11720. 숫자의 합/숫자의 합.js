const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let inputdata = Number(input[0]);
let nums = input[1].split('');
let sum =0;

for (let i=0; i<inputdata; i++){
    sum += Number(nums[i]);
}
console.log(sum);
