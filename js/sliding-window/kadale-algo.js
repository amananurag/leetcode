/* . Maximum Subarray
Solved
Medium
Topics
Companies
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23. */

var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let currentSum = nums[0];
    let largestSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        largestSum = Math.max(largestSum, currentSum);
    }

    return largestSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))//6
console.log(maxSubArray([1]))//1

/* Kadane's algorithm is a well-known and efficient algorithm for finding the maximum subarray sum in a given array of numbers. The algorithm is named after its inventor, Jay Kadane, and it has a time complexity of O(n), making it a linear-time solution to the maximum subarray sum problem.

The basic idea behind Kadane's algorithm is to iterate through the array once, maintaining two variables: currentSum and largestSum. The currentSum variable keeps track of the sum of the current subarray ending at the current element, and the largestSum variable keeps track of the maximum sum found so far.

Here is the step-by-step description of Kadane's algorithm:

Initialize currentSum and largestSum to the value of the first element in the array.

Iterate through the array starting from the second element.

For each element in the array:

Update currentSum to be the maximum of the current element and the sum of the current element and currentSum.
Update largestSum to be the maximum of largestSum and currentSum.
After the iteration, largestSum will contain the maximum subarray sum. */
// This would work in non negative integer
/* var maxSubArray = function(nums) {
    if(nums.length ==1) return nums[0]
    let largestsum = Number.MIN_SAFE_INTEGER; // this will error , max size exceeded.
    for(let i=0;i<nums.length;i++){
        let sum = 0;
        for(let j=i;j<nums.length;j++){
            sum = sum+nums[j];
            largestsum = Math.max(largestsum,sum)
        }
    }
    return largestsum;
}; */