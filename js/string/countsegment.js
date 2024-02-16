//https://leetcode.com/problems/number-of-segments-in-a-string/submissions/1170258456/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    console.log(s.split(" "));
    return s.split(" ").filter(x => x != "").length;
};

console.log(countSegments("Hello, my name is John")) //5
console.log(countSegments("                ")) //0