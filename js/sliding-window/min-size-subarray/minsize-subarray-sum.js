/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/minimum-size-subarray-sum/
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
   let sum = 0;
   let j = 0;

   for (let i = 0; i < nums.length; i++) {
       sum += nums[i];

       while (sum >= target) {
           minLength = Math.min(minLength, i - j + 1);
           sum -= nums[j];
           j++;
       }7
   }

   return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(7,[2,3,1,2,4,3]))
console.log(minSubArrayLen(4,[1,4,4]))