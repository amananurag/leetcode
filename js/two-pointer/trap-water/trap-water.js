function  trapwater(nums){
    let i = 0;
    let j = nums.length-1;
    let left_max  = nums[i];
    let right_max = nums[j];
    let sum = 0;
    while( i < j){
        if(left_max <= right_max){
            
            sum +=left_max - nums[i];
            i++;
            left_max = Math.max(left_max, nums[i]);
        } else {
            
            sum +=right_max - nums[j];
            j--;
            right_max = Math.max(right_max, nums[j])
        }
    }
    return sum;
}

console.log(trapwater([0,1,0,2,1,0,1,3,2,1,2,1]))