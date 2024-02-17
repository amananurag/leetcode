function permutate(nums){
    let result = [];
    function backtrack(combinations,used){
        if(combinations.length === nums.length){
            result.push([...combinations]);
            return ;
        }
        const uniqueSet = new Set();
        for(let i=0;i<nums.length;i++){
            if(used[i] || uniqueSet.has(nums[i])){
                continue;
            }
            used[i] = true;
            uniqueSet.add(nums[i])
            combinations.push(nums[i])
            backtrack(combinations,used);
            combinations.pop()
            used[i]=false;
        }
    }

    backtrack([],[])
    return result;
}
console.log(permutate([1,2,3]))