/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // Calculate the sum of the first 'k' elements
   let sum = 0;
   for (let i = 0; i < k; i++) {
       sum += nums[i];
   }

   // Start with the first window as the maximum sum
   let maxSum = sum;

   // Slide the window over the rest of the array
   for (let i = k; i < nums.length; i++) {
       sum += nums[i] - nums[i - k]; // Add the next element and subtract the first element of the previous window
       maxSum = Math.max(maxSum, sum);
   }

   // Return the maximum average
   return maxSum / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3]))

console.log(findMaxAverage([5]))
