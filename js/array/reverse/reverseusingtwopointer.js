//https://leetcode.com/problems/reverse-string/submissions/1177834483/
function reverseArray(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
     return arr;
  }
  
  console.log(reverseArray([1,4,2,7,5,2]))

  