// Given an integer N , print following pattern
// * * *
// * * *
// * * *

function pattern0(n){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            process.stdout.write('* ');
          
        }
        console.log('\n');
    }

 
}
console.log(pattern0(5))
/* Input Format: N = 3
Result: 
* 
* * 
* * * 
*/

function pattern1(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write('* ');
          
        }
        console.log('\n');
    }

 
}
console.log(pattern1(5))


/* 
Input Format: N = 3
Result: 
1
1 2 
1 2 3 */

function pattern2(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(j.toString()+ ' ');
          
        }
        console.log('\n');
    }

 
}
console.log(pattern2(3))

/* Input Format: N = 6
Result:
1
2 2
3 3 3
 */
function pattern3(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(i.toString()+ ' ');
          
        }
        console.log('\n');
    }

 
}
console.log(pattern3(3))
/* 
Input Format: N = 3
Result: 
* * *
* * 
* 
*/

function pattern4(n){
    for(let i=0;i<n;i++){
        for(let j=1;j<=n-i+1;j++){
            process.stdout.write('* ');
          
        }
        console.log('\n');
    }

 
}
console.log(pattern4(3))

/* Input Format: N = 3
Result: 
1 2 3
1 2
1
 */

/* 1 = 3
2 = 2
3 = 1

3-1+1
 */

function pattern5(n){
    for(let i=0;i<n;i++){
        for(let j=1;j<n-i+1;j++){
            process.stdout.write(i.toString()+ ' ');
          
        }
        console.log('\n');
    }

 
}
console.log(pattern5(3))

/* Input Format: N = 3
Result: 
  *  
 *** 
*****   
*/
// 1  = 2,1,2
// 2 = 1,3,1
//3 = 0,5,0
// space = n-i
// star = 2i-1
// space, star , space

function pattern6(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i;j++){
            process.stdout.write(' ');
          }
          for(let j=1;j<=2*i-1;j++){
            process.stdout.write('*');
          }
          for(let j=1;j<=n-i;j++){
            process.stdout.write(' ');
          }
        console.log('\n');
    }

 
}
console.log(pattern6(3))

/* Input Format: N = 3
Result: 
*****  
 ***
  *    
  * 
1 = 0,5,0
2 = 1,3,1
3= 2,1,2

space = i-1
star = n-2i+4

n = 2i-4
n = 2(i-2)
2n = i-2
2n-i+2
 
 */

function pattern7(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i-1;j++){
            process.stdout.write(' ');
          }
          for(let j=1;j<=n-(2*i)+4;j++){
            process.stdout.write('*');
          }
          for(let j=1;j<=i-1;j++){
            process.stdout.write(' ');
          }
        console.log('\n');
    }

 
}
console.log(pattern7(3))

/* Input Format: N = 3
Result: 
  *  
 ***
***** 
*****  
 ***
  *    */

 function x(){
    pattern6();
    pattern7();
 }
x()


/* Input Format: N = 3
Result: 
  *  
  **
  ***  
  **
  *   */

  function pattern8(n){
    for(let i=1;i<=2*n-1;i++){
        let star = i;
        if(i > n) star = 2*n-i
        for(let j=1;j<=star;j++){
            process.stdout.write('*');
          }
          
        console.log('\n');
    }

 
}
console.log(pattern8(3))
/* 

Input Format: N = 3
Result: 
1    1
12  21
123321 */
// numbers => 1 = 1 , 4, 1 ;2=> 2 ,2,2 ; 3= 3,0,3
// space => 1 = 4
// number => 1=1
function pattern9(n){
    let space = 2 * (n-1)
    for(let i=1;i<=n;i++){

        for(let j=1;j<=i;j++){
            process.stdout.write(j.toString());
          }
          for(let j=1;j<=space;j++){
            process.stdout.write(' ');
          }
          
          for(let j=i;j>=1;j--){
            process.stdout.write(j.toString());
          }
          
        console.log('\n');
        space = space-2;
    }

 
}
console.log(pattern9(3))

/* Input Format: N = 3
Result: 
1
2 3
4 5 6 */

function pattern10(n){
    let index = 0;
    let jindex = 0;
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        jindex= j;
        process.stdout.write((j+index).toString()+ ' ');
    }
    console.log('\n');
    index +=jindex;
  }

}

pattern10(5);

/* Input Format: N = 3
Result: 
A
A B
A B C */

function pattern11(n){
  for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
       process.stdout.write(String.fromCharCode('A'.charCodeAt(0)+j-1+ ' '))
    }
    console.log('\n');
  }

}
pattern11(5);


 

