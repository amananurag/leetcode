function removeDuplicate(nums){
    const uniqueValues = new Set();
      return nums.filter((val) => {
       
        const stringifiedValue = JSON.stringify(val);
        if (!uniqueValues.has(stringifiedValue)) {
            uniqueValues.add(stringifiedValue);
            return true;
        }
         return false;
      })
   

}



