const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let F = input[1].split(' ').map(Number);
let S = input[3].split(' ').map(Number);
let map = new Map();
F.forEach((index) => {
    if (map.has(index)) map.set(index, map.get(index) + 1);
    else map.set(index, 1);
});
let answer = [];
S.forEach((index) => answer.push(map.get(index) || 0));
console.log(answer.join(' '));
