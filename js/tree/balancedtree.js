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
 * Creates a balanced binary tree for testing.
 * @return {TreeNode}
 */
function createBalancedTree() {
    // Manually create a balanced binary tree
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    return root;
}

/**
 * Performs level-order traversal of the binary tree.
 * @param {TreeNode} root
 * @return {number[][]}
 */
var isBalanced = function(root) {
    function checkheight(node){
    if(!node) return 0
    let leftHeight = checkheight(node.left);
    let rightHeight = checkheight(node.right);
    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
      return Math.max(leftHeight, rightHeight) + 1;
    }
      return checkheight(root) !== -1;
};
 

// Create a balanced binary tree
let root = createBalancedTree();

// Perform level-order traversal
let result = isBalanced(root);
console.log(result); // Output: [[1], [2, 3], [4, 5, 6, 7]]
