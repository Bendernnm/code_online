function itIsHappyYear(year) {
    const yearStrArray = year.toString().split('');

    return yearStrArray.length === (new Set(yearStrArray)).size;
}

function nextHappyYear(year) {
    for (;;) {
        if (itIsHappyYear(++year)) {
            return year;
        }
    }
}

console.log(nextHappyYear(2018));