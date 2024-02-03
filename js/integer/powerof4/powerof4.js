var isPowerOffour = function(num) {
    if(num < 1) return false;
    while(num > 1) {
        if(num % 4 !== 0) return false;
        num = num / 4;
    }
    return true;
}

console.log(isPowerOffour(16));
console.log(isPowerOffour(5));