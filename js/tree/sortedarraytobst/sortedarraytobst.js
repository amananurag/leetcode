
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
        if (!nums.length) return null;

    const buildBST = (left, right) => {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);

        return root;
    }
    const root = buildBST(0, nums.length - 1); // Build only once
    console.log(levelOrderTraversal(root));    // Print properly formatted tree
    return root;
};

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function levelOrderTraversal(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Remove trailing nulls to match LeetCode style
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}
console.log(sortedArrayToBST([-10,-3,0,5,9])) // [0,-3,9,-10,null,5]
console.log(sortedArrayToBST([1,3])) // [3,1]