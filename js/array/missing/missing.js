/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1 */

var singleNumber = function(nums) {
    let obj = {};
    for(let i=0;i<nums.length;i++){
       obj[nums[i]] = (obj[nums[i]]|| 0) + 1;
    }

    for(key in obj){
       
        if(obj[key]==1){
            return key
        }
    }
    return -1;
};

console.log(singleNumber([4,1,2,1,2]));
/* 
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
 */
var missingNumber = function(nums) {
    let max = nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i] > max){
            max = nums[i];
        }
    }
    for(let i=0;i<max;i++){
       
        if(!nums.includes(i)){
            return i;
        }
    }
    return -1
};


console.log(missingNumber([3,0,1]));