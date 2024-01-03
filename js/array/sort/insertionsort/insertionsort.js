function insertionsort(nums){
    for(let i=1;i<nums.length;i++){
        let j=i;
        while(j>0 && nums[j-1] > nums[j]){
            let temp = nums[j-1];
            nums[j-1] = nums[j];
            nums[j] = temp;
            j--;
        }
    }
    return nums;
}

console.log(insertionsort([1,4,2,7,5,2]))