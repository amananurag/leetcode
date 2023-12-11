function removeDuplicate(arr){
    let newArr = [];
    newArr.push(arr[0]);
    for(let i = 0;i< arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}


console.log(removeDuplicate([1,2,2,3,4,5,5]))

function filteredDuplicate(arr){
    return arr.filter((item,index,x )=> {
       return  x.indexOf(item) === index
    })

}
console.log(filteredDuplicate([1,2,2,3,4,5,5]))