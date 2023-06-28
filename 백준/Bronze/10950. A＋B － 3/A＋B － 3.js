const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = parseInt(input[0]); 

for (let i = 1; i <= num; i++) { 
  let nums = input[i].split(' ');
  console.log(Number(nums[0]) + Number(nums[1]));
}




