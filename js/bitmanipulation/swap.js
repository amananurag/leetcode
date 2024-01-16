function swap(n, k) {
    let a = n;
    let b = k;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}

console.log(swap(5, 2));
console.log(swap(13, 2));
