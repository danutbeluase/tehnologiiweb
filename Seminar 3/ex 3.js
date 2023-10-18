const students = [ { name: "Alice", scores: [90, 85, 92] }, { name: "Bob", scores: [75, 80, 85] }, { name: "Charlie", scores: [90, 95, 85] }, { name: "David", scores: [100, 100, 100] } ];

//var a = students.reduce((acc, el.scores) => acc += el.scores, 0);

//var a = students[0].scores.reduce((acc, el) => acc += el, 0) / students[0].scores.length;

var x = students.map(e => e.scores.reduce((acc, el) => acc += el, 0) / e.scores.length).filter(n => n > 90);

console.info(students);
console.info(x);