// https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
	let result: number[] = [];
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let counter = i;
			if (nums[i] + nums[j] >= target) return result = [i, j]
			console.log(i, j)
			// ↑の答えがない時は、i+1, i+2をしたい
			// nums[i+1] + nums[j]
			// ループの回数をカウントしてる変数があれば良い？ → j??
			// if (nums[j] + nums[j+1] >= target) return result = [j, j+1]
			counter++
		}
	}
	return result
};

console.log(twoSum([3,2,3], 6))


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
