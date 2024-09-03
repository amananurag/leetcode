function longestsubarraywithsumk(arr,k){
    let maxlen = 0;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
   
        for(let j=i;j<arr.length;j++){
           sum = sum+arr[j];
           if(sum===k){
                maxlen = Math.max(maxlen,j-i+1);
           }
        }
    }
    return maxlen;
}

console.log(longestsubarraywithsumk([ 10, 5, 2, 7, 1, 9 ],15))