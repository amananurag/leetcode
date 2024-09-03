//https://leetcode.com/problems/k-items-with-the-maximum-sum/submissions/1183731325/

var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if(numOnes>k){
          return k
      }else if(numOnes+numZeros>k){
          return numOnes
      }else return numOnes-(k-(numOnes+numZeros))
  };

  console.log(kItemsWithMaximumSum(1,2,3,4))//0
  console.log(kItemsWithMaximumSum(1,2,3,3)) //1