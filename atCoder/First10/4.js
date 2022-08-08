const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const nums = input[0].split("")

let count = 0;

if(nums[0] === '1') count++;
if(nums[1] === '1') count++;
if(nums[2] === '1') count++;

console.log(count)
