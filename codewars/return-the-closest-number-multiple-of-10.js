const closestMultiple10 = (num) => {
    const lastNumber = num % 10;

    if (lastNumber === 0) {
        return num;
    }

    return num + (lastNumber >= 5 ? 10 - lastNumber : -lastNumber);
};

// Math.round(num / 10) * 10;
