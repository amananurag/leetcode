//https://leetcode.com/problems/generate-parentheses/description/

function permutateParenthesis(n){
    let result =[]
    function bt(left,right,start){
        if(start.length === n*2){
            result.push(start);
            return
        }
        if(left <n) bt(left+1,right, start+ '(');
        if(right <left) bt(left,right+1,start+')');
    }
    bt(0,0,'');
    return result;
}

console.log(permutateParenthesis(3))