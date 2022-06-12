"use strict";
exports.__esModule = true;
exports.bouncingBall = void 0;
function bouncingBall(h, bounce, window) {
    var count = 0;
    var bouncedHeight = h;
    if (h < window) {
        return 0;
    }
    if (h === window) {
        return 1;
    }
    if (bounce === 1) {
        return -1;
    }
    count = count + 1;
    bouncedHeight = bouncedHeight * bounce;
    for (bouncedHeight; bouncedHeight > window; bouncedHeight = bouncedHeight * bounce) {
        count = count + 2;
    }
    // console.log(count)
    return count;
}
exports.bouncingBall = bouncingBall;
console.log(bouncingBall(5, 0.83, 5.5));
