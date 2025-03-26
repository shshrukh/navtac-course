// functions.
function addition (){
    return 8 + 6;
}

// this is function definition now use the value of function we have call the function;
addition();

// in ES6 we use arrow function 
const funValue = ()=> {
    return 8 - 2;
}
console.log(funValue());


// call back function or higher order function;

function add(a=0 , b=0) {
    return a + b;
}

function subt(a=0 , b=0) {
    return a - b;
}

function mult(a=0 , b=0) {
    return a * b;
}

function divi(a=0 , b) {
    return a / b;
}

function calculation( a , b, opration) {
    return opration(a,b)
}

console.log(calculation(2,2,add));
