/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// https://leetcode.com/problems/find-the-difference/?envType=problem-list-v2&envId=hash-table
var findTheDifference = function(s, t) {
    for (let letter of s)
      t = t.replace(letter, '');
  return t;
};

console.log(findTheDifference("abcd","abcde"))
console.log(findTheDifference("","y"))