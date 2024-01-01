function isSorted(arr){
     let isSorted = true;
     let order = arr[0]< arr[length-1]? 1:0;
     let initialPointer = arr[0];
     if(order){

          for(let i=1;i<arr.length;i++){
               if(initialPointer <=arr[i]){
                    initialPointer = arr[i];
                    continue;
          }else{
               isSorted = false;
               break;
          }
     }
}else{
     for(let i=1;i<arr.length;i++){
          if(initialPointer >=arr[i]){
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