let myDate = new Date()
let dataType = (typeof myDate); // => object

console.log(myDate.toString());                 // => Wed Feb 05 2025 09:23:13 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());             // => Wed Feb 05 2025
console.log(myDate.toISOString());              // => 2025-02-05T09:23:13.690Z
console.log(myDate.toJSON());                   // => 2025-02-05T09:23:13.690Z
console.log(myDate.toLocaleDateString());       // => 2/5/2025
console.log(myDate.toLocaleString());           // => 2/5/2025, 9:23:13 AM

let myCreatedDate = new Date(2025, 0, 23)       // => here months are in index from 1 to 11
let myCreatedDateOne = new Date(2025, 0, 23, 5, 3)
let myCreatedDateTwo = new Date("2025-01-14")
let myCreatedDateThree = new Date("01-14-2025")

let myTimeStamp = Date.now()

console.log(myTimeStamp);                   // in will print the date in millisecond calculated form January 1, 1970, UTC
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));   // provide in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);        // to get month in 1 to 12 format 
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
})