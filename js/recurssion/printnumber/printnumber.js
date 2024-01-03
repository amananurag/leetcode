// print 1-5
function print(n){
   if (n ===0 ) return ;
   
    print(n-1);
    console.log(n);
}

console.log(print(5))
// print 5-1
function print1(n){
    if (n ===0 ) return ;
    console.log(n);
     print(n-1);
     
 }
 
 console.log(print1(5))