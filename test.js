/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let obj ={};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++;
        }else{
            obj[nums[i]] =1;
        }
    }

    let res = Object.entries(obj);
    res.sort((a,b)=> b[1]-a[1]);
    let temp =[];
    for(let i=0;i<k;i++){
        
            temp.push(res[i])
      
        
    }
    for(let i=0;i<temp.length;i++){
        temp[i] = parseInt(temp[i][0]);
    }
     return temp;
};

console.log(topKFrequent([1,1,1,2,2,3],2))//[1,2]
console.log(topKFrequent([1],1))//[1]