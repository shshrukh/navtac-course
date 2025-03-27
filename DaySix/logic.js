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
//Loop

for (let i = 0; i < 100; i++){
    // console.log(i);
   
}
//while loop
let i = 1;
while (i < 10) {
    // console.log(i);
    i++;
}
//do while loop
do{
    // console.log(i);
    i++
}while(i < 10);

// Task making tabel of any number using do and do while loop
let tableof = 10

while (i <= 20) {
    console.log(`${tableof} x ${i} = ${tableof * i}`);
    i++;
}

do{
    console.log(`${tableof} x ${i} = ${tableof * i}`);
    i++
}while(i <= 60);

