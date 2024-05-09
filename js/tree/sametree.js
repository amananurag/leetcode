function sameTree(p1,p2){

    if(!p1 && !p2) return true;
    else if((!p1 && p2) || (p1 && !p2)) return false;
    else if(p1.val !=p2.val) return false

    return sameTree(p1.left , p2.left) && sameTree(p1.right,p2.right)

}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Test cases
var tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(sameTree(tree1, tree2)); // Output should be true

var tree3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
var tree4 = new TreeNode(1, new TreeNode(2), new TreeNode(4));
console.log(sameTree(tree3, tree4)); // Output should be false