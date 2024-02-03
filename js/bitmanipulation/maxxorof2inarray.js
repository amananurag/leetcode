var findMaximumXOR = function(nums) {
    let maxxor = 0;
    for(let i=0;i<nums.length;i++){
        let result = nums[i];
        for(let j=i+1;j< nums.length;j++){
            let res  = result ^ nums[j];
            maxxor = Math.max(maxxor,res);
            
        }
    }
    return maxxor;
};

console.log(findMaximumXOR([3,10,5,25,2,8]));
console.log(findMaximumXOR([0]));
