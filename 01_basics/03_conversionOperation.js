let score = "99"
let alphaNumericScore = "99abc"

//console.log(typeof score);
//console.log(typeof(alphaNumericScore));

let valueInNumber = Number(score)
let valueInAlphaNumber = Number(alphaNumericScore)

//console.log(typeof valueInNumber); 
//console.log(valueInNumber); 

//console.log(typeof valueInAlphaNumber); // it will print dataType as number
//console.log(valueInAlphaNumber); // but its value will be NaN i.e. not a number

// dataTypes of all below examples will be number
// "99" => 99
// "99abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN
// "string" => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 0 => false; except 0 all number will be => true
// "" => false; "string" => true

let someNumber = 55

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof(stringNumber));


// -------------------- Operations --------------------

let value = 7
let negValue = -(value)
//console.log(negValue);

//console.log(2 + 2);
//console.log(2 - 2);
//console.log(2 * 2);
//console.log(2 ** 2);
//console.log(2 / 2);
//console.log(2 % 2);


let str1 = "Hello"
let str2 = " Sujal!"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // provide output as 122 is it convert all of them in to string according to convrsion rule
// console.log(1 + 2 + "2"); // provide output as 32 it will firstly add first of them and then convert and add them 






