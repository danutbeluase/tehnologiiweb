function intercalare(arr1, arr2) {
    let r = [];

    if(arr1.length === arr2.length) {
        for(let i = 0; i < arr1.length; i++ ) {
            r.push(arr1[i]);
            r.push(arr2[i]);
        }
    }

    return r;
}

console.info(intercalare([1, 3, 5], [2, 4, 6]));
