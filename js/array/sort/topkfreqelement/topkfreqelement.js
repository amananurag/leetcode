// https://leetcode.com/problems/top-k-frequent-elements/submissions/1187530948/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  
    let obj ={};
    for(let i=0;i<nums.length;i++){
      obj[nums[i]] = ( obj[nums[i]] || 0)   + 1;
    }

    let res = Object.entries(obj);
    res.sort((a,b)=> b[1]-a[1]);
    let temp =[];
    for(let i=0;i<k;i++){
        
            temp.push(res[i])
      
        
    }
   return temp.map((item)=> parseInt(item[0]));
     
};

console.log(topKFrequent([1,1,1,2,2,3],2))//[1,2]
console.log(topKFrequent([1],1))//[1]