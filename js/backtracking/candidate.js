/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = [];

   function backtrack(start, currentSum, currentCombination) {
       // Base case: If current sum equals target
       if (currentSum === target) {
           results.push([...currentCombination]); // Add a copy of currentCombination
           return;
       }
       // If current sum exceeds target, return
       if (currentSum > target) {
           return;
       }

       // Explore further candidates
       for (let i = start; i < candidates.length; i++) {
           currentCombination.push(candidates[i]); // Include the candidate
           backtrack(i, currentSum + candidates[i], currentCombination); // Recurse with the same index
           currentCombination.pop(); // Backtrack
       }
   }

   backtrack(0, 0,[]);
   return results;
};

console.log(combinationSum([2,3,6,7]))
console.log(combinationSum([2,3,5]))
console.log(combinationSum([2]))