function factorial(number) {
    let result = 1;

    for (; number > 1; number--) {
        result *= number;
    }

    return result;
}

function strong(n) {
    return n === n.toString().split('').reduce((sum, val) => sum + factorial(val), 0) ? "STRONG!!!!" : "Not Strong !!";
}

function strong_(n) {

    let fact = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]

    return n == n
        .toString()
        .split('')
        .map(Number)
        .reduce((a, c) => a + fact[c], 0) ? 'STRONG!!!!' : 'Not Strong !!'

}

console.log(strong(40585));
console.log(strong_(40585));

console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(5));


 



// for (let i = 1;; i++) {
//     if (i % 100 === 0) {
//         console.log(`Progress: ${i}`);
//     }

//     if (strong(i) !== strong_(i)) {
//         return console.log(`WRONG: ${i}`);
//     }
// }