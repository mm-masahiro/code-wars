const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const nums = input[0].split(" ")

const result = (g, b) => {
  if (((10 * g) + b) % 4 === 0) return console.log("YES")
  console.log("NO")
}

result(Number(nums[1]), Number(nums[2]))
