const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const first = input[0].split(' ').map(Number);

const provide = first[0];
const goal = first[1];

const nums = input[1].split(' ').map(Number);
let max = 0;

for (let i = 0; i < provide - 2; i++) {
    for (let j = i + 1; j < provide - 1; j++) {
        for (let k = j + 1; k < provide; k++) {
            sum = nums[i] + nums[j] + nums[k];
            if (sum <= goal && sum > max) {
                max = sum;
            }
        }
    }
}
console.log(max);