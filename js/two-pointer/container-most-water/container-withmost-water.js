/**
 * @param {number[]} height
 * @return {number}
 */
// // https://leetcode.com/problems/container-with-most-water/

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
var maxArea = function(height) {
    let i = 0;
   let j = height.length - 1;
   let max_area = 0;

   while (i < j) {
       // Calculate the area between the two lines
       let area = Math.min(height[i], height[j]) * (j - i);
       
       // Update max_area if the current area is greater
       max_area = Math.max(max_area, area);
       
       // Move the pointer that is pointing to the shorter line
       if (height[i] < height[j]) {
           i++;
       } else {
           j--;
       }
   }
   
   return max_area;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))