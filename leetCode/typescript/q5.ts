// https://leetcode.com/problems/running-sum-of-1d-array/
// my code
function runningSum(nums: number[]): number[] {
	const result = [nums[0]];
	nums.reduce((accum, num) => {
		const sum = accum + num
		result.push(sum)
		return sum
	})
	return result
};
