let fs = require("fs");
let inputData = fs.readFileSync('/dev/stdin').toString().split(" ");

let N = parseInt(inputData[0]);
let result="";
for(let i=0; i<N; i++){
    result += "*";
    console.log(result);
}