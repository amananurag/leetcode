/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let initialIndex = 0;

    for (let startIndex = 1; startIndex < nums.length; startIndex++) {
        if (nums[startIndex] !== nums[initialIndex]) {
            initialIndex++;
            nums[initialIndex] = nums[startIndex];
        }
    }

    return initialIndex + 1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))