function jumpgames(nums){
 let max_reach = 0;
 for(let i = 0;i< nums.length;i++){
    if( i > max_reach){
        return false;
    }
    max_reach = Math.max(max_reach, nums[i]+i)
 }
 return true;
}

console.log(jumpgames([2,3,1,1,4]))
console.log(jumpgames([3,2,1,0,4]))