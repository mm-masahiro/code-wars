// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

function finalValueAfterOperations(operations: string[]): number {
	let result = 0;

	for (let i = 0; i < operations.length; i++) {
		if (operations[i].slice(1, 2) === "-") {
			result--;
		} else {
			result++
		}
	}

	return result
};
