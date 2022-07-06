// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/typescript
// my solution
// export function beeramid(bonus: number, price: number): number {
// 	const purchasedBeer = bonus / price;
// 	let towerHeight = 1;
// 	let usedCan = 0;
// 	let needCan = 0;

// 	for(towerHeight; usedCan <= purchasedBeer; towerHeight ++) {
// 		needCan = towerHeight * towerHeight;
// 		usedCan = usedCan + needCan;
// 	}
// 	return towerHeight
// }

// best solution
export function beeramid(bonus: number, price: number): number {
  let level: number = 0;
  let n: number = 1;
  let i: number = 1
  while(n <= Math.floor(bonus / price)){
    i++;
    n += i ** 2;
    level++
  }
  return level
}

// 所感
// while使おうと思ってやめた
// もう少しちゃんと考えれば行けた問題だった
