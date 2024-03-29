//https://leetcode.com/problems/reverse-bits/description/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    return Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"), 2);
};

console.log(reverseBits(43261596))//964176192
console.log(reverseBits(4294967293))//3221225471