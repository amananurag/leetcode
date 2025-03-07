/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj ={};
    for(let i=0;i<s.length;i++){
       obj[i] = (obj[i]|| 0)+1;
    }
    for(key in obj){
        if(obj[key] ==1){
            return s.indexOf(key);
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));