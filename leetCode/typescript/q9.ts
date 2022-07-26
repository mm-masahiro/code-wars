// https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
	const result:number[] = [];
	const returnIndex = nums.findIndex((_, index) => nums[index] + nums[index + 1] === target)

	result.push(returnIndex, returnIndex + 1);
	return result  
};

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
