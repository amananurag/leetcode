
function movezero(arr){
let temp =[];
for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        temp.push(arr[i]);
    }
}
let nonzerosize = temp.length;
for(let i=0;i<nonzerosize;i++){
    arr[i] = temp[i];
}
for(let i=nonzerosize;i<arr.length;i++){
    arr[i] = 0;
}
return arr;
}
console.log(movezero([1,3,0,5,0,2,0]))
