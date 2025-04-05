// protoType
methods = {
    fullName : function () {
       return this.fName + ' ' + this.lName;
    },
    emailVerifacation: function(){
        console.log(`open the email ${this.email} for verifaction!`);
    }
};

function createUsers (fName, lName, email, password){
    user = Object.create(methods)
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.password = password;
    return user;
};

const userOne = createUsers('saleem', 'khan', 'saleemkhan@gmil.com','adsfasdfg');
const userTwo = createUsers('abc', 'xyz', 'abc@gmailcom', 'abcxyz')
console.log(userOne, userOne.fullName());
console.log(userTwo, userTwo.fullName());

// this is all about crate objects and more clear syntex in ES6 they introduce clear syntex;

class User  {
    constructor(fName, lName, email, age) {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.age = age;
    }
    fullName() {
        return this.fName+' '+this.lName
    }
}
const user01 = new User('shah', 'khan', 'shah@gmail.com',67)
console.log(user01, user01.fullName());
