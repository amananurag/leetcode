// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// hasPathSum function
var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) { // check leaf
        return targetSum === root.val;
    } else { // continue DFS
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }
};

// Create test cases
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

// Test the function with a targetSum
const targetSum = 22;
console.log(hasPathSum(root, targetSum)); // Expected output: true

// https://leetcode.com/problems/path-sum/submissions/1403661062/

// 5
// / \
// 4   8
// /   / \
// 11  13  4
// /  \      \
// 7    2      1
