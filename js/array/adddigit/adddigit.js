var addDigits = function(num) {
    if (num < 10) return num;
    if (isNaN(num) || num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
 };

 console.log(addDigits(38))