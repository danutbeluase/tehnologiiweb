function diferente(s1, s2) {
    let rezultat = 0;

    if(s1.length !== s2.length) {
        rezultat = -1;
    }
    else {
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) {
            rezultat ++;
        }
    }
    }
    return rezultat;
}

console.info(diferente('ba', 'aa'));

function difChars(str1, str2) {
    if(str1.length !== str2.length) {
        return - 1;
    }

    let counter = 0;

    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) {
            counter ++;
        }
    }

    return counter;
}

console.info(difChars('abc', 'ade'));