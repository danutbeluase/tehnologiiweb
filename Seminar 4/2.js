const persoana = { nume: "Belu Daniel" };

let greeting = function(a, b) {
    return `${a} ${this.nume}, ${b}`;
}

console.log(greeting.apply(persoana, ["Salut", "Ce faci ?"]));