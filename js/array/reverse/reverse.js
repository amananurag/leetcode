function reverse(arr){
    let temp = [];
 for(let i=arr.length-1;i>=0;i--){
    temp.push(arr[i])
 }
 return temp;
}

console.log(reverse([1,4,2,7,5,2]))