function printSum(n){
  let sum = 0;
  if(n === 0) return sum;
  sum += n + printSum(n-1);
  return sum;
}

console.log(printSum(5))