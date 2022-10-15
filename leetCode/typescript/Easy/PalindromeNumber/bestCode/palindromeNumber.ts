function palindromeNumber(x: number): boolean {
	const stringNum = x.toString();

	if (stringNum.length === 1) return true;

	const start = stringNum[0];
	const end = stringNum[stringNum.length - 1];

	if (start !== end) return false;

	if (stringNum.length === 2) return true;

	const rest = stringNum.substring(1, stringNum.length - 1);

	return palindromeNumber(Number(rest));
};

console.log(palindromeNumber(121));
console.log(palindromeNumber(123));
