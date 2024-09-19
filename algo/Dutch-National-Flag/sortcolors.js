/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// https://leetcode.com/problems/sort-colors/

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
var sortColors = function(nums) {
    function swap(i, j) {
   [nums[i], nums[j]] = [nums[j], nums[i]];
 }

 let l = 0;
 let r = nums.length - 1;
 let i = 0;

 while (i <= r) {
   const n = nums[i];
   if (n === 0) {
     swap(i, l);
     l++;
     i++;
   } else if (n === 2) {
     swap(i, r);
     r--;
   } else {
     i++;
   }
 }
};

console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([2,0,1]))