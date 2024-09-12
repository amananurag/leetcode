// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Your levelOrder function
var levelOrder = function(root) {
    let q = [root], ans = [];
    while (q[0]) {
        let qlen = q.length, row = [];
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift();
            row.push(curr.val);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
        ans.push(row);            
    }
    return ans;
};

// Create a binary tree for testing
// Example: Tree with root 1, left child 2, right child 3
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Call levelOrder function
let result = levelOrder(root);
console.log(result); // Output: [[1], [2, 3], [4, 5, 6, 7]]
