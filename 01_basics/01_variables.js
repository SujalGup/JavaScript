const accountId = 12232
let accountEmail = "guptasujal7985@gmail.com"
var accountPassword = "123456"
accountCity = "Mirzzspur"
let accountState;

// accountId =2 // not allowed

accountEmail = "sujal9upta@gmail.com"
accountPassword = "1234567"
accountCity ="Mirzapur"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
