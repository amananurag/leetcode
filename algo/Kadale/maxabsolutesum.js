/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let maxsum = nums[0];
    let curmax = nums[0];
    let  minsum = nums[0];
    let  curmin = nums[0];
     
     for(let i = 1; i < nums.length; i++) {
         curmax = Math.max(nums[i], nums[i] + curmax);
         maxsum = Math.max(maxsum, curmax);
         curmin = Math.min(nums[i], nums[i] + curmin);
         minsum = Math.min(minsum, curmin);
     }
      
     return Math.max(Math.abs(maxsum), Math.abs(minsum));
};

console.log(maxAbsoluteSum([1,-3,2,3,-4]))
console.log(maxAbsoluteSum([2,-5,1,-4,3,-2]))