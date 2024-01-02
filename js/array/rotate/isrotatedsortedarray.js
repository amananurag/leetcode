function isRotatedSortedArray(nums) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] > nums[i+1]){
            count++;
        }
    }
    if(nums[nums.length-1] > nums[0]){
        count++;
    }
    return count <=1;
         
}
const rotatedSortedArray1 = [4, 5, 6, 7, 1, 2, 3];
const rotatedSortedArray2 = [1, 2, 3, 4, 5, 6, 7];
console.log(isRotatedSortedArray(rotatedSortedArray1))
console.log(isRotatedSortedArray(rotatedSortedArray2))
console.log(isRotatedSortedArray([2,1,3,4]))
console.log(isRotatedSortedArray([2,1]))
console.log(isRotatedSortedArray([1,1.1]))