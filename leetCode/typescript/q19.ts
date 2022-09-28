class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
	}
}

 function sortedArrayToBST(nums: number[]): TreeNode | null {
	if (nums == null || !nums.length) {
		return null;
	};

	const middleNumIndex = Math.floor(nums.length / 2)

	const node = new TreeNode(nums[middleNumIndex]);

	node.left = sortedArrayToBST(nums.slice(1, middleNumIndex))
	node.right = sortedArrayToBST(nums.slice(middleNumIndex + 1, nums.length))

	console.log(node)

	return node;
};

const nums = [-10,-3,0,5,9]

sortedArrayToBST(nums);
