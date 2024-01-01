function isRotatedSortedArray(nums) {
    let min = minindex2(nums)
   return  min > 0 && min < nums.length - 1 && nums[min - 1] > nums[min]
}
function minIndex(nums) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else if (nums[mid] < nums[right]) {
            right = mid
        } else {
            right--
        }
    }
    return left
}
function minindex2(nums){
  let min = nums[0];
  for(let i=0;i<nums.length;i++){
    if(nums[i] < min){
      min = nums[i];
    }
  }
  return nums.indexOf(min);
}
const rotatedSortedArray1 = [4, 5, 6, 7, 1, 2, 3];
const rotatedSortedArray2 = [1, 2, 3, 4, 5, 6, 7];
console.log(isRotatedSortedArray(rotatedSortedArray1))
console.log(isRotatedSortedArray(rotatedSortedArray2))