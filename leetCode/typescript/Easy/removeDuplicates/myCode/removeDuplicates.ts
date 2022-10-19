function removeDuplicates(nums: number[]): number {
  interface UniqueNumber {
    [key: number]: boolean;
  }
  // hashmap使う
  const uniqueNumber: UniqueNumber = {};

  for (let i = 0; i < nums.length; i++) {
    if (!uniqueNumber[nums[i]]) {
      uniqueNumber[nums[i]] = true
    }
  }

  console.log(Object.keys(uniqueNumber))

  return Object.keys(uniqueNumber).length;
};

const nums = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums));
