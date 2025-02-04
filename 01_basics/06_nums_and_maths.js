const score = 400

const balance = new Number(100)

console.log(balance.toString().length);
console.log(balance.toFixed(2)) // => 100.00

const otherNumber = 143.1232
console.log(otherNumber.toPrecision(5)); // It will print the number rounded to 5 significant digits from the left. => 143.12

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));


// ------------------- Maths ---------------------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

//
console.log(Math.random()); // Generates a number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random() * 10) + 1); // Generates a positive floating-point number between 1 and 11 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Generates a natural number between 1 and 10 (inclusive)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Generates a natural number between 'min' (inclusive) and 'max' (inclusive)
