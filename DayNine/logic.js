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