const Om = {
    NumeComplet: function() {
        return `${this.Nume} ${this.Prenume}`;
    }
};

console.info(Om.NumeComplet.call({Nume: "Belu", Prenume: "Daniel-Florin"}));