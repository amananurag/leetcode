/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    while(start <=end){
        let mid = Math.floor((start+end)/2);
        const num = (nums[mid] < nums[0]) == (target < nums[0])? nums[mid]:
         (target < nums[0])? -Infinity: Infinity;
         if(num < target){
             start = mid+1
         }else if(num > target){
             end = mid-1
         }else{
             return mid;
         }
    }
    return -1;
 };

 console.log(search([4,5,6,7,0,1,2],0))//4
 console.log(search([4,5,6,7,0,1,2],3))//-1