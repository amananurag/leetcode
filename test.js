var findMedianSortedArrays = function(nums1, nums2) {
    let res = [...nums1,...nums2].sort((a,b) => {
        return a-b});
        console.log(res)
        let n = res.length;
        if (n%2 !=0) {
            let middle = Math.floor(res.length/2);
            let median = res[middle];
            return median;
        }
        if(n%2==0){
let middle = res.length/2;
let next = middle;
let median =  (res[middle-1]+res[next])/2;
return median;
};

        } 

        console.log(findMedianSortedArrays([1,3],[2])) //2
        console.log(findMedianSortedArrays([1,2],[3,4])) //2.5