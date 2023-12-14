function leftrotate(arr,k){
    let rotatetimes = k%arr.length;
    
    let temp = [];
   // to be rotated element stored in temp
   for(let i=0;i<rotatetimes;i++){
        temp.push(arr[i])
   }
  // rotate exiting elements to left 
  for(let i=0;i<arr.length-rotatetimes;i++){
    arr[i] = arr[i+rotatetimes];
  }
  // fill temp at last from arr.length-rotatetime
  let x =0;
   for(let j=arr.length-rotatetimes;j<arr.length;j++){
    arr[j] = temp[x];
    x++

   }
   return arr;
}

console.log(leftrotate([1,3,2,4,5,7,6,2],2))

// [1,3,2,4,5,7,6,2]

// [3,2,4,5,7,6,2,1]



