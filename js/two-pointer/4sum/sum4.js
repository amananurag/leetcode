function sum4(nums,target){
    nums.sort((a,b)=> a-b);
    let res = [];
    for(let i=0;i<nums.length-3;i++){
        for(let j=i+1;j<nums.length-2;j++){
            let low = j+1;
            let high = nums.length-1;
            while(low < high){
                let sum = nums[i]+ nums[j]+ nums[low]+ nums[high];
                if(sum == target){
                    res.push([ nums[i],nums[j], nums[low], nums[high]]);

                    while(nums[low] === nums[low+1]) low++;
                    while(nums[high] === nums[high-1]) high--;
                    low++;
                    high--;
                }else if(sum < target) {
                    low++
                } else {
                    high--
                }
            }
            while(nums[j] === nums[j+1]) j++;
        }
        while(nums[i] === nums[i+1]) i++;
    }
    return res;
}

console.log(sum4([1,0,-1,0,-2,2] ,0))
console.log(sum4([2,2,2,2,2],8))

