// given 2 integer array return true if equal else false

function checkEquality(nums, target){
     return nums.sort((a,b)=>a-b).join('') = target.sort((a,b)=> a-b).join('')
}