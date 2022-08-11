// https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
	let result: number[] = [];
	for (let i = 0; i < nums.length - 1; i++) {
		let baseCounter = 0;
		let counter = i + 1;
		for (let j = i + 1; j < nums.length; j++) {
			console.log(baseCounter, counter)
			if (nums[baseCounter] + nums[counter] === target) return result = [baseCounter, counter]
			baseCounter++
			counter++
		}
	}
	return result
};

const nums: number[] = [0,4,3,0]

const target: number = 0
console.log(twoSum(nums, target))

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
