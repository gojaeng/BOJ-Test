const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().split('\n');

let result = "";
let num = Number(input[0]);

for (let i=1; i<=num; i++){
    let count = Number(input[i].split(' ')[0]);
    let word = input[i].split(' ')[1];


    for (let j=0; j< word.length; j++){
        for(let k=0; k<count; k++){
            result+=word[j];
        }
    }
    result += '\n';
}
console.log(result);
