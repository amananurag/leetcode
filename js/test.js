

function max(arr){
    let count = 0;
    let maxlength = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            count++;
            maxlength = Math.max(maxlength,count);
        }
    }
    return maxlength;
}