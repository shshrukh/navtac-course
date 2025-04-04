//Proto
userOne ={
    fName : 'shahrukh',
    lName : 'arbaz',
    age : 43,
}
console.log(userOne);
 // let we have metheod in user object then?

 userTwo = {
    fName : 'saleem',
    lName : 'khan',
    age : 34,
    fullName : function(){
        return this.fName + ' ' + this.lName;
    },
}
console.log(userTwo.fullName())

// let we have multipal of users like thousand users then? we have thousand of methods.
//still this is not good approch,

usersMethod = function(){
    return this.fName + ' '+ this.lName;
}
userThere = {
    fName : 'Rashid',
    lName : 'saleem',
    age : 34,
    fullName : usersMethod,
}
console.log(userThere, userThere.fullName());

// now suppose we have multipal of methods then ?

usersMethods = {
    methodOne : function(){
        return this.fName +' '+ this.lName;
    },
    methodTwo : function(){
        return 'hello ' + this.fName + ' ' + this.lName;
    }
}
userFour = {
    fName : 'sohail',
    lName : 'hameed',
    age : 89,
    genMethods : usersMethods.methodTwo
}
console.log(userFour, userFour.genMethods());

// but there is still an issue that is we have generate more keys to assess the all methods define in usersMethods;

let users = [];

const createUser = function (fName, lName, age) {
    user = {},
    user.fName = fName;
    user.lName = lName;
    user.age = age;
    user.profile = function(){
        return this.fName + ' '+ this.lName;
    }
    users.push(user)
    return user;
}
console.log(createUser('naeem', 'khan', 34), users[0].profile());

// we konw that if we have an object then we can use its own methos then how can we assess these methods? this is actually by proto we can also use create such type of methods by using proto.

const userMeth = {
    fullName() {
        return this.fName + ' ' + this.lName;
    }
};

function createsUser(fName, lName, age) {
    const user = Object.create(userMeth); 
    user.fName = fName;
    user.lName = lName;
    user.age = age;
    return user;
}

const user1 = createsUser('Shahrukh', 'Arbaz', 43);
const user2 = createsUser('Saleem', 'Khan', 34);

console.log(user1.fullName());  
console.log(user2.fullName()); 

// prototype

function CreateObjectsss (fName, age){
    this.fName = fName;
    this.age = age;
}
CreateObjectsss.prototype.nameAndAge = function (){
    this.fName +' '+this.age
}
 u1= new CreateObjectsss('shahrukh', 78);
 console.log(u1);
 
