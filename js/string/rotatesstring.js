//https://leetcode.com/problems/rotate-string/description/
/* Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true */

var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false;
    // concat the string with itself and check if the goal is a substring of the new string
    // if needed to find rotate times use indexof(goal) to find the position of goal in the new string
    return s.concat(s).includes(goal);
};

console.log(rotateString("abcde", "cdeab"))//true
console.log(rotateString("abcde", "abced"))//false