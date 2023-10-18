function calcul(factor, numere) {
    return numere.reduce((total, n) => total += n, 0) * factor;
}

console.info(calcul(3, [1, 2, 3]));