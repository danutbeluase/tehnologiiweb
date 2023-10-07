function f3(sir, litera) {
    var count = 0;
    for(let i = 0; i < sir.length; i++) {
        if(sir[i]  == litera) {
            count ++;
        }        
    }

    return count;
}

var c = f3('abcb', 'b');
console.log(c);