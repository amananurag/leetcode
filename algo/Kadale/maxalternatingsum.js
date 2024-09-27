/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/maximum-alternating-subsequence-sum/

// The alternating sum of a 0-indexed array is defined as the sum of the elements at even indices minus the sum of the elements at odd indices.

// For example, the alternating sum of [4,2,5,3] is (4 + 5) - (2 + 3) = 4.
// Given an array nums, return the maximum alternating sum of any subsequence of nums (after reindexing the elements of the subsequence).

// A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not.
var maxAlternatingSum = function(nums) {
    let evenSum = 0; // Maximum sum for even indexed elements
   let oddSum = 0;  // Maximum sum for odd indexed elements
   
   for (let i = 0; i < nums.length; i++) {
       // For each element, update the even and odd sums
       evenSum = Math.max(evenSum, oddSum + nums[i]); // Extend from odd sum to even sum
       oddSum = Math.max(oddSum, evenSum - nums[i]);  // Extend from even sum to odd sum
   }
   
   // Return the maximum alternating sum, which will be stored in evenSum
   return evenSum;
};

console.log(maxAlternatingSum([4,2,5,3]))
console.log(maxAlternatingSum([5,6,7,8]))