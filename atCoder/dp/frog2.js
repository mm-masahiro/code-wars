// https://qiita.com/drken/items/dc53c683d6de8aeacf5a#b-%E5%95%8F%E9%A1%8C---frog-2
var N = 7;
var h = [2, 9, 4, 5, 1, 6, 10];
var K = 2;
// ノーマルなfrogとの違いは、カエルがi+1 or i + 2までしかいけないのではなく、i + K(1 <= K <= 100)まで移動できる
// cost = [0, 7, 2, 3, 1, ]
// ノーマルなfrogだとi-1とi-2だけみてたけど、iより前のものを全部見ないといけなくなった?
var frog2 = function (h, k) {
    var minCosts = [0];
    var min = Infinity;
    for (var i = 0; i < h.length; i++) {
        minCosts.push(Infinity);
    }
    // for (let i = 0; i < h.length; i++) {
    // 	for (let j = 1; j <= k; j++) {
    // 		// [0]
    // 		// minCosts[1], 
    // 		if (minCosts[i + j], Math.abs(h[i] - h [i + j])) {
    // 		}
    // 	}
    // }
    console.log(minCosts);
    return Number(minCosts.slice(-1));
};
var chmin = function (a, b) {
    console.log(a);
    if (a > b) {
        a = b;
        console.log(a);
    }
};
// console.log(frog2(h, K));
console.log(chmin(3, 7));
