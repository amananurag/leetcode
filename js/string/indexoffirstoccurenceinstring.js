/* Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1. */

//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle.length) return 0;
    if(!haystack.includes(needle)) return -1;
    return haystack.split(`${needle}`)[0].length;
 };
var strStr2 = function(haystack,needle){
    return haystack.indexOf(needle) > 0 ? haystack.indexOf(needle):-1;

}

 console.log(strStr("leetcode","leeto"))//-1
 console.log(strStr("abuta","but"))//1
 console.log(strStr2("leetcode","leeto"))//-1
 console.log(strStr2("abuta","but"))//1