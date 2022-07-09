//, https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript
// my solution
export const high = (str: string): string => {
  const words = str.split(" ");
  const wordSize = words.map((word) => {
    const singleWords = word.split("")
    const code = singleWords.map((sw) => {
		// ascciiからこの問題で与えられている番号に戻す
      return sw.charCodeAt(0) - 96
    })
    const size = code.reduce((accumulator, cv) => {
      return accumulator + cv
    })
    return size;
  });
  
  const max = wordSize.reduce((currentWordSize, nextWordSize) => {
    return currentWordSize > nextWordSize ? currentWordSize : nextWordSize
  });
  const maxSizeIndex = wordSize.findIndex(size => size === max)
  return words[maxSizeIndex]
};

// best solution
// export const VALUE_OFFSET = 96;
// export const calcValue = (word: string): number => {
//   return word.split('').reduce((sum, char) => sum + char.charCodeAt(0) - VALUE_OFFSET, 0);
// }  
// export const high = (str: string): string => {
//   return str.split(' ').reduce((max, word) => calcValue(word) > calcValue(max) ? word : max);
// };

// 所感
// ASCII使うっていう筋は悪くなかったぽい
// wordSizeっていう関数を切り出せばもうちょい綺麗に書けたような気がする
