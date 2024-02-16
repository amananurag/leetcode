function permute(nums){
    let result = [];
    function backtrack(combination){
        if(combination.length===nums.length){
            result.push([...combination]);
        }
        for(let i=0;i<nums.length;i++){
            if(!combination.includes(nums[i])){
                combination.push(nums[i])
                backtrack(combination);
                combination.pop()//backtrack;
            }
        }
    }
    backtrack([])
    return result;
}

console.log(permute([1,2,3]))