
    var shuffle = function(nums, n) {
        let temp =[];
        while(nums.length){
            temp.push(nums.splice(0,n))
        }
       let temp1 = temp[0];
       let temp2 = temp[1];
         let result = [];
        for(let i=0;i<n;i++){
            result.push(temp1[i]);
            result.push(temp2[i]);  

    };
    return result;
}


    console.log(shuffle([2,5,1,3,4,7],3))