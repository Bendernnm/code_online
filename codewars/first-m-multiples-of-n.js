function multiples(m, n) {
    const result = [];

    for (; m > 0; m--) {
        result.unshift(m * n);
    }

    return result;
}

console.log(multiples(3, 5));


// return Array.from(Array(m), (_v, i) => (i + 1) * n);
// const multiples = (m, n) => Array.from({ length: m }).map((_, i) => ++i * n);