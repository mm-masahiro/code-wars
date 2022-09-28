var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function sortedArrayToBST(nums) {
    if (nums == null || !nums.length) {
        return null;
    }
    ;
    var middleNumIndex = Math.floor(nums.length / 2);
    var node = new TreeNode(nums[middleNumIndex]);
    node.left = sortedArrayToBST(nums.slice(1, middleNumIndex));
    node.right = sortedArrayToBST(nums.slice(middleNumIndex + 1, nums.length));
    return node;
}
;
var nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
