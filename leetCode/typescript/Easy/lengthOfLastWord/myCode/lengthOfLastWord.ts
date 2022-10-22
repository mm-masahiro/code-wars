// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
	const arrString = s.split(" ");
	
	for (let i = arrString.length - 1; i < arrString.length; i--) {
			if (arrString[i] !== "") return arrString[i].length
	};
	return 0;
};
