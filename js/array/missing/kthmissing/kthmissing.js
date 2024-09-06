// 1539. Kth Missing Positive Number
// Attempted
// Easy
// Topics
// Companies
// Hint
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

 

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:

// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
// https://leetcode.com/problems/kth-missing-positive-number/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const max = Math.max(...arr);
    const set = new Set(arr);
    const integers = new Array(max).fill(0).map((a, i) => i + 1).filter(a => !set.has(a));
    const temp = integers.length;
    for (let i = 0; i < k - temp; i++) {
        integers.push(max + i + 1);
    }
    return integers[k - 1];
};

console.log(findKthPositive([2,3,4,7,11], 5))
console.log(findKthPositive([1,2,3,4],2))