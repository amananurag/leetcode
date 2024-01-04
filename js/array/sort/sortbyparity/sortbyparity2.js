/* Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

 

Example 1:

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Example 2:

Input: nums = [2,3]
Output: [2,3] */

var sortArrayByParityII = function(nums) {
    let odd = [];
    let even = [];
    let res = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]% 2===0){
            even.push(nums[i])

        }else{
            odd.push(nums[i])
        }
    }
    for(let i=0;i<nums.length/2;i++){
        res.push(even[i]);
        res.push(odd[i]);
    }
    return res;
};

console.log(sortArrayByParityII([4,2,5,7]))
console.log(sortArrayByParityII([2,3]))