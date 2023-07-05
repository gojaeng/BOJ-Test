const fs = require('fs');
const input = require("fs").readFileSync("/dev/stdin").toString().split(' ');

let hour = input[0];
let minute = input[1];
 
minute -= 45;

if(minute <0){
   minute +=60
   hour --;

   if(hour === -1){
      hour = 23;
   }
}
console.log(hour +" "+minute );
