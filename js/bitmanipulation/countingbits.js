// Counting Bits
// https://leetcode.com/problems/counting-bits/description/

/* Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
 */

var countingBits = function(n) {
    if(n === 0) return [0];
    let result = [];
    result[0] = 0;
    for(let i = 1; i <= n; i++){
        if(i%2 === 0){
            result[i] = result[i/2];
        }else{
            result[i] = result[Math.floor(i/2)] + 1;
        }
       
    }
    return result;
}

console.log(countingBits(2)); // [0,1,1]
console.log(countingBits(5)); // [0,1,1,2,1,2]
console.log(countingBits(10)); // [0,1,1,2,1,2,2,3,1,2,2]
console.log(countingBits(0)); // [0]