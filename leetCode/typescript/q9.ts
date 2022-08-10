// https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
	let result: number[] = [];
	for (let i = 0; i < nums.length - 1; i++) {
		let baseCounter = i;
		for (let j = i + 1; j < nums.length; j++) {
			let counter = j;
			console.log(baseCounter)
			if (nums[baseCounter] + nums[counter] >= target) return result = [baseCounter, counter]
			// ↑の答えがない時は、i+1, i+2をしたい
			// nums[i+1] + nums[j]
			// ループの回数をカウントしてる変数があれば良い？ → j??
			// if (nums[j] + nums[j+1] >= target) return result = [j, j+1]
			baseCounter++
			counter++
		}
	}
	return result
};

console.log(twoSum([3,2,3], 6))
// expected [1,2]


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
