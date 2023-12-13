function leftrotate(arr,k){
    let rotatetimes = k%arr.length;
    
    let temp = [];
  if(arr.length ==0 || arr.length == 1) return arr;
   for(let i=0;i<rotatetimes;i++){
        temp.push(arr[i])
   }
  
  for(let i=0;i<arr.length-rotatetimes;i++){
    arr[i] = arr[i+rotatetimes];
  }
  
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