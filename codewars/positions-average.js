function posAverage(s) {
    let allCount = 0;
    let sameCount = 0;
    const array = s.split(', ');
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            const substringLength = array[i].length;

            allCount += substringLength;

            for (let k = 0; k < substringLength; k++) {
                array[i][k] === array[j][k] && sameCount++;
            }
        }
    }

    return sameCount / allCount * 100;
}
