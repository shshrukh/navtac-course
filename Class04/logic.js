// variables useing var let and const keywords
var fname = 'shahrukh arbaz';
let numbers = [1, 2, 4, 5];
const pi = 3.14;

console.log(fname);
console.log(numbers);




// in var and let case we can reassine the vale after innilizations

fname = 'saleem khan';
numbers = 1;

console.log(fname);
console.log(numbers);

// but in cause of const keyword we can't change the value once we assign the value we can't change its value if we change the value its give error
// TypeError: Assignment to constant variable.


let numOne = 4;
const numTwo = 2;
{
    let numOne = 5;
    const numTwo = 7;
    console.log(numOne);
    console.log(numTwo);
}
console.log(numOne);
console.log(numTwo);


// spread operators in object and arrays//
let fruites = ['mango', 'orange', 'banana', 'grapes', 'pineapple'];
let b = fruites;
console.log(fruites, b)
fruites[0] = 'updates';
console.log(fruites, b); 

// this is main issue in case of notprimitive data type to resolve this issue we use rest paramaters


let userNames = ['khan', 'rahim', 'karim', 'saleem'];
let cloneNames = [...userNames];
userNames[0] = 'updated';
console.log(userNames, cloneNames);

const userCarUpdate = {
    model : 2025,
}
const userCar ={
    carName : 'BMW',
    color : 'black',
    ...userCarUpdate,

}
// const carDetails = {
//     ...userCar,...userCarUpdate
// }
// console.log(carDetails);
console.log(userCar);

