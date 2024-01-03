function selectionSort(nums){
    for(let i=0;i<nums.length;i++){
        let min = i;
        for(let j=i+1;j<nums.length;j++){
            if(nums[j] < nums[min]){
               min =j;
            }
        }
        let temp = nums[min];
        nums[min] = nums[i];
        nums[i] = temp;
    }
    return nums;

}

console.log(selectionSort([12,46,24,2,5]))