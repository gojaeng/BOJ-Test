const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().split('\n');

let data =Number(input[0]);
let num = input[1].split(' ').map(Number);
let Max = num[0];
let Min = num[0];

for(let i=0; i<data; i++){
    if(Max<num[i]){
        Max = num[i]
    }
    if(Min>num[i]){
        Min = num[i]
    }
}
console.log(`${Min} ${Max}`)
