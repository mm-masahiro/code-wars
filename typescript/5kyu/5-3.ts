// https://www.codewars.com/kata/523f5d21c841566fde000009/train/typescript
// my solution
export function arrayDiff(a: number[], b: number[]): number[] {
  if (a.length === 0) {
    return [];
  } else if (b.length === 0) {
    return a;
  };

  const match = [...a, ...b].filter(item => !b.includes(item));
  return match;
};

// best solution
// export function arrayDiff(a: number[], b: number[]): number[] {
//   return a.filter(e => !b.includes(e));
// };
