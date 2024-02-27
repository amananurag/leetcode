function balancedArray(nums){
    let prefixSum = 0;
    let suffixSum = nums.reduce((a,b)=>a+b);
    
    for(let i=0;i<nums.length;i++){
        suffixSum -= nums[i];

        if(suffixSum === prefixSum) return i;

        prefixSum += nums[i];
    }
    return -1;
}

console.log(balancedArray([1, 7, 3, 6, 5, 6]))//3
console.log(balancedArray([1, 2, 3, 4, 6]))//-1