function array_diff(a, b) {
    if (!a.length) {
        return [];
    }

    return a.reduce((result, item) => {
        if (!b.includes(item)) {
            result.push(item);
        }

        return result;
    }, []);
}

function array_diff_very_fast(a, b) {
    const set = new Set(b);

    return a.filter(e => !set.has(e));
}

// function get_bit_mask(arr) {
//     let mask = 0
//     for (let i = 0; i < arr.length; i++) {
//         mask |= (1 << arr[i])
//     }
//     return mask
// }

// function array_diff_very_fast(a, b) {
//     const mask = get_bit_mask(b)
//     const res = []
//     for (let i = 0; i < a.length; i++) {
//         if ((mask & (1 << a[i])) === 0) {
//             res.push(a[i])
//         }
//     }
//     return res
// }
