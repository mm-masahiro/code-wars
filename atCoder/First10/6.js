const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const countString = input[0].slice(1,-1).length.toString()
console.log(input[0].slice(0,1) + countString + input[0].slice(-1))
