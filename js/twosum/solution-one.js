// finding the indices of two numbers in an array that add up to a specific target
function twosum(arr, target) {
    
    const obj = {}; // Create a Map to store numbers and their indices
    // const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        // Store the current number and its index in the Map
        //map.set(arr[i],i)
        obj[arr[i]]=i;
        const complement = target - arr[i];
       /*  if(map.has(complement)){
            return [map.get(complement),i]
        } */
        // Check if the complement exists in the Map
        if (obj[complement]) {
           
            return [obj[complement], i];
        }

      
    }

    throw new Error("No solution found");
};

console.log(twosum([1,2,3,4,5],9))

