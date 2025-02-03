
// https://leetcode.com/problems/3sum-closest/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=> a-b);
    let closestSum = Infinity;
    for(let i=0;i<nums.length-2;i++){
        let low = i+1;
        let high = nums.length-1;
        while(low < high){
            let sum = nums[i]+nums[low]+nums[high];
            let diff = Math.abs(target - sum);
           // mindiff = Math.min(mindiff, diff);
            if (diff < Math.abs(target - closestSum)) {
                closestSum = sum;
            }
            if(sum === target){
            while(nums[low]===nums[low+1]) low++;
            while(nums[high]===nums[high-1]) high--;
            low++;
            high--;
            return sum;
            }
           
            if (sum < target) {
                low++;
            } else if (sum > target) {
                high--;
            }
            
           
        }
        while(nums[i]===nums[i+1])i++;
    }
    return closestSum;
};


console.log(threeSumClosest([-1,2,1,-4],1));
console.log(threeSumClosest([0,0,0],1));