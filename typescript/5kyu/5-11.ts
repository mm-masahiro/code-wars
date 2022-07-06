// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/typescript
// my solution
export function beeramid(bonus: number, price: number): number {
	const purchasedBeer = bonus / price;
	let towerHeight = 1;
	let usedCan = 0;
	let needCan = 0;

	for(towerHeight; usedCan <= purchasedBeer; towerHeight ++) {
		needCan = towerHeight * towerHeight;
		usedCan = usedCan + needCan;
	}
	return towerHeight
}
