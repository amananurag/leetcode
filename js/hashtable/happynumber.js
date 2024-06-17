/**
 * @param {number} n
 * @return {boolean}
 */
// https://leetcode.com/problems/happy-number/
var isHappy = function(n) {
    let seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getSumOfSquares(n);
    }

    return n === 1;
}

function getSumOfSquares(n) {
    return n.toString().split('').reduce((sum, digit) => {
        return sum + Math.pow(parseInt(digit), 2);
    }, 0);
}

console.log(isHappy(19 ))
