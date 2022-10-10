function shuffle(nums: number[], n: number): number[] {
	const result: number[] = [];
	const firstHalf = nums.slice(0, n);
	const laterHalf = nums.slice(n);

	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) {
			result.push(firstHalf[Math.floor(i / 2)])
		} else {
			result.push(laterHalf[Math.floor(i / 2)])
		}
	}
	return result;
};
