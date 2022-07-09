// https://www.codewars.com/kata/5270f22f862516c686000161/train/typescript
// my solution
export function toBase64(str: string): string {
  return Buffer.from(str).toString('base64')
}

export function fromBase64(str: string): string {
  return Buffer.from(str, 'base64').toString()
}

// 所感
// bestに近い回答だった
