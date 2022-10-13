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
    for (var i = 1; i < h.length; i++) {
        minCosts.push(Infinity);
    }
    for (var i = 0; i < h.length; i++) {
        for (var j = 1; j <= k; j++) {
            // i = 0
            // Infinity, 7 -> min = 7
            // Infinity, 2 -> min = 2
            // [0, 7, 2, Inf, Inf, Inf, Inf]
            // [2, 9, 4, 5, 1, 6, 10]
            // i = 1
            // 2, 5 -> 2
            // Inf, 1 -> 4
            // [0, 7, 2, 4, Inf, Inf, Inf]
            // i = 2, minCosts[i] = 2, h[i] = 4
            // 4, 1 -> 1
            // Inf, 3 -> 3
            console.log("i = " + i + "\u306E\u6642");
            min = (chmin(minCosts[i + j], minCosts[i] + Math.abs(h[i] - h[i + j])));
            // console.log(min, minCosts[i])
            if (minCosts[i + j] > min) {
                minCosts[i + j] = min;
            }
            console.log(minCosts);
        }
        ;
        // minCosts[i] = min;
        console.log("end");
    }
    // [0, 7, 2, 3, 5, 4, 8]
    return Number(minCosts.slice(-1));
};
var chmin = function (origin, target) {
    // console.log(origin, target)
    // aは比較元、bがどんどんインクリメントされて新しく比較する方になる
    // → 元のものより、小さいものが出てきたら比較元をより小さい方に入れ替える
    if (origin > target) {
        origin = target;
    }
    ;
    return origin;
};
console.log(frog2(h, K));
// console.log(chmin(7, 3));
