//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail = undefined;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Ironman", "Superman", "Spiderman"];
let myObj = {
    name: "Sujal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// dataTypes 
console.log(typeof score);              // => number
console.log(typeof scoreValue);         // => number
console.log(typeof isLoggedIn);         // => boolean 
console.log(typeof outsideTemp);        // => object 
console.log(typeof userEmail);          // => undefined
console.log(typeof id);                 // => symbol
console.log(typeof anotherId);          // => symbol
console.log(typeof bigNumber);          // => bigint
console.log(typeof heros);              // => object
console.log(typeof myObj);              // => object
console.log(typeof myFunction);         // => function

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ---------------------------- Memory ---------------

// Stack memory => When we allocate stack memory, it provides a copy of the data. All primitive data types use stack memory.
// Heap memory =>  When we allocate heap memory, it provides a referance of the data. All non-primitive data types use heap memory.

// Stack example

// When we print both values, userName will display "SujalGupta" and newUserName will display "Sujal". This happens because when we assign the value, we are providing a copy of the original value.

let userName = "SujalGupta";
let newUserName = userName;
newUserName = "Sujal";

// Heap example

// when we are print both the values, then both object's emill will be "user@google,.com". this happen because when we are assign the value, we are providing the reference of the original value. 

let userOne = {
    email: "user@gmail.com",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "user@google.com"