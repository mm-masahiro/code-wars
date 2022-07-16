# https://leetcode.com/problems/root-equals-sum-of-children/
# my code

def check_tree(root)
	sum = root.left.val + root.right.val
	rootNode = root.val
	
	return true if rootNode == sum
	false
end

# best code
def check_tree(root)
	root.val == root.left.val + root.right.val
end
