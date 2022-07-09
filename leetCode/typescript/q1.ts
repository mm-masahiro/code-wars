// https://leetcode.com/problems/richest-customer-wealth/
// my code
function maximumWealth(accounts: number[][]): number {
	const sumMoneyByAccount: number[] = accounts.map((account) => {
			const sum = account.reduce((accum, nextValue) => {
					return accum + nextValue
			});
			return sum
	})
	return Math.max(...sumMoneyByAccount)

};
