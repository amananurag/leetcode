/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> a-b);
    let result = [];
    for(let i=0;i<nums.length-2;i++){
        let low = i+1;
        let high = nums.length-1;
        while(low < high){
            let sum = nums[i] + nums[low]+nums[high];
            if(sum === 0){
                result.push([nums[i],nums[low],nums[high]])
                while(nums[low] === nums[low+1]) low++;
                 while(nums[high] === nums[high-1]) high--;
                low++;
                high--;
            }else if(sum < 0){
                low++
            }else{
                high--;
            } 
        }
        while(nums[i]=== nums[i+1]) i++;
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
