// https://leetcode.com/problems/word-pattern/


/* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let patternArray = pattern.split('');
   let sArray = s.split(' ');
   if (patternArray.length !== sArray.length) return false;

   let mapPattern = new Map();
   let mapWord = new Map();

   for (let i = 0; i < patternArray.length; i++) {
       const currentPattern = patternArray[i];
       const currentWord = sArray[i];

       if (!mapPattern.has(currentPattern)) {
           mapPattern.set(currentPattern, currentWord);
       } else {
           if (mapPattern.get(currentPattern) !== currentWord) {
               return false;
           }
       }

       if (!mapWord.has(currentWord)) {
           mapWord.set(currentWord, currentPattern);
       } else {
           if (mapWord.get(currentWord) !== currentPattern) {
               return false;
           }
       }
   }

   return true;
}


console.log(wordPattern("abba","dog cat cat dog")); //true
console.log(wordPattern("axza","dog cat rat dog")); //true
console.log(wordPattern("abba","dog cat cat fish")); //false
console.log(wordPattern("abba","dog dog dog dog")); //false
console.log(wordPattern("abba","dog dog dog dog dog")); //false
console.log(wordPattern("abba","dog cat cat dog cat")); //false
