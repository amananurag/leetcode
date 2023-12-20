function findlargest(arr){
  arr.sort((a,b)=> a-b);
  return arr[arr.length-1];

}
function findlargest1(arr){
    let largest = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i] > largest) largest = arr[i];
    }
    return largest;
  
  }
console.log(findlargest1([2,1,4,77,55,88,24]))

function secondlargest(arr){
    arr.sort((a,b)=> a-b);
    index = arr.length-2;
    let  secondlargest = arr[index];
   function  calculateseconslargest(){
        secondlargest = arr[index];
    }
    
    if(secondlargest == arr[arr.length-1]){
    index = index-1;
    calculateseconslargest();
    }
    return secondlargest;
  
  }
console.log(secondlargest([2,1,4,77,55,88,24]))

function secondlargest1(arr){
    let largest = arr[0];
    let secondlargest = -1;
    for(let i=1;i<arr.length;i++){
        if(arr[i] > largest) largest = arr[i];
    }
    for(let i=1;i<arr.length;i++){
        if(arr[i] > secondlargest && arr[i]!== largest){
            secondlargest = arr[i];
        } 
    }
    return secondlargest;
    
  
  }
console.log(secondlargest1([2,1,4,55,88,24]))

function smalllargest2(arr){
    let largest = arr[0];
    let secondlargest = -1;
    let smallest = arr[0];
    let secondsmallest = -1;
    for(let i=1;i<arr.length;i++){
        if(arr[i] > largest) {
            secondlargest = largest;
            largest = arr[i];
           
    }
    if(arr[i] < smallest) {
        secondsmallest = smallest;
        smallest = arr[i];
       
}
}
    return [secondlargest, secondsmallest];
    
  
  }
console.log(smalllargest2([2,1,4,77,55,88,24]))


function oneanswerlargest(arr){
  let largest = arr[0];
  let secondlargest = -1;
  for(let i=1;i<arr.length;i++){
    if(arr[i] >= largest){
      secondlargest = largest;
      largest = arr[i]
    } else if(arr[i] >= secondlargest){
      secondlargest = arr[i];
    }
  }
  return [largest,secondlargest];

}



console.log(oneanswerlargest([2,1,4,77,55,88,24]))

function oneanswersmallest(arr){
  let smallest = arr[0];
  let secondsmallest = -1;
  for(let i=1;i<arr.length;i++){
    if(arr[i] <= smallest){
      secondsmallest = smallest;
      smallest = arr[i]
    } else if(arr[i] <= secondsmallest){
      secondsmallest = arr[i];
    }
  }
  return [smallest,secondsmallest];

}

console.log(oneanswersmallest([98,54,6,34,66,63,52,39]))
