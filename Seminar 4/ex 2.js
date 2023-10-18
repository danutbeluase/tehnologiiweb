class Numere {
    constructor(initial) {
        this.initial = initial;
    }
    
    next() {
        this.initial++;
        return this.initial;
    }
}

let c = 0;
var n = new Numere(0);
while(c < 5) {
    console.info(n.next());
    c++;
}