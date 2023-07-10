const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((i)=>i.split(' ').map(Number));


for(let i=0; i<input.length-1; i++){
    let array = input[i].sort((a,b)=>a-b);
    let a =array[0];
    let b =array[1];
    let c =array[2];

   if (a ** 2 + b ** 2 === c ** 2) {
        console.log('right');
    } else {
        console.log('wrong');
    }
}