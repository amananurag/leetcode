/* Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1] */

var validMountainArray = function(arr) {
    if(arr.length <3) return false;
    if(arr[0]> arr[1]) return false;
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[i+1]){
           return false;
        }
        if(!count && arr[i] > arr[i+1]){
            count++;
        }else if (count && arr[i] < arr[i+1]){
                count++;
        }
        
       
    }
    return count ===1;
};
console.log(validMountainArray([0,3,2,1]))//true    
console.log(validMountainArray([3,5,5]))//false