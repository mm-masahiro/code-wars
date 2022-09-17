// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
	// 2つのarrayの和が小さい順に並べる
	// 2つのarrayの和が同じものがある場合、nums2の値が小さい方を優先して並べる
	if (nums1.length === 0 || nums2.length === 0) return [];

	const map = new Map();

	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums2.length; j++) {
			// mapに各numsのindexとsumを入れたい
			map.set(`${nums1[i]}, ${nums2[j]}`, nums1[i] + nums2[j])
		}
	}
	console.log(map)
	return [[]]
};

