/* Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44] */


var relativeSortArray = function(arr1, arr2) {
    let res = [];
    let y = [];
    for(let i=0;i<arr2.length;i++){
       res = res.concat(arr1.filter((x) => x===arr2[i]));
      }
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            y.push(arr1[i]);
        }
    }
    y.sort((a,b) => a-b);
    res = res.concat(y);
    
    return res;

};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))