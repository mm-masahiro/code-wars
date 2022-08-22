// https://leetcode.com/problems/kth-largest-element-in-a-stream/
var KthLargest = /** @class */ (function () {
    function KthLargest(k, nums) {
        this.target = k;
        this.elements = nums;
    }
    KthLargest.prototype.add = function (val) {
        this.elements.push(val);
        for (var i = 0; i < this.elements.length - 1; i++) {
            for (var j = 0; j < this.elements.length - 1; j++) {
                if (this.elements[j] < this.elements[j + 1]) {
                    var temp = this.elements[j];
                    this.elements[j] = this.elements[j + 1];
                    this.elements[j + 1] = temp;
                }
            }
        }
        return this.elements[this.target - 1];
    };
    return KthLargest;
}());
/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/
var heapSort = function (arr) {
    var maxTreeSize = Math.floor(Math.log2(arr.length));
    console.log(maxTreeSize);
    var _a = getTreeChildren(0), leftChildIndex = _a[0], rightChildIndex = _a[1];
    // console.log(swap(arr, 0, 1));
};
var swap = function (arr, parentNodeIndex, ChildNodeIndex) {
    var _a;
    return _a = [arr[ChildNodeIndex], arr[parentNodeIndex]], arr[parentNodeIndex] = _a[0], arr[ChildNodeIndex] = _a[1], _a;
};
var getParent = function (index) {
    return Math.floor((index - 1) / 2);
};
var getTreeChildren = function (index) {
    return [index * 2 + 1, index * 2 + 2];
};
// arrに値を追加していって、親ノードの値より大きければ入れ替える
heapSort([4, 5, 8, 2]);
