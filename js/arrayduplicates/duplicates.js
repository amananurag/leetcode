/* function duplicate1(arr){

let s = new Set(arr);
let newArr = [...s]
console.log(newArr)
 return newArr.length != arr.length?true:false
}
console.log(duplicate1([1,2,4,5])) */

/* function duplicate1(arr){
    arr.sort((a,b) => a-b);
    for(let i =0; i< arr.length;i++){
        if(arr[i] === arr[i+1])
        return true
    }
    return false
}
console.log(duplicate1([1,2,4,2,5]))  */

/* function duplicate1(arr){
 
    for(let i =0; i< arr.length;i++){
        for(let j =i+1; j< arr.length;j++){
            if(arr[j] === arr[i]){
                return true
            }
        }
    }
        return false
    }
console.log(duplicate1([1,2,4,2,5]))  */
/* function duplicate(arr){
    const obj = {};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            return true;
        }else{
            obj[arr[i]]=arr[i]
            console.log(obj)
        }
    }
}

console.log(duplicate([1,2,4,2,5])) */

/* function duplicate(arr){
    const set = new Set();
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i])){
            return true;
        }else{
           set.add(arr[i])
        }
    }
    return false
}

console.log(duplicate([1,4,2,5])) */

/* function duplicate(arr){
    const map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            return true;
        }else{
            map.set(arr[i],arr[i])
        }
    }
    return false
}

console.log(duplicate([1,4,2,2,5])) */