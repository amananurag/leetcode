var runningSum = function(nums) {
    if(nums.length === 1) return nums
    let sum =0;
    
    return nums.map((item) => (sum +=item))
    // for(let i = 1; i < nums.length; i++){
    //     nums[i] = nums[i - 1] + nums[i];
    //  }
    // return nums
};

console.log(runningSum([1,2,3,4]))