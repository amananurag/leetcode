/**
 * @param {number[]} nums
 * @return {number}
 */
var finduniqueelementinsortedarray = function(nums) {
   

    let initialIndex = 0;


    for (let startIndex = 1; startIndex < nums.length; startIndex++) {
        if (nums[startIndex] !== nums[initialIndex]) {
            initialIndex++;
            nums[initialIndex] = nums[startIndex];
         
        }
    }

    return initialIndex+1;
};

console.log(finduniqueelementinsortedarray([0,1,1,1,2,2,3,3,4]))