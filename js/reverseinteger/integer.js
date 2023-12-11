/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    // max +ve value for 32 bit integer
    let bit = Math.pow(2,31) - 1   
 
     let rev= x.toString().split('').reverse().join('') 
  
     let result = parseInt(rev)
    // check if result is within the 32 bit max and min range
     if(result > (bit) || result < -(bit)){
         return 0
     }
 
     if(x<0){
         return -result
     }else{
         return result
     }
 };
 console.log(reverse(123))