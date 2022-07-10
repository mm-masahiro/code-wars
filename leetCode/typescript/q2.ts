// https://leetcode.com/problems/build-array-from-permutation/submissions/
// my code
function buildArray(nums: number[]): number[] {
	const sortedNums = nums.map((_, i) => {
			return nums[nums[i]]
	});
	return sortedNums
};
