function towerBuilder(n) {
    const result = [];

    for (let i = 0, count = 1, pads = (n - 1); i < n; i++, pads--, count = (i * 2) + 1) {
        result.push(''.padStart(count, '*').padStart(count + pads, ' ').padEnd(count + 2 * pads, ' '));
    }

    return result;
}

// var result = [];
// var starNumber = 1;
// for (i=1; i<=nFloors; i++) {
//   result[i-1] = " ".repeat(nFloors-i) + "*".repeat(starNumber) + " ".repeat(nFloors-i);
//   starNumber += 2;
// }
// return result;
// }