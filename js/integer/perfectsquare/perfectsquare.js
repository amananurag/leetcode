var isPerfectSquare = function(num) {
    if(num < 0 ) return false;
    let i=0;
    while(i * i <=num){
        if(i*i ===num){
            return true
        }
        i++;
    }
    return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));