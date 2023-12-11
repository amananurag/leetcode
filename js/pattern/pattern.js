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
        for(let j=1;j<n-i+1;j++){
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
            process.stdout.write(j.toString()+ ' ');
          
        }
        console.log('\n');
    }

 
}
console.log(pattern5(3))