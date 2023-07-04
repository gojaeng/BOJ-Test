const fs = require('fs');
const input = require("fs").readFileSync("/dev/stdin").toString();

let nums = input.split(' ').map(Number);
let result = 0;
for(let i=0; i<nums.length; i++){
   let num = Number(nums[i]);
   result += num*num;
}
let ans = result%10;
console.log(ans);