function bubblesort(nums){
    for(let i=nums.length-1;i>=0;i--){
        for(let j=0;j<i;j++){
            if(nums[j] > nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    return nums;
}


console.log(bubblesort([10,9,8,7,6,12,4,3,2,1]));