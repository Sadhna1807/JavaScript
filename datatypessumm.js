// primitive
// 7 types : strings,number,boolean,null,undefined,symbol,bigInt
// reference(non primitive)
// array, objects,functions
const score = 100
const scoreValue = 100.3
const isLoggedIn = null
let userEmail;
const id = Symbol('124')
const anotherId = Symbol('124')
console.log(id == anotherId);
//  -------------------------------------
// stack (primitive), heap(non primitive)
let myName = "Sadhnaojha"
let anotherName = myName
anotherName = "Sadhnanew"
console.log(myName);

console.log(anotherName);
let user = {
    email: "Sadhnaoja2003@gmail.com",
    upi: "user@sad"
}
let userTwo = user
user.email = "Sadhnakum@gmail.com"
console.log(user.email);
console.log(userTwo.email);



