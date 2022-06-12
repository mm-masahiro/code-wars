"use strict";
exports.__esModule = true;
exports.humanReadable = void 0;
// 流石にリファクタしたい
function humanReadable(seconds) {
    var rest = seconds;
    var showHour = '';
    var showMinute = '';
    var showSeconds = '';
    var hour = Math.floor(rest / 3600);
    rest = seconds - (hour * 3600);
    var minute = Math.floor(rest / 60);
    rest = rest - (minute * 60);
    // この辺キモすぎる
    if (hour === 0) {
        showHour = '00';
    }
    else if (hour < 10) {
        showHour = '0' + hour;
    }
    else {
        showHour = hour.toString();
    }
    if (minute === 0) {
        showMinute = '00';
    }
    else if (minute < 10) {
        showMinute = '0' + minute;
    }
    else {
        showMinute = minute.toString();
    }
    if (rest === 0) {
        showSeconds = '00';
    }
    else if (rest < 10) {
        showSeconds = '0' + rest;
    }
    else {
        showSeconds = rest.toString();
    }
    var result = showHour + ':' + showMinute + ':' + showSeconds;
    console.log(result);
    return result;
}
exports.humanReadable = humanReadable;
humanReadable(59);
