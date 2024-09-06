// Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

// If no such second minimum value exists, output -1 instead.

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
 * @return {number}
 */
// 2
// / \
// 2   5
//   / \
//  5   7

var findSecondMinimumValue = function(root) {
    if (!root) return -1;
  const min1 = root.val;
  let min2 = Infinity;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (min1 < node.val && node.val < min2) min2 = node.val;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return min2 === Infinity ? -1 : min2;
    
};

console.log(findSecondMinimumValue(root))


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}


// Construct the binary tree [2, 2, 5, null, null, 5, 7]
const root = new TreeNode(
    2, 
    new TreeNode(2), 
    new TreeNode(5, new TreeNode(5), new TreeNode(7))
);