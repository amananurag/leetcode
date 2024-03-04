// https://leetcode.com/problems/single-number-ii/description/

function singleNumber(nums) {
  let result = 0;
  for(let k=0;k<32;k++){
    let temp = ( 1 << k);
    let countOne = 0;
    for(let i=0;i<nums.length;i++){
        if((nums[i] & temp) !== 0){
            countOne++;
        }
    }
    if(countOne % 3 !== 0){
        result = result | temp;
    }
   
  }
  return result;
}

console.log(singleNumber([2,2,3,2])); // 3
console.log(singleNumber([0,1,0,1,0,1,99])); // 99
console.log(singleNumber([1,1,1,3])); // 3
console.log(singleNumber([1,1,1,2])); // 2