const fs = require('fs');
const input= fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[0].split(' ');
let A = Number(num[0]);
let B = Number(num[1]);

let Plus = A + B;
let Minus = A - B;
let Multi = A * B;
let Div =  Math.floor(A / B);
let Left = A % B;

console.log(Plus);
console.log(Minus);
console.log(Multi);
console.log(Div);
console.log(Left);

