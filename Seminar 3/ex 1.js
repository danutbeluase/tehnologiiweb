const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];
var adults = birthYears.filter(el => 2023 - el >= 18).map(x => 2023 - x);
console.log(adults);eminar 3