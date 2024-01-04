/* You are given a 0-indexed array nums of length n containing distinct positive integers. Return the minimum number of right shifts required to sort nums and -1 if this is not possible.

A right shift is defined as shifting the element at index i to index (i + 1) % n, for all indices.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 2
Explanation: 
After the first right shift, nums = [2,3,4,5,1].
After the second right shift, nums = [1,2,3,4,5].
Now nums is sorted; therefore the answer is 2.
Example 2:

Input: nums = [1,3,5]
Output: 0
Explanation: nums is already sorted therefore, the answer is 0. */

// chek for isrotatedsortedarray . if it is then find the index of min element and return n-minindex, if minindex is 0 then return 0
var minimumRightShifts = function(nums) {
    let count = 0;
    let min = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i] < min){
            min = nums[i];
        }
        if(nums[i] > nums[i+1]){
            count++
        }
    }
    if(nums[nums.length-1] > nums[0]){
        count++;
    }

    if( count <=1){
        let minIndex = nums.indexOf(min);
        if(minIndex == 0) return minIndex;
        let n = nums.length;
        return n-minIndex;

        
    }else{
        return -1;
    }
};

console.log(minimumRightShifts([3,4,5,1,2]))
console.log(minimumRightShifts([2,1,3,4]))
