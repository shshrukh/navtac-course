let numbers = [1, 2, 3, [5, 6, 7]];
let userNames = ['shah' ,'khan'];
let userData = [
    {
        fullName : 'shah',
        age : 89,
    },
    {
        fullName : 'khan',
        age : 56,
    }
]
function numberss([one, two ,three, [four, five, six]]) {
    console.log(one+two+three+four+five+six);
}
numberss(numbers);
function names([one, two]) {
    console.log(one+" "+two);
}
names(userNames);
function userDataa([{fullName:nameOne, age:ageOne},{fullName:nameTwo, age:ageTwo}]) {
    console.log(`my name is ${nameOne} and my age is ${ageOne}.
        hello my name is ${nameTwo} and my age is ${ageTwo}`);
    
}
userDataa(userData);
let nameOne = 100;
console.log(nameOne);
