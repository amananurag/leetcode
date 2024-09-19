/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// https://leetcode.com/problems/assign-cookies/

// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

 

// Example 1:

// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.
// Example 2:

// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
// You have 3 cookies and their sizes are big enough to gratify all of the children, 
// You need to output 2.
var findContentChildren = function(g, s) {
    // Sort both greed factors and cookie sizes in ascending order
      g.sort((a, b) => a - b);
      s.sort((a, b) => a - b);
  
      let i = 0; // Pointer for children
      let j = 0; // Pointer for cookies
      let contentChildren = 0;
  
      // Loop until we've processed all children or all cookies
      while (i < g.length && j < s.length) {
          // If the cookie size can satisfy the child's greed factor
          if (g[i] <= s[j] ) {
              contentChildren++;
              i++; // Move to the next child
          }
          j++; // Move to the next cookie regardless
      }
  
      return contentChildren;
  };

console.log(findContentChildren([1,2,3],[1,1]))
console.log(findContentChildren([1,2],[1,2,3]))