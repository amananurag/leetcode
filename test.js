function relativeSort(arr1,arr2){

    let res = [];
    for(let i=0;i<arr2.length;i++){
       res = res.concat(arr1.filter((item) => item === arr2[i]))
    }
   let y = [];
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            y.push(arr1[i]);
            y.sort((a,b) => a-b);
        }
    }
    res = res.concat(y);
    return res;
 
}


console.log(relativeSort([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))


