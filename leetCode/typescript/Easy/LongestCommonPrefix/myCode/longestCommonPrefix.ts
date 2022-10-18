// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
  // strs[0][0]を取得
  // strs[1][0], strs[2][0], strs[3][0]...と比較して、全て値が同じであれば同じであれば文字列に追加していく

  // strs[0][1]を取得
  // strs[1][1], strs[2][1], strs[3][1]...と比較して、全て値が同じであれば同じであれば文字列に追加していく

  // ↑を終わるまで or 異なる値が来るまで繰り返す
	let commonPrefix: string = "";

  for (let i = 0; i < strs[0].length; i++) {
    const base = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (base !== strs[j][i]) return commonPrefix
    }
    commonPrefix += base;
  }
  return commonPrefix;
};
