let fs = require("fs");
const input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);


let max = input[0];
let maxlocate = 1;

for (let i=1; i<input.length; i++){
    if(input[i]>max){
        max = input[i];
        maxlocate = i+1;
    }
}

console.log(max);
console.log(maxlocate);