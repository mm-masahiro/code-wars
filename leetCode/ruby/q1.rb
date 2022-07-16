def check_tree(root)
	sum = root.left.val + root.right.val
	rootNode = root.val
	
	return true if rootNode == sum
	false
end
