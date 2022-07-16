// https://leetcode.com/problems/root-equals-sum-of-children/
// my code


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

function checkTree(root: TreeNode | null): boolean {
	if (!root) return false;
	if (!root.left || !root.right) return false;
	const rootNode = root.val
	const sum = root.left.val + root.right.val

	if (rootNode === sum) return true
	return false
};

// best code
// function checkTree(root: TreeNode | null): boolean {
// 	return root.val === root?.left?.val + root?.right?.val
// };

