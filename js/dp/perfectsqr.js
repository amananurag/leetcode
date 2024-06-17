// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.



//     Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = new Array(n + 1).fill(Infinity);
     
     // Base case: 0 can be formed with 0 perfect squares
     dp[0] = 0;
 
     // Iterate from 1 to n
     for (let i = 1; i <= n; i++) {
         // Iterate over perfect squares less than or equal to i
         for (let j = 1; j * j <= i; j++) {
             // Update the minimum number of perfect squares needed
             dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
         }
     }
 
     // The result is stored in dp[n]
     return dp[n];
     
 };