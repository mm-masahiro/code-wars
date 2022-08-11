// https://leetcode.com/problems/two-sum/submissions/
function twoSum(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var another = target - nums[i];
        if (another in map) {
            return [map[another], i];
        }
        map[nums[i]] = i;
    }
    return [];
}
;
var nums = [0, 4, 3, 0];
// const nums: number[] = [2,7,11,15]
// const nums: number[] = [3, 2, 3]
var target = 0;
// const target: number = 9
// const target: number = 6
console.log(twoSum(nums, target));
// best
// const twoSum = (nums, target) => {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const another = target - nums[i];
//     if (another in map) {
//       return [map[another], i];
//     }
//     map[nums[i]] = i;
//   }
//   return null;
// };
