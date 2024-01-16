function findelementonlyonce(nums){
     let xor = 0;
     for(let i=0;i<nums.length;i++){
            xor = xor ^ nums[i];
     }
     return xor;
}

console.log(findelementonlyonce([1,2,1]))
console.log(findelementonlyonce([3,3,7,7,10,11,11]))