function removeDuplicate(arr){
    let initialIndex = 0;
    for(let startIndex = 1; startIndex < arr.length; startIndex++){
        if(arr[initialIndex]!==arr[startIndex]){
            initialIndex++;
            arr[initialIndex] = arr[startIndex]
        }
    }
    return arr;
}

console.log(removeDuplicate([1,2,2,4,4,6]))