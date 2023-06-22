let fs = require("fs");
let inputData = fs.readFileSync('/dev/stdin').toString().split(" ");

let A = parseInt(inputData[0]);
let B = parseInt(inputData[1]);


if(A>B){
    console.log('>')
}
else if(A<B){
    console.log("<")
}
else{
    console.log("==")
}
