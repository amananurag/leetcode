/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    // Base case: if the tree is empty, or has only one node, return false
    if (root === null || (root.left === null && root.right === null)) {
        return false;
    }
    let res = [];
    inorder(root, res); // Perform inorder traversal to populate the res array
    return search(res, k); // Search for two distinct values that sum to k
};

function inorder(node, res) {
    if (node === null) return;

    // Traverse left subtree
    inorder(node.left, res);

    // Visit current node
    res.push(node.val);

    // Traverse right subtree
    inorder(node.right, res);
}

function search(res, k) {
    let left = 0;
    let right = res.length - 1;

    // Two-pointer approach to find two distinct values that sum to k
    while (left < right) {  // Fixed condition: only when left < right
        let sum = res[left] + res[right];
        if (sum === k) {
            return true;
        } else if (sum < k) {
            left++;  // Increase left pointer if sum is too small
        } else {
            right--; // Decrease right pointer if sum is too large
        }
    }
    return false;
}
 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
    
// Example usage:
const root = new TreeNode(2, null, new TreeNode(3));
const k = 6;
console.log(findTarget(root, k));  // Output: false
