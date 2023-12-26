var relativeSortArray = function(arr1, arr2) {
    let res = [];
    let y = [];
    for(let i=0;i<arr2.length;i++){
       let x = arr1.filter((x) => x===arr2[i]);
      
         res = [...res,...x];
    }
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            y.push(arr1[i]);
        }
    }
    y.sort((a,b) => a-b);
    res = [...res,...y];
    
    return res;

};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))