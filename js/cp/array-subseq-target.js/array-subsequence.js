// You are given an array of integers nums and an integer target.

// Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

 

// Example 1:

// Input: nums = [3,5,6,7], target = 9
// Output: 4
// Explanation: There are 4 subsequences that satisfy the condition.
// [3] -> Min value + max value <= target (3 + 3 <= 9)
// [3,5] -> (3 + 5 <= 9)
// [3,5,6] -> (3 + 6 <= 9)
// [3,6] -> (3 + 6 <= 9)
// Example 2:

// Input: nums = [3,3,6,8], target = 10
// Output: 6
// Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
// [3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]

// //https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort((a,b) => a - b);
    const mod = 1000000007, arr = [];
   let num = 1;
   
   for (let i = 0; i < nums.length; i++) 
   {
       arr.push(num);
       num = num * 2 % mod;
   }



   let low = 0, j = nums.length - 1;

   for (let i = 0; i < nums.length && nums[i]*2 <= target; i++) 
   {
       while (j && nums[j] + nums[i] > target) 
       j--;

       low = (low + arr[j - i])%mod;
   }
   return low;
}; 

console.log(numSubseq([3,5,6,7],9))

console.log(numSubseq([3,3,6,8],10))