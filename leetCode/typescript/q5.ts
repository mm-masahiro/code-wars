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

// best code
// function runningSum(nums: number[]): number[] {
// 	let res: number[] = [];
// 	if(nums.length == 0) return res;
// 	res[0] = nums[0];
// 	for(let i = 1; i < nums.length; i++) {
// 		res[i] = res[i - 1] + nums[i];
// 	}
	
// 	return res;
// };
