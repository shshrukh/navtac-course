// ternory operoter 
const age = 18 ;
let res = age > 19? 'Ok' : 'not Ok';
console.log(res);


//templet leterals

let fname = "alex";
let result = `my age is ${fname} and my age is ${age}`;
console.log(result);

//switch statement
let day = 1;
switch (day) {
    case 1:
        console.log('monday');
        
        break;
    case 2:
        console.log('sunday');
        
    default:
        console.log('notDay');
        
        break;
}