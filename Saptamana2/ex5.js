function medie(arr) {
    var r = 0;

    for(let i = 0; i < arr.length; i++) {
        r = r + arr[i];
    }

    return r / arr.length;
}

console.info(medie([1,2,3]));
