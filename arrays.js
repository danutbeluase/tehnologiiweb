const arr = [11, 12, 13, 14];

console.info(arr);

arr.push(15);

console.info(arr);

console.info(arr.pop());
console.info(arr);

for(let i = 0; i < arr.length; i++) {
    console.info(arr[i]);
}

for(let el of arr) {
    console.info(el);
}

for(let el in arr) {
    console.info(el);
}

arr.forEach(v => console.info(v));

console.info(arr.filter(el => el > 11));