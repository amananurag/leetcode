// finding the indices of two numbers in an array that add up to a specific target
function twosum(arr, target) {
    
   
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        // Store the current number and its index in the Map
        
   
        const complement = target - arr[i];
         if(map.has(complement)){
            return [map.get(complement),i]
        } 
        map.set(arr[i],i)
     

      
    }

    throw new Error("No solution found");
};

console.log(twosum([1,2,3,4,5],9))


// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(numbers, target) {
    let map = new Map();
    for(let i=0;i<=numbers.length;i++){
       let compliment = target-numbers[i];
       if(map.has(compliment)){
           return [map.get(compliment)+1,i+1]
       }
        map.set(numbers[i],i);
    }
};

console.log(twoSum2([2,7,11,15],9))