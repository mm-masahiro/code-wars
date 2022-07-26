function thousandSeparator(n: number): string {
	let num = n;
	if (n / 1000 < 1) return n.toString();

	while(num / 1000 >= 1) {
		num = n / 1000;
		console.log(num)
	}
	return 'hoge';
};

console.log(thousandSeparator(1234000));
