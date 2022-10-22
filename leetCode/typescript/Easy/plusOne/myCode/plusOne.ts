// https://leetcode.com/problems/plus-one/submissions/


// 複雑になってる上、解けなかった
function plusOne(digits: number[]): number[] {
  // スタック使えばいけそうな気がしてきた
  // 一旦、全部配列にする
  const arrNum: number[] = [];
  for (let i = 0; i < digits.length; i++) {
    arrNum.push(digits[i])
  }

  // arrNumの後ろのものから新しい配列に入れていく
  // 最初に入れる時にはarrNumから取ってきたものに+1して入れる
  // 新しい配列の先頭のものと、arrNumから入れる値を足して10以上になればsplitする
  // でも、これが必要なのは最初に取ってきたものと1の和が10以上になった時

  // パターンとしては2つある
  // 1. arrNum[last] + 1の値が10未満
  // 2. arrNum[last] + 1の値が10以上

  const newArr = [];

  if (arrNum[arrNum.length - 1] + 1 >= 10) {
    let num = arrNum[arrNum.length - 1] + 1
    let devidedNum = num.toString().split("")

    for (let i = 0; i < devidedNum.length; i++) {
      newArr.push(Number(devidedNum[i]))
    }

    console.log(arrNum)
    for (let i = arrNum.length - 2; i < 0 && arrNum.length - 2 >= 0; i--) {
      console.log(i)
      if (arrNum[i] + newArr[0] >= 10) {
        let num2: number = arrNum[i] + newArr[0]
        let devidedNum2: string[] = num2.toString().split("")
        for (let j = 0; j < devidedNum2.length; j++) {
          newArr.push(Number(devidedNum2[i]))
        }
      } else {
        newArr.push(arrNum[i])
      }
    }
  } else {
    for (let i = arrNum.length - 1; i < 0; i--) {
      if (i === arrNum.length - 1) {
        newArr.push(arrNum[i] + 1)
      } else {
        newArr.push(arrNum[i])
      }
    }
  }

  return newArr
};

// const nums = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const nums = [9, 9];

console.log(plusOne(nums))
