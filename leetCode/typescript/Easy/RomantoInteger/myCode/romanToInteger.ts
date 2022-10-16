// https://leetcode.com/problems/roman-to-integer/

const romanToInteger = (s: string): number => {
	interface RomanNumerals {
		[key: string]: number;
	};

	const romanNumerals: RomanNumerals = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result: number = 0;

	for (let i = 0; i < s.length; i++) {
		if (romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
			result = result + romanNumerals[s[i + 1]] - romanNumerals[s[i]];
			// 連なった次のやつをスキップさせる
			i++
		} else {
			result = result + romanNumerals[s[i]];
		}
	}
	return result;
};

console.log(romanToInteger("III"));
console.log(romanToInteger("MCMXCIV"));
