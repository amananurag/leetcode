function calculate_median(nums1,nums2){
    let res = [...nums1,...nums2].sort((a,b) => {
        return a-b});
       
        let n = res.length;
        if (n%2 !=0) {
            let middle = Math.floor(res.length/2);
         
            return res[middle];
          
        }
        if(n%2==0){
let middle = res.length/2;

return  (res[middle-1]+res[middle])/2;
}
}


console.log(calculate_median([1,3],[2])) //2    
console.log(calculate_median([1,2],[3,4])) //2.5
console.log(calculate_median([0,0],[0,0])) //0
console.log(calculate_median([],[1])) //1