// https://leetcode.com/problems/minimum-distance-to-the-target-element/
// my code
function getMinDistance(nums: number[], target: number, start: number): number {
	const targetIndex = nums.flatMap((num, i) => num === target ? i : []);
	if (targetIndex.length >= 2) {
		const min = targetIndex.reduce((ti, num, i) => {
			return Math.abs(ti - start) < Math.abs(num - start) ? ti : num
		})
		return Math.abs(min - start)
	}
	return Math.abs(targetIndex[0] - start);
};

// good code 
// function getMinDistance(nums: number[], target: number, start: number): number {
// 	return nums.reduce((min, num, i) => num === target ? Math.min(min, Math.abs(start - i)) : min, Infinity);
// };
