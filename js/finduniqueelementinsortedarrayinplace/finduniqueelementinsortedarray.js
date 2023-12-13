/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let initialIndex = 0;
    let res = [nums[0]];

    for (let startIndex = 1; startIndex < nums.length; startIndex++) {
        if (nums[startIndex] !== nums[initialIndex]) {
            initialIndex++;
            nums[initialIndex] = nums[startIndex];
         
        }
    }

    return res;
};

console.log(removeDuplicates([0,1,1,1,2,2,3,3,4]))