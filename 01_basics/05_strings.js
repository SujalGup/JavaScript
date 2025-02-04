const name = "Sujal"
const age = 22

//console.log(name + age +" years"); => we don't have to use this format

// String interpolation
let message = `Hello, my name is ${name} and I am ${age} years old.`;

// Another way to declare string object  
const gameName = new String('sujal-uc-com')

console.log(gameName.__proto__) // => we can check the prototype of the string object
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4) // it will assign n - 1 index to the new string 
const anotherString = gameName.slice(-5, 4) // do same as subsring but allow -ve indexing also

const newStringOne = "   Sujal  "
console.log(newStringOne.trim());

const url = "https://www.github.com/Sujal%20Gup"
console.log(url.replace('%20', '-'));
console.log(url.includes('gupta'));
console.log(gameName.split('-'));
