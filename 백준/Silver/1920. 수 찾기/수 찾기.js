const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const binarySearch = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] < num) {
            start = middle + 1;
        } else if (arr[middle] > num) {
            end = middle - 1;
        } else {
            return 1;
        }
    }
    return 0;
};

const nums1 = input[1]
    .split(' ')
    .sort((a, b) => a - b)
    .map(Number);
const nums2 = input[3].split(' ').map(Number);

const answer = nums2.map((v) => {
    return binarySearch(nums1, v);
});

console.log(answer.join('\n'));