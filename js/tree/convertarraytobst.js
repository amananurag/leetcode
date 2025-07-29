/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 *
 * 
 * 
 * 
 * /
 */

//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
var sortedArrayToBST = function(nums) {
    function build(left, right) {
      if (left > right) return null; // Base case: empty subarray

      const mid = Math.floor((left + right) / 2);
      const node = new TreeNode(nums[mid]);

      node.left = build(left, mid - 1);  // Recursively build left subtree
      node.right = build(mid + 1, right); // Recursively build right subtree

      return node;
  }

  return build(0, nums.length - 1);
};