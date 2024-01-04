function mergesort(nums, low, high){
    if(low >= high){
        return;
      }
  let mid = Math.floor((low + high) / 2);
  
  mergesort(nums, low, mid);
  mergesort(nums, mid + 1, high);
  return  merge(nums, low, mid, high);

}

function merge(nums, low, mid, high){
    let temp = [];
 
    let left = low;
    let right = mid+1;
    
    while(left <= mid && right <= high){
        if(nums[left] <= nums[right]){
        temp.push(nums[left]);
        left++;
        }else{
        temp.push(nums[right]);
        right++;
        }
    }
    while(left <= mid){
        temp.push(nums[left++]);
        left++;
    }
    while(right <= high){
        temp.push(nums[right]);
        right++;
    }
  
    for(let i = low; i <= high; i++){
        nums[i] = temp[i - low];
    }
    return nums;
    }


console.log(mergesort([1,3,2,4,5,6,7,8,9,10], 0, 9))

