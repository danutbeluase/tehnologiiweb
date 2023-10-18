function divizibile(x, n) {
    return x.filter(e => e % n == 0).reduce((acc, el) => acc += el, 0);
}

console.info(divizibile([2, 4, 5], 2));