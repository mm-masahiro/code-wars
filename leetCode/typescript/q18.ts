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

 function minDepth(root: TreeNode | null): number {
	let min = 1;
	
	const                                              = (currentNode: TreeNode | null) => {
		console.log(min);
		if(currentNode.left === null && currentNode.right === null) return min;
		traverse(currentNode.left)
		// traverse(currentNode.right)
	}
	return min
};
