/**
 * Definition for a binary tree node.
 * @param {number} val
 * @param {TreeNode|null} left
 * @param {TreeNode|null} right
 */
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    
    // If the node is a leaf node, return depth 1
    if (!root.left && !root.right) return 1;

    // Initialize minDepth to a large number
    let minDepthValue = Infinity;
    
    // If the left subtree exists, find its min depth
    if (root.left) minDepthValue = Math.min(minDepthValue, minDepth(root.left));
    
    // If the right subtree exists, find its min depth
    if (root.right) minDepthValue = Math.min(minDepthValue, minDepth(root.right));
    
    return minDepthValue + 1;
};

// Example usage:
// Create a binary tree for testing
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Call minDepth function
console.log(minDepth(root)); // Output should be 2
