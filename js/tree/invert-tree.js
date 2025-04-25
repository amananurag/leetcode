function isInverted(root){
    if (!root) return null;

    let queue = [root];
    
    while (queue.length > 0) {
        let node = queue.shift();

        // Swap left and right children
        [node.left, node.right] = [node.right, node.left];

        // Push children to the queue if they exist
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return root;
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
// Function to print the tree in level order (BFS)
function printTree(root) {
    if (!root) return;

    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
// Example usage
let tree = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5)), 
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
console.log("Original Tree:");
printTree(tree);

isInverted(tree);

console.log("Inverted Tree:");
printTree(tree);