function runningsum(nums){
    let sum = 0;
    return nums.map( item =>  (sum += item) )
}

console.log(runningsum([1,2,3,4,5]))