function isValid(s: string): boolean {
	const devidedStrings = s.split("")
	const parenthesesPairs = {
			'(': ')',
			'[': ']',
			'{': '}',
	}
	const parentheses = [];
	
	if (devidedStrings.length === 1) return false
	
	for(let i = 0; i < devidedStrings.length; i++) {
			if (devidedStrings[i] === '(' || devidedStrings[i] === '[' || devidedStrings[i] === '{') {
					parentheses.push(devidedStrings[i])
			};
			if (devidedStrings[i] === ')' || devidedStrings[i] === ']' || devidedStrings[i] === '}') {
					const poppedString = parentheses.pop()
					if (parenthesesPairs[poppedString] !== devidedStrings[i]) return false
			}
	}
	
	return parentheses.length === 0 ? true : false
};
