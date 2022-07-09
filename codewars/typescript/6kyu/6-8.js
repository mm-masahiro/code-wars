"use strict";
exports.__esModule = true;
exports.high = void 0;
//, https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript
// my solution
var high = function (str) {
    var words = str.split(" ");
    var wordSize = words.map(function (word) {
        var singleWords = word.split("");
        var code = singleWords.map(function (sw) {
            return sw.charCodeAt(0) - 96;
        });
        var size = code.reduce(function (accumulator, cv) {
            return accumulator + cv;
        });
        return size;
    });
    var max = wordSize.reduce(function (currentWordSize, nextWordSize, index) {
        console.log(currentWordSize, nextWordSize, index);
        return currentWordSize > nextWordSize ? currentWordSize : nextWordSize;
    });
    var maxSizeIndex = wordSize.findIndex(function (size) { return size === max; });
    return words[maxSizeIndex];
};
exports.high = high;
console.log(exports.high('what time are we climbing up the volcano'));
// climbing
// 99 108 105 109 98 105 110 103    837
// 207 312 421 519 624 734 837
// 100と比較
// -2 8 5 9 -2 5 10 3 => 36
// 3, 12, 9, 13, 2, 9, 7 => 65
// volcano
// 118, 111, 108, 99, 97, 110, 111  => 754
// 100と比較
// 18 11 8 -1 -3 10 11 => 54
// 22, 15, 12, 3, 1, 14, 15 => 82
