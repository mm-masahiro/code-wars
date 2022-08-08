const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const result = (a, b) => {
  const devideCount = Math.floor(a / 500)
  const rest = a - (devideCount * 500)
  if (rest <= b) return console.log("Yes")
  console.log("No")
}

result(input[0], input[1])
