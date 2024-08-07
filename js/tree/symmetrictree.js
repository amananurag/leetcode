
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 

 
var isSymmetric = function(root) {
    if (root == null) return true;
    
    return symmetryChecker(root.left, root.right);
};
function symmetryChecker(left, right) {
    if (left == null && right == null) return true; // If both sub trees are empty
    if (left == null || right == null) return false; // If only one of the sub trees are empty
    if (left.val !== right.val) return false; // If the values dont match up
    
	// Check both subtrees but travelled in a mirrored/symmetric fashion
	// (one goes left, other goes right)  and make sure they're both symmetric
    return symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left);
}
// Test cases
var tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
console.log(isSymmetric(tree1)); // Output should be true

var tree2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));
console.log(isSymmetric(tree2)); // Output should be false