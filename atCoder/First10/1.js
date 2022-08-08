// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const result = (a, b) => {
  if ((a * b) % 2 === 0) return console.log("Even")
  console.log("Odd")
}

result(Number(input[0]), Number(input[1]))
