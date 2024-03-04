var findMaximumXOR = function(nums) {
    let maxxor = 0;
    for(let i=0;i<nums.length;i++){
       
        for(let j=i+1;j< nums.length;j++){
          
            maxxor = Math.max(maxxor,nums[i]^nums[j]);
            
        }
    }
    return maxxor;
};

console.log(findMaximumXOR([3,10,5,25,2,8]));// 28
console.log(findMaximumXOR([0]));
