console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

// we have to aviod null and undefined comparison
// here equality check and comparison work differently i.e. in comparison null treated as 0   
console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === i.e. Strict equality, it will check value along with its data type 

console.log("2" === 2);