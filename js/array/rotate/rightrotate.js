function rightrotate(arr,k){
    let rotatetime = k%arr.length;
    let temp =[];
    for(let i=arr.length-rotatetime;i<arr.length;i++){
        temp.push(arr[i]);
    }
  // temp = [3]
   // i = 1 1<3
   // arr[1] = arr[1-1]
   //arr[1] = 1
   //[1,1,3]
     for(let j=rotatetime;j<arr.length;j++){
        arr[j] = arr[rotatetime-j];
        console.log(arr)
    }
  
    let x = 0;
    for(let i=0;i<arr.length-rotatetime;i++){
        arr[i] = temp[x]
        x++
    }
    return arr;
}

console.log(rightrotate([1,2,3],1))


