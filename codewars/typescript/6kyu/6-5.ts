// my solution (not pass)
export function bouncingBall(h: number, bounce: number, window: number): number {
	let count = 0;
	let bouncedHeight = h;

	if (h < window) {
		return 0;
	}
  
  if (h === window) {
    return 1
  }

	if (bounce === 1) {
		return -1
	}

	count = count + 1;
	bouncedHeight = bouncedHeight * bounce

	for (bouncedHeight; bouncedHeight > window; bouncedHeight = bouncedHeight * bounce) {
		count = count + 2;
	}

	return count
}

// best practice
// export function bouncingBall(h: number, bounce: number, window: number): number {
//   if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
//     return -1;
//   }
  
//   return 2 * Math.ceil(Math.log(window/h)/Math.log(bounce)) - 1; 
// }

// best practice2
// export function bouncingBall(h: number, bounce: number, window: number): number {
//   if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
//     return -1;
//   }
  
//   return 2 + bouncingBall(h * bounce, bounce, window);
// }
