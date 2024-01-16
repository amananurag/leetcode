function* fibonacci() {
    let prev = 0;
    let curr = 1;

    while (true) {
        yield prev;
        [prev, curr] = [curr, prev + curr];
    }
}
console.log(fibonacci().next().value)
console.log(fibonacci().next().value)