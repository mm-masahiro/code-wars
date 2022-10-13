// https://leetcode.com/problems/longest-increasing-subsequence/

function lengthOfLIS(nums: number[]): number {
	// arrayの中から最大のものを見つける
	// それよりindexが前の値のうち、最小のものを見つける
	// 最小のindex~最大のindexまでのarrayを作って、そのlengthが答え
	let max: number = -Infinity;
	let maxNumIndex: number = 0;

	let min: number = Infinity;
	let minNumIndex: number = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max) {
			max = nums[i];
			maxNumIndex = i;
		};
	};

	const toMaxArr: number[] = nums.slice(0, maxNumIndex + 1);

	for (let i = 0; i < toMaxArr.length; i++) {
		if (toMaxArr[i] < min) {
			min = toMaxArr[i];
			minNumIndex = i;
		};
	}

	const resultArr: number[] = toMaxArr.slice(minNumIndex);

	return resultArr.length;
};
