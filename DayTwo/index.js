// array desuctring
const fruites = ['apple', 'mango', 'banana'];
let [item1,iteam2,iteam3] = fruites;
// console.log(item1, iteam2, iteam3);

//object desuctring
const car = {
    compeny:'bmw',
    model:'2025',
    color:'black',
    id:'bmw2025',
}

let {compeny,model,color,id} = car
// console.log(compeny, model, color,id);


// what if we have nasted data type? eg

let userNames= [
    {
        fullName:'saleem khan',
        age:'63',
        gender:'male',
        address:{
            city:'gilgit',
            houseNum:'abc234'
        }
    },
    {
        fullName:'shahrukh',
        age:'26',
        gender:'male',
        address:{
            city:'uk',
            houseNum:'ab34'
        }
    },
    {
        fullName:'rashid saleem',
        age:'22',
        gender:'male',
        address:{
            city:'islamabad',
            houseNum:'ab89'
        }
    }
]
// console.log(userNames);
// let [obj1, , obj3 ] = userNames;
// console.log(obj1,obj3);

// let {fullName,age,gender,address} = obj1
// console.log(address);
// let {city,houseNum} = address
// console.log(city,houseNum);
let [{fullName, age, gender, address: { city, houseNum } }] = userNames;
console.log(houseNum);

//perimeter destructring;

function userData([{fullName:fullNameone,age:ageone,gender:genderone,address:{city:cityone,houseNum:houseNumone}},{fullName:fullNametwo,age:agetwo,gender:gendertwo,address:{city:citytwo,houseNum:houseNumtwo}}]) {
    console.log(`i am ${fullNameone} my age is ${ageone} my gender is ${genderone} i live in ${cityone} and my house address is ${houseNumone} `);
    console.log(`i am ${fullNametwo} my age is ${agetwo} my gender is ${gendertwo} i live in ${citytwo} and my house address is ${houseNumtwo} `)
    
}
userData(userNames);
let brotherDrems = [
    {
        username : 'Rashid Saleem',
        occupation : 'cook',
        carsCollection : {
            carOne : 'bmw',
            carTwo : 'honda',
        }
    },
    {
        username : 'Shayan Hameed',
        occupation : 'student',
        carsCollection : {
            carOne : 'honda',
            carTwo : 'nisan',
        }
    }
];
function dreams([{username:usernameOne,carsCollection:{carOne:cOne,carTwo:cTwo}},{username:usernameTwo,carsCollection:{carOne:ccOne,carTwo:ccTwo}}]) {
    console.log(`hey world my nmae is ${usernameOne} car collection are ${cOne} and ${cTwo}`);
    console.log(`hey world my nmae is ${usernameTwo} car collection are ${ccOne} and ${ccTwo}`);
};

dreams(brotherDrems);

//rest perameters
// what if? if user give a number of permeters and we just define a limited number of arguments..
// then rest perameters are use 

function helloWorld (...a) {
    console.log(a)
};
console.log('hello',5,true,{name:'shah'},['a',1,true]);

