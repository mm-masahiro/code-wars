function isPalindrome(x: number): boolean {
	let num = x;
	const nums: number[] = [];

	let stringNum = "";

	for (let i = 0; num / 10 > 0; i++) {
		nums.push(num % 10);
		num = Math.floor(num / 10);
	};

	for (let i = 0; i < nums.length; i++) {
		stringNum = stringNum + nums[i];
	}

	if (Number(stringNum) === x) return true;

	return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
