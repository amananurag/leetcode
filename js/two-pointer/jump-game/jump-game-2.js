/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;  // Number of jumps taken
   let currentEnd = 0;  // The farthest point that can be reached with the current number of jumps
   let maxReach = 0;  // The farthest point that can be reached overall

   for (let i = 0; i < nums.length-1; i++) {
       // Update the farthest point that can be reached
       maxReach = Math.max(maxReach, i + nums[i]);

       // If we have reached the end of the current jump
       if (i === currentEnd) {
           jumps++;  // Take another jump
           currentEnd = maxReach;  // Update the end point of the current jump
       }

     
   }

   return jumps;
};

console.log(jump([2,3,1,1,4]))

console.log(jump([2,3,0,1,4]))