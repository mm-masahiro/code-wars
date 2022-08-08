const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const checks = input[0].split("")

let toppingPrice = 0;
if(checks[0] === 'o') toppingPrice++
if(checks[1] === 'o') toppingPrice++
if(checks[2] === 'o') toppingPrice++

console.log(700 + 100 * toppingPrice)
