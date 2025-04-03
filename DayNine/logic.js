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
