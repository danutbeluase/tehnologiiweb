let nume = 1;
let obiect = {
    nume: 'Obiect nou',
    afiseazaNume: function() {
        console.info(this.nume);
    }   

};

obiect.culoare = 'albastru';

console.info(obiect);
obiect.afiseazaNume();
console.info(Object.keys(obiect));
console.info(Object.values(obiect));