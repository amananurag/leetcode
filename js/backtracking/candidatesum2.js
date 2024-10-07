/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const results = [];

   // Sort the candidates to handle duplicates
   candidates.sort((a, b) => a - b);

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

       for (let i = start; i < candidates.length; i++) {
           // Skip duplicates
           if (i > start && candidates[i] === candidates[i - 1]) {
               continue;
           }

           currentCombination.push(candidates[i]); // Include the candidate
           backtrack(i + 1, currentSum + candidates[i],currentCombination); // Move to the next index
           currentCombination.pop(); // Backtrack
       }
   }

   backtrack(0, 0, []);
   return results;
};

console.log(combinationSum2([10,1,2,7,6,1,5]))
console.log(combinationSum2([2,5,2,1,2]))