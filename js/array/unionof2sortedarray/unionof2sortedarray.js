function calculateunion(arr1,arr2){
    let temp = [arr1[0]];
    for(let i=1;i<arr1.length;i++){
        if(!temp.includes(arr1[i])){
            temp.push(arr1[i])
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!temp.includes(arr2[i])){
            temp.push(arr2[i])
        }
    }
    return temp;
}


console.log(calculateunion([2,3,4,5,6,2,4],[1,5,6,7,8]));


function calculateunionset(arr1,arr2){
   let set = new Set(arr1);
    
    for(let i=0;i<arr2.length;i++){
       set.add(arr2[i])
    }
    return [...set];
}


console.log(calculateunionset([2,3,4,5,6,2,4],[1,5,6,7,8]));