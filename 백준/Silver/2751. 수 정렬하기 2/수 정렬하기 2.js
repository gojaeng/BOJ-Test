const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function sortNumber(input) {
    input.shift();

    let numArr = input.map((e) => Number(e));
    let sortArr = numArr.sort((a, b) => a - b);

    console.log(sortArr.join('\n'));
}

sortNumber(input);

