const fs = require('fs');
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let multi = String(input[0]*input[1]*input[2]);

for(let i=0; i<10; i++){
   let count =0;
   
   for(let j=0; j<multi.length; j++){
      if(Number(multi[j])===i){
         count++;
      }
   }
   console.log(count);
}