// https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
	const result:number[] = [];
	const returnIndex = nums.findIndex((_, index) => nums[index] + nums[index + 1] === target)

	result.push(returnIndex, returnIndex + 1);
	return result  
};
