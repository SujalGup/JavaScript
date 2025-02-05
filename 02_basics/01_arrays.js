// When performing a copy operation in array, a shallow copy is made.
// In a shallow copy, the reference of the original array is used.
// In contrast, a deep copy creates an entirely new object based on the given array.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Thor", "Iron Man"]

const myArrTwo = new Array(1, 2, 3, 4)
let getElementFromArray = myArr[1]


// Array methods

myArr.push(6)
myArr.pop()

myArr.unshift(22)   // it will add element to the starting of the arry
myArr.shift()       // remove first element from the array

let checkElement = myArr.includes(9)    // give boolean result
let returnIndex = myArr.indexOf(3)      // give index of the element, if element is not present then return -1


const newArr = myArr.join(); // This joins the elements of the array and converts it into a string


// slice, splice

const sliceElement = myArr.slice(1, 4); // It returns the elements from the starting index to the end index - 1, without modifying the original array.
const spliceElement = myArr.splice(1, 4); // It returns the elements from the starting index to the end index, and also modifies the original array by removing the spliced elements.

console.table([sliceElement,spliceElement, myArr, newArr])

console.log(spliceElement);
console.log(sliceElement);
console.log(myArr);
console.log(newArr);



