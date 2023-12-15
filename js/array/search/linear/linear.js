function linearSearchfirstoccurrence(arr,k){
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== k){
            return i
        }
    }

}

function linearSearchlastoccurrence(arr,k){
    for(let i=arr.length;i > 0;i--){
        if(arr[i]=== k){
            return i
        }
    }
     return -1;
}

console.log(linearSearchfirstoccurrence([2,3,4,5,6,2,4],4));

console.log(linearSearchlastoccurrence([2,3,4,5,6,2,4],4));
