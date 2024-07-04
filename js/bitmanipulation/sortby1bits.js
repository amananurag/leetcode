
// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/submissions/1309307169/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let res = [];
    const countBits = (num) => {
         let count =0;
         while (num > 0){
             if((num & 1)=== 1){
                count++;
             }
             num >>=1;
         }
         return count;
    }
    return arr.map((num) => ({
        num,
        bits: countBits(num)
    }))
    .sort((a, b) => {
        if (a.bits !== b.bits) {
            return a.bits - b.bits;
        } else {
            return a.num - b.num;
        }
    })
    .map((item) => item.num);
};