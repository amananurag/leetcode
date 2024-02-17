/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits.length) return [];
  let result = [];
const map = {
 2: 'abc',
 3: 'def',
 4: 'ghi',
 5: 'jkl',
 6: 'mno',
 7: 'pqrs',
 8: 'tuv',
 9: 'wxyz',
};

function backtrack(start, currentCombination) {

 if (start === digits.length) {
   result.push(currentCombination.join(''));

   return;
 }

 const letters = map[digits[start]];

 for (let i = 0; i < letters.length; i++) {
   currentCombination.push(letters[i]);

   backtrack(start + 1, currentCombination);
   currentCombination.pop(); // backtrack
 }
}



 backtrack(0, []);


return result;

};

console.log(letterCombinations('23'))