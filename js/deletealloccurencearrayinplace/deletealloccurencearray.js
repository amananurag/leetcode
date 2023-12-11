
// Given an integer array nums and an integer val, 
//remove all occurrences of val in nums in-place. The order of the elements may be changed. 
//Then return the number of elements in nums which are not equal to val.
function deleteOccurenceInArray(nums, val) {
    let filteredList = nums.filter(item =>     item!=val);
    for(let i = 0; i< filteredList.length;i++){
      nums[i] = filteredList[i]
    }
    return filteredList.length;
};

console.log(removeElement([3,2,2,3],3))

// approach-2 longer time compleity
function deleteOccurenceInArray(nums, val) {
    while(nums.includes(val)){
        nums.splice(nums.indexOf(val),1)
    }
   
    return nums.length;
};

console.log(removeElement([3,2,2,3],3))