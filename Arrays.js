// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[2])
// arr.pop();
// for (let index = 0; index < arr.length; index++) {
//     const element = array[index];
    
// }
let arr = [1,13,5,7,11];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2);
// }
let newArr = arr.map((e) =>{
    return e**2;
})
console.log(newArr);
newArr