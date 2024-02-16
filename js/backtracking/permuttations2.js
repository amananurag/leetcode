function permute(nums){
    let result = [];
    function backtrack(combination,unique){
        if(combination.length===nums.length){
            result.push([...combination]);
        }
        const uniqueSet = new Set();
        for(let i=0;i<nums.length;i++){
            if(unique[i] || uniqueSet.has(nums[i])){
                continue;
            }
            uniqueSet.add(nums[i]);
            unique[i] = true;
            combination.push(nums[i])
            backtrack(combination,unique);
            unique[i]=false
            combination.pop()//backtrack;
            
        }
    }
    backtrack([],[])
    return result;
}

console.log(permute([1,2,3]))