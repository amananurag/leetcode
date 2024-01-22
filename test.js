function selectionsort(nums){
    for(let i=0;i<nums.length;i++){
        let min = i;
        for(let j=0;j<nums.length;j++){
            if(nums[j] < nums[min]){
                min = j;
            }
        }
        let temp = nums[min];
        nums[min] = nums[i];
        nums[i] = temp;
    }
    return nums;
}