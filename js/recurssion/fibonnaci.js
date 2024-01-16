
function printFibonacci(n) {
    let fib = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    for (let i = 0; i <= n; i++) {
        console.log(fib[i]);
    }
}
console.log(printFibonacci(5))