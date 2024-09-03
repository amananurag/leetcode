function ugly(n){
    while( n !==1 ){
        if(n % 2 === 0){
            n = n/2;
        }else if( n % 3 === 0){
             n = n/3;
        }else if( n % 5 === 0){
            n = n/5;
        }else {
            return false;
        }
    }
    return true;
}

// Example usage
const number = 30; // You can change this value to test different numbers
const result = ugly(number);
console.log(`Is ${number} an ugly number? ${result}`);