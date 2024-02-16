//https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let count = 0
    for(let i=1; i<nums.length; i++){
        if(nums[i] <= nums[i-1]){
            count++;
            if(i>1 && nums[i] <= nums[i-2]) nums[i] = nums[i-1]
        }
    }
    return count <= 1

    
};

console.log(canBeIncreasing([1,2,10,5,7])) //true
console.log(canBeIncreasing([2,3,1,2])) //false
