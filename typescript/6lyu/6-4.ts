// my solution
export function wave(str: string): Array<string>{
  const result = []
  for (let i = 0; i < str.length; i++) {
    const targetStr = str.slice(i, i + 1) 
    if (targetStr !== ' ') {
      const upperStr = targetStr.toUpperCase()

      const changedStr = str.slice(0, i)
      const lastStr = str.slice(i + 1)
      result.push(changedStr + upperStr + lastStr)
    }
  }
  return result
}

// best practive
// export function wave(str: string): Array<string> {
//   return str.split("").reduce((wave, char, index) => {
//     if (char === " ") {
//       return wave;
//     }
//     wave.push(
//       str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
//     );
//     return wave;
//   }, [])
// }
