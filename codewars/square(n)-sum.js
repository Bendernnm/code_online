function squareSum(numbers) {
    return numbers.reduce((sum, number) => sum += number * number, 0);
}

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));