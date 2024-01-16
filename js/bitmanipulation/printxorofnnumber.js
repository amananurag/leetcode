function printxor(n) {
    if (n % 4 === 0) {
        return n;
    }
    if (n % 4 === 1) {
        return 1;
    }
    if (n % 4 === 2) {
        return n + 1;
    }
    if (n % 4 === 3) {
        return 0;
    }
}

console.log(printxor(5));
console.log(printxor(13));
console.log(printxor(10));
console.log(printxor(11));