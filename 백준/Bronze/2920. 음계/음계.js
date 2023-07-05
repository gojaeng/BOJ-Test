const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let data =input[0];
if(data == '1 2 3 4 5 6 7 8'){
   console.log('ascending')
}else if(data == '8 7 6 5 4 3 2 1'){
   console.log('descending')
}
else{
   console.log('mixed')
}
