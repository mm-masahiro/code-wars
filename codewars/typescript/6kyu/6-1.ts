// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript
export const likes = (a : string[]) : string => {
  console.log(a)
  if (a.length === 0) {
    return "no one likes this"
  } else if (a.length === 1) {
    return `${a[0]} likes this`
  } else if (a.length === 2) {
    return `${a[0]} and ${a[1]} like this`
  } else if (a.length === 3) {
    return `${a[0]}, ${a[1]} and ${a[2]} like this`
  } else {
    return `${a[0]}, ${a[1]} and ${a.length -2} others like this`
  }
}

// 別解
// export const likes = (a : string[]) : string => {
// 	switch (a.length) {
// 		case 0:
// 			return "no one likes this"
// 		case 1:
// 			return `${a[0]} likes this`
// 		case 2:
// 			return `${a[0]} and ${a[1]} like this`
// 		case 3:
// 			return `${a[0]}, ${a[1]} and ${a[2]} like this`
// 		default:
// 			return `${a[0]}, ${a[1]} and ${a.length -2} others like this`
// 	}
// }
