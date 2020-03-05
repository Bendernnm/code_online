var uniqueInOrder = function (iterable) {
    if (!iterable.length) {
        return [];
    }

    let preivous = iterable[0];
    const result = [preivous];

    for (let i = 1, length = iterable.length; i < length; i++) {
        if (iterable[i] !== preivous) {
            result.push(iterable[i]);
            preivous = iterable[i];
        }
    }

    return result;
}