// testInorderTraversal.js

// Import the function (if in a different file)
// const { inorderTraversal } = require('./yourFileName');

// Define the TreeNode class
// Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/description/?envType=problem-list-v2&envId=tree
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to be tested
var inorderTraversal = function(root) {
    let res = [];
    inorder(root, res);
    return res;
};

function inorder(node, res) {
    if (!node) return null;

    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
}

// Test cases
const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root1)); // Output: [1, 3, 2]

const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(inorderTraversal(root2)); // Output: [2, 1, 3]

const root3 = null;
console.log(inorderTraversal(root3)); // Output: []

const root4 = new TreeNode(1);
console.log(inorderTraversal(root4)); // Output: [1]
