

/* Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

 

Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
Example 2:

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order. */

var frequencySort = function(nums) {
    let obj = {};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++;
        }else{
            obj[nums[i]] = 1;
        }
    }
    let arr = Object.entries(obj);

    arr.sort((a,b)=>{
        if(a[1] === b[1]){
            return b[0] - a[0]; // Sort in decreasing order if frequencies are the same
        }
        return a[1] - b[1];
    });
    repeatedKeysArray =[];
    arr.forEach(([key, value]) => {
        const frequency = value; // Use value as the frequency
        repeatedKeysArray.push(...Array(frequency).fill(key));
      });
    return repeatedKeysArray.map((item)=> parseInt(item)) ;
 
};


console.log(frequencySort([2,3,1,3,2])) // [1,3,3,2,2]
console.log(frequencySort([1,1,2,2,2,3])) //[3,1,1,2,2,2]
