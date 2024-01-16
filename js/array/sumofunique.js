var sumOfUnique = function(nums) {
    let obj = {};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++;
        }else{
            obj[nums[i]] = 1;
        }
    }
    let temp = [];
    for(key in obj){
        if(obj[key] ==1){
            temp.push(parseInt(key));
        }
    }
    console.log(temp)
    let sum = 0;
    for(let i=0;i<temp.length;i++){
        sum = sum+temp[i]
    }
    return sum;
};

console.log(sumOfUnique([1,2,3,2]))
