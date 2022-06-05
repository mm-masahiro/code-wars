export function findOutlier(integers: number[]): number {
  // your code here
  const evens: number[] = []
  const odds: number[] = []
  
  for(let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evens.push(integers[i])
      if ((evens.length >= 1 && odds.length >=1) && (evens.length > odds.length)) {
        break;
      }
    } else {
      odds.push(integers[i])
      if ((evens.length >= 1 && odds.length >=1) && (evens.length > odds.length)) {
				break;
      }
    }
  }

  if (evens.length === 1) {
    return evens[0]
  } else {
    return odds[0]
  }
}
