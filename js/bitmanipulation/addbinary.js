/**
 * https://leetcode.com/problems/add-binary/submissions/1475922253/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum1 = BigInt("0b"+a);
    let sum2 = BigInt("0b"+b);
    let sum = sum1+sum2;
    return sum.toString(2);
};


console.log(addBinary("11","1")) //100
console.log(addBinary("1010","1011"))//10101