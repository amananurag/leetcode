/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=> a-b);
    let i =0;
    let j = nums.length-1; 
    let maxSum = 0;
    while(i<=j){
        let pairSum = nums[i]+ nums[j];
        maxSum = Math.max(maxSum, pairSum);
        i++;
        j--;
    }
    return maxSum;

};

console.log(minPairSum([3,5,2,3]))
console.log(minPairSum([3,5,4,2,4,6]))