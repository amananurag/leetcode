/* There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product). 
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
*/

var arraySign = function(nums) {
    let result = 1 * nums[0];
    for(let i=1;i<nums.length;i++){
        result = result * nums[i];
    }
    if(result > 1){
        return 1;
    }else if(result < 0){
        return -1
    }else{
        return 0;
    }
    
};

console.log(arraySign( [-1,-2,-3,-4,3,2,1]))