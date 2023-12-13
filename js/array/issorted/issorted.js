function isSorted(arr){
    let isSorted = true;
    let initialPointer = arr[0];
    let order = arr[0] < arr[arr.length-1]? 1:0
    if(order){
        for(let i=1;i<arr.length;i++){
            if(initialPointer <= arr[i]){
                initialPointer = arr[i];
                continue;
            }else{
                isSorted = false;
                break;
            }
         }
    }else{
        for(let i=1;i<arr.length;i++){
            if(initialPointer >= arr[i]){
                initialPointer = arr[i];
                continue;
            }else{
                isSorted = false;
                break;
            }
         }
    }
    
    
     return isSorted;

}

console.log(isSorted([2,4,4,6,7,8,10]))
console.log(isSorted([4,2,8,6,7,9]))
console.log(isSorted([9,8,7,4,1]))
console.log(isSorted([9,8,-7,4,1]))
console.log(isSorted([2,2,2,2]))
console.log(isSorted([-9,-8,-7,-4,]))