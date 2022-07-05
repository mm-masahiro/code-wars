// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript
// my solution

export const findOdd = (xs: number[]): number => {
  if (xs.length === 1) return xs[0]
  
  const nums: number[] = []
  const foo = xs.map((num) => {
    const duplicateNumIndex = nums.indexOf(num)
    if (duplicateNumIndex === -1) {
      nums.push(num)
    } else {
      nums.splice(duplicateNumIndex, 1)
    }
    return nums
  });

  return foo[0][0];
};

// best solution
// export const findOdd = (xs: number[]): number => {
//   return xs.reduce( (a,b)=> a^b);
// };
